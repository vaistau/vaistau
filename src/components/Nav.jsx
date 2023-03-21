import React from "react";

const Nav = () => {
  return (
    <nav className="width-wrapper py-12">
      <div className="flex items-end gap-1 animate-blur-blink w-fit">
        <h1 className="leading-none text-5xl">[vaiva:~]$ ls links</h1>
        <span className="shadow-glow w-12 h-[11px] bg-white inline-block gap-1 animate-cursor-blink" />
      </div>
    </nav>
  );
};

export default Nav;
