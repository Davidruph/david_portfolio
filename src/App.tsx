import React, { useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPhp,
  FaGithub,
  FaDocker,
  FaAws,
  FaDatabase,
  FaSass,
  FaBootstrap
} from "react-icons/fa";
import {
  SiTypescript,
  SiLaravel,
  SiCodeigniter,
  SiMongodb,
  SiJest,
  SiPostgresql,
  SiTailwindcss,
  SiFirebase
} from "react-icons/si";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { AiFillLinkedin, AiOutlineGlobal } from "react-icons/ai";
import davidImage from "./assets/IMG_0264.jpg";
import school from "./assets/school.png";
import mailcheetah from "./assets/mailcheetah.png";
import kommunita from "./assets/kommunita.png";

const App: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Navigation state
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  // Skills data
  const skills = {
    "Programming Languages/Framework": [
      { name: "React", icon: FaReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Node.js", icon: FaNodeJs },
      { name: "PHP", icon: FaPhp },
      { name: "Laravel", icon: SiLaravel },
      { name: "CodeIgniter", icon: SiCodeigniter }
    ],
    "DevOps & Cloud": [
      { name: "Git/GitHub", icon: FaGithub },
      { name: "Docker", icon: FaDocker },
      { name: "AWS", icon: FaAws }
    ],
    "Database & Testing": [
      { name: "MySQL", icon: FaDatabase },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Postgres", icon: SiPostgresql },
      { name: "Firebase", icon: SiFirebase },
      { name: "Jest", icon: SiJest }
    ],
    Frontend: [
      { name: "SASS", icon: FaSass },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "Bootstrap", icon: FaBootstrap }
    ]
  };

  // Projects data
  const projects = [
    {
      title: "MailCheetah",
      description:
        "A SAAS Application for managing campaigns, subscribers, list, email newsletters, landing pages, etc.",
      tech: "GrapeJS page builder, Codeigniter 4, Mysql, OpenAI, Javascript/Jquery, Ajax, bootstrap 4",
      image: mailcheetah,
      link: "https://mailcheetah.ai/"
    },
    {
      title: "Kommunita",
      description:
        "A versatile, cross-platform solution tool for individuals, groups, businesses, and organizations to connect with users who share an interest in their service, product, or industry.",
      tech: "ReactJS, Redux, RTK Query, Redux Store, Tailwind, Socket IO",
      image: kommunita,
      link: "https://kommunita.com/"
    },
    {
      title: "QampusPlus",
      description:
        "A school management app for generating results, cbt exams, tracking assignment, managing students, staffs, parent, super admin for billing, etc.",
      tech: "ReactJS, Redux, RTK Query, Redux Store, Tailwind",
      image: school,
      link: "https://qampusplusapp.com/"
    }
  ];

  // Experience data
  const experiences = [
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
      ],
      tech: "PHP, Javascript, ReactJS, RTK Query, Redux, Redux Store, Laravel, MySQL, Bitbucket, Github, Bootstrap3, TailwindCSS"
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
      ],
      tech: "ReactJS (JavaScript/Typescript), Redux, RTK Query, Redux store, Rest API, Bootstrap5, Tailwind, Github, AWS"
    }
  ];

  return (
    <div ref={scrollRef} className="min-h-screen bg-[#0A0A0B] text-white">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#00FF7F] origin-left z-50"
        style={{ scaleX }}
      />

      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0B]/80 backdrop-blur-md">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.a
              href="#"
              className="text-2xl font-bold text-white flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-[#00FF7F]">A</span>
              <span>DAVID</span>
            </motion.a>

            <div className="hidden md:flex items-center gap-8">
              {menuItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-[#00FF7F] transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#00FF7F] text-black px-6 py-2 rounded-full font-medium"
              >
                Let's Talk
              </motion.button>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile menu */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden pt-4"
            >
              <div className="flex flex-col gap-4">
                {menuItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-300 hover:text-[#00FF7F] transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <button className="bg-[#00FF7F] text-black px-6 py-2 rounded-full font-medium w-full">
                  Let's Talk
                </button>
              </div>
            </motion.div>
          )}
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="min-h-screen pt-20 flex items-center">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row w-full justify-between items-center ">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  DAVID AGBUGBA
                  <br />
                  <span className="text-white text-lg">SOFTWARE</span>{" "}
                  <span className="text-[#00FF7F] text-lg">DEVELOPER.</span>
                </h1>
                <p className="text-gray-400 text-lg mb-8">
                  Experienced software engineer with a proven track record of
                  delivering innovative, high-performance solutions. Skilled in
                  optimizing systems, enhancing user experiences, and adhering
                  to industry best practices for scalable and maintainable
                  development.
                </p>
                <div className="flex gap-4 pb-10 md:pb-0">
                  <motion.a
                    href="./assets/david-agbugba-cv.pdf"
                    download="david-agbugba-cv.pdf"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border border-[#00FF7F] text-[#00FF7F] px-8 py-3 rounded-full font-medium"
                  >
                    Download CV
                  </motion.a>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="relative w-full"
              >
                <div className="relative z-10 w-full flex justify-center">
                  <img
                    src={davidImage}
                    alt="Hero Image"
                    className="rounded-2xl"
                    style={{ height: "450px", width: "auto" }}
                  />
                </div>

                <div className="absolute inset-0 bg-[#00FF7F] opacity-20 blur-3xl z-0" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-[#0F0F0F]">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-[#00FF7F] text-xl mb-2">WHAT I'M GOOD AT</h2>
              <h3 className="text-4xl font-bold">Technical Skills</h3>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-12">
              {Object.entries(skills).map(
                ([category, categorySkills], categoryIndex) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="text-xl font-bold mb-6">{category}</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {categorySkills.map((skill) => (
                        <div
                          key={skill.name}
                          className="flex items-center gap-2"
                        >
                          <skill.icon className="text-[#00FF7F] text-2xl" />
                          <span className="text-gray-300">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )
              )}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-[#0F0F0F]">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-[#00FF7F] text-xl mb-2">MY WORK</h2>
              <h3 className="text-4xl font-bold">Featured Projects</h3>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-[#1A1A1A] rounded-2xl overflow-hidden"
                >
                  <div className="relative h-64">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-2xl font-bold mb-4">{project.title}</h4>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <p className="text-sm text-gray-400 mb-4">
                      <span className="text-[#00FF7F]">Technologies:</span>{" "}
                      {project.tech}
                    </p>
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-[#00FF7F] text-black px-6 py-2 rounded-full font-medium"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Project
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-[#00FF7F] text-xl mb-2">MY JOURNEY</h2>
              <h3 className="text-4xl font-bold">Work Experience</h3>
            </motion.div>
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-[#0F0F0F] p-8 rounded-2xl"
                >
                  <div className="flex flex-col md:flex-row justify-between mb-6">
                    <div>
                      <h4 className="text-2xl font-bold text-[#00FF7F]">
                        {exp.position}
                      </h4>
                      <p className="text-xl text-gray-300">{exp.company}</p>
                    </div>
                    <p className="text-gray-400">{exp.period}</p>
                  </div>
                  <ul className="list-disc list-inside space-y-3 text-gray-300 mb-6">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <p className="text-sm text-gray-400">
                    <span className="text-[#00FF7F]">Technologies:</span>{" "}
                    {exp.tech}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-[#00FF7F] text-xl mb-2">GET IN TOUCH</h2>
              <h3 className="text-4xl font-bold">Contact Me</h3>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h4 className="text-2xl font-bold mb-6">
                  Let's talk about everything!
                </h4>
                <p className="text-gray-400 mb-8">
                  Don't like forms? Send me an email. 👋
                </p>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <MdEmail className="w-12 h-12 text-[#00FF7F] mr-4" />
                    <div>
                      <h5 className="text-lg font-semibold">Mail me</h5>
                      <p className="text-gray-400">dagbugba@yahoo.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MdPhone className="w-12 h-12 text-[#00FF7F] mr-4" />
                    <div>
                      <h5 className="text-lg font-semibold">Call me</h5>
                      <p className="text-gray-400">+2348149913512</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MdLocationOn className="w-12 h-12 text-[#00FF7F] mr-4" />
                    <div>
                      <h5 className="text-lg font-semibold">Location</h5>
                      <p className="text-gray-400">FCT Abuja</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 mt-8">
                  <motion.a
                    href="https://github.com/Davidruph"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="bg-[#1A1A1A] p-3 rounded-full text-[#00FF7F]"
                  >
                    <FaGithub className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/david-agbugba-119b2b120"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="bg-[#1A1A1A] p-3 rounded-full text-[#00FF7F]"
                  >
                    <AiFillLinkedin className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    href="https://www.upwork.com/fl/~012d7489e964a15135?mp_source=share"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="bg-[#1A1A1A] p-3 rounded-full text-[#00FF7F]"
                  >
                    <AiOutlineGlobal className="w-6 h-6" />
                  </motion.a>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-4 py-3 bg-[#1A1A1A] border border-gray-800 rounded-lg focus:outline-none focus:border-[#00FF7F]"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full px-4 py-3 bg-[#1A1A1A] border border-gray-800 rounded-lg focus:outline-none focus:border-[#00FF7F]"
                      />
                    </div>
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Subject"
                      className="w-full px-4 py-3 bg-[#1A1A1A] border border-gray-800 rounded-lg focus:outline-none focus:border-[#00FF7F]"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Your Message"
                      rows={6}
                      className="w-full px-4 py-3 bg-[#1A1A1A] border border-gray-800 rounded-lg focus:outline-none focus:border-[#00FF7F]"
                    ></textarea>
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-[#00FF7F] text-black font-medium py-3 rounded-lg"
                  >
                    Send Message
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 bg-[#0F0F0F]">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} AGBUGBA DAVID C. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
