import React from "react";

const Author = () => {
  return (
    <section
      id="author"
      className="bg-blue text-blue px-8 min-h-screen flex items-center"
    >
      <div className="section">
        <h2>README.MD</h2>
        <p className="links">
          I'm a Chicago-based{" "}
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
          I like volunteering with animals, reading, yoga, horror movies, tea,
          my cats, going on night walks, and exploring the weird, decentralized
          regions of the internet.
        </p>
      </div>
    </section>
  );
};

export default Author;
