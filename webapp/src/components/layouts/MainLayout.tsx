import React from "react";

import Navbar from "../navbar";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="w-full bg-gradient-to-br from-fuchsia-100 via-white to-sky-100 py-16">
        <div className="mx-auto min-h-screen w-full max-w-screen-md">
          {children}
        </div>
      </div>
    </>
  );
};
