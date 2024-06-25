defmodule Models.User do
  use Ecto.Schema

  @derive {Jason.Encoder, only: [:id, :avatar_url, :username, :displayName]}
  @primary_key {:id, :binary_id, []}
  schema "users" do
    field(:avatar_url, :string)
    field(:username, :string)
    field(:displayName, :string)
    field(:bio, :string)
    field(:password, :string)

    timestamps(type: :utc_datetime_usec)
  end
end
