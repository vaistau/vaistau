import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const [currentColor, setCurrentColor] = useState("#9333ea");

  const colors = ["#9333ea", "#f97316", "#22c55e", "#ea580c", "#4f46e5"];

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      let index = colors.indexOf(currentColor);

      if (index !== colors.length - 1) {
        setCurrentColor(colors[index + 1]);
      } else {
        setCurrentColor(colors[0]);
      }
    }, 1500);
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
