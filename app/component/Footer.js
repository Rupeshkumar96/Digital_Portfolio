import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="bg-[#0a0f1a] space-y-5">
        <div>
          {/* <p className="p-3 flex items-center justify-center text-3xl text-gray-100">
            Rupesh
          </p> */}
        </div>
        <div className="flex items-center justify-center gap-3 ">
          <a href="#Home" className="text-gray-50">
            Home
          </a>
          <a href="#About" className="text-gray-50">
            About
          </a>
          <a href="#Skills" className="text-gray-50">
            Skills
          </a>
          <a href="#Project" className="text-gray-50">
            Work
          </a>
          <a href="#Contact" className="text-gray-50">
            Contact
          </a>
        </div>
        <div className=" flex justify-center items-center gap-5">
          <FaFacebook className="h-10 w-10 rounded-2xl text-gray-50 cursor-pointer" />
          <FaTwitter className="h-10 w-10 rounded-2xl text-gray-50 cursor-pointer" />
          <FaLinkedin className="h-10 w-10 rounded-2xl text-gray-50 cursor-pointer" />
          <FaInstagram className="h-10 w-10 rounded-2xl text-gray-50 cursor-pointer" />
        </div>
        <footer className="bg-gray-600 text-center border-t border-teal-500 py-2 ">
          <p className="text-sm text-white">
            © 2022 S44WN. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
};

export default Footer;
