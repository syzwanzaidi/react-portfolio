import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `
Computer Science (Netcentric Computing) student with hands-on experience in building and maintaining web-based systems.
Experienced in PHP, Laravel, JavaScript, and MySQL, with internship exposure to real production applications.
Interested in backend development, system integration, and practical IT solutions.
`;

export const ABOUT_TEXT = `
I am a Computer Science (Netcentric Computing) student from UiTM Shah Alam with practical experience in developing web-based systems through academic projects and an industry internship.

During my internship, I contributed to real production systems using Laravel, PHP, React.js, and MySQL, where I worked on both frontend and backend modules, database design, and system integration. I am particularly interested in backend development, system logic, and understanding how applications work at a deeper level.

I am currently seeking a 14-week internship placement from 30 March 2026 to 3 July 2026, where I can contribute as a Web Development or IT Intern while gaining hands-on industry experience.
`;

export const EXPERIENCES = [
  {
    year: "Sep 2023 – Mar 2024",
    role: "Full Stack Developer Intern",
    company: "Isianpadu Systems Sdn. Bhd.",
    description: `
Contributed to the development of PUSPAL Online System, a government web platform for managing foreign artist performances and filming applications in Malaysia.
Worked on frontend and backend modules using Laravel (PHP), React.js, and MySQL.
Implemented database models, controllers, APIs, and services to support application workflows and data management.
Participated in weekly client meetings to present progress and gather feedback.
    `,
    technologies: ["PHP", "Laravel", "MySQL", "React.js", "JavaScript", "Git"],
  },
];

export const PROJECTS = [
  {
    title: "UiTMarketplace – Location-Based Online Marketplace",
    image: project1,
    description:
      "A web-based marketplace system developed for the UiTM community with location-based item visibility, product listings, cart and checkout flow, and order management.",
    technologies: ["Laravel", "PHP", "MySQL", "JavaScript"],
  },
  {
    title: "Unispa Booking System",
    image: project2,
    description:
      "A web-based booking system for UiTM spa services, featuring service scheduling, admin management, and booking control.",
    technologies: ["Laravel", "PHP", "MySQL"],
  },
  {
    title: "IoT Smart Bike Lock System",
    image: project3,
    description:
      "An IoT-based smart bike lock system using ESP32, fingerprint sensor, and GPS module to enable secure access control and location tracking.",
    technologies: ["ESP32", "IoT", "Embedded Systems"],
  },
  {
    title: "Personal Portfolio Website",
    image: project4,
    description:
      "A personal portfolio website to showcase projects, skills, and experience.",
    technologies: ["React", "JavaScript", "CSS"],
  },
];

export const CONTACT = {
  address: "Seri Kembangan, Selangor, Malaysia",
  phoneNo: "+60 11-1101 0214",
  email: "syzwanzaidi29@gmail.com",
};
