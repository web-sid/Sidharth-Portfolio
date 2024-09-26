import { motion, AnimatePresence } from "framer-motion";
import { Leaf1, Leaf2, about } from "../assets";

const About = () => {
  return (
    <section
      id="about"
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
            About
          </p>

          <img src={Leaf2} className="w-6 h-auto object-contain" alt="" />
        </motion.div>
      </div>
      {/* main content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        {/* image */}
        <div className="w-full flex items-center justify-center px-8">
          <div className=" relative ml-6 lg:ml-0">
            <img
              src={about}
              alt=""
              className="w-10/12  rounded-md h-auto object-contain "
            />
          </div>
        </div>
        {/* content  */}

        <div className="w-full px-8 flex flex-col gap-4 items-start justify-start ml-6 lg:ml-0 mt-8">
          <p className="text-teal-50 text-base tracking-wide text-justify">
            Greetings and welcome to my portfolio! I'm Siddharth, a dedicated
            full-stack developer deeply committed to delivering exceptional
            digital solutions.
          </p>
          <p className="text-teal-50 text-base tracking-wide text-justify ">
            Through rigorous training and self-directed learning, I have
            acquired expertise in the MERN stack. While my professional
            experience may not be extensive, I have been fortunate to benefit
            from the mentorship of industry professionals, whose guidance has
            enriched my understanding and refined my skills.
          </p>
          <p className="text-teal-50 text-base tracking-wide text-justify">
            My approach to development is characterized by meticulous attention
            to detail, innovative problem-solving, and a steadfast commitment to
            excellence.
          </p>
          <p className="text-teal-50 text-base tracking-wide text-justify">
            Beyond my professional pursuits, I am a lifelong learner with a
            passion for staying abreast of emerging technologies and industry
            trends.
          </p>
          <p className="text-teal-50 text-base tracking-wide text-justify">
            I am thrilled to have the opportunity to share my journey and
            showcase my portfolio with you. Let's connect and explore how we can
            collaborate to bring your digital vision to fruition!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
