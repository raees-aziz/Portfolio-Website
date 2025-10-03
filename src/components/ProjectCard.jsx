import React from "react";
import PropTypes from "prop-types";
const ProjectCard = ({ imgSrc, title, tags, projectLink }) => {
  return (
    <div
      className={
        "relative p-4 rounded-3xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-2 ring-inset ring-zinc-50/5 transition-colors"
      }
    >
      <figure className="img-box aspect-square rounded-lg mb-4 ">
        <img className="w-full h-full object-cover" loading="lazy" src={imgSrc} alt={title} />
      </figure>
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="title-1 mb-3">{title}</h3>
          <div className="flex flex-wrap items-center gap-2">
            {tags.map((label, key) => (
              <img className="size-10" src={label} key={key} alt="" />
            ))}
          </div>
        </div>
        {/* <div className="w-11 h-11 rounded-lg grid place-items-center bg-sky-400 text-zinc-950 shrink-0">
          <span className="material-symbols" aria-hidden="true">
            arrow_outward
          </span>
        </div> */}
      </div>
      <a href={projectLink} target="_blanks" className="absolute inset-0"></a>
    </div>
  );
};

ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  projectLink: PropTypes.string.isRequired,
  classes: PropTypes.string,
};

export default ProjectCard;
