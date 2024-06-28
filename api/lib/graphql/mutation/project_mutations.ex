defmodule Graphql.Mutation.ProjectMutations do
  use Api.Graphql, :mutation

  object :project_mutations do
    @desc "Create a new project"
    field :create_project, type: :auth_response do
      arg(:data, non_null(:register_input))

      resolve(&Graphql.Resolver.UserResolver.register/2)
    end
  end
end
