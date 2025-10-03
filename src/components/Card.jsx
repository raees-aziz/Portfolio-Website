import React from "react";
import styled from "styled-components";
// import { SiReact, SiTailwindcss, SiMongodb, SiNodedotjs, SiExpress } from "react-icons/si";

const Card = () => {
  const works = [
    {
      imgSrc: "/images/project-1.png",
      title: "Fruit Store",
      tags: ["React", "Tailwind", "Framer Motion"],
      projectLink: "https://fruit-store-git-main-raees-projects-cf59c59c.vercel.app/",
    },
    {
      imgSrc: "/images/project-2.png",
      title: "MERN Chat Application",
      tags: ["React", "Tailwind", "DaisyUI", "Node.js", "MongoDB", "Express"],
      projectLink: "https://fullstack-chat-application-cns0.onrender.com/",
    },
    {
      imgSrc: "/images/project-3.jpg",
      title: "Account Create",
      tags: ["Node.js", "Express", "CSS"],
      projectLink: "https://frontend-woad-sigma-86.vercel.app/signup",
    },
  ];

  return (
    <div id="work" className="section">
      <div className="container">
        <StyledWrapper className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map((work, index) => (
            <a
              href={work.projectLink}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
            >
              <div className="card">
                <img src={work.imgSrc} alt={work.title} className="card__image" />
                <div className="card__content">
                  <p className="card__title">{work.title}</p>
                  <p className="card__description">
                    {work.tags.map((tag, i) => (
                      <span key={i} className="tag">
                        {/* {getIcon(tag)} {tag} */}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </StyledWrapper>
      </div>
    </div>
  );
};

// function to match tech with icons
// const getIcon = (tag) => {
//   switch (tag.toLowerCase()) {
//     case "react":
//       return <SiReact color="#61DAFB" />;
//     case "tailwind":
//       return <SiTailwindcss color="#38BDF8" />;
//     case "mongodb":
//       return <SiMongodb color="#4DB33D" />;
//     case "node.js":
//       return <SiNodedotjs color="#3C873A" />;
//     case "express":
//       return <SiExpress color="#000000" />;
//     default:
//       return null;
//   }
// };

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  .card {
    position: relative;
    flex: 1 1 300px;
    max-width: 350px;
    height: 300px;
    background: linear-gradient(-45deg, #f89b29, #ff0f7b);
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: transform 0.4s ease;
    cursor: pointer;
  }

  .card:hover {
    transform: scale(1.05);
  }

  .card__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .card__content {
    position: absolute;
    inset: 0;
    background-color: #ffffffee;
    opacity: 0;
    transition: all 0.6s ease;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
  }

  .card:hover .card__content {
    opacity: 1;
  }

  .card__title {
    font-size: 22px;
    font-weight: 800;
    background: linear-gradient(90deg, #ff0f7b, #f89b29);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 10px;
  }

  .card__description {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .tag {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 14px;
    font-weight: 600;
    background: #f1f1f1;
    padding: 4px 8px;
    border-radius: 8px;
  }
`;

export default Card;
