import React from "react";
import { Client, Provider, cacheExchange, fetchExchange } from "urql";
import { api_url } from "./lib/constants";
import { useTokenStore } from "./stores/useTokenStore";
import { AuthContextProvider } from "./context/AuthContext";

interface ProvidersProps {
  children: React.ReactNode;
}

const tokens = useTokenStore.getState();

const client = new Client({
  url: api_url,
  exchanges: [cacheExchange, fetchExchange],
  fetchOptions: {
    headers: {
      "X-Access-Token": tokens.accessToken,
      "X-Refresh-Token": tokens.refreshToken,
    },
  },
});

export function Providers({ children }: ProvidersProps) {
  return (
    <Provider value={client}>
      <AuthContextProvider>{children}</AuthContextProvider>
    </Provider>
  );
}
