import React from "react";
import heroImg from "/raees_profile.png";
// import heroImg from "../assets/images/hero-banner.png";
// import scollDown from "../assets/svg/scroll-down.jsx";

const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10">
        <div>
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg ">
              <img
                className="img-cover"
                src={heroImg}
                width={40}
                height={40}
                alt="Raees Aziz Portrait"
              />
            </figure>
            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Available for work
            </div>
          </div>
          <h2 className="headline-1 max-w-[15ch] bg-red-200 sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
            Building Scalable Modern Websites for the Future
          </h2>
          <div className=" flex items-center gap-3">
            <a href="https://drive.google.com/file/d/1Vv2d9VXapSR8Fc1nD3fJIF0QLNcfdpEr/view?usp=drive_link">
            <button className="btn flex btn-primary cursor-pointer text-zinc-700 font-bold">
              Dowload CV
              <img
                className="text-white"
                height={15}
                width={15}
                src="/public/svg/download.svg"
                alt="download"
                />
            </button>{" "}
                </a>
            <a href="#footer">
              <button className="btn flex btn-secondary cursor-pointer bg-zinc-800 hover:bg-zinc-600">
                Scroll Down{" "}
                <img
                  className="animate-bounce"
                  height={15}
                  width={15}
                  src="/public/svg/scroll-down.svg"
                  alt="download"
                />
              </button>
            </a>
          </div>
        </div>

        <div className="hidden lg:block">
          <figure className="w-full  max-w-[480px] ml-auto border-sky-600 border-4 rounded-full overflow-hidden bg-gradient-to-l from-zinc-500">
            <img
              src={heroImg}
              width={656}
              height={800}
              alt="Raees Aziz"
              className="w-full"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
