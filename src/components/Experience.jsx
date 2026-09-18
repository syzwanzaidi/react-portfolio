import { EXPERIENCES } from "../data";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { Badge } from "./ui/Badge";

export const Experience = () => {
  return (
    <div id="experience" className="scroll-mt-24 border-b border-neutral-900 pb-4">
      <SectionHeading eyebrow="Where I've worked" title="Experience" />

      <div className="relative mx-auto max-w-3xl">
        <div className="absolute bottom-0 left-[7px] top-2 hidden w-px bg-neutral-800 sm:block" />

        <div className="space-y-12">
          {EXPERIENCES.map((experience, index) => (
            <Reveal key={experience.company} direction="up" delay={index * 0.1} className="relative sm:pl-10">
              <span
                className={`absolute left-0 top-2 hidden h-4 w-4 rounded-full border-2 sm:block ${
                  experience.current
                    ? "animate-pulse border-emerald-400 bg-emerald-500"
                    : "border-neutral-700 bg-neutral-900"
                }`}
              />

              <div className="mb-1 flex flex-wrap items-center gap-3">
                <p className="text-sm text-neutral-400">{experience.year}</p>
                {experience.current && (
                  <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-400">
                    Current
                  </span>
                )}
              </div>

              <h6 className="mb-2 font-semibold text-neutral-100">
                {experience.role} -{" "}
                <span className="text-sm text-purple-300">{experience.company}</span>
              </h6>

              <ul className="mb-4 list-disc space-y-1.5 pl-5 text-neutral-400 marker:text-neutral-600">
                {experience.description.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech) => (
                  <Badge key={tech} label={tech} />
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};
