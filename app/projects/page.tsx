"use client";
import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "./project-data";
import { motion } from "framer-motion";


export default function Projects() {
  return (
    <section>
      <motion.h1
        className="mb-8 text-2xl font-medium bg-gradient-to-r from-pink-500 via-yellow-500 to-purple-500 bg-[length:200%] bg-clip-text text-transparent"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 6,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        Projects
      </motion.h1>
      <div>
        {projects.map((project, index) => (
          <Link
            key={index}
            href={project.url}
            className="flex flex-col space-y-1 mb-5 transition-opacity duration-200 hover:opacity-80"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-full flex flex-col justify-between gap-2">
              <div className="w-full flex">
                <h2 className="text-black dark:text-white">{project.title}</h2>
                <p className="text-black dark:text-white">{project.time}</p>
              </div>
              <p className="text-neutral-600 dark:text-neutral-400">
                {project.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
