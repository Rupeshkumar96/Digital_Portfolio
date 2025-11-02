"use client";
import { useEffect } from "react";
import Image from "next/image";
import { ReactTyped } from "react-typed";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

import profile from "../component/asset/rupesh.jpg"; // apni image ka path yahan likho

export default function HeroSection() {
  useEffect(() => {
    AOS.init({ duration: 1500, once: false });
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center text-white bg-gradient-to-b from-[#040b18] via-[#0a1124] to-[#040b18] px-6 md:px-16 pt-10 md:pt-0 overflow-hidden"
    >
      {/* LEFT SIDE TEXT */}
      <div
        className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-6 md:gap-8"
        data-aos="fade-right"
      >
        <div>
          <p className="text-gray-400 text-lg md:text-xl">Hello, I&apos;m</p>
          <h1 className="text-3xl md:text-6xl font-bold text-blue-400 drop-shadow-[0_0_10px_rgba(0,140,255,0.5)]">
            Mr. Rupesh Kumar
          </h1>
        </div>

        <h2 className="text-2xl md:text-4xl font-semibold text-yellow-400">
          <ReactTyped
            strings={[
              "Backend Developer",
              "Full Stack Engineer",
              "MERN Developer",
              "Problem Solver",
            ]}
            typeSpeed={70}
            backSpeed={50}
            loop
          />
        </h2>

        <p className="text-gray-300 text-base md:text-lg max-w-xl">
          Passionate about crafting scalable, secure, and modern web
          applications with a focus on performance and user experience.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-2">
          <a
            href="/RupeshCV.pdf"
            download
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-xl font-semibold text-white shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all"
          >
            Download CV
          </a>
          <a
            href="#About"
            className="px-6 py-3 border border-blue-400 text-blue-400 rounded-xl hover:bg-blue-500 hover:text-white transition-all"
          >
            About
          </a>
        </div>

        {/* SOCIAL ICONS */}
        <div className="flex gap-5 justify-center md:justify-start mt-6">
          <a
            href="https://linkedin.com/in/rupesh-kumar12"
            target="_blank"
            className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-all"
          >
            <FaLinkedinIn className="text-xl" />
          </a>
          <a
            href="https://github.com/Rupeshkumar96"
            target="_blank"
            className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-all"
          >
            <FaGithub className="text-xl" />
          </a>
          <a
            href="mailto:rupeshprasad103@gmail.com"
            className="p-3 bg-gray-800 rounded-full hover:bg-red-500 transition-all"
          >
            <FaEnvelope className="text-xl" />
          </a>
        </div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div
        className="flex-1 flex justify-center mt-10 md:mt-0"
        data-aos="fade-left"
      >
        <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-[0_0_50px_rgba(0,140,255,0.4)] border-4 border-blue-400/50 hover:shadow-[0_0_80px_rgba(0,140,255,0.6)] transition-all">
          <Image
            src={profile}
            alt="Profile"
            fill
            className="object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
}
