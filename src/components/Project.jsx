import { useState } from "react";
import { PROJECTS } from "../constants";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaChartLine,
  FaRobot,
  FaExternalLinkAlt,
  FaGithub,
  FaChevronDown,
} from "react-icons/fa";
import {
  SiPython,
  SiStreamlit,
  SiPostgresql,
  SiAnthropic,
  SiDocker,
  SiNextdotjs,
  SiSupabase,
  SiDrizzle,
  SiTailwindcss,
  SiGooglegemini,
  SiLaravel,
  SiPhp,
  SiMysql,
  SiJavascript,
  SiPusher,
  SiFastapi,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

const TECH_ICON = {
  Python: SiPython,
  Streamlit: SiStreamlit,
  PostgreSQL: SiPostgresql,
  "Claude API": SiAnthropic,
  Docker: SiDocker,
  "Next.js": SiNextdotjs,
  Supabase: SiSupabase,
  "Drizzle ORM": SiDrizzle,
  "Tailwind CSS": SiTailwindcss,
  "Gemini API": SiGooglegemini,
  Laravel: SiLaravel,
  PHP: SiPhp,
  MySQL: SiMysql,
  JavaScript: SiJavascript,
  Pusher: SiPusher,
  FastAPI: SiFastapi,
  "VB.NET": TbBrandCSharp,
};

const PROJECT_STYLE = {
  hustler: {
    gradient: "from-indigo-600 via-violet-600 to-fuchsia-600",
    Icon: FaChartLine,
    ring: "hover:shadow-violet-500/20",
  },
  calorie: {
    gradient: "from-emerald-500 via-teal-500 to-cyan-600",
    Icon: FaRobot,
    ring: "hover:shadow-emerald-500/20",
  },
  uitmarketplace: {
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
    Icon: FaChartLine,
    ring: "hover:shadow-amber-500/20",
  },
  leanai: {
    gradient: "from-sky-500 via-blue-600 to-indigo-600",
    Icon: FaRobot,
    ring: "hover:shadow-blue-500/20",
  },
};

const ProjectCard = ({ project, index }) => {
  const [expanded, setExpanded] = useState(false);
  const style = PROJECT_STYLE[project.key] ?? PROJECT_STYLE.hustler;
  const HeaderIcon = style.Icon;
  const hasLinks = project.links?.github || project.links?.demo;

  return (
    <motion.div
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/40 shadow-lg transition-shadow duration-300 ${style.ring}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
    >
      <div className={`relative flex items-center justify-between overflow-hidden bg-gradient-to-br ${style.gradient} px-6 py-8`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.25),transparent_60%)]" />
        <div className="relative">
          <p className="text-xs font-medium uppercase tracking-widest text-white/70">
            {project.subtitle}
          </p>
          <h3 className="mt-1 text-2xl font-semibold text-white">{project.title}</h3>
        </div>
        <HeaderIcon className="relative text-4xl text-white/90 drop-shadow-sm" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-neutral-400">{project.description}</p>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.ul
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 list-disc space-y-1.5 overflow-hidden pl-5 text-sm text-neutral-400 marker:text-neutral-600"
            >
              {project.highlights.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        {project.highlights?.length > 0 && (
          <button
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
            className="mt-3 flex w-fit items-center gap-1 text-sm font-medium text-cyan-400 transition-colors hover:text-cyan-300"
          >
            {expanded ? "Show less" : "Show highlights"}
            <FaChevronDown
              className={`text-xs transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
            />
          </button>
        )}

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => {
            const TechIcon = TECH_ICON[tech];
            return (
              <span
                key={tech}
                className="flex items-center gap-1.5 rounded-full bg-neutral-800/80 px-3 py-1 text-xs font-medium text-cyan-400"
              >
                {TechIcon && <TechIcon className="text-sm" />}
                {tech}
              </span>
            );
          })}
        </div>

        {hasLinks && (
          <div className="mt-5 flex gap-4 border-t border-neutral-800 pt-4">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-neutral-300 hover:text-white"
              >
                <FaGithub /> Code
              </a>
            )}
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-neutral-300 hover:text-white"
              >
                <FaExternalLinkAlt /> Live
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export const Project = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        className="my-20 text-center text-4xl"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.key} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};
