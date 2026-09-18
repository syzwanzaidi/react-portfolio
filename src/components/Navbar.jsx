import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import logo from "../assets/ssLogo2.png";
import { FaBars, FaGithub, FaLinkedin, FaTimes } from "react-icons/fa";
import { NAV_LINKS, SOCIALS } from "../data";

const SOCIAL_ICON = { FaLinkedin, FaGithub };

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState(NAV_LINKS[0].href);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((link) => document.querySelector(link.href)).filter(Boolean);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveHref(`#${visible.target.id}`);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 -mx-8 mb-16 px-8 transition-colors duration-300 ${
        scrolled ? "border-b border-neutral-800 bg-neutral-950/80 backdrop-blur-md" : ""
      }`}
    >
      <div className="flex items-center justify-between py-5">
        <a href="#" className="flex flex-shrink-0 items-center">
          <img className="w-11" src={logo} alt="Syazwan Syahmi logo" />
        </a>

        <div className="hidden items-center gap-8 text-sm font-medium text-neutral-400 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`transition-colors hover:text-cyan-400 ${
                activeHref === link.href ? "text-cyan-400" : ""
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-4 text-xl text-neutral-300 md:flex">
          {SOCIALS.map((social) => {
            const Icon = SOCIAL_ICON[social.icon];
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="transition-colors hover:text-cyan-400"
              >
                <Icon />
              </a>
            );
          })}
        </div>

        <button
          type="button"
          className="text-2xl text-neutral-300 md:hidden"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-neutral-800 md:hidden"
          >
            <div className="flex flex-col gap-4 py-6 text-neutral-300">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-lg transition-colors hover:text-cyan-400 ${
                    activeHref === link.href ? "text-cyan-400" : ""
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-2 flex items-center gap-5 text-xl">
                {SOCIALS.map((social) => {
                  const Icon = SOCIAL_ICON[social.icon];
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="hover:text-cyan-400"
                    >
                      <Icon />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
