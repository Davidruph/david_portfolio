import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPhp,
  FaDocker,
  FaAws,
  FaDatabase
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiLaravel,
  SiMongodb,
  SiTailwindcss,
  SiJest
} from "react-icons/si";

const skillsData = [
  { name: "React", icon: FaReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "PHP", icon: FaPhp },
  { name: "Laravel", icon: SiLaravel },
  { name: "Docker", icon: FaDocker },
  { name: "AWS", icon: FaAws },
  { name: "MySQL", icon: FaDatabase },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Jest", icon: SiJest }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <skill.icon className="text-5xl text-blue-600 mb-2" />
              <span className="text-gray-700">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
