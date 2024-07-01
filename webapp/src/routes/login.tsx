import { createFileRoute, Link } from "@tanstack/react-router";
import { Form, Formik } from "formik";

import AuthLayout from "../components/layouts/AuthLayout";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

export const Route = createFileRoute("/login")({
  component: () => <LoginComponent />,
});

interface InitialFormValues {
  email: string;
  password: string;
}

function LoginComponent() {
  return (
    <AuthLayout>
      <div className="flex w-full h-full flex-col justify-center items-center">
        <div>
          <h2 className="text-2xl text-center">Sign in</h2>
          <p className="text-base font-light">
            Keep it all together and you will be fine
          </p>
          <Formik<InitialFormValues>
            initialValues={{ password: "", email: "" }}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ handleChange, errors }) => (
              <Form className="flex flex-col gap-4 mt-4">
                <Input
                  onChange={handleChange}
                  type="text"
                  name="email"
                  autoComplete="off"
                  placeholder="Email address"
                />
                {errors.email && (
                  <p className="text-fuchsia-400">{errors.email}</p>
                )}
                <Input
                  onChange={handleChange}
                  type="password"
                  autoComplete="off"
                  name="password"
                  placeholder="Password"
                />
                {errors.password && (
                  <p className="text-fuchsia-400">{errors.password}</p>
                )}

                {/* <Link to="/forgot-password" className="text-sm">
                  Forgot password
                </Link> */}

                <Button type="submit">Sign in</Button>
              </Form>
            )}
          </Formik>
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
