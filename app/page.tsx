"use client";
import Image from "next/image";
import { socialLinks } from "./config";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Page() {
  const route = useRouter();

  return (
    <section>
      <a href={socialLinks.twitter} target="_blank">
        <Image
          src="/myself2.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>
      <h1 className="mb-8 text-2xl font-medium dark:text-white text-black">
        Hello, I'm{" "}
        <motion.span
          className="inline-block bg-gradient-to-r from-pink-500 via-yellow-500 to-purple-500 bg-[length:200%] bg-clip-text text-transparent"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 6,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          Sharad Poddar
        </motion.span>
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I'm a third-year B.Tech student in Information Science at DSCE, driven
          by a passion for building efficient and scalable software solutions. I
          love turning ideas into reality through code and continuously strive
          to sharpen my technical and problem-solving skills.
        </p>
        <div>
          I’ve solved over 500+ problems on platforms like{" "}
          <motion.div
            onClick={() =>
              route.push("https://leetcode.com/u/sharadpoddar1001/")
            }
            className="inline-block bg-gradient-to-r from-pink-500 via-yellow-500 to-purple-500 bg-[length:200%] bg-clip-text text-transparent cursor-pointer"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 6,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            LeetCode
          </motion.div>{" "}
          and{" "}
          <motion.div
            onClick={() =>
              route.push("https://www.geeksforgeeks.org/user/sharadpod0fu3/")
            }
            className="inline-block bg-gradient-to-r from-pink-500 via-yellow-500 to-purple-500 bg-[length:200%] bg-clip-text text-transparent cursor-pointer"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 6,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            GeeksforGeeks
          </motion.div>
          , which has helped me build a strong foundation in data structures,
          algorithms, and coding practices.
        </div>
        <p>
          I'm actively working on full-stack projects and love experimenting
          with technologies like Next.js, TypeScript, PostgreSQL, and Tailwind
          CSS. You can find my work on{" "}
          <a href="https://github.com/noogler-eng" target="_blank">
            GitHub
          </a>
          .
        </p>
        <div>
          Here's my{" "}
          <motion.div
            onClick={() =>
              route.push(
                "https://drive.google.com/file/d/139JlhRrFJPz1Vcl6kVSKDEGKRhJjn-WH/view?usp=sharing"
              )
            }
            className="inline-block bg-gradient-to-r from-pink-500 via-yellow-500 to-purple-500 bg-[length:200%] bg-clip-text text-transparent cursor-pointer"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 6,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            resume
          </motion.div>
          , which covers more about my technical background, project work, and
          achievements.
        </div>
        <p>
          Outside of tech, I’m a huge football fan — I support FC Barcelona with
          all my heart. Whether it's watching a match, debating tactics, or
          following transfer news, football keeps me energized. I also love
          spending quality time with my friends, enjoying long conversations,
          and exploring new places.
        </p>
      </div>
    </section>
  );
}
