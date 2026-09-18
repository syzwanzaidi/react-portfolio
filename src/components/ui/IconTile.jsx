import { forwardRef } from "react";
import { motion } from "framer-motion";
import { getIcon } from "./icon-map";

export const IconTile = forwardRef(({ name, icon }, ref) => {
  const Icon = getIcon(icon);

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      whileHover={{ y: -6, scale: 1.05 }}
      transition={{ duration: 0.25 }}
      title={name}
      className="flex w-24 flex-col items-center gap-2 rounded-2xl border border-neutral-800 bg-neutral-900/40 p-4 text-center transition-colors hover:border-cyan-500/50"
    >
      <Icon className="text-3xl text-cyan-400" />
      <span className="text-xs text-neutral-400">{name}</span>
    </motion.div>
  );
});

IconTile.displayName = "IconTile";
