"use client";
import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaMailBulk, FaTwitter } from "react-icons/fa";
import { GoTriangleRight } from "react-icons/go";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: false, // sirf ek baar chale
    });
  }, []);

  function onSubmit(e) {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", mail);
    console.log("Email:", message);

    // reset after submit
    setName("");
    setMail("");
    setMessage("");
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.(com|in|org)$/;

  return (
    <>
      <section id="Contact" className="scroll-mt-10">
        {/* Heading */}
        <div
          className="flex flex-col justify-center items-center p-10"
          data-aos="fade-down"
        >
          
          <h1 className=" font-bold text-4xl text-blue-500 ">Contact Me</h1>
        </div>

        <div className="container flex flex-wrap items-center justify-center">
          {/* Left - Cards */}
          <div
            className="flex items-center justify-around"
            data-aos="fade-right"
          >
            <div>
              <h2 className="text-white text-center text-2xl font-bold flex items-center justify-center mb-5">
                Talk to me
              </h2>
              <div className=":w-1/2 flex flex-wrap md:flex-col items-center justify-center">
                {/* Email */}
                <div
                  data-aos="zoom-in"
                  className="w-full h-40 md:w-70 m-5 bg-gray-700 px-2 py-2 md:px-3 md:py-10 rounded-2xl flex flex-col items-center justify-between shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  <div className="flex flex-col items-center justify-center">
                    <FaMailBulk className="text-gray-100 h-8 w-10 md:h-8 md:w-10" />
                    <p className="text-gray-100 font-bold text-lg">Email</p>
                    <p className=" text-gray-400 text-sm">abcd@gmail.com</p>
                  </div>
                  <div className="flex">
                    <p className="text-sm text-blue-500">Demo </p>
                    <GoTriangleRight className="text-sm text-blue-500 h-5 w-5" />
                  </div>
                </div>

                {/* WhatsApp */}
                <div
                  data-aos="zoom-in"
                  data-aos-delay="200"
                  className="w-full h-40 md:w-70 m-5 bg-gray-700 px-2 py-2 md:px-3 md:py-10 rounded-2xl flex flex-col items-center justify-between shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  <div className="flex flex-col items-center justify-center">
                    <FaWhatsapp className="text-gray-100 h-8 w-10 md:h-8 md:w-10" />
                    <p className="text-gray-100 font-bold text-lg">WhatsApp</p>
                    <p className=" text-gray-400 text-sm">+91_9693921709</p>
                  </div>
                  <div className="flex">
                    <p className="text-sm text-blue-500">Demo </p>
                    <GoTriangleRight className="text-sm text-blue-500 h-5 w-5" />
                  </div>
                </div>

                {/* Twitter */}
                <div
                  data-aos="zoom-in"
                  data-aos-delay="400"
                  className="w-full h-40 md:w-70 m-5 bg-gray-700 px-2 py-2 md:px-3 md:py-10 rounded-2xl flex flex-col items-center justify-between shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  <div className="flex flex-col items-center justify-center">
                    <FaTwitter className="text-gray-100 h-8 w-10 md:h-8 md:w-10" />
                    <p className="text-gray-100 font-bold text-lg">Twitter</p>
                    <p className=" text-gray-400 text-sm">tweet me</p>
                  </div>
                  <div className="flex">
                    <p className="text-sm text-blue-500">Demo </p>
                    <GoTriangleRight className="text-sm text-blue-500 h-5 w-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="w-full px-9 md:w-1/2 md:-mt-16" data-aos="fade-left">
            <h2 className="text-white text-center text-2xl font-bold flex items-center justify-center">
              Write Me your Message
            </h2>
            <div className="mt-5">
              <form
                onSubmit={onSubmit}
                className="w-full shadow-lg rounded-2xl space-y-6"
                data-aos="fade-up"
              >
                {/* Name */}
                <div className="flex flex-col">
                  <label className="mb-1 font-medium text-gray-300">
                    Name :
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    minLength={3}
                    className="w-full p-3 rounded-lg border border-gray-500 bg-[#0a0f1a]
                     text-gray-200 placeholder-gray-500 focus:outline-none
                     focus:ring-2 focus:ring-blue-400 resize-none"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col">
                  <label className="mb-1 font-medium text-gray-300">
                    Mail :
                  </label>
                  <input
                    type="text"
                    placeholder="Enter email"
                    value={mail}
                    onChange={(e) => setMail(e.target.value)}
                    required
                    className="w-full p-3 rounded-lg border border-gray-500 bg-[#0a0f1a]
                     text-gray-200 placeholder-gray-500 focus:outline-none
                     focus:ring-2 focus:ring-blue-400 resize-none"
                  />
                  {mail && !emailRegex.test(mail) && (
                    <p className="text-red-500 text-sm mt-1">
                      Please enter a valid email (must end with .com, .in, or
                      .org)
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="flex flex-col">
                  <label className="mb-1 font-medium text-gray-300">
                    Message
                  </label>
                  <textarea
                    placeholder="Write your Message"
                    type="text"
                    
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={8}
                    className="w-full p-3 rounded-lg border border-gray-500 bg-[#0a0f1a]
                     text-gray-200 placeholder-gray-500 focus:outline-none
                     focus:ring-2 focus:ring-blue-400 resize-none"
                  />
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
