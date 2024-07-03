import React from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
}) => {
  return (
    <div className="w-full bg-gradient-to-br from-fuchsia-100 via-white to-sky-100 py-3 sm:px-3">
      <div className="mx-auto min-h-screen w-full max-w-screen-md">
        {children}
      </div>
    </div>
  );
};
