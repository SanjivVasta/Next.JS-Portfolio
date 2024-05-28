import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { XMarkIcon } from "@heroicons/react/24/solid";

const MenuOverlay = ({ links, setNavbarOpen }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-[#151515] bg-opacity-95 flex flex-col items-center justify-center z-20">
      <button
        onClick={() => setNavbarOpen(false)}
        className="absolute top-4 right-4 text-white"
      >
        <XMarkIcon className="h-8 w-8" />
      </button>
      <ul className="space-y-8">
        {links.map((link, index) => (
          <li key={index}>
            <ScrollLink
              to={link.path}
              smooth={true}
              duration={500}
              className="text-2xl text-white cursor-pointer"
              onClick={() => setNavbarOpen(false)}
            >
              {link.title}
            </ScrollLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuOverlay;