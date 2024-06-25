defmodule Api.Repo.Migrations.User do
  use Ecto.Migration

  def change do
    execute("CREATE EXTENSION IF NOT EXISTS \"uuid-ossp\";", "")

    create table("users", primary_key: false) do
      add(:id, :uuid, primary_key: true, default: fragment("uuid_generate_v4()"))
      add(:username, :text, null: false)
      add(:bio, :text, null: false)
      add(:displayName, :text, null: true)
      add(:avatar_url, :text, null: true)
      add(:password, :text, null: true)

      timestamps(type: :utc_datetime_usec)
    end
  end
end
