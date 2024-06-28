defmodule Graphql.Type.ProjectTypes do
  use Api.Graphql, :type

  object :project do
    field :id, non_null(:id)
    field :name, non_null(:string)
    field :description, non_null(:string)
    field :website, :string
    field :github_repo_url, :string
    field :featured, :boolean
  end
end
