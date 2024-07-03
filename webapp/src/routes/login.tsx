import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Form, Formik } from "formik";

import AuthLayout from "../components/layouts/AuthLayout";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { graphql } from "../gql";
import { useMutation } from "urql";
import { useTokenStore } from "../stores/useTokenStore";
import { useEffect } from "react";

export const Route = createFileRoute("/login")({
  component: () => <LoginComponent />,
});

interface InitialFormValues {
  email: string;
  password: string;
}

const LoginMutation = graphql(`
  mutation Login($email: String!, $password: String!) {
    login(data: { email: $email, password: $password }) {
      ok
      errors {
        field
        message
      }
      accessToken
      refreshToken
    }
  }
`);

function LoginComponent() {
  const [{ fetching }, login] = useMutation(LoginMutation);
  const navigate = useNavigate();
  const hasTokens = useTokenStore((s) => !!s.accessToken && !!s.refreshToken);

  useEffect(() => {
    if (hasTokens) {
      navigate({ to: "/dashboard" });
    }
  }, [hasTokens]);

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
            onSubmit={async (values, { setFieldError }) => {
              const { data } = await login({ ...values });

              if (data?.login?.errors) {
                setFieldError(
                  data?.login?.errors?.field!,
                  data?.login?.errors?.message!
                );
              } else {
                useTokenStore
                  .getState()
                  .setTokens(
                    data?.login?.accessToken!,
                    data?.login?.refreshToken!
                  );
                navigate({ to: "/dashboard" });
              }
            }}
          >
            {({ handleChange, errors, handleSubmit }) => (
              <Form
                className="flex flex-col gap-4 mt-4"
                onSubmit={handleSubmit}
              >
                <Input
                  onChange={handleChange}
                  type="text"
                  name="email"
                  autoComplete="off"
                  placeholder="Email address"
                />
                {errors.email && <p className="text-red-400">{errors.email}</p>}
                <Input
                  onChange={handleChange}
                  type="password"
                  autoComplete="off"
                  name="password"
                  placeholder="Password"
                />
                {errors.password && (
                  <p className="text-red-400">{errors.password}</p>
                )}

                {/* <Link to="/forgot-password" className="text-sm">
                  Forgot password
                </Link> */}

                <Button type="submit" disabled={fetching}>
                  Sign in
                </Button>
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
