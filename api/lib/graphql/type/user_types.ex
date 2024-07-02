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

  object :auth_response do
    field :ok, non_null(:boolean)
    field :access_token, :string
    field :refresh_token, :string
    field :errors, :auth_error
  end

  object :auth_error do
    field :field, :string
    field :message, :string
  end

  input_object :register_input do
    field :username, non_null(:string)
    field :email, non_null(:string)
    field :password, non_null(:string)
    field :display_name, non_null(:string)
  end

  input_object :login_input do
    field :email, non_null(:string)
    field :password, non_null(:string)
  end
end
