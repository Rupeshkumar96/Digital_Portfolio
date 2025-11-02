import React from 'react'

const Skill = () => {
  return (
    <div>
        <section id="skills" className="bg-[#0a0f1a] text-white py-10">
        <h2 className="text-3xl font-bold text-center text-blue-400 mb-10 mt-10">
            My Skills & Technologies
        </h2>

        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Programming Languages */}
            <div className="bg-[#1F2833] p-6 rounded-2xl shadow-lg m-5 md:m-1">
            <h3 className="text-xl font-semibold text-blue-400 mb-4 text-center">
                Programming Languages
            </h3>
            <div className="flex flex-col gap-3">
                {[
                { name: "Python", level: "Advanced", icon: "/icons/python.png" },
                { name: "Java", level: "Intermediate", icon: "/icons/java.png" },
                { name: "C", level: "Intermediate", icon: "/icons/C.png" },
                { name: "JavaScript", level: "Advanced", icon: "/icons/js.png" },
                ].map((skill) => (
                <div key={skill.name} className="flex items-center gap-3 bg-[#0B0C10] p-3 rounded-xl">
                    <img src={skill.icon} alt={skill.name} className="w-8 h-8" />
                    <div>
                    <p className="font-semibold">{skill.name}</p>
                    <p className="text-sm text-gray-400">{skill.level}</p>
                    </div>
                </div>
                ))}
            </div>
            </div>

            {/* Frontend Development */}
            <div className="bg-[#1F2833] p-6 rounded-2xl shadow-lg m-5 md:m-1">
            <h3 className="text-xl font-semibold text-blue-400 mb-4 text-center">
                Frontend Development
            </h3>
            <div className="flex flex-col gap-3 mt-10 ">
                {[
                { name: "HTML5", level: "Advanced", icon: "/icons/html5.png" },
                { name: "CSS3", level: "Advanced", icon: "/icons/css3.png" },
                { name: "React", level: "Advanced", icon: "/icons/react.png" },
                { name: "Next.js", level: "Intermediate", icon: "/icons/next.png" },
                ].map((skill) => (
                <div key={skill.name} className="flex items-center gap-3 bg-[#0B0C10] p-3 rounded-xl">
                    <img src={skill.icon} alt={skill.name} className="w-8 h-8" />
                    <div>
                    <p className="font-semibold">{skill.name}</p>
                    <p className="text-sm text-gray-400">{skill.level}</p>
                    </div>
                </div>
                ))}
            </div>
            </div>

            {/* Backend Development */}
            <div className="bg-[#1F2833] p-6 rounded-2xl shadow-lg m-5 md:m-1">
            <h3 className="text-xl font-semibold text-blue-400 mb-4 text-center">
                Backend Development
            </h3>
            <div className="flex flex-col gap-3 mt-10">
                {[
                { name: "Node.js", level: "Intermediate", icon: "/icons/nodejs.png" },
                { name: "Express.js", level: "Intermediate", icon: "/icons/Express.png" },
                
                ].map((skill) => (
                <div key={skill.name} className="flex items-center gap-3 bg-[#0B0C10] p-3 rounded-xl">
                    <img src={skill.icon} alt={skill.name} className="w-8 h-8" />
                    <div>
                    <p className="font-semibold">{skill.name}</p>
                    <p className="text-sm text-gray-400">{skill.level}</p>
                    </div>
                </div>
                ))}
            </div>
            </div>

            {/* Databases */}
            <div className="bg-[#1F2833] p-6 rounded-2xl shadow-lg m-5 md:m-1">
            <h3 className="text-xl font-semibold text-blue-400 mb-4 text-center">
                Databases
            </h3>
            <div className="flex flex-col gap-3 mt-15">
                {[
                { name: "MySQL", level: "Intermediate", icon: "/icons/MySQL.png" },
                { name: "MongoDB", level: "Intermediate", icon: "/icons/MongoDB.png" },
                ].map((skill) => (
                <div key={skill.name} className="flex items-center gap-3 bg-[#0B0C10] p-3 rounded-xl">
                    <img src={skill.icon} alt={skill.name} className="w-8 h-8" />
                    <div>
                    <p className="font-semibold">{skill.name}</p>
                    <p className="text-sm text-gray-400">{skill.level}</p>
                    </div>
                </div>
                ))}
            </div>
            </div>
            {/* Tools  */}
            <div className="bg-[#1F2833] p-6 rounded-2xl shadow-lg m-5 md:m-1">
            <h3 className="text-xl font-semibold text-blue-400 mb-4 text-center">
                Tools
            </h3>
            <div className="flex flex-col gap-3 mt-15">
                {[
                { name: "Git", level: "Intermediate", icon: "/icons/git.png" },
                { name: "Github", level: "Intermediate", icon: "/icons/github.png" },
                ].map((skill) => (
                <div key={skill.name} className="flex items-center gap-3 bg-[#0B0C10] p-3 rounded-xl">
                    <img src={skill.icon} alt={skill.name} className="w-8 h-8" />
                    <div>
                    <p className="font-semibold">{skill.name}</p>
                    <p className="text-sm text-gray-400">{skill.level}</p>
                    </div>
                </div>
                ))}
            </div>
            </div>

        </div>
        </section>

    </div>
  )
}

export default Skill
