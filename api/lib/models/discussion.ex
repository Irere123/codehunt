defmodule Models.Discussion do
  use Ecto.Schema
  import Ecto.Changeset

  alias Models.User
  alias Models.Project

  @derive {Jason.Encoder, only: [:id, :text]}
  @primary_key {:id, :binary_id, []}
  schema "discussions" do
    field(:text, :string)

    belongs_to(:project, Project, foreign_key: :project_id, type: :binary_id)
    belongs_to(:discussion, __MODULE__, foreign_key: :parent_id, type: :binary_id)
    belongs_to(:user, User, foreign_key: :user_id, type: :binary_id)

    timestamps(type: :utc_datetime_usec)
  end

  def changeset(user, attrs \\ %{}) do
    user
    |> cast(attrs, [:text, :parent_id])
    |> validate_required([:text, :user_id])
  end
end
