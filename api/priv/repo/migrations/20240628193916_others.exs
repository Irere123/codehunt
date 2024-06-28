defmodule Api.Repo.Migrations.Others do
  use Ecto.Migration

  def change do
    create table("projects", primary_key: false) do
      add(:id, :uuid, primary_key: true, default: fragment("uuid_generate_v4()"))
      add(:name, :text, null: false)
      add(:description, :text, null: false)
      add(:picture, :text, null: true)
      add(:website, :text, null: true)
      add(:featured, :boolean, default: false)
      add(:github_repo_url, :text, null: true)
      add(:banner_url, :text, null: true)

      add(:user_id, references(:users, on_delete: :delete_all, type: :uuid), null: false)

      timestamps(type: :utc_datetime_usec)
    end

    create table("discussions", primary_key: false) do
      add(:id, :uuid, primary_key: true, default: fragment("uuid_generate_v4()"))
      add(:text, :text, null: false)

      add(:user_id, references(:users, on_delete: :delete_all, type: :uuid), null: false)
      add(:project_id, references(:projects, on_delete: :delete_all, type: :uuid), null: false)
      add(:parent_id, references(:discussions, on_delete: :delete_all, type: :uuid), null: true)

      timestamps(type: :utc_datetime_usec)
    end

    create table("upvotes", primary_key: false) do
      add(:id, :uuid, primary_key: true, default: fragment("uuid_generate_v4()"))
      add(:value, :integer, null: false, default: 0)

      add(:user_id, references(:users, on_delete: :delete_all, type: :uuid), null: false)
      add(:project_id, references(:projects, on_delete: :delete_all, type: :uuid), null: false)

      timestamps(type: :utc_datetime_usec)
    end
  end
end
