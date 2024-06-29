defmodule Graphql.Resolver.ProjectResolver do
  use Api.Graphql, :resolver

  alias Models.Project

  import Ecto.Query

  def find_all(_args, _info) do
    projects = from(p in Project) |> Repo.all()

    {:ok, projects}
  end

  def find_featured_projects(_args, _info) do
    projects = from(p in Project, where: p.featured == ^true) |> Repo.all()

    {:ok, projects}
  end

  def find_one(%{project_id: project_id}, _info) do
    project = from(p in Project, where: p.id == ^project_id) |> Repo.one()

    {:ok, project}
  end

  def create(%{data: data}, %{context: %{user_id: user_id}}) do
    case user_id do
      nil ->
        {:ok, %{ok: false, errors: %{field: "AUTH", message: "NOT AUTHORIZED"}}}

      _ ->
        project = %Project{
          description: data.description,
          name: data.name,
          picture: data.picture,
          github_repo_url: data.github_repo_url,
          website: data.website,
          banner_url: user_id
        }

        {:ok, %{ok: true, project: project}}
    end
  end
end
