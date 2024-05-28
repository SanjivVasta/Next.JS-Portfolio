"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "About",
    path: "about",
  },
  {
    title: "Projects",
    path: "projects",
  },
  {
    title: "Contact",
    path: "contact",
  },
];

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#151515] bg-opacity-95">
      <div className="flex flex-wrap items-center justify-between mx-auto py-4 px-4">
        <Link href={"/"} className="text-2xl md:text-4xl text-white font-semibold">
          VASTA
        </Link>
        <div className="block md:hidden">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
          >
            {navbarOpen ? (
              <XMarkIcon className="h-5 w-5" />
            ) : (
              <Bars3Icon className="h-5 w-5" />
            )}
          </button>
        </div>
        <div className={`menu hidden md:block md:w-auto ${navbarOpen ? 'hidden' : ''}`} id="navbar">
          <ul className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 p-4 md:p-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <ScrollLink
                  to={link.path}
                  smooth={true}
                  duration={500}
                  className="block py-2 pl-3 pr-4 text-[#bbbbbb] sm:text-xl rounded md:p-0 hover:text-white cursor-pointer"
                  onClick={() => setNavbarOpen(false)}
                >
                  {link.title}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen && <MenuOverlay links={navLinks} setNavbarOpen={setNavbarOpen} />}
    </nav>
  );
};

export default NavBar;