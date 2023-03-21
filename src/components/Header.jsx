import React, { useState, useEffect } from "react";
import { Link } from "gatsby";

const Header = () => {
  const [currentColor, setCurrentColor] = useState("#a855f7");

  const colors = ["#a855f7", "#f59e0b", "#14b8a6", "#f87171", "#84cc16"];
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
    <section
      style={{ backgroundColor: currentColor }}
      className="min-h-screen flex items-center text-white font-press-start header"
    >
      <Link
        to="#about"
        className="width-wrapper py-12 w-fit group flex items-end gap-1 animate-blur-blink justify-center hover:animate-none"
      >
        <h1 className="leading-none text-6xl text-center">
          [vaiva:~]$ ls links
        </h1>
        <span className="cursor shadow-glow w-12 h-[11px] bg-white inline-block gap-1 animate-cursor-blink group-hover:bg-hover group-hover:shadow-hover" />
      </Link>
    </section>
  );
};

export default Header;
