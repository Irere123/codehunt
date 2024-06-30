import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

import AuthLayout from "../components/layouts/AuthLayout";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

export const Route = createFileRoute("/login")({
  component: () => <LoginComponent />,
});

function LoginComponent() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  console.log(formData);

  return (
    <AuthLayout>
      <div className="flex w-full h-full flex-col justify-center items-center">
        <div>
          <h2 className="text-2xl text-center">Sign in</h2>
          <p className="text-base font-light">
            Keep it all together and you will be fine
          </p>

          <form className="flex flex-col gap-4 mt-4" onSubmit={handleSubmit}>
            <Input
              onChange={(e) =>
                setFormData((data) => ({ ...data, email: e.target.value }))
              }
              type="text"
              name="email"
              autoComplete="off"
              placeholder="Email address"
            />
            <Input
              onChange={(e) =>
                setFormData((data) => ({ ...data, password: e.target.value }))
              }
              type="password"
              autoComplete="off"
              name="password"
              placeholder="Password"
            />

            <Link to="/forgot-password" className="text-sm">
              Forgot password
            </Link>

            <Button>Sign in</Button>
          </form>
          <div className="flex gap-2 mt-4 justify-center">
            <p className="text-gray-700">New to ReLaunch?</p>
            <Link to="/register" className="text-sky-600">
              Join now
            </Link>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}
