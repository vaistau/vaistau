import React from "react";
import { Link } from "gatsby";

const Author = () => {
  return (
    <section className="bg-blue text-blue px-8 min-h-screen flex items-center">
      <div id="author" className="section">
        <h2 className="text-6xl mb-8 text-end animate-blur">README.MD</h2>
        <p className="links">
          I'm a{" "}
          <a
            href="https://www.theodinproject.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            DIY
          </a>{" "}
          full stack developer whose formal education consisted entirely of
          medical science.
        </p>

        <p>
          I aspire to find my niche as some form of creative technologist and
          create websites that are intentional, playful, and meaningful. I
          believe the internet is pointless if not used to create emotionally
          compelling, beautiful, and impactful things.
        </p>

        <p className="links">
          I like volunteering with animals, yoga, horror{" "}
          <a
            href="https://letterboxd.com/olderhag/"
            rel="letterboxd"
            target="_blank"
          >
            movies
          </a>
          , tea,{" "}
          <a
            href="https://www.goodreads.com/user/show/77402014-vaiva"
            rel="goodreads"
            target="_blank"
          >
            reading
          </a>
          , going on night walks,{" "}
          <a
            href="https://open.spotify.com/user/ms7k3k2e4jpiy1yyjw3i1exx8?si=4d3aeea7b49c427e"
            rel="spotify"
            target="_blank"
          >
            music
          </a>
          , and exploring the weird, decentralized regions of the internet (more
          on that in my{" "}
          <a
            href="https://www.are.na/vaiva-s"
            rel="noopener noreferrer"
            target="_blank"
          >
            digital garden
          </a>
          ).
        </p>
      </div>
    </section>
  );
};

export default Author;
