import React from "react";
import Navbar from "../components/Navbars/Navbar";

const Auth = ({ children }) => {
  return (
    <div className="layout-container">
      <Navbar />
      <main className="main-section">{children}</main>
    </div>
  );
};

export default Auth;
