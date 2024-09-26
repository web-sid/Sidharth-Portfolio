import { motion, AnimatePresence } from "framer-motion";
import { Leaf1, Leaf2 } from "../assets";
import css from "../assets/img/Skills/css.png";
import github from "../assets/img/Skills/github.png";
import html from "../assets/img/Skills/html.png";
import javascript from "../assets/img/Skills/javascript.png";
import node from "../assets/img/Skills/node.png";
import react from "../assets/img/Skills/react.png";
import tailwind from "../assets/img/Skills/tailwind.png";
import express from "../assets/img/Skills/express.png";
import firebase from "../assets/img/Skills/firebase.png";
import monogDB from "../assets/img/Skills/monogDB.png";
import redux from "../assets/img/Skills/redux.png";
import postman from "../assets/img/Skills/postman-2.webp";
import c from "../assets/img/Skills/c.png";
import cpp from "../assets/img/Skills/cpp.png";

const Skills = () => {
  const experiences = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },

    {
      id: 3,
      src: tailwind,
      title: "Tailwind CSS",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: javascript,
      title: "JavaScript",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: react,
      title: "React",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: redux,
      title: "Redux",
      style: "shadow-purple-400",
    },
    {
      id: 7,
      src: node,
      title: "Node JS",
      style: "shadow-green-400",
    },
    {
      id: 8,
      src: express,
      title: "Express Js",
      style: "shadow-white",
    },
    {
      id: 9,
      src: monogDB,
      title: "MongoDB",
      style: "shadow-green-800",
    },
    {
      id: 10,
      src: postman,
      title: "Postman",
      style: "shadow-orange-400",
    },
    {
      id: 11,
      src: firebase,
      title: "Firebase",
      style: "shadow-yellow-400",
    },
    {
      id: 12,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },

    {
      id: 13,
      src: c,
      title: "C",
      style: "shadow-blue-400",
    },
    {
      id: 14,
      src: cpp,
      title: "C++",
      style: "shadow-blue-600",
    },
  ];
  return (
    <div
      id="skills"
      name="experience"
      className="bg-gradient-to-b w-full h-screen  "
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-screen text-white lg:py-10 ">
        <div className="w-full flex items-center justify-center lg:py-0 py-10">
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 200 }}
            exit={{ opacity: 0, width: 0 }}
            transition={{
              delay: 0.4,
            }}
            className="flex items-center justify-around w-52 lg:pb-10 lg:mt-10"
          >
            <img src={Leaf1} className="w-6 h-auto object-contain" alt="" />
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-700 ">
              Skills
            </p>

            <img src={Leaf2} className="w-6 h-auto object-contain" alt="" />
          </motion.div>
        </div>

        <div className="w-full h-full grid grid-cols-3  lg:grid-cols-4 gap-3 lg:gap-8 text-center lg:py-9  lg:px-6 sm:px-0">
          {experiences.map(({ id, src, title, style }) => {
            return (
              <div
                key={id}
                className={`shadow-md hover:scale-105 duration-500 py-3 my- 2md:py-2 rounded-lg ${style} `}
              >
                <img src={src} alt="" className=" w-10 md:w-12 mx-auto " />
                <p className=" text-xs md:text-lg mt-4">{title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
