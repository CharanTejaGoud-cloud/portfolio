import React from "react";
import { motion } from "framer-motion";
import infosysLogo from "/logo.png"; 

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 p-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Experience
      </motion.h2>

      {/* Experience Card */}
      <div className="mb-8 flex flex-wrap lg:justify-center">
        {/* Left Side: Logo */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/4 flex justify-center"
        >
          <img
            src={infosysLogo}
            // width={100}
            // height={100}
            alt="Infosys Springboard Logo"
            className="mb-2 rounded w-24 h-24"
          />
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-xl lg:w-3/4"
        >
          <h6 className="mb-4 font-semibold text-xl">
            Java developer Intern
          </h6>
          <p className="mb-2 text-neutral-400">
            <span className="font-medium text-white">Organization:</span>{" "}
            Infosys Springboard
          </p>
          <p className="mb-2 text-neutral-400">
            <span className="font-medium text-white">Duration:</span> Nov 2025 –
            present
          </p>
          <p className="mb-4 text-neutral-400">
           Currently pursuing a hands-on internship at Infosys Springboard focused on Java and Spring Boot for backend development and full-stack web technologies. The internship emphasizes real-world software development, teamwork, and industry best practices such as Agile methodology and version control with Git.
          </p>

          <ul className="list-disc ml-5 text-neutral-400 mb-4 space-y-1">
            <li>Developing scalable backend applications using Java and Spring Boot</li>
            <li>Building RESTful APIs and integrating databases with MySQL</li>
            <li>Gaining exposure to full-stack development with React for frontend interfaces</li>
          </ul>

          <div>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-red-900">
              JAVA
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-red-900">
              SPRINGBOOT
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-red-900">
              CSS
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-red-900">
              GIT
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
