"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import img1 from "../component/asset/rupesh.jpg";
import { FaMedal, FaShoppingBag } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // animation speed
      once: false, // true me sirf ek baar trigger hoga, false me humesa chalega
    });
  }, []);

  return (
    <section className="w-full h-full scroll-mt-9" id="About">
      {/* Heading */}
      <div className="flex flex-col justify-center items-center py-10">
        
        <h1
          className="font-bold text-4xl text-blue-500"
          // data-aos="fade-up"
          // data-aos-delay="200"
        >
          About Me
        </h1>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center md:gap-15">
        {/* Image */}
        <div className="flex items-center justify-center" data-aos="fade-right">
          <div className="hidden md:block h-50 w-50 md:h-90 md:w-90 rounded-2xl">
            <Image src={img1} alt="#" className="rounded-2xl" />
          </div>
        </div>

        {/* Content */}
        <div
          className="w-full md:w-1/2 flex flex-col items-center justify-center gap-10"
          data-aos="fade-left"
        >
          {/* Boxes */}
          {/* <div className="flex flex-col md:flex-row gap-2">
            <div
              className="bg-gray-800 rounded-2xl h-40 w-80 md:w-60 flex flex-col items-center justify-center gap-2"
              data-aos="zoom-in"
            >
              <FaMedal className="h-10 w-10 text-2xl font-bold text-blue-500" />
              <p className="font-bold text-xl text-gray-100">Experience</p>
              <p className="text-sm text-gray-400">Fresher</p>
            </div>

            <div
              className="bg-gray-800 rounded-2xl h-40 w-80 md:w-60 flex flex-col items-center justify-center gap-2"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <FaShoppingBag className="h-10 w-10 text-2xl font-bold text-blue-500" />
              <p className="font-bold text-xl text-gray-100">Completed</p>
              <p className="text-sm text-gray-400">5 + Projects</p>
            </div>

            <div
              className="bg-gray-800 rounded-2xl h-40 w-80 md:w-60 flex flex-col items-center justify-center gap-2"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <MdOutlineSupportAgent className="h-10 w-10 text-2xl font-bold text-blue-500" />
              <p className="font-bold text-xl text-gray-100">Support</p>
              <p className="text-sm text-gray-400">Online 24/7</p>
            </div>
          </div> */}

          {/* Paragraph */}
          <div data-aos="fade-up">
            <p className="text-xl text-justify px-5 md:px-0 md:text-left text-gray-300">
              I am currently pursuing an MCA in Artificial Intelligence &
              Machine Learning at Lovely Professional University in
              collaboration with IBM. With strong foundations in Java, Python,
              MySQL, Data Science, and AI, I am passionate about applying
              technology to solve real‑world challenges. My strengths lie in
              problem‑solving, analytical thinking, and creativity, which I
              channel into building practical, scalable, and impactful
              solutions. I enjoy exploring data‑driven insights, developing
              intelligent applications, and continuously expanding my
              technical expertise.
            </p>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default About;
