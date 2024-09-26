import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const MenuItem = ({ menu, index }) => {
  const [hover, setHover] = useState(false);
  return (
    <a
      href={menu.uri}
      className="w-12 h-12 rounded-full flex items-center justify-center group cursor-pointer hover:bg-gradient-to-br hover:from-purple-800 hover:to-pink-600 relative"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <menu.Icon className={`text-white group-hover:text-black text-lg`} />

      <AnimatePresence>
        {hover && (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="absolute hidden lg:block bg-white rounded-md px-4 py-1 -left-[140px] after:absolute after:-right-1 after:top-3 after:w-3 after:h-3 after:bg-white after:rotate-45"
            style={{ boxShadow: "inset 0px 0px 10px rgba(0,0,0,0.4)" }}
          >
            <p>{menu?.name}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </a>
  );
};

export default MenuItem;
