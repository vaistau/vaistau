import React from "react";

const Nav = () => {
  return (
    <nav className="width-wrapper py-2">
      <div className="flex items-end gap-1">
        <h1 className="leading-none">[vaiva:~]$ ls links</h1>
        <span className="w-5 h-2 bg-black inline-block gap-1 animate-cursor-blink" />
      </div>
    </nav>
  );
};

export default Nav;
