import React from "react";
import datawatt from "../images/datawatt.png";
import handprint from "../images/handprint.png";
import laurence from "../images/laurence.png";

const Work = () => {
  const projects = [
    {
      title: "Datawatt",
      link: "https://datawatt.netlify.app/",
      description:
        "Project aiming to make clean energy investments more accessible to all.",
      stack: "Gatsby, TailwindCSS, Contentful",
      preview: datawatt,
    },
    {
      title: "Handprint",
      link: "https://www.handprint.io/",
      description:
        "Service connecting talent with companies looking to make a positive impact on the world. ",
      stack: "Next.js, styled-components, Contentful",
      preview: handprint,
    },
    {
      title: "St. Laurence",
      link: "https://www.stlaurence.com/",
      description:
        "Website for a local high school servicing nearly 1,000 students and their families.",
      stack: "WordPress",
      preview: laurence,
    },
  ];

  return (
    <section className="px-8 min-h-screen bg-pink flex items-center text-pink">
      <div className="section">
        <h2>My Work</h2>
        <ul className="w-full flex flex-col lg:gap-16 gap-8 text-2xl sm:text-[1.2rem]">
          {projects.map((project) => (
            <li className="group hover:text-black">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-8 justify-around lg:flex-col"
              >
                <div className="w-2/4 lg:text-center lg:items-center lg:w-full flex flex-col gap-4 justify-center group-hover:opacity-70">
                  <h3 className="uppercase font-press-start underline">
                    {project.title}
                  </h3>
                  <p>{project.description}</p>
                  <p>{`Tech stack: ${project.stack}`}</p>
                </div>
                <div className="w-[30rem] lg:w-full lg:mx-auto border-pink group-hover:border-black group-hover:border-opacity-70 border-2 rounded-xl overflow-hidden">
                  <img src={project.preview} alt={`${project.title} Preview`} />
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Work;
