"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const certifications = [
  { name: "AI Workshop", image: "/certificates/Ai_Workshop.jpg" },
  { name: "React Developer", image: "/certificates/1.jpg" },
  { name: "Python Basics", image: "/certificates/2.jpg" },
  { name: "Full Stack Web Dev", image: "/certificates/3.jpg" },
  { name: "Frontend Bootcamp", image: "/certificates/4.jpg" },
  { name: "JavaScript Mastery", image: "/certificates/5.png" },
  { name: "NodeJS Advanced", image: "/certificates/6.jpg" },
  { name: "Database Design", image: "/certificates/7.jpg" },
];

const Certification = () => {
  const [selected, setSelected] = useState(null);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section id="certifications" className="bg-[#0a0f1a] text-white py-16">
      {/* Heading */}
      <h2
        className="text-4xl font-bold text-center text-blue-400 mb-10"
        data-aos="fade-down"
      >
        Certifications
      </h2>

      {/* Certificates Grid */}
      <div
        className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6"
        data-aos="fade-up"
      >
        {certifications.map((cert, index) => (
          <div
            key={index}
            onClick={() => setSelected(cert.image)}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
            className="cursor-pointer bg-[#1F2833] rounded-xl shadow-lg hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] p-4 transform transition-all duration-300 hover:scale-105"
          >
            <div className="relative w-full h-48">
              <Image
                src={cert.image}
                alt={cert.name}
                fill
                className="object-cover rounded-md"
              />
            </div>
            <p className="text-center mt-3 font-semibold text-gray-200">
              {cert.name}
            </p>
          </div>
        ))}
      </div>

      {/* Fullscreen Image Popup */}
      {selected && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-50"
          data-aos="zoom-in"
        >
          <button
            className="absolute top-6 right-8 text-white text-3xl font-bold hover:text-red-400 transition-colors"
            onClick={() => setSelected(null)}
          >
            ✕
          </button>
          <div
            className="relative w-11/12 md:w-3/4 lg:w-1/2 h-[80vh] rounded-xl overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.3)]"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Image
              src={selected}
              alt="certificate"
              fill
              className="object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Certification;
