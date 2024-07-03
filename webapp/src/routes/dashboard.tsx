import { createFileRoute } from "@tanstack/react-router";
import { DashboardLayout } from "../components/layouts/DashboardLayout";
import { Button } from "../components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";

export const Route = createFileRoute("/dashboard")({
  component: () => <DashboardComponent />,
});

function DashboardComponent() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-4 justify-start">
        <div className="flex justify-between items-center">
          <Button type="button" variant={"outline"}>
            Submit
          </Button>
          <div>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Projects</h2>
          <div>
            <p>Project 1</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
