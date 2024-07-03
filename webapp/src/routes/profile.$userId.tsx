import { createFileRoute } from "@tanstack/react-router";
import { MainLayout } from "../components/layouts/MainLayout";
import { Button } from "../components/ui/button";

export const Route = createFileRoute("/profile/$userId")({
  component: () => <ProfileComponent />,
});

function ProfileComponent() {
  const { userId } = Route.useParams();

  console.log(userId);

  return (
    <MainLayout>
      <div className="flex flex-col gap-3 mt-4">
        <p>John Doe</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
          impedit delectus ducimus rem fuga quibusdam odit voluptatibus.
          Pariatur, necessitatibus voluptatum.
        </p>
        <div>
          <Button>Logout</Button>
        </div>
      </div>
    </MainLayout>
  );
}
