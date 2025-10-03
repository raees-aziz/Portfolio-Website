import React from "react";
import logo from "../assets/images/logo.svg"

const About = () => {
  const aboutItems = [
    {
      label: "Project done",
      number: 5,
    },
    {
      label: "Years of experience",
      number: 10,
    },
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <div className="">
            <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
              Welcome! I&apos;m Raees, a professional web developer with a knack
              for crafting visually stunning and highly functional websites.
              Combining creativity and technical expertise. I transform your
              vision into digital masterpiece that excels in both appearance and
              performance.
            </p>
            {/* <div className="flex flex-wrap items-center gap-4 md:gap-7">
              {aboutItems.map(({ label, number }, key) => (
                <div key={key}>
                  <div className="flex items-center md:mb-2">
                    <span className="text-2xl font-bold md:text-4xl">{number}</span>
                    <span className="text-sky-400 font-bold md:text-3xl">+</span>
                  </div>
                  <p className="text-sm text-zinc-400">{label}</p>
                </div>
              ))}
              <img 
              src={logo}
              className="ml-auto md:w-[40px] md:h-[40px]"
              height={30}
              width={30}
              alt=""/>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
