defmodule Graphql.Mutation.UserMutations do
  use Api.Graphql, :mutation

  object :user_mutations do
    @desc "Register a new user account"
    field :register, type: :auth_response do
      arg(:data, non_null(:register_input))

      resolve(&Graphql.Resolver.UserResolver.register/2)
    end

    @desc "Login into a user account"
    field :login, type: :auth_response do
      arg(:data, non_null(:login_input))

      resolve(&Graphql.Resolver.UserResolver.login/2)
    end
  end
end
