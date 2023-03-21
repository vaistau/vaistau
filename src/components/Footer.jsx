import React from "react";

const Footer = () => {
  const links = [
    {
      title: "GitHub",
      link: "https://github.com/vaistau",
    },
    {
      title: "Are.na",
      link: "https://www.are.na/vaiva-s",
    },
    {
      title: "Goodreads",
      link: "https://www.goodreads.com/vaistau ",
    },
  ];

  return (
    <footer className="bg-green min-h-screen flex items-center text-green">
      <div className="section links">
        <h2 className="animate-blur">Inspect</h2>
        <div className="flex justify-between">
          <div className="w-2/4">
            <p>You can find me on:</p>
            <ul>
              {links.map((link) => (
                <li>
                  <a href={link.link} target="_blank" rel="noopener noreferrer">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-2/4 flex flex-col justify-end text-end gap-16">
            <p>
              For business inquiries:
              <br />
              <a href="mailto:vaistau@proton.me">vaistau@proton.me</a>
            </p>
            <p>
              For non-business inquiries:
              <br />
              <a
                href="https://www.yourworldoftext.com/~oldhag/"
                target="_blank"
                rel="noopener noreferrer"
              >
                World of Text
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
