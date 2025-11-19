import React from 'react';
import project1 from './photos/project-1.jpg';
import project2 from './photos/project-2.jpg';
import project3 from './photos/project-3.jpg';
import project4 from './photos/project-4.jpg';
import rentx from './photos/Rentxlogo.png';
import savory from './photos/Savorylogo.png';
import tripplanner from './photos/tripplanner.png'
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 p-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>

      <div>
        <div className="mb-8 flex flex-wrap lg:justify-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/4"
          >
            <img
              src={tripplanner}
              width={200}
              height={200}
              alt="Trip Planner"
              className="mb-6 rounded"
            />
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-xl lg:w-3/4"
          >
            <h6 className="mb-4 font-semibold">Trip Planner</h6>
            <p className="mb-4 text-neutral-400">
              A travel planning website that helps users organize trips, manage
              itineraries, and explore destinations efficiently.
            </p>

            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-red-900">
              HTML
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-red-900">
              CSS
            </span>

            <div className="mt-4 flex gap-4">
              <a
                href="https://your-trip-planner-demo-link.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1.5 text-sm rounded bg-red-900 text-white hover:bg-red-700 transition"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/YourGitHubUsername/trip-planner"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1.5 text-sm rounded border border-red-900 text-red-900 hover:bg-red-900 hover:text-white transition"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        </div>

        <div className="mb-8 flex flex-wrap lg:justify-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/4"
          >
            <img
              src={savory}
              width={200}
              height={200}
              alt="Savory Restaurant"
              className="mb-6 rounded"
            />
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-xl lg:w-3/4"
          >
            <h6 className="mb-4 font-semibold">Savory Restaurant</h6>
            <p className="mb-4 text-neutral-400">
              A modern restaurant website that enables users to view the menu and
              reserve tables online.
            </p>

            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-red-900">
              NEXT JS
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-red-900">
              REACT JS
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-red-900">
              TAILWIND CSS
            </span>

            <div className="mt-4 flex gap-4">
              <a
                href="https://savory-p461.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1.5 text-sm rounded bg-red-900 text-white hover:bg-red-700 transition"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/CharanTejaGoud-cloud/savory"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1.5 text-sm rounded border border-red-900 text-red-900 hover:bg-red-900 hover:text-white transition"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        </div>

        <div className="mb-8 flex flex-wrap lg:justify-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/4"
          >
            <img
              src={rentx}
              width={200}
              height={200}
              alt="RentX"
              className="mb-6 rounded"
            />
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-xl lg:w-3/4"
          >
            <h6 className="mb-4 font-semibold">RentX</h6>
            <p className="mb-4 text-neutral-400">
              RentX is a responsive web application that allows users to rent cars
              conveniently online.
            </p>

            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-red-900">
              NEXT JS
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-red-900">
              REACT JS
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-red-900">
              TAILWIND CSS
            </span>

            <div className="mt-4 flex gap-4">
              <a
                href="https://rentalcarswebsite.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1.5 text-sm rounded bg-red-900 text-white hover:bg-red-700 transition"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/CharanTejaGoud-cloud/rentalcarswebsite"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1.5 text-sm rounded border border-red-900 text-red-900 hover:bg-red-900 hover:text-white transition"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        </div>

        <div className="mb-8 flex flex-wrap lg:justify-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/4"
          >
            <img
              src={project4}
              width={200}
              height={200}
              alt="Upcoming Project"
              className="mb-6 rounded"
            />
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-xl lg:w-3/4"
          >
            <h6 className="mb-4 font-semibold">Upcoming Project</h6>
            <p className="mb-4 text-neutral-400">
              An ongoing web application currently in development using the MERN
              stack.
            </p>

            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-red-900">
              REACT
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-red-900">
              EXPRESS JS
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-red-900">
              MONGO DB
            </span>

            <div className="mt-4 flex gap-4">
              <a
                href="#"
                className="px-4 py-1.5 text-sm rounded bg-red-900 text-white opacity-50 cursor-not-allowed"
              >
                Coming Soon
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
