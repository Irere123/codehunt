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
        {:ok, project} =
          %Project{
            description: data.description,
            name: data.name,
            picture: data.picture,
            github_repo_url: data.github_repo_url,
            website: data.website,
            user_id: user_id
          }
          |> Project.changeset()
          |> Repo.insert(returning: true)

        {:ok, %{ok: true, project: project}}
    end
  end

  def update(%{data: data}, %{context: %{user_id: user_id}}) do
    case user_id do
      nil ->
        {:ok, %{ok: false, errors: %{field: "AUTH", message: "NOT AUTHORIZED"}}}

      _ ->
        update_op =
          from(p in Project, where: p.id == ^data.id)
          |> update([p],
            set: [
              name: ^data.name,
              description: ^data.description,
              picture: ^data.picture,
              website: ^data.website,
              github_repo_url: ^data.github_repo_url
            ]
          )
          |> Repo.update_all([])

        case update_op do
          {1, nil} ->
            project = from(p in Project, where: p.id == ^data.id) |> Repo.one()
            {:ok, %{ok: true, project: project}}

          {:error, %Ecto.Changeset{errors: errors}} ->
            case errors do
              [picture: {"can't be blank", _}] ->
                {:ok,
                 %{
                   ok: false,
                   errors: %{field: "picture", message: "Picture url must be provided"}
                 }}

              [name: {"can't be blank", _}] ->
                {:ok,
                 %{
                   ok: false,
                   errors: %{field: "name", message: "Name url must be provided"}
                 }}

              [description: {"can't be blank", _}] ->
                {:ok,
                 %{
                   ok: false,
                   errors: %{field: "description", message: "Description url must be provided"}
                 }}
            end

          _ ->
            {:ok, %{ok: false, errors: %{field: "UPDATE", message: "Unkown error"}}}
        end
    end
  end

  def delete_one(%{project_id: project_id}, %{context: %{user_id: user_id}}) do
    case user_id do
      nil ->
        {:ok, false}

      _ ->
        delete_op = from(p in Project, where: p.id == ^project_id) |> Repo.delete_all()

        case delete_op do
          {1, nil} ->
            {:ok, true}

          _ ->
            {:ok, false}
        end
    end
  end
end
