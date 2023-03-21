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
    <footer className="bg-green px-8 min-h-screen flex items-center text-green">
      <div className="section links">
        <h2>Inspect</h2>
        <div className="flex justify-between lg:gap-16 lg:flex-col lg:justify-start">
          <div className="w-2/4 lg:w-full">
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
          <div className="w-2/4 lg:w-full flex flex-col lg:text-start text-end gap-16">
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
