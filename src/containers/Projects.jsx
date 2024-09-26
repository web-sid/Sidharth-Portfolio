import { motion, AnimatePresence } from "framer-motion";
import { Leaf1, Leaf2 } from "../assets";
import { ProjectsData } from "../utils/helper";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex items-center  justify-center flex-col gap-12 my-12"
    >
      {/* title */}

      <div className="w-full flex items-center justify-center py-24">
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 200 }}
          exit={{ opacity: 0, width: 0 }}
          transition={{
            delay: 0.4,
          }}
          className="flex items-center justify-around w-52"
        >
          <img src={Leaf1} className="w-6 h-auto object-contain" alt="" />
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-700">
            Projects
          </p>

          <img src={Leaf2} className="w-6 h-auto object-contain" alt="" />
        </motion.div>
      </div>
      {/* main content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-10/12">
        <AnimatePresence>
          {ProjectsData &&
            ProjectsData.map((project, index) => {
              return <ProjectCard key={project.id} project={project} />;
            })}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
