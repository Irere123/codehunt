defmodule Models.Project do
  alias Models.User
  use Ecto.Schema

  import Ecto.Changeset

  @derive {Jason.Encoder, only: [:id, :banner_url, :picture, :name, :description]}
  @primary_key {:id, :binary_id, []}
  schema "projects" do
    field(:banner_url, :string)
    field(:picture, :string)
    field(:name, :string)
    field(:description, :string)
    field(:website, :string)
    field(:featured, :boolean)
    field(:github_repo_url, :string)

    belongs_to(:user, User, foreign_key: :user_id, type: :binary_id)

    timestamps(type: :utc_datetime_usec)
  end

  def changeset(user, attrs \\ %{}) do
    user
    |> cast(attrs, [:name, :picture, :description])
    |> validate_required([:description, :name, :picture])
  end
end
