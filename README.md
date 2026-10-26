# Portfolio

The personal portfolio site of Muhammad Syazwan Syahmi Bin Mat Zaidi, a software developer based in Selangor, Malaysia. It is a single-page site with a dark theme and smooth animations, and all of its content comes from simple data files, so updating it does not require touching the components.

Live site: https://syzwanzaidi-portfolio.vercel.app/

## Sections

- **Home:** introduction
- **About:** background and photo
- **Skills:** technologies grouped by category (languages, frameworks, AI and ML, and more) with icons
- **Experience:** work history
- **Projects:** project cards that can be filtered by category (All, AI & Automation, Web Platforms), each with highlights and technologies
- **Contact:** email and social links, with copy-to-clipboard fields

Extras: scroll progress bar, reveal-on-scroll animations, animated counters and a back-to-top button.

## Tech stack

- React 18 with Vite 5
- Tailwind CSS 3
- Framer Motion for animation
- React Icons
- ESLint
- Deployed on Vercel

## Getting started

```bash
git clone https://github.com/syzwanzaidi/react-portfolio.git
cd react-portfolio
npm install
npm run dev
```

Open the local address Vite prints (usually http://localhost:5173).

| Command | What it does |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Editing the content

Everything shown on the site lives in `src/data/`:

| File | Content |
|---|---|
| `profile.js` | Name, role, intro text |
| `nav.js` | Navigation links |
| `skills.js` | Skill groups and icons |
| `experience.js` | Work experience |
| `projects.js` | Projects, categories, highlights and technologies |
| `contact.js`, `socials.js` | Contact details and social links |

Images are in `src/assets/`. To add a project, add an entry to the `PROJECTS` list in `src/data/projects.js`. If it uses a new category, add that category to `PROJECT_CATEGORIES` too.

## Project structure

```
src/
  components/      Hero, About, Technologies, Experience, Project, Contact, Navbar
  components/ui/   shared pieces: Reveal, Badge, SectionHeading, CopyableField, ...
  data/            all site content
  assets/          images
  App.jsx          page layout
  main.jsx         entry point
```

## Deployment

The site is deployed on Vercel. Import the repository, use the Vite preset (build command `npm run build`, output directory `dist`), and each push to the default branch (`master`) redeploys.

## Author

Muhammad Syazwan Syahmi Bin Mat Zaidi. [GitHub](https://github.com/syzwanzaidi) | [LinkedIn](https://www.linkedin.com/in/syazwanzaidi)
