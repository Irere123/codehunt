defmodule Graphql.Resolver.UserResolver do
  use Api.Graphql, :resolver

  alias Models.User
  alias Utils.AccessToken
  alias Utils.RefreshToken
  import Ecto.Query

  def all(_args, _info) do
    users = if Mix.env() == :dev, do: from(u in User) |> Repo.all(), else: []
    {:ok, users}
  end

  def find(%{id: id}, _info) do
    user = from(u in User, where: u.id == ^id) |> Repo.one()
    {:ok, user}
  end

  def register(
        %{data: data},
        _info
      ) do
    hashed_password = Argon2.hash_pwd_salt(data.password)

    {:ok, user} =
      %User{
        display_name: data.display_name,
        username: data.username,
        password: hashed_password,
        email: data.email,
        bio: ""
      }
      |> User.changeset()
      |> Repo.insert(returning: true)

    access_token = AccessToken.sign(%{id: user.id})
    refresh_token = RefreshToken.sign(%{id: user.id})

    {:ok, %{ok: true, access_token: access_token, refresh_token: refresh_token}}
  end

  def login(%{data: data}, _info) do
    user = from(u in User, where: u.email == ^data.email) |> Repo.one()

    case user do
      nil ->
        {:ok, %{ok: false, errors: %{field: "email", message: "Invalid credentials"}}}

      _ ->
        valid = Argon2.verify_pass(data.password, user.password)

        if valid do
          access_token = AccessToken.sign(%{id: user.id})
          refresh_token = RefreshToken.sign(%{id: user.id})

          {:ok, %{ok: true, access_token: access_token, refresh_token: refresh_token}}
        else
          {:ok, %{ok: false, errors: %{field: "password", message: "Invalid credentials"}}}
        end
    end
  end
end
