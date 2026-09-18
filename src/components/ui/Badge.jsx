import { getIcon, iconKeyForTech } from "./icon-map";

export const Badge = ({ label, icon, className = "" }) => {
  const iconKey = icon ?? iconKeyForTech(label);
  const Icon = iconKey ? getIcon(iconKey) : null;

  return (
    <span
      className={`flex items-center gap-1.5 rounded-full bg-neutral-800/80 px-3 py-1 text-xs font-medium text-cyan-400 ${className}`}
    >
      {Icon && <Icon className="text-sm" />}
      {label}
    </span>
  );
};
