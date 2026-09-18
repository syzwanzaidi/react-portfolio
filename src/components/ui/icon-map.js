import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs, TbBrandCSharp } from "react-icons/tb";
import {
  SiLaravel,
  SiMysql,
  SiTypescript,
  SiPhp,
  SiPython,
  SiJavascript,
  SiPostgresql,
  SiFastapi,
  SiStreamlit,
  SiTailwindcss,
  SiGooglegemini,
  SiAnthropic,
  SiSupabase,
  SiFirebase,
  SiNginx,
  SiDigitalocean,
  SiVercel,
  SiDocker,
  SiDrizzle,
  SiPusher,
} from "react-icons/si";
import { FaGithub, FaLinkedin, FaLinux, FaRobot, FaEye, FaCamera, FaCode } from "react-icons/fa";

/**
 * Central string -> component registry so data files (src/data/*) can stay
 * plain JS and reference icons by name without importing JSX.
 */
export const ICONS = {
  RiReactjsLine,
  TbBrandNextjs,
  TbBrandCSharp,
  SiLaravel,
  SiMysql,
  SiTypescript,
  SiPhp,
  SiPython,
  SiJavascript,
  SiPostgresql,
  SiFastapi,
  SiStreamlit,
  SiTailwindcss,
  SiGooglegemini,
  SiAnthropic,
  SiSupabase,
  SiFirebase,
  SiNginx,
  SiDigitalocean,
  SiVercel,
  SiDocker,
  SiDrizzle,
  SiPusher,
  FaGithub,
  FaLinkedin,
  FaLinux,
  FaRobot,
  FaEye,
  FaCamera,
  FaCode,
};

export const getIcon = (key) => ICONS[key] ?? FaCode;

/** Maps a free-text technology label (as used in project/experience tag lists) to an icon key. */
const TECH_NAME_TO_ICON = {
  PHP: "SiPhp",
  Python: "SiPython",
  JavaScript: "SiJavascript",
  TypeScript: "SiTypescript",
  SQL: "SiPostgresql",
  "VB.NET": "TbBrandCSharp",
  "Windows Forms": "TbBrandCSharp",
  Laravel: "SiLaravel",
  "React.js": "RiReactjsLine",
  "Next.js": "TbBrandNextjs",
  FastAPI: "SiFastapi",
  Streamlit: "SiStreamlit",
  "Tailwind CSS": "SiTailwindcss",
  "Gemini API": "SiGooglegemini",
  "Claude API": "SiAnthropic",
  PostgreSQL: "SiPostgresql",
  MySQL: "SiMysql",
  Supabase: "SiSupabase",
  "Drizzle ORM": "SiDrizzle",
  Firebase: "SiFirebase",
  Git: "FaGithub",
  GitHub: "FaGithub",
  Linux: "FaLinux",
  Nginx: "SiNginx",
  n8n: "FaRobot",
  Docker: "SiDocker",
  DigitalOcean: "SiDigitalocean",
  Vercel: "SiVercel",
  Pusher: "SiPusher",
  "REST APIs": "FaCode",
  YOLO: "FaEye",
  LLMs: "FaRobot",
  "Computer Vision": "FaCamera",
  ccxt: "FaCode",
};

export const iconKeyForTech = (name) => TECH_NAME_TO_ICON[name] ?? null;
