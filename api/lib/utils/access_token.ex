defmodule Utils.AccessToken do
  @signing_salt "iurgyfryhirh"

  # token for 1hr
  @token_age_secs 60 * 60

  def sign(data) do
    Phoenix.Token.sign(ApiWeb.Endpoint, @signing_salt, data)
  end

  def verify(token) do
    case Phoenix.Token.verify(ApiWeb.Endpoint, @signing_salt, token, max_age: @token_age_secs) do
      {:ok, data} -> {:ok, data}
      _error -> {:error, :unauthenticated}
    end
  end
end
