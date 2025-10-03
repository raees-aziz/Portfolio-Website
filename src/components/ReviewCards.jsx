import PropTypes from "prop-types";
import React from "react";

const ReviewCards = ({ content, name, imgSrc, company }) => {
  const ratings = new Array(5);
  ratings.fill({
    icon: "/star-icon.svg",
    style: { fontVariationSettings: '"FILL" 1' },
  });

  return (
    <div className="bg-zinc-800 p-5 rounded-xl min-w-[320px] flex flex-col lg:min-w-[420px]">
      <div className="flex items-center gap-1 mb-3">
        {ratings.map(({ icon, style }, keys) => (
          <span keys={keys} style={style} className="material-symbols-rounded text-yellow-300 text-[18px]">
            {<img src={icon} className="size-5" />}
          </span>
        ))}
      </div>

      <p className="text-zinc-400 mb-8">{content}</p>
      <div className="flex items-center gap-2 mt-auto">
        <figure className="img-box rounded-lg">
          <img
            className="img-cover"
            width={44}
            height={44}
            loading="lazy"
            src={imgSrc}
            alt={name}
          />
        </figure>
        <div>
          <p>{name}</p>
          <p className="text-xs text-zinc-400 tracking-wider">{company}</p>
        </div>
      </div>
    </div>
  );
};

ReviewCards.prototype = {
  content: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  // classes:PropTypes.string.isRequired
};

export default ReviewCards;
