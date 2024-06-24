defmodule Api.Graphql.Schema do
  use Api.Graphql, :schema

  alias Graphql.{Query.UserQueries, Type.UserType, Mutation.UserMutations}

  import_types(UserQueries)
  import_types(UserMutations)
  import_types(UserType)

  query do
    import_fields(:user_queries)
  end

   mutation do
     import_fields(:user_mutations)
   end
end
