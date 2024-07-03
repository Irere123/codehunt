import React from "react";
import { User } from "../gql/graphql";
import { graphql } from "../gql";
import { useQuery } from "urql";
import { Loader } from "../components/loader";

interface AuthContextProps {
  user: User | null;
}

const AuthContext = React.createContext<AuthContextProps>({
  user: null,
});

export default AuthContext;

const WhoAmIQuery = graphql(`
  query WhoAmI {
    me {
      id
      avatarUrl
      bio
      blog
      displayName
      email
      username
      website
    }
  }
`);

export const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [{ fetching, data }] = useQuery({ query: WhoAmIQuery });

  if (fetching) {
    return <Loader />;
  }

  return (
    <AuthContext.Provider
      value={{
        user: data?.me!,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => React.useContext(AuthContext);
