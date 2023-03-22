import React, { useState, useEffect } from "react";
import { Link } from "gatsby";

const Header = () => {
  const [currentColor, setCurrentColor] = useState("#a855f7");

  const colors = ["#a855f7", "#f59e0b", "#14b8a6", "#ec4899"];
  let index = colors.indexOf(currentColor);

  // Change background color every interval
  useEffect(() => {
    const timeoutID = setTimeout(() => {
      if (index !== colors.length - 1) {
        setCurrentColor(colors[index + 1]);
      } else {
        setCurrentColor(colors[0]);
      }
    }, 1200);
    return () => clearTimeout(timeoutID);
  });

  return (
    <section
      style={{ backgroundColor: currentColor }}
      className="min-h-screen flex flex-col justify-center text-white font-press-start header"
    >
      <div className="width-wrapper flex flex-col">
        <Link
          to="#author"
          className="py-12 text-center flex items-end gap-1 justify-center opacity-70 hover:opacity-100"
        >
          <h1 className="leading-none text-6xl md:text-4xl sm:text-2xl text-center">
            [vaiva:~]$ ls
          </h1>
          <span className="lg:hidden cursor shadow-glow w-12 h-[11px] bg-white inline-block gap-1 animate-cursor-blink" />
        </Link>
        <a
          href="https://www.yourworldoftext.com/~oldhag/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl text-center opacity-70 hover:opacity-100 uppercase"
        >
          Leave me a cryptic message
        </a>
      </div>
    </section>
  );
};

export default Header;
