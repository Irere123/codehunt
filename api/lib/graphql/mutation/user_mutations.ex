defmodule Graphql.Mutation.UserMutations do
  use Api.Graphql, :mutation

  object :user_mutations do
    @desc "Register a new user account"
    field :register, type: :register_response do
      arg(:data, non_null(:register_input))

      resolve(&Graphql.Resolver.UserResolver.register/2)
    end
  end
end
