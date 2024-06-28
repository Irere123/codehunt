defmodule Graphql.Query.ProjectQueries do
  use Api.Graphql, :query

  object :project_queries do
    @desc "Get all  a featured projects"
    field :get_featured_projects, type: list_of(:project) do
      resolve(&Graphql.Resolver.ProjectResolver.find_featured_projects/2)
    end

    @desc "Get all projects"
    field :get_all_projects, type: list_of(:project) do
      resolve(&Graphql.Resolver.ProjectResolver.find_all/2)
    end

    @desc "Get a single project"
    field :get_project, type: :project do
      arg(:project_id, non_null(:id))

      resolve(&Graphql.Resolver.ProjectResolver.find_one/2)
    end
  end
end
