import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import AuthLayout from "../components/layouts/AuthLayout";
import { Form, Formik } from "formik";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { graphql } from "../gql";
import { useMutation } from "urql";
import { useTokenStore } from "../stores/useTokenStore";

export const Route = createFileRoute("/register")({
  component: () => <RegisterComponent />,
});

interface InitialFormValues {
  email: string;
  password: string;
  username: string;
}

const RegisterMutation = graphql(`
  mutation Register(
    $username: String!
    $displayName: String!
    $email: String!
    $password: String!
  ) {
    register(
      data: {
        username: $username
        displayName: $displayName
        email: $email
        password: $password
      }
    ) {
      ok
      errors {
        field
        message
      }
      refreshToken
      accessToken
    }
  }
`);

function RegisterComponent() {
  const [{ fetching }, register] = useMutation(RegisterMutation);
  const navigate = useNavigate();

  return (
    <AuthLayout>
      <div className="flex w-full h-full flex-col justify-center items-center">
        <div>
          <h2 className="text-3xl mb-4 font-semibold text-center">Welcome</h2>
          <p className="text-base font-light">
            You will test your ideas in the public now..
          </p>
          <Formik<InitialFormValues>
            initialValues={{ password: "", email: "", username: "" }}
            onSubmit={async (values, { setFieldError }) => {
              const { data } = await register({
                ...values,
                displayName: values.username.toUpperCase(),
              });

              if (data.register.errors) {
                setFieldError(
                  data.register.errors.field,
                  data.register.errors.message
                );
              } else {
                useTokenStore
                  .getState()
                  .setTokens(
                    data.register.accessToken,
                    data.register.refreshToken
                  );
                navigate({ to: "/dashboard" });
              }
            }}
          >
            {({ handleChange, errors }) => (
              <Form className="flex flex-col gap-4 mt-4">
                <Input
                  onChange={handleChange}
                  type="text"
                  name="username"
                  autoComplete="off"
                  placeholder="Username"
                />
                {errors.email && (
                  <p className="text-fuchsia-400">{errors.email}</p>
                )}
                <Input
                  onChange={handleChange}
                  type="email"
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

                <Button type="submit" disabled={fetching}>
                  Create account
                </Button>
              </Form>
            )}
          </Formik>
          <div className="flex gap-2 mt-4 justify-center">
            <p className="text-gray-700">Already member?</p>
            <Link to="/login" className="text-sky-600">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}
