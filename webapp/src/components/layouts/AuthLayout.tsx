import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="w-full bg-gradient-to-br from-fuchsia-100 via-white to-sky-100 py-16">
      <div className="mx-auto min-h-screen w-full max-w-screen-md">
        {children}
      </div>
    </div>
  );
}
