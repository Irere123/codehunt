defmodule Graphql.Mutation.ProjectMutations do
  use Api.Graphql, :mutation

  object :project_mutations do
    @desc "Create a new project"
    field :create_project, type: :auth_op_response do
      arg(:data, non_null(:create_project))

      resolve(&Graphql.Resolver.ProjectResolver.create/2)
    end

    @desc "Update a project"
    field :update_project, type: :auth_op_response do
      arg(:data, non_null(:update_project))

      resolve(&Graphql.Resolver.ProjectResolver.update/2)
    end

    @desc "delete a project"
    field :delete_project, type: :boolean do
      arg(:project_id, non_null(:id))

      resolve(&Graphql.Resolver.ProjectResolver.delete_one/2)
    end
  end
end
