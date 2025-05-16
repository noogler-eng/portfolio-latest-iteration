"use client";
import { works } from "./work-data";
import { motion } from "framer-motion";

export default function Work() {
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
        Internship And Experiences
      </motion.h1>
      <div>
        {works.map((work, index) => (
          <div key={index} className="mb-4 p-4 shadow-md flex flex-col">
            <div className="w-full flex flex-col justify-center items-start gap-2">
              <div className="w-full flex flex-col">
                <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                  {work.title}
                </h2>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  {work.company} | {work.start} - {work.end}
                </p>
              </div>
              <p className="text-neutral-600 dark:text-neutral-400">
                {work.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
