defmodule Graphql.Resolver.UserResolver do
  use Api.Graphql, :resolver

  alias Models.User
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

    %User{
      display_name: data.display_name,
      username: data.username,
      password: hashed_password,
      bio: data.bio
    }
    |> User.changeset()
    |> Repo.insert()

    {:ok, %{ok: true}}
  end
end
