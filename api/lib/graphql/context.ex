defmodule Graphql.Context do
  @behaviour Plug

  def init(opts), do: opts

  def call(conn, _) do
    context = build_context(conn)
    Absinthe.Plug.put_options(conn, context: context)
  end

  @doc """
  Return the current user context based on the access_token and refresh_token
  """
  def build_context(conn) do
    tokens =
      Enum.reduce(conn.req_headers(), %{}, fn {key, value}, acc ->
        case key do
          "x-access-token" -> Map.merge(acc, %{accessToken: value})
          "x-refresh-token" -> Map.merge(acc, %{refreshToken: value})
          _ -> acc
        end
      end)

    case tokens do
      %{accessToken: accessToken, refreshToken: refreshToken} ->
        case Utils.TokenUtils.tokens_to_user_id(accessToken, refreshToken) do
          {nil, nil} ->
            %{user_id: nil}

          {userId, nil} ->
            %{user_id: userId}

          {userId, %{accessToken: _newAccessToken, refreshToken: _newRefreshToken}, user} ->
            %{user_id: userId, user: user}
        end

      _ ->
        %{}
    end
  end
end
