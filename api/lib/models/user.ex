defmodule Models.User do
  use Ecto.Schema

  import Ecto.Changeset

  @derive {Jason.Encoder, only: [:id, :avatar_url, :username, :display_name]}
  @primary_key {:id, :binary_id, []}
  schema "users" do
    field(:avatar_url, :string)
    field(:username, :string)
    field(:display_name, :string)
    field(:bio, :string)
    field(:email, :string)
    field(:blog, :string)
    field(:website, :string)
    field(:password, :string)

    timestamps(type: :utc_datetime_usec)
  end

  def changeset(user, attrs \\ %{}) do
    user
    |> cast(attrs, [:username, :display_name, :password])
    |> validate_required([:username, :display_name, :password])
  end
end
