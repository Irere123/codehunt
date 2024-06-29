defmodule Utils.TokenUtils do
  alias Models.User

  def tokens_to_user_id(accessToken, refreshToken) do
    accessToken = if is_nil(accessToken), do: "", else: accessToken
    refreshToken = if is_nil(refreshToken), do: "", else: refreshToken

    case Utils.AccessToken.verify(accessToken) do
      {:ok, claims} ->
        {claims.id, nil}

      _ ->
        case Utils.RefreshToken.verify(refreshToken) do
          {:ok, refreshClaims} ->
            IO.inspect(refreshClaims)
            user = User |> Api.Repo.get(refreshClaims.id)

            if is_nil(user) do
              {nil, nil}
            else
              {user.id, create_tokens(user), user}
            end

          _ ->
            {nil, nil}
        end
    end
  end

  def create_tokens(user) do
    %{
      accessToken:
        Utils.AccessToken.sign(%{
          "userId" => user.id
        }),
      refreshToken:
        Utils.RefreshToken.sign(%{
          "userId" => user.id
        })
    }
  end
end
