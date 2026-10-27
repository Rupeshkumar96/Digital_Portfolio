
import Image from "next/image";

const Skill = () => {
  const programmingLanguages = [
    { name: "Python", level: "Advanced", icon: "/icons/python.png" },
    { name: "Java", level: "Intermediate", icon: "/icons/java.png" },
    { name: "C", level: "Intermediate", icon: "/icons/C.png" },
    { name: "JavaScript", level: "Advanced", icon: "/icons/js.png" },
  ];

  const frontendSkills = [
    { name: "HTML5", level: "Advanced", icon: "/icons/html5.png" },
    { name: "CSS3", level: "Advanced", icon: "/icons/css3.png" },
    { name: "React", level: "Advanced", icon: "/icons/react.png" },
    { name: "Next.js", level: "Intermediate", icon: "/icons/next.png" },
  ];

  const backendSkills = [
    { name: "Node.js", level: "Intermediate", icon: "/icons/nodejs.png" },
    { name: "Express.js", level: "Intermediate", icon: "/icons/Express.png" },
  ];

  const databaseSkills = [
    { name: "MySQL", level: "Intermediate", icon: "/icons/MySQL.png" },
    { name: "MongoDB", level: "Intermediate", icon: "/icons/MongoDB.png" },
  ];

  const tools = [
    { name: "Git", level: "Intermediate", icon: "/icons/git.png" },
    { name: "GitHub", level: "Intermediate", icon: "/icons/github.png" },
  ];

  const categories = [
    { title: "Programming Languages", skills: programmingLanguages },
    { title: "Frontend Development", skills: frontendSkills },
    { title: "Backend Development", skills: backendSkills },
    { title: "Databases", skills: databaseSkills },
    { title: "Tools", skills: tools },
  ];

  return (
    <section id="skills" className="bg-[#0a0f1a] text-white py-10">
      <h2 className="text-3xl font-bold text-center text-blue-400 mb-10 mt-10">
        My Skills & Technologies
      </h2>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div
            key={category.title}
            className="bg-[#1F2833] p-6 rounded-2xl shadow-lg m-5 md:m-1"
          >
            <h3 className="text-xl font-semibold text-blue-400 mb-4 text-center">
              {category.title}
            </h3>

            <div className="flex flex-col gap-3">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-3 bg-[#0B0C10] p-3 rounded-xl"
                >
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={32}
                    height={32}
                    className="w-8 h-8 object-contain"
                  />

                  <div>
                    <p className="font-semibold">{skill.name}</p>
                    <p className="text-sm text-gray-400">{skill.level}</p>
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
