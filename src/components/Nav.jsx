import React from "react";
import { Link } from "gatsby";

const Nav = () => {
  return (
    <nav className="width-wrapper py-8">
      <Link to="/" className="flex items-end gap-1">
        <h1 className="leading-none text-5xl">[vaiva:~]$ ls links</h1>
        <span className="w-10 h-3 bg-black inline-block gap-1 animate-cursor-blink" />
      </Link>
    </nav>
  );
};

export default Nav;
