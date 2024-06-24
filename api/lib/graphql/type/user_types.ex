defmodule Graphql.Type.UserType do
  use Api.Graphql, :type

  object :user do
    field :id, :id
    field :first_name, :string
    field :last_name, :string
    field :email, :string
  end
end
