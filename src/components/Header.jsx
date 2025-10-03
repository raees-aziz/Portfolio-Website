import React, { useState } from "react";
import Logo from "../assets/images/logo.svg";
import Navbar from "./Navbar";
const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 z-40 w-full h-20 flex justify-center items-center bg-gradient-to-b from-zinc-900 to-transparent">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr_3fr_1fr]">
        {/* logo */}
        <h1>
          <a href="/" className="logo">
            <img width={40} height={40} src={Logo} alt="Website Logo" />
          </a>
        </h1>

        {/* Menu */}
        <div className="relative md:justify-self-center">
          <button
            className="menu-btn "
            onClick={() => setNavOpen((prev) => !prev)}
          >
            <span className="">
              {<img src={navOpen?"/svg/cross.svg":"/svg/hamburger.svg"}/>}
            </span>
          </button>
          <Navbar navOpen={navOpen} />
        </div>

        {/* Contact */}
        <a
          href="#contact"
          className="btn btn-secondary  hidden md:flex md:justify-self-end"
        >
          Contact Me
        </a>
      </div>
    </header>
  );
};

export default Header;
