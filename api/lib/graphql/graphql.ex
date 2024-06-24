defmodule Api.Graphql do
  @moduledoc """
  A module that keeps using definitions for graphql
  """

  def type do
    quote do
      use Absinthe.Schema.Notation
    end
  end

  def query do
    quote do
      use Absinthe.Schema.Notation
    end
  end

  def mutation do
    quote do
      use Absinthe.Schema.Notation
    end
  end

  def schema do
    quote do
      use Absinthe.Schema
    end
  end

  def resolver do
    quote do
      alias Api.Repo
    end
  end

  @doc """
  When used, dispatch to the appropriate controller
  """
  defmacro __using__(which) when is_atom(which) do
    apply(__MODULE__, which, [])
  end
end
