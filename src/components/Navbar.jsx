import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { motion } from "framer-motion";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [shrink, setShrink] = useState(false);

  const navItems = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "Company",
      link: "#company",
    },
    {
      name: "Resources",
      link: "#resources",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShrink(true);
      } else {
        setShrink(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-screen bg-black px-4  ${
        shrink ? "h-16" : "h-24"
      } transition-all duration-300 z-10`}
    >
      <div
        className={`flex justify-between items-center max-w-[1240px] mx-auto h-full top-0 left-0 right-0  text-white 
        `}
      >
        <a
          className={`font-bold text-[#00df9a] ${
            shrink ? "text-2xl" : "text-3xl"
          } duration-300`}
          href="/"
        >
          React.
        </a>
        <ul className="hidden md:flex space-x-4 lg:space-x-8">
          {navItems.map((item) => {
            return (
              <li className="cursor-pointer hover:text-primary" key={item.name}>
                <a href={item.link}>{item.name}</a>
              </li>
            );
          })}
        </ul>
        <div
          onClick={() => setNav(!nav)}
          className="block md:hidden cursor-pointer"
        >
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        <div
          className={`fixed top-0 w-3/5 pt-4 border-r border-gray-900 h-full bg-[#000300] ${
            nav ? "left-0" : "-left-full"
          } ease-in-out duration-500`}
        >
          <h1 className="w-full text-3xl font-bold text-primary px-4 py-6">
            React.
          </h1>
          <ul className="uppercase">
            {navItems.map((item, index) => {
              return (
                <li
                  key={item.name}
                  className={`px-6 py-4 hover:bg-gray-800 hover:pl-8 ${
                    index < navItems.length - 1
                      ? "border-b border-gray-800"
                      : ""
                  } ease-in-out duration-300`}
                >
                  <a href={item.link}>{item.name}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
