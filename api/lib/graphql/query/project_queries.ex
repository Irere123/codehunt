defmodule Graphql.Query.ProjectQueries do
  use Api.Graphql, :query

  object :project_queries do
    @desc "Get all  a featured projects"
    field :get_featured_projects, type: :auth_response do
      arg(:data, non_null(:register_input))

      resolve(&Graphql.Resolver.UserResolver.register/2)
    end
  end
end
