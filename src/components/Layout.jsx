import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const [currentColor, setCurrentColor] = useState("#a855f7");

  const colors = ["#a855f7", "#fbbf24", "#14b8a6", "#f87171", "#84cc16"];
  let index = colors.indexOf(currentColor);

  // Change background color every interval
  useEffect(() => {
    const timeoutID = setTimeout(() => {
      if (index !== colors.length - 1) {
        setCurrentColor(colors[index + 1]);
      } else {
        setCurrentColor(colors[0]);
      }
    }, 1900);
    return () => clearTimeout(timeoutID);
  });

  return (
    <div
      style={{ backgroundColor: currentColor }}
      className="flex h-screen flex-col justify-between"
    >
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
