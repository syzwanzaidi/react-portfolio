import { forwardRef, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PROJECTS, PROJECT_CATEGORIES } from "../data";
import { SectionHeading } from "./ui/SectionHeading";
import { Badge } from "./ui/Badge";
import { FaChartLine, FaChevronDown, FaExternalLinkAlt, FaGithub, FaRobot } from "react-icons/fa";

const PROJECT_STYLE = {
  hustler: { gradient: "from-indigo-600 via-violet-600 to-fuchsia-600", Icon: FaChartLine, ring: "hover:shadow-violet-500/20" },
  calorie: { gradient: "from-emerald-500 via-teal-500 to-cyan-600", Icon: FaRobot, ring: "hover:shadow-emerald-500/20" },
  uitmarketplace: { gradient: "from-orange-500 via-amber-500 to-yellow-500", Icon: FaChartLine, ring: "hover:shadow-amber-500/20" },
  leanai: { gradient: "from-sky-500 via-blue-600 to-indigo-600", Icon: FaRobot, ring: "hover:shadow-blue-500/20" },
};

const ProjectCard = forwardRef(({ project, index }, ref) => {
  const [expanded, setExpanded] = useState(false);
  const style = PROJECT_STYLE[project.key] ?? PROJECT_STYLE.hustler;
  const HeaderIcon = style.Icon;
  const hasLinks = project.links?.github || project.links?.demo;

  return (
    <motion.div
      ref={ref}
      layout
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/40 shadow-lg transition-shadow duration-300 ${style.ring}`}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      whileHover={{ y: -4 }}
    >
      {project.featured && (
        <span className="absolute right-4 top-4 z-10 rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white backdrop-blur">
          Featured
        </span>
      )}

      <div className={`relative flex items-center justify-between overflow-hidden bg-gradient-to-br ${style.gradient} px-6 py-8`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.25),transparent_60%)]" />
        <div className="relative">
          <p className="text-xs font-medium uppercase tracking-widest text-white/70">{project.subtitle}</p>
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
              {project.highlights.map((point) => (
                <li key={point}>{point}</li>
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
            <FaChevronDown className={`text-xs transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} />
          </button>
        )}

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} label={tech} />
          ))}
        </div>

        {hasLinks && (
          <div className="mt-5 flex gap-4 border-t border-neutral-800 pt-4">
            {project.links.github && (
              <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-neutral-300 hover:text-white">
                <FaGithub /> Code
              </a>
            )}
            {project.links.demo && (
              <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-neutral-300 hover:text-white">
                <FaExternalLinkAlt /> Live
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
});

ProjectCard.displayName = "ProjectCard";

export const Project = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(
    () =>
      PROJECTS.filter(
        (project) => activeCategory === "All" || project.categories.includes(activeCategory),
      ),
    [activeCategory],
  );

  return (
    <div id="projects" className="scroll-mt-24 border-b border-neutral-900 pb-4">
      <SectionHeading eyebrow="What I've built" title="Projects" />

      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {PROJECT_CATEGORIES.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
              activeCategory === category
                ? "border-cyan-500 bg-cyan-500/10 text-cyan-400"
                : "border-neutral-800 text-neutral-400 hover:border-neutral-600 hover:text-neutral-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div layout className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, index) => (
            <ProjectCard key={project.key} project={project} index={index} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
