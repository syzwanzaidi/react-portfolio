export const PROJECT_CATEGORIES = ["All", "AI & Automation", "Web Platforms"];

export const PROJECTS = [
  {
    key: "hustler",
    title: "Hustler",
    subtitle: "AI Investment Laboratory",
    categories: ["AI & Automation"],
    featured: true,
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
    categories: ["AI & Automation", "Web Platforms"],
    featured: false,
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
    categories: ["Web Platforms"],
    featured: false,
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
    categories: ["AI & Automation"],
    featured: false,
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
