defmodule Graphql.Resolver.UserResolver do
  use Api.Graphql, :resolver

  alias Models.User
  import Ecto.Query

  def all(_args, _info) do
    users = from(u in User) |> Repo.all()
    {:ok, users}
  end

  def find(%{id: id}, _info) do
    user = from(u in User, where: u.id == ^id) |> Repo.one()
    {:ok, user}
  end
end
