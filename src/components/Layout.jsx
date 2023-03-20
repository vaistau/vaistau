import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen flex-col justify-between">
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
