defmodule Graphql.Type.UserType do
  use Api.Graphql, :type

  object :user do
    field :id, non_null(:id)
    field :username, non_null(:string)
    field :display_name, :string
    field :blog, :string
    field :email, non_null(:string)
    field :website, :string
    field :avatar_url, :string
    field :bio, :string
  end
end
