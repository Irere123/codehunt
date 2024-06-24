defmodule Graphql.Resolver.UserResolver do
  use Api.Graphql, :resolver

  def all(_args, _info) do
    {:ok, []}
  end

  def find(%{id: _id}, _info) do
    {:ok, %{}}
  end
end
