import { motion } from "framer-motion";

export const SectionHeading = ({ eyebrow, title, align = "center" }) => {
  const alignment = align === "left" ? "items-start text-left" : "items-center text-center";

  return (
    <motion.div
      className={`mb-14 flex flex-col ${alignment}`}
      initial={{ opacity: 0, y: -40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
    >
      {eyebrow && (
        <span className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-500">
          {eyebrow}
        </span>
      )}
      <h2 className="text-balance text-4xl font-semibold text-neutral-100">{title}</h2>
      <div className="mt-4 h-1 w-12 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500" />
    </motion.div>
  );
};
