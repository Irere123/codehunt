defmodule Api.Graphql.Schema do
  use Api.Graphql, :schema

  alias Graphql.{
    Query.UserQueries,
    Type.UserType,
    Mutation.UserMutations,
    Type.ProjectTypes,
    Mutation.ProjectMutations,
    Query.ProjectQueries
  }

  import_types(UserQueries)
  import_types(UserMutations)
  import_types(UserType)
  import_types(ProjectMutations)
  import_types(ProjectQueries)
  import_types(ProjectTypes)

  query do
    import_fields(:user_queries)
    import_fields(:project_queries)
  end

  mutation do
    import_fields(:user_mutations)
    import_fields(:project_mutations)
  end
end
