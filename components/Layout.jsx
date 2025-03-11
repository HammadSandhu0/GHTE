import React from "react";

const Layout = ({ children, className = "" }) => {
  return (
    <div
      className={`container mx-auto py-16 lg:py-32 px-4 sm:px-0 ${className}`}
    >
      {children}
    </div>
  );
};

export default Layout;
