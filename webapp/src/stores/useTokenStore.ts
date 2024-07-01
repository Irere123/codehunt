import { create } from "zustand";
import { persist, StateStorage, createJSONStorage } from "zustand/middleware";

const persistentStorage: StateStorage = {
  getItem: (key): string => {
    return JSON.parse(localStorage.getItem(key) as string);
  },
  setItem: (key, newValue): void => {
    localStorage.setItem(key, JSON.stringify(newValue));
  },
  removeItem: (key): void => {
    localStorage.removeItem(key);
  },
};

type TokenStore = {
  accessToken: string;
  refreshToken: string;
  setTokens: (accessToken: string, refreshToken: string) => void;
};

const storageOptions = {
  name: "tokenStore",
  storage: createJSONStorage<TokenStore>(() => persistentStorage),
};

export const useTokenStore = create(
  persist<TokenStore>(
    (set) => ({
      accessToken: "",
      refreshToken: "",
      setTokens: (accessToken, refreshToken) =>
        set(() => ({ accessToken, refreshToken })),
    }),
    storageOptions
  )
);
