import React, { useState, useEffect } from "react";
import { FaAlignJustify } from "react-icons/fa";
import Image from "next/image";
import img1 from "../component/asset/rupesh.jpg";

const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll event handler
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full border-gray-200 bg-white/30 md:bg-transparent  backdrop-blur-md z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image
            src={img1}
            alt="#"
            className="hidden md:block h-10 w-10 rounded-full"
          />
          <span className="text-blue-400 self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Rupesh
          </span>
        </a>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="absolute right-2 top-2 inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg 
          md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 
          dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <FaAlignJustify className="w-5 h-5" />
        </button>

        {/* Menu */}
        <div
          className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
        >
          <ul
            className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 
            rounded-lg bg-transparent md:bg-transparent dark:bg-transparent md:dark:bg-transparent 
            md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:border-gray-700"
          >
            <li>
              <a
                href="#"
                onClick={() => setIsOpen(false)}
                className="block py-2 px-3 bg-blue-700 rounded-sm md:bg-transparent 
                md:text-blue-400 md:p-0 dark:text-white md:dark:text-blue-500"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#About"
                onClick={() => setIsOpen(false)}
                className="block py-2 px-3 text-blue-400 rounded-sm hover:bg-gray-100 md:hover:bg-transparent 
                md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 
                dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#Services1"
                onClick={() => setIsOpen(false)}
                className="block py-2 px-3 text-blue-400 rounded-sm hover:bg-gray-100 md:hover:bg-transparent 
                md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 
                dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#Project"
                onClick={() => setIsOpen(false)}
                className="block py-2 px-3 text-blue-400 rounded-sm hover:bg-gray-100 md:hover:bg-transparent 
                md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 
                dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Project
              </a>
            </li>
            <li>
              <a
                href="#Contact"
                onClick={() => setIsOpen(false)}
                className="block py-2 px-3 text-blue-400 rounded-sm hover:bg-gray-100 md:hover:bg-transparent 
                md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 
                dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar1;
