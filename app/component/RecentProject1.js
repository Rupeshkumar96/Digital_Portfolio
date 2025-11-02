"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import project from "../component/asset/project.png";
import { GoTriangleRight } from "react-icons/go";
import AOS from "aos";
import "aos/dist/aos.css";

const RecentProject = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // animation speed
      once: false, // animate every scroll
      offset: 100, // when animation triggers
      easing: "ease-in-out", // smooth effect
    });
  }, []);

  return (
    <>
      <section
        id="Project"
        className="scroll-mt-10 px-4 md:px-10 py-10 "
        data-aos="fade-up"
      >
        {/* Heading */}
        <div
          className="flex flex-col justify-center items-center p-10"
          data-aos="fade-down"
        >
          <h1 className="font-bold text-4xl text-blue-500">My Projects</h1>
        </div>

        {/* Project Card */}
        <div
          className="flex flex-col md:flex-row items-center justify-center gap-10 rounded-3xl mx-5 md:mx-20 my-10 shadow-[0_0_25px_rgba(50,200,255,0.2)] hover:shadow-[0_0_40px_rgba(50,200,255,0.4)] transition-all duration-500 ease-in-out bg-[#0f172a]/60 border border-cyan-500/20"
          data-aos="zoom-in-up"
        >
          {/* Image */}
          <a
            href="https://job-portal-full-stack-client-nine.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="m-5 bg-gray-700 h-70 w-70 px-3 py-5 rounded-2xl flex flex-col items-center justify-between shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(0,255,255,0.4)]">
              <div className="w-full h-full">
                <Image
                  src={project}
                  alt="Insider Job Project"
                  className="rounded-2xl h-39 w-65"
                />
              </div>
              <div className="flex flex-col items-center justify-center mt-3">
                <p className="font-bold text-xl text-gray-200">Insider Job</p>
                <div className="flex items-center gap-1">
                  <p className="text-sm text-blue-400 hover:text-blue-300">
                    Demo
                  </p>
                  <GoTriangleRight className="text-sm text-blue-400 h-5 w-5" />
                </div>
              </div>
            </div>
          </a>

          {/* Text Content */}
          <div
            className="w-full md:w-1/2 flex flex-col items-center justify-center gap-10 my-10"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <p className="text-lg md:text-xl text-justify px-5 text-gray-300 leading-relaxed">
              <span className="text-blue-400 font-semibold">InsidersJob</span> is
              a full-stack job portal web application that connects job seekers
              and recruiters through secure authentication, role-based access,
              and real-time application management.
            </p>

            <div
              className="mt-2 p-4 bg-gray-800 rounded-2xl w-full md:w-4/5"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <p className="font-bold text-white text-xl mb-2">
                Technologies Used :
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Frontend: React, Tailwind CSS, Axios</li>
                <li>Backend: Node.js, Express.js, MongoDB</li>
                <li>Authentication: JWT (JSON Web Tokens)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RecentProject;
