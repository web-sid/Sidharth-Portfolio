import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub } from "react-icons/fa6";

const ProjectCard = ({ project }) => {
  const [hover, setHover] = useState(false);
  return (
    <motion.div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false);
      }}
      key={project.id}
      className="overflow-hidden cursor-pointer relative"
    >
      <motion.img
        whileHover={{ scale: 1.1 }}
        className="w-full h-full object-contain rounded-3xl  "
        src={project.imgSrc}
      />

      {hover && (
        <motion.div className="absolute inset-0 backdrop-blur-md bg-[rgba(0,0,0,0.6)] flex items-center justify-center gap-2">
          <p className="text-xl  text-white">{project?.name}</p>
          <a href={project.gitURL} target="_blank" className="text-white">
            <FaGithub />
          </a>
          <a className="ml-5 text-white" href={project.demo} target="_blank">
            Demo
          </a>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ProjectCard;
