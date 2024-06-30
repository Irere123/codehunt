import React from "react";
import { Client, Provider, cacheExchange, fetchExchange } from "urql";
import { api_url } from "./lib/constants";

interface ProvidersProps {
  children: React.ReactNode;
}

const client = new Client({
  url: api_url,
  exchanges: [cacheExchange, fetchExchange],
});

export function Providers({ children }: ProvidersProps) {
  return <Provider value={client}>{children}</Provider>;
}
