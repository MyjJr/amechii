import React from "react";
import IndexNavbar from "../components/Navbars/IndexNavbar";

const Auth = ({ children }) => {
  return (
    <div className="layout-container">
      <IndexNavbar />
      <main className="main-section">{children}</main>
    </div>
  );
};

export default Auth;
