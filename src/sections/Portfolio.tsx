import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, Code, Briefcase } from "lucide-react";

const Portfolio = () => {
  const education = [
    {
      degree: "B-Tech of Computer Science & Engineering",
      institution: "KL University, Vijayawada",
      year: "",
      percentage: "9.4 CGPA",
      description: "Specializing in Data Science & Big data analytics",
    },
    {
      degree: "Diploma of Mechanical Engineering",
      institution: "Andhra polytechnic, Kakinada",
      year: "",
      percentage: "80%",
      description: "Core Mechanical",
    },
    {
      degree: "Secondary School Certificate",
      institution: "Sreeniketan E.M. High School",
      year: "",
      percentage: "9.0 CGPA",
      description: "",
    },
  ];

  const certifications = [
    {
      name: "Python",
      issuer: "PMKVY",
      year: "2024",
    },
    {
      name: "AI-Associate",
      issuer: "SalesForce",
      year: "2024",
    },
    {
      name: "RPA-Professional",
      issuer: "Automation Anywhere",
      year: "2024",
    },
  ];

  const projects = [
    {
      title: "Learning management System",
      description:
        "Developed a Learning Management System with React and Node.js for online courses and user management.",
      techStack: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/nagshiva/Learning-Management-System",
      //demo: "",
    },
    {
      title: "Loan Tracking System",
      description:
        "Developed a Loan Track System using SpringBoot Java for managing and tracking loans efficiently.",
      techStack: ["SpringBoot", "MySQL"],
      github: "https://github.com/nagshiva/Loan-Tracker",
      //demo: "",
    },
    {
      title: "Personal Portfolio",
      description:
        "A responsive and modern web app to showcase my journey, skills, projects, and achievements.",
      techStack: ["Frontend: React+vite", "Typescript", "Tailwind CSS"],
      github: "https://github.com/nagshiva/Portfolio",
      //demo: "",
    },
  ];

  const experience = [
    {
      role: "Mechanical Technician",
      company: "Coromandel International LTD",
      period: "12-2022 to 06-2023",
      description:
        "Technician at Coromandel International, specializing in maintenance and troubleshooting.",
    },
    {
      role: "Data Engineer",
      company: "AICTE & Eduskills AWS Virtual-internship",
      period: "jul-sep 2024",
      description:
        "Completed a 3-month virtual internship as a Data Engineer, gaining hands-on experience in AWS data pipelines and cloud technologies.",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Portfolio</h2>
          <p className="text-gray-400">
            Showcasing my journey, skills, and achievements
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 p-6 rounded-lg"
          >
            <div className="flex items-center mb-6">
              <GraduationCap className="w-6 h-6 text-blue-500 mr-2" />
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>
            {education.map((item, index) => (
              <div key={index} className="mb-4">
                <h4 className="text-lg font-semibold">{item.degree}</h4>
                <p className="text-gray-400">{item.institution}</p>
                <p className="text-sm text-gray-500">{item.year}</p>
                <p className="text-sm text-gray-500">{item.percentage}</p>
                <p className="text-gray-400 mt-2">{item.description}</p>
              </div>
            ))}
          </motion.div>

          {/* Certifications Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 p-6 rounded-lg"
          >
            <div className="flex items-center mb-6">
              <Award className="w-6 h-6 text-blue-500 mr-2" />
              <h3 className="text-2xl font-semibold">Certifications</h3>
            </div>
            {certifications.map((cert, index) => (
              <div key={index} className="mb-4">
                <h4 className="text-lg font-semibold">{cert.name}</h4>
                <p className="text-gray-400">{cert.issuer}</p>
                <p className="text-sm text-gray-500">{cert.year}</p>
              </div>
            ))}
          </motion.div>

          {/* Projects Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 p-6 rounded-lg"
          >
            <div className="flex items-center mb-6">
              <Code className="w-6 h-6 text-blue-500 mr-2" />
              <h3 className="text-2xl font-semibold">Projects</h3>
            </div>
            {projects.map((project, index) => (
              <div key={index} className="mb-4">
                <h4 className="text-lg font-semibold">{project.title}</h4>
                <p className="text-gray-400">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-sm bg-blue-500/20 text-blue-400 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    GitHub
                  </a>
                  {/* <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    Live Demo
                  </a> */}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 p-6 rounded-lg"
          >
            <div className="flex items-center mb-6">
              <Briefcase className="w-6 h-6 text-blue-500 mr-2" />
              <h3 className="text-2xl font-semibold">Experience</h3>
            </div>
            {experience.map((exp, index) => (
              <div key={index} className="mb-4">
                <h4 className="text-lg font-semibold">{exp.role}</h4>
                <p className="text-gray-400">{exp.company}</p>
                <p className="text-sm text-gray-500">{exp.period}</p>
                <p className="text-gray-400 mt-2">{exp.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
