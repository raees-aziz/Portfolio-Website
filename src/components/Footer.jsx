import React from "react";

const Footer = () => {
  const sitemap = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact me", href: "#contact" },
  ];

  const socials = [
    { label: "GitHub", href: "https://www.github.com/raees-aziz" },
    {label: "LinkedIn",href: "https://www.linkedin.com/in/raees-aziz-9562572a5"},
    { label: "Instagram", href: "https://www.instagram.com/ig__venom6" },
  ];

  return (
    <footer id="footer" className="section">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2">
          {/* heading and button */}
          <div className="mb-10">
            <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up">
              Let&apos;s work together today!
            </h2>
            <button className="w-40 h-10 rounded-2xl bg-sky-500 reveal-up">
              Start Project
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:pl-20">
            {/* site map */}
            <div>
              <p className="mb-2 reveal-up">Site Map</p>
              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      className="block text-sm text-zinc-400 py-1 transition-colors  hover:text-zinc-200 reveal-up"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* socail link */}
            <div>
              <p className="mb-2 reveal-up">Socials</p>
              <ul>
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      target="_blank"
                      className="block text-sm text-zinc-400 py-1 transition-colors  hover:text-zinc-200 reveal-up"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center pt-10 mb-8">
          <a href="" className="logo reveal-up">
            <img
              src="public/logo.svg"
              width={40}
              height={40}
              alt="logo"
              className=""
            />
          </a>
          <p className="text-zinc-500 text-sm reveal-up">
            &copy; 2025 <span className="text-zinc-200">Code With Raees</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
