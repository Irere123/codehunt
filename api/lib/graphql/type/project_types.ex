defmodule Graphql.Type.ProjectTypes do
  use Api.Graphql, :type

  object :project do
    field :id, non_null(:id)
    field :name, non_null(:string)
    field :description, non_null(:string)
    field :website, :string
    field :github_repo_url, :string
    field :picture, non_null(:string)
    field :banner_url, :string
    field :featured, :boolean
  end

  input_object :create_project do
    field :name, non_null(:string)
    field :description, non_null(:string)
    field :website, :string
    field :github_repo_url, :string
    field :picture, non_null(:string)
  end

  object :auth_op_response do
    field :ok, :boolean
    field :project, :project
    field :errors, :auth_error
  end

  input_object :update_project do
    field :id, non_null(:id)
    field :name, non_null(:string)
    field :description, non_null(:string)
    field :website, :string
    field :github_repo_url, :string
  end
end
