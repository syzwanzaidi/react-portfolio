import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SKILL_GROUPS } from "../data";
import { SectionHeading } from "./ui/SectionHeading";
import { IconTile } from "./ui/IconTile";

const CATEGORIES = ["All", ...SKILL_GROUPS.map((group) => group.category)];

export const Technologies = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const items = SKILL_GROUPS.filter(
    (group) => activeCategory === "All" || group.category === activeCategory,
  ).flatMap((group) => group.items);

  return (
    <div id="skills" className="scroll-mt-24 border-b border-neutral-800 pb-24">
      <SectionHeading eyebrow="What I work with" title="Skills & Technologies" />

      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {CATEGORIES.map((category) => (
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

      <motion.div layout className="flex flex-wrap items-center justify-center gap-4">
        <AnimatePresence mode="popLayout">
          {items.map((item) => (
            <IconTile key={item.name} name={item.name} icon={item.icon} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
