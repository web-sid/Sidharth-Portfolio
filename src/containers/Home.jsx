import { motion, AnimatePresence } from "framer-motion";
import { siddharth } from "../assets";
import HeroTypeWritter from "../Components/HeroTypeWritter";
import { Socials } from "../utils/helper";
import HomeSocialLinks from "../Components/HomeSocialLinks";

const Home = () => {
  return (
    <section
      id="home"
      className="flex items-center justify-center flex-col gap-12 relative w-full lg:w-full"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        {/* content section */}
        <div className="w-full h-full flex flex-col items-center lg:items-start justify-center gap-4">
          <h2 className="text-3xl lg:text-4xl text-teal-50 -ml-6 lg:ml-9">
            Hello, It's me
            <span className="block  tracking-wider text-3xl lg:text-6xl mt-4 text-teal-200 ">
              Siddharth Soni
            </span>
          </h2>

          {/* typwriter */}
          <h2 className="text-xl  lg:text-3xl  text-teal-50 mt-4 ml-1 lg:ml-9">
            And I'm{" "}
            <HeroTypeWritter
              words={[" a Full Stack Developer...", " a Tech Enthusiast..."]}
              speded={5000}
            />
          </h2>
          <p className="text-base text-teal-50 mt-6 text-center lg:text-left mx-2 lg:ml-9">
            I am proficient in MERN stack. Proved expertise in successfully
            building some projects.
          </p>
          <p className="text-base text-teal-50 mt-6 text-center lg:text-left mx-2 lg:ml-9">
            Possesses strong technical expertise in front-end and back-end
            development,coupled with excellent problem-solving and communication
            skills. Ready to contribute to innovative and impactful web
            development initiatives.
          </p>

          {/* social media links */}
          <div className="flex items-center justify-center gap-12 lg:gap-16 mt-16 lg:ml-7">
            <AnimatePresence>
              {Socials &&
                Socials.map((e, index) => {
                  return <HomeSocialLinks key={index} data={e} index={index} />;
                })}
            </AnimatePresence>
          </div>

          {/* hire me */}
          <a
            href="https://drive.google.com/file/d/1dHf0jN5SelcdPeMmwPWua3DD4tkaVzjc/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            style={{ boxShadow: "inset 0px 0px 10px rgba(255,255,255,0.3)" }}
            className=" mt-8 lg:mt-12 border border-[rgba(255,255,255,0.3)] rounded-xl px-8 py-3 active:scale-90 group hover:border-purple-600 lg:ml-7 "
          >
            <p className="text-teal-50 group-hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-700">
              Hire Me
            </p>
          </a>
        </div>

        {/* hero image */}
        <div className="w-full h-full flex items-center justify-center item-start lg:items-center mt-8 lg:mt-0">
          <motion.img
            initial={{ y: 0 }}
            animate={{ y: [-10, 10, -10] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "linear",
            }}
            src={siddharth}
            className="h-auto object-contain w-[300px] lg:w-[450px] rounded-full border-[5px] border-purple-800 "
          />
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [-10, 10, -10] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "linear",
            }}
            className="w-[450px] lg:h-4/6 hidden lg:block rounded-full bg-purple-400 opacity-45 absolute hover:bg-transparent hover:transition-all"
          ></motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
