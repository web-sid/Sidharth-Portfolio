import { AnimatePresence } from "framer-motion";
import React from "react";
import { Socials } from "../utils/helper";
import HomeSocialLinks from "../Components/HomeSocialLinks";

const Footer = () => {
  return (
    <div className="w-full flex flex-col items-center justify-start mt-32 mb-12">
      <p className="text-3xl tracking-wider text-teal-50">Siddharth Soni</p>
      <div className="flex items-center justify-center gap-12  lg:gap-16 mt-16">
        <AnimatePresence>
          {Socials &&
            Socials.map((e, index) => {
              return <HomeSocialLinks key={index} data={e} index={index} />;
            })}
        </AnimatePresence>
      </div>
      <div className="w-full flex flex-col items-center justify-center gap-3 mt-12">
        <a href="mailto:siddharth27soni@gmail.com">
          <p className="text-teal-50 text-center">siddharth27soni@gmail.com</p>
        </a>
        <p className="text-teal-50 text-center">+91 7683005609</p>
        <a href="#">
          <p className="text-teal-50 text-center">Hire Me</p>
        </a>
      </div>
    </div>
  );
};

export default Footer;
