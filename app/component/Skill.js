
"use client";

import React from "react";
import Image from "next/image";

const Skill = () => {

  // Reusable skills data
  const skillCategories = [
    {
      title: "Programming Languages",
      spacing: "",
      skills: [
        { name: "Python", level: "Advanced", icon: "/icons/python.png" },
        { name: "Java", level: "Intermediate", icon: "/icons/java.png" },
        { name: "C", level: "Intermediate", icon: "/icons/C.png" },
      ],
    },
    {
      title: "Frontend Development",
      spacing: "mt-10",
      skills: [
        { name: "HTML5", level: "Advanced", icon: "/icons/html5.png" },
        { name: "CSS3", level: "Advanced", icon: "/icons/css3.png" },
      ],
    },
    {
      title: "ML Libraries",
      spacing: "mt-10",
      skills: [
        { name: "NumPy", level: "Intermediate", icon: "/icons/numpy.png" },
        { name: "Pandas", level: "Intermediate", icon: "/icons/pandas.png" },
        { name: "Seaborn", level: "Intermediate", icon: "/icons/seaborn.png" },
        {
          name: "Scikit-learn",
          level: "Intermediate",
          icon: "/icons/sci-kit.png",
        },
      ],
    },
    {
      title: "Databases",
      spacing: "mt-15",
      skills: [
        { name: "MySQL", level: "Intermediate", icon: "/icons/MySQL.png" },
      ],
    },
    {
      title: "Tools",
      spacing: "mt-15",
      skills: [
        { name: "Git", level: "Intermediate", icon: "/icons/git.png" },
        { name: "GitHub", level: "Intermediate", icon: "/icons/git-hub.png" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="bg-[#0a0f1a] text-white py-10"
    >
      {/* Section Heading */}
      <h2 className="text-3xl font-bold text-center text-blue-400 mb-10 mt-10">
        My Skills & Technologies
      </h2>

      {/* Skills Grid */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {skillCategories.map((category, index) => (
          <div
            key={category.title}
            className="bg-[#1F2833] p-6 rounded-2xl shadow-lg m-5 md:m-1"
          >

            {/* Category Title */}
            <h3 className="text-xl font-semibold text-blue-400 mb-4 text-center">
              {category.title}
            </h3>

            {/* Skills List */}
            <div className={`flex flex-col gap-3 ${category.spacing}`}>

              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-3 bg-[#0B0C10] p-3 rounded-xl hover:bg-gray-900 transition duration-300"
                >

                  {/* Optimized Next.js Image */}
                  <Image
                    src={skill.icon}
                    alt={`${skill.name} logo`}
                    width={32}
                    height={32}
                    className="w-8 h-8 object-contain"
                  />

                  {/* Skill Information */}
                  <div>
                    <p className="font-semibold">
                      {skill.name}
                    </p>

                    <p className="text-sm text-gray-400">
                      {skill.level}
                    </p>
                  </div>

                </div>
              ))}

            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Skill;
