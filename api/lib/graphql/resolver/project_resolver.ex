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
end
