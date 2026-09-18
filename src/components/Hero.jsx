import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import profilePic from "../assets/syazwanpp.jpg";
import { PROFILE } from "../data";
import { FaChevronDown, FaMapMarkerAlt } from "react-icons/fa";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay },
  },
});

const RoleRotator = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % PROFILE.roles.length);
    }, 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="relative inline-block h-10 overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={PROFILE.roles[index]}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="block bg-gradient-to-r from-pink-300 via-slate-300 to-purple-400 bg-clip-text text-3xl tracking-tight text-transparent"
        >
          {PROFILE.roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

export const Hero = () => {
  return (
    <div id="home" className="border-b border-neutral-900 pb-4 pt-8 lg:mb-20">
      <div className="flex flex-wrap items-center">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.span
              className="mb-4 flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/60 px-4 py-1.5 text-xs text-emerald-400"
              variants={container(0)}
              initial="hidden"
              animate="visible"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {PROFILE.availability}
            </motion.span>

            <motion.h1
              className="pb-2 text-5xl font-thin tracking-tight lg:text-7xl"
              variants={container(0.2)}
              initial="hidden"
              animate="visible"
            >
              {PROFILE.name}
            </motion.h1>

            <motion.div variants={container(0.4)} initial="hidden" animate="visible">
              <RoleRotator />
            </motion.div>

            <motion.p
              className="my-2 max-w-xl py-4 font-light tracking-tight text-neutral-400"
              variants={container(0.7)}
              initial="hidden"
              animate="visible"
            >
              {PROFILE.tagline}
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center justify-center gap-4 lg:justify-start"
              variants={container(0.9)}
              initial="hidden"
              animate="visible"
            >
              <a
                href="#projects"
                className="rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-cyan-500/20 transition-transform hover:scale-105"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-full border border-neutral-700 px-6 py-3 text-sm font-medium text-neutral-200 transition-colors hover:border-cyan-500 hover:text-cyan-400"
              >
                Get in Touch
              </a>
            </motion.div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="relative flex justify-center">
            <div className="absolute h-64 w-64 rounded-full bg-purple-600/30 blur-3xl" />
            <div className="absolute h-64 w-64 translate-x-16 translate-y-16 rounded-full bg-cyan-500/20 blur-3xl" />

            <motion.div
              className="relative aspect-[4/5] w-72 overflow-hidden rounded-3xl border border-neutral-800 shadow-2xl sm:w-96"
              initial={{ x: 60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <img
                src={profilePic}
                alt={PROFILE.name}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 pt-10">
                <span className="flex items-center gap-1.5 text-sm text-neutral-200">
                  <FaMapMarkerAlt className="text-cyan-400" />
                  {PROFILE.location}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.a
        href="#about"
        className="mx-auto mb-6 mt-10 hidden w-fit items-center justify-center text-neutral-600 transition-colors hover:text-cyan-400 lg:flex"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        aria-label="Scroll to About section"
      >
        <FaChevronDown className="text-xl" />
      </motion.a>
    </div>
  );
};
