import React from "react";
import { Link } from "gatsby";

const Author = () => {
  return (
    <section
      id="author"
      className="bg-blue text-blue px-8 min-h-screen flex items-center"
    >
      <div className="section">
        <h2 className="animate-blur">README.MD</h2>
        <p className="links">
          Hey there, my name's Vaiva. I'm a{" "}
          <a
            href="https://www.theodinproject.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            DIY
          </a>{" "}
          full stack developer whose formal education consisted entirely of
          medical science. What I lack in formal computer science schooling I
          make up in an astounding ability to Google things.
        </p>

        <p>
          I aspire to find my niche as some form of creative technologist and
          create websites that are intentional, playful, and meaningful. I
          believe the internet is pointless if not used to create emotionally
          compelling, beautiful, and impactful things.
        </p>

        <p className="links">
          I like volunteering with animals, yoga, horror movies, tea, my cats,
          reading, going on night walks, and exploring the weird, decentralized
          regions of the internet (more on that in my{" "}
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
