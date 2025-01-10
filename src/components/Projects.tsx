import React from "react";
import { motion } from "framer-motion";

const projectsData = [
  {
    name: "MailCheetah",
    description:
      "A SAAS Application for managing campaigns, subscribers, list, email newsletters, landing pages, etc.",
    technologies: [
      "GrapeJS page builder",
      "Codeigniter 4",
      "MySQL",
      "OpenAI (gpt-4o-mini)",
      "Javascript/Jquery",
      "Ajax",
      "Bootstrap 4",
      "AdminLTE"
    ],
    link: "https://example.com/mailcheetah"
  },
  {
    name: "Kommunita",
    description:
      "A versatile, cross-platform solution tool for individuals, groups, businesses, and organizations to connect with users who share an interest in their service, product, or industry.",
    technologies: ["ReactJS", "Redux", "RTK Query", "Redux Store", "Tailwind"],
    link: "https://example.com/kommunita"
  },
  {
    name: "QampusPlus",
    description:
      "A school management app for generating results, CBT exams, tracking assignments, managing students, staff, parents, and super admin for billing, etc.",
    technologies: [
      "ReactJS",
      "Redux",
      "RTK Query",
      "Redux Store",
      "Bootstrap 5"
    ],
    link: "https://example.com/qampusplus"
  },
  {
    name: "Conditron",
    description: "Your one-stop platform for your asset risk assessment.",
    technologies: [
      "ReactJS",
      "Redux",
      "RTK Query",
      "Redux Store",
      "Bootstrap 5",
      "Latex"
    ],
    link: "https://example.com/conditron"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-100 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {project.name}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">
                  Technologies:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
