import React from "react";
import Navbar from "../Navbars/Navbar";

const BaseLayout = ({ children }) => {
  return (
    <div className="layout-container">
      <Navbar />
      <main className="main-section">{children}</main>
    </div>
  );
};
export default BaseLayout;
