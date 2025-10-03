import React from "react";
import ProjectCard from "./ProjectCard";

const Work = () => {
  const works = [
    {
      imgSrc: "/images/project-1.png",
      title: "Fruit Store",
      tags: [ "/react.svg","/framer-motion.svg", "/tailwindcss.svg"],
      projectLink: "https://fruit-store-git-main-raees-projects-cf59c59c.vercel.app/",
    },
    {
      imgSrc: "/images/project-2.png",
      title: "MERN Chat Application",
      tags: ["/react.svg","/nodejs.svg", "/mongodb.svg","/expressjs.svg","/tailwindcss.svg","/daisyui.jpeg"],
      projectLink: "https://fullstack-chat-application-cns0.onrender.com/",
    },
    {
      imgSrc: "/images/project-3.png",
      title: "Account Create",
      tags: ["/react.svg","/nodejs.svg", "/expressjs.svg","/tailwindcss.svg", "/mongodb.svg"],
      projectLink: "https://frontend-woad-sigma-86.vercel.app/",
    },
    // {
    //   imgSrc: "/images/project-4.jpg",
    //   title: "Real state website",
    //   tags: ["Web-design", "Development"],
    //   projectLink: "https://github.com/codewithsadee-org/wealthome",
    // },
    // {
    //   imgSrc: "/images/project-5.jpg",
    //   title: "eCommerce website",
    //   tags: ["eCommerce", "Development"],
    //   projectLink: "https://github.com/codewithsadee/anon-ecommerce-website",
    // },
    // {
    //   imgSrc: "/images/project-6.jpg",
    //   title: "vCard Personal portfolio",
    //   tags: ["Web-design", "Development"],
    //   projectLink: "https://github.com/codewithsadee/vcard-personal-portfolio",
    // },
  ];

  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My Portfolio Highlights</h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              tags={tags}
              title={title}
              projectLink={projectLink}
              className={"reveal-up"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
