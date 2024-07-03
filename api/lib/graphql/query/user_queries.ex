defmodule Graphql.Query.UserQueries do
  use Api.Graphql, :query
  alias Graphql.Resolver.UserResolver

  object :user_queries do
    @desc "Get all users"
    field :users, list_of(:user) do
      resolve(&UserResolver.all/2)
    end

    @desc "Get user with id"
    field :user, type: :user do
      arg(:id, non_null(:id))
      resolve(&UserResolver.find/2)
    end

    @desc "Get currently logged in user profile"
    field :me, type: :user do
      resolve(&UserResolver.get_me/2)
    end
  end
end
