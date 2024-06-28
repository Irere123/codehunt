defmodule Models.Upvote do
  use Ecto.Schema
  import Ecto.Changeset

  alias Models.User
  alias Models.Project

  @derive {Jason.Encoder, only: [:id, :value]}
  @primary_key {:id, :binary_id, []}
  schema "upvotes" do
    field(:value, :integer)

    belongs_to(:project, Project, foreign_key: :project_id, type: :binary_id)
    belongs_to(:user, User, foreign_key: :user_id, type: :binary_id)

    timestamps(type: :utc_datetime_usec)
  end

  def changeset(user, attrs \\ %{}) do
    user
    |> cast(attrs, [:value, :project_id, :user_id])
    |> validate_required([:value, :user_id, :project_id])
  end
end
