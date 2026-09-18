import { useState } from "react";
import { FaCheck, FaCopy } from "react-icons/fa";

/** A text value with a click-to-copy affordance and a brief "Copied" confirmation. */
export const CopyableField = ({ icon: Icon, value, href }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard API unavailable — nothing to fall back to, fail silently.
    }
  };

  return (
    <div className="flex items-center justify-center gap-3 text-neutral-300">
      <Icon className="text-cyan-500" />
      {href ? (
        <a href={href} className="hover:text-white">
          {value}
        </a>
      ) : (
        <span>{value}</span>
      )}
      <button
        type="button"
        onClick={handleCopy}
        aria-label={`Copy ${value}`}
        className="rounded-md p-1.5 text-neutral-500 transition-colors hover:bg-neutral-800 hover:text-cyan-400"
      >
        {copied ? <FaCheck className="text-emerald-400" /> : <FaCopy />}
      </button>
    </div>
  );
};
