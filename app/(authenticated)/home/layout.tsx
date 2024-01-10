"use client";
import React, { useEffect } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col gap-6 w-full">
      <br />
      {children}
    </div>
  );
};

export default Layout;
