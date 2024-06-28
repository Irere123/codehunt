defmodule Graphql.Resolver.ProjectResolver do
  use Api.Graphql, :resolver

  def find_all(_args, _info) do
    {:ok, []}
  end
end
