import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { TbBrandLeetcode } from "react-icons/tb";
import { SiGooglecloud } from "react-icons/si";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close, profile_pic } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img
              src={profile_pic}
              alt="profile"
              className="w-9 h-9 object-contain"
            />
            <p className="text-white text-[18px] font-bold cursor-pointer flex">
              Kunal
            </p>
          </Link>

          {/* Social Icons */}
          <a
            href="https://www.linkedin.com/in/kunal-uttam-379378205/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition duration-300"
            title="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>

          <a
            href="https://leetcode.com/u/kunaluttam20/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-orange-400 transition duration-300"
            title="LeetCode"
          >
            <TbBrandLeetcode size={24} />
          </a>

          <a
            href="https://www.cloudskillsboost.google/public_profiles/14d761df-754f-42fc-902d-9c0cdf4461e8"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-300 transition duration-300"
            title="Google Cloud Skills Boost"
          >
            <SiGooglecloud size={22} />
          </a>

          <a
            href="https://github.com/kunal534"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 transition duration-300"
            title="GitHub"
          >
            <FaGithub size={22} />
          </a>
        </div>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
