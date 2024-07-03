import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { MainLayout } from "../components/layouts/MainLayout";
import { Button } from "../components/ui/button";
import { graphql } from "../gql";
import { useQuery } from "urql";
import { useAuthContext } from "../context/AuthContext";
import { useTokenStore } from "../stores/useTokenStore";

export const Route = createFileRoute("/profile/$userId")({
  component: () => <ProfileComponent />,
});

const GetProfileQuery = graphql(`
  query GetProfile($id: ID!) {
    user(id: $id) {
      id
      username
      displayName
      bio
      blog
      website
      email
      insertedAt
      updatedAt
    }
  }
`);

function ProfileComponent() {
  const { userId } = Route.useParams();
  const [{ fetching, data }] = useQuery({
    query: GetProfileQuery,
    variables: { id: userId },
  });
  const { user } = useAuthContext();
  const navigate = useNavigate();

  if (fetching) {
    return <div>loading...</div>;
  }

  return (
    <MainLayout>
      <div className="flex flex-col gap-3 mt-4">
        <p>{data.user.username}</p>
        <p>{data.user.bio}</p>
        <p>{data.user.insertedAt}</p>
        {user?.id === data.user.id && (
          <div>
            <Button
              type="button"
              onClick={() => {
                useTokenStore.getState().setTokens("", "");
                navigate({ to: "/" });
              }}
            >
              Logout
            </Button>
          </div>
        )}
      </div>
    </MainLayout>
  );
}
