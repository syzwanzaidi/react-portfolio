import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { CONTACT, SOCIALS } from "../data";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { CopyableField } from "./ui/CopyableField";

const SOCIAL_ICON = { FaLinkedin, FaGithub };

export const Contact = () => {
  return (
    <div id="contact" className="scroll-mt-24 pb-10">
      <SectionHeading eyebrow="Let's talk" title="Get In Touch" />

      <Reveal className="mx-auto flex max-w-xl flex-col items-center gap-4 text-center">
        <p className="max-w-md text-neutral-400">
          Have a role, project, or just want to say hi? My inbox is open.
        </p>

        <a
          href={`mailto:${CONTACT.email}`}
          className="rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-cyan-500/20 transition-transform hover:scale-105"
        >
          Say Hello
        </a>

        <div className="mt-4 flex flex-col gap-3">
          <div className="flex items-center justify-center gap-3 text-neutral-300">
            <FaMapMarkerAlt className="text-cyan-500" />
            <span>{CONTACT.address}</span>
          </div>
          <CopyableField icon={FaPhoneAlt} value={CONTACT.phoneNo} href={`tel:${CONTACT.phoneNo.replace(/\s|-/g, "")}`} />
          <CopyableField icon={FaEnvelope} value={CONTACT.email} href={`mailto:${CONTACT.email}`} />
        </div>

        <div className="mt-4 flex items-center gap-4">
          {SOCIALS.map((social) => {
            const Icon = SOCIAL_ICON[social.icon];
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-neutral-800 px-4 py-2 text-sm text-neutral-300 transition-colors hover:border-cyan-500 hover:text-cyan-400"
              >
                <Icon /> {social.label}
              </a>
            );
          })}
        </div>
      </Reveal>

      <p className="mt-16 text-center text-xs text-neutral-600">
        © {new Date().getFullYear()} Syazwan Syahmi. Built with React, Tailwind CSS & Framer Motion.
      </p>
    </div>
  );
};
