defmodule Graphql.Mutation.UserMutations do
  use Api.Graphql, :mutation

  object :user_mutations do
    @desc "Create a post"
    field :create_post, type: :user do
      arg(:title, non_null(:string))

      resolve(&Graphql.Resolver.PostResolver.find_all/2)
    end
  end
end
