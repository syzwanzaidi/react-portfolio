export const HERO_CONTENT = `
Computer Science (Netcentric Computing) graduate and Software Developer with hands-on experience building and shipping production systems across government, industrial, and academic environments.
Experienced in PHP, Laravel, Python, JavaScript/TypeScript, and PostgreSQL/MySQL, with a growing focus on AI-powered applications and system integration.
Interested in backend development, data pipelines, and turning messy manual processes into reliable software.
`;

export const ABOUT_TEXT = `
I'm a Computer Science (Netcentric Computing) graduate from UiTM Shah Alam, now working as a Software Developer at Metropoly Packaging, where I build and maintain internal factory production systems.

Before that, I interned at Selangor Human Resource Development Centre (SHRDC), where I worked on MetaSel, a government innovation-management platform, and built AI-assisted manufacturing analytics tooling for Daikin Malaysia. Earlier, at Isianpadu Systems, I contributed to PUSPAL Online System, a government platform for managing foreign artist and filming applications.

Across these roles I've worked full-stack — Laravel/PHP and React/TypeScript on the frontend and backend, PostgreSQL/MySQL for data, and Python for AI and automation work involving computer vision, LLMs, and workflow integration. I'm most interested in backend systems, data/API integration, and building practical tools that replace manual, error-prone processes.
`;

export const EXPERIENCES = [
  {
    year: "Aug 2026 – Present",
    role: "Software Developer (Contract)",
    company: "Metropoly Packaging Sdn Bhd",
    description: [
      "Developed and maintained internal factory production management applications to improve manufacturing data recording and operational efficiency.",
      "Built an ERP monitoring integration that syncs production data into PostgreSQL via REST APIs for centralized, real-time reporting.",
      "Enhanced an existing Production Record System using VB.NET Windows Forms, improving data collection workflows, user interaction, and operational reliability.",
      "Developed a new Wastage Record System to replace manual recording processes, allowing operators to log production wastage digitally and generate automated reports.",
      "Managed software release deployment — building production versions, preparing executable packages, and rolling out updates across multiple factory production stations.",
    ],
    technologies: ["VB.NET", "Windows Forms", "PostgreSQL", "REST APIs", "SQL"],
  },
  {
    year: "Mar 2026 – Jul 2026",
    role: "Software Developer Intern",
    company: "Selangor Human Resource Development Centre",
    description: [
      "Developed and maintained MetaSel, an innovation management platform for government stakeholders using Laravel, MySQL, JavaScript, and REST APIs.",
      "Designed and integrated AI-powered workflows, including automated content moderation and notification systems, using n8n and Laravel queues.",
      "Managed deployment, migration, and maintenance of applications across Linux staging and production environments.",
      "Developed AI-assisted manufacturing analytics solutions for Daikin Malaysia using Python, YOLO, FastAPI, Streamlit, and LLMs.",
    ],
    technologies: ["Laravel", "MySQL", "JavaScript", "REST APIs", "n8n", "Python", "YOLO", "FastAPI", "Streamlit", "LLMs", "Linux"],
  },
  {
    year: "Sep 2023 – Mar 2024",
    role: "Full Stack Developer Intern",
    company: "Isianpadu Systems Sdn. Bhd.",
    description: [
      "Contributed to the development of PUSPAL Online System, a government platform for managing foreign artist performances and filming applications in Malaysia.",
      "Developed frontend and backend modules using React.js, TypeScript, Laravel, PHP, and MySQL.",
      "Implemented database models, controllers, APIs, and business logic to manage applications, artist information, and filming records.",
    ],
    technologies: ["PHP", "Laravel", "MySQL", "React.js", "TypeScript", "Git"],
  },
];

export const PROJECTS = [
  {
    key: "hustler",
    title: "USTLER",
    subtitle: "AI Investment Laboratory",
    description:
      "A personal, fully-simulated investment system built to measure — not print money. A deterministic core handles all indicators, regime detection, sizing, risk, and accounting; an advisory AI layer only proposes bounded opinions. The Risk Engine holds final authority over every order, and every pipeline pass is written to a Decision Journal so contribution can be attributed after the fact.",
    highlights: [
      "Risk Engine has final veto power — the AI can recommend, but rule-based risk limits approve or reject every order",
      "Capital allocator: reserve vs. trading pot split, drawdown throttle, profit sweep, and strong-signal-only entries",
      "Trades crypto (via ccxt) and Bursa Malaysia (via Yahoo Finance) in one shared risk budget",
      "Live paper-trading brokers (built-in simulator + exchange testnet) with per-tick ledger reconciliation",
      "4-page Streamlit dashboard visualizing the pipeline as a live, plain-English flowchart",
    ],
    technologies: ["Python", "Streamlit", "PostgreSQL", "Claude API", "Docker", "ccxt"],
    links: {},
  },
  {
    key: "calorie",
    title: "Calorie+",
    subtitle: "Calorie & Macro Tracker for Gym-Goers",
    description:
      "A full-stack nutrition tracking app built end-to-end from a detailed product spec, with AI-powered photo food logging, barcode scanning, and personalized macro targets — enforced by a three-layer approval gate spanning the route, server actions, and Postgres itself.",
    highlights: [
      "AI photo food recognition via the Gemini API with per-item low/medium/high confidence scoring",
      "Barcode scanning against the Open Food Facts database for instant nutrition lookup",
      "Row Level Security enforced directly in Postgres, independently re-checked at every gated layer",
      "Personalized TDEE & macro targets using the Mifflin-St Jeor formula, with an admin sign-up approval workflow",
    ],
    technologies: ["Next.js", "Supabase", "PostgreSQL", "Drizzle ORM", "Tailwind CSS", "Gemini API"],
    links: {},
  },
  {
    key: "uitmarketplace",
    title: "UiTMarketplace",
    subtitle: "Location-Based Online Marketplace (Final Year Project)",
    description:
      "A full-stack marketplace platform built for the UiTM Shah Alam community, centered on location-based product discovery, real-time buyer-seller chat, and online payments — deployed live on a DigitalOcean droplet.",
    highlights: [
      "Location-based item visibility using latitude/longitude, Haversine distance filtering, and a radius selector",
      "Seller map pin placement with reverse geocoding to display a human-readable area name",
      "Real-time buyer-seller chat built with Laravel Echo and Pusher broadcasting",
      "Integrated ToyyibPay payment gateway for online checkout",
      "Deployed to production on a DigitalOcean droplet with Nginx and a custom domain",
    ],
    technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "Pusher", "DigitalOcean"],
    links: {},
  },
  {
    key: "leanai",
    title: "Lean AI",
    subtitle: "AI-Powered Assembly Guidance & Verification System",
    description:
      "An AI-assisted assembly guidance system that watches a production line in real time, verifying each assembly step and flagging deviations automatically — built to cut manual quality-check overhead on the factory floor.",
    highlights: [
      "YOLO object detection combined with LLMs for assembly workflow analysis and verification",
      "Automated action tracking with real-time production step validation",
      "Interactive Streamlit interface backed by a FastAPI service for inference",
    ],
    technologies: ["Python", "YOLO", "FastAPI", "Streamlit", "LLMs"],
    links: {},
  },
];

export const CONTACT = {
  address: "Seri Kembangan, Selangor, Malaysia",
  phoneNo: "+60 11-1101 0214",
  email: "syzwanzaidi29@gmail.com",
};
