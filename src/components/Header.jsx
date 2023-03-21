import React, { useState, useEffect } from "react";
import { Link } from "gatsby";

const Header = () => {
  const [currentColor, setCurrentColor] = useState("#a855f7");

  const colors = ["#a855f7", "#f59e0b", "#14b8a6", "#f87171"];
  let index = colors.indexOf(currentColor);

  // Change background color every interval
  useEffect(() => {
    const timeoutID = setTimeout(() => {
      if (index !== colors.length - 1) {
        setCurrentColor(colors[index + 1]);
      } else {
        setCurrentColor(colors[0]);
      }
    }, 1300);
    return () => clearTimeout(timeoutID);
  });

  return (
    <section
      style={{ backgroundColor: currentColor }}
      className="min-h-screen flex items-center text-white font-press-start header"
    >
      <Link
        to="#author"
        className="width-wrapper py-12 w-fit flex items-end gap-1 justify-center opacity-70 hover:opacity-100"
      >
        <h1 className="leading-none text-6xl text-center">
          [vaiva:~]$ ls links
        </h1>
        <span className="cursor shadow-glow w-12 h-[11px] bg-white inline-block gap-1 animate-cursor-blink" />
      </Link>
    </section>
  );
};

export default Header;
