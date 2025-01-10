import React from "react";
import { motion } from "framer-motion";

const experienceData = [
  {
    company: "TECHVIBES LTD",
    position: "Software Architect/Developer",
    period: "12/2022 - 12/2024",
    description: [
      "Managed product updates, supervised and trained interns, and conducted code reviews for professional development.",
      "Translated high-fidelity designs into responsive, pixel-perfect user interfaces and reusable components.",
      "Built robust applications, including a school management app using ReactJS and a dynamic subscription management system.",
      "Collaborated with back-end teams, integrated APIs, and conducted thorough unit testing using Jest.",
      "Developed SQL queries, stored procedures, and triggers for data replication in MySQL."
    ]
  },
  {
    company: "GIDIAO AKS LIMITED",
    position: "Web Developer",
    period: "09/2023 - 08/2024",
    description: [
      "Translated high-fidelity designs into pixel-perfect, functional user interfaces.",
      "Collaborated on large-scale design projects, delivering scalable and maintainable solutions for corporate clients.",
      "Engineered algorithms for real-time feedback on user inputs, enhancing interaction and usability.",
      "Optimized, debugged, and modularized code, leveraging custom React hooks for maintainability.",
      "Developed a React-based asset risk assessment tool and built a social media platform with Redux and AWS integration."
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Work Experience
        </h2>
        <div className="space-y-12">
          {experienceData.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {job.position}
              </h3>
              <h4 className="text-lg text-blue-600 mb-2">{job.company}</h4>
              <p className="text-gray-600 mb-4">{job.period}</p>
              <ul className="list-disc list-inside text-gray-700">
                {job.description.map((item, i) => (
                  <li key={i} className="mb-2">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
