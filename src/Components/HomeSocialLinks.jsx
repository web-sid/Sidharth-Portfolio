import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const HomeSocialLinks = ({ data, index }) => {
  const [hover, setHover] = useState(false);
  return (
    <motion.a
      key={index}
      href={data.uril}
      target="_blank"
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 25 }}
      transition={{
        delay: index * 0.1,
      }}
      className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-700 relative p-[2px] cursor-pointer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <AnimatePresence>
        {hover && (
          <motion.div
            className={`absolute inset-0 blur-md bg-gradient-to-br from-purple-600 to-pink-600 -z-10`}
          ></motion.div>
        )}
        <div className="w-full h-full rounded-full flex items-center bg-black justify-center">
          <data.Icon className={`text-teal-50`} />
        </div>
      </AnimatePresence>
    </motion.a>
  );
};

export default HomeSocialLinks;
