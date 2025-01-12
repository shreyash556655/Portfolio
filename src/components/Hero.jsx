import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";
import EarthCanvas from "./EarthCanvas";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="mt-5 border-b border-neutral-800 pb-4 lg:ml-14 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center">
            <motion.h2
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Shreyash Gaikwad
            </motion.h2>
            <motion.span
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-400 via-slate-400 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Software Geek 👾
            </motion.span>
            <motion.p
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <motion.div
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="flex justify-center"
            style={{ height: '500px' }}
          >
         <EarthCanvas />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
