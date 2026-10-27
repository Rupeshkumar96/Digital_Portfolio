
"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import project from "../component/asset/project.png";
import HR_Dasboard from "../component/asset/HR_Dasboard.png";
import productAnalysis from "../component/asset/product-analysis.png";
import BreastCancer from "../component/asset/Breast_Cancer.png";
import { GoTriangleRight } from "react-icons/go";
import AOS from "aos";
import "aos/dist/aos.css";

// ========================================
// PROJECT DATA: Add all your projects here
// ========================================

const projects = [
  {
    id: 1,
    title: "Insider Job",
    image: project,
    demo: "https://job-portal-full-stack-client-nine.vercel.app/",
    description:
      "InsidersJob is a full-stack job portal web application that connects job seekers and recruiters through secure authentication, role-based access, and real-time application management.",
    technologies: [
      "Frontend: React, Tailwind CSS, Axios",
      "Backend: Node.js, Express.js, MongoDB",
      "Authentication: JWT (JSON Web Tokens)",
    ],
  },

  {
    id: 2,
    title: "HR Workforce Intelligence Dashboard",
    image: HR_Dasboard, // Replace with your actual image
    demo: "https://github.com/Rupeshkumar96/IBM_HR_Data_Analysis",
    description:
      "An interactive HR analytics dashboard that analyzes employee attrition, workforce demographics, job satisfaction, and other important HR metrics to support data-driven decisions.",
    technologies: [
      "Visualization: Power BI",
      "Data Analysis: Python, Pandas",
      "Dataset: IBM HR Analytics Employee Attrition",
    ],
  },

  {
    id: 3,
    title: "Breast Cancer Prediction",
    image: BreastCancer, // Replace with your actual image
    demo: "https://breast-cancer-prediction-pewf.onrender.com/",
    description:
      "A full-stack ML web application that leverages diagnostic health data to predict whether a breast tumor is benign or malignant. Built to provide quick, data-driven diagnostic support with real-time predictions and a clean, responsive UI.",
    technologies: [
      "Visualization:Matplotlib, Seaborn,Flask",
      "Data Analysis: Python, Pandas, Scikit-learn",
      "Dataset: breast-cancer-data.csv",
    ],
  },

  {
    id: 4,
    title: "Product Analysis Dashboard",
    image: productAnalysis, // Replace with your actual image
    demo: "https://appuctanalysis-rupeshkumar.streamlit.app/",
    description:
      "A product analysis application that helps users analyze products and automate product search through an interactive dashboard.",
    technologies: [
      "Frontend: Streamlit",
      "Language: Python",
      "Tools: Pandas, Data Analysis",
    ],
  },
];

// ========================================
// MAIN COMPONENT
// ========================================

const RecentProject = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      offset: 100,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section
      id="Project"
      className="scroll-mt-10 px-4 md:px-10 py-10"
    >
      {/* Heading */}
      <div
        className="flex flex-col justify-center items-center p-10"
        data-aos="fade-down"
      >
        <h1 className="font-bold text-4xl text-blue-500">
          My Projects
        </h1>
      </div>

      {/* Multiple Projects */}
      <div className="flex flex-col gap-12">

        {projects.map((item, index) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row items-center justify-center gap-10 rounded-3xl mx-2 md:mx-10 lg:mx-20 my-2 p-5 md:p-8 shadow-[0_0_25px_rgba(50,200,255,0.2)] hover:shadow-[0_0_40px_rgba(50,200,255,0.4)] transition-all duration-500 ease-in-out bg-[#0f172a]/60 border border-cyan-500/20"
            data-aos="zoom-in-up"
          >

            {/* Project Image Card */}
            <a
              href={item.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="m-2 bg-gray-700 h-70 w-70 px-3 py-5 rounded-2xl flex flex-col items-center justify-between shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(0,255,255,0.4)]">

                <div className="w-full h-full">
                  <Image
                    src={item.image}
                    alt={`${item.title} Project Screenshot`}
                    className="rounded-2xl h-39 w-full object-cover"
                  />
                </div>

                <div className="flex flex-col items-center justify-center mt-3">
                  <p className="font-bold text-xl text-gray-200 text-center">
                    {item.title}
                  </p>

                  <div className="flex items-center gap-1">
                    <p className="text-sm text-blue-400 hover:text-blue-300">
                      Demo
                    </p>

                    <GoTriangleRight className="text-sm text-blue-400 h-5 w-5" />
                  </div>
                </div>
              </div>
            </a>

            {/* Project Description & Technologies */}
            <div
              className="w-full md:w-1/2 flex flex-col items-center justify-center gap-10 my-5 md:my-10"
              data-aos="fade-left"
              data-aos-delay="200"
            >

              {/* Description */}
              <p className="text-lg md:text-xl text-justify px-5 text-gray-300 leading-relaxed">
                <span className="text-blue-400 font-semibold">
                  {item.title}
                </span>{" "}
                {item.description}
              </p>

              {/* Technologies */}
              <div
                className="mt-2 p-5 bg-gray-800 rounded-2xl w-full md:w-4/5"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <p className="font-bold text-white text-xl mb-2">
                  Technologies Used :
                </p>

                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  {item.technologies.map((tech, techIndex) => (
                    <li key={techIndex}>
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default RecentProject;
