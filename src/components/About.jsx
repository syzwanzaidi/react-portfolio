import aboutImg from "../assets/about1.jpg";
import { ABOUT, STATS } from "../data";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { AnimatedCounter } from "./ui/AnimatedCounter";

export const About = () => {
  return (
    <div id="about" className="scroll-mt-24 border-b border-neutral-900 pb-16">
      <SectionHeading eyebrow="Get to know me" title="About Me" />

      <div className="flex flex-wrap items-center gap-10 lg:gap-16">
        <Reveal direction="left" className="w-full lg:w-2/5">
          <div className="relative mx-auto max-w-sm">
            <div className="absolute -inset-3 -z-10 rounded-3xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 blur-2xl" />
            <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-neutral-800">
              <img
                src={aboutImg}
                alt="Syazwan discussing a robotics project"
                className="h-full w-full object-cover object-[center_25%]"
              />
            </div>
            <div className="absolute -bottom-4 left-1/2 w-max -translate-x-1/2 rounded-full border border-neutral-800 bg-neutral-900 px-4 py-2 text-xs text-neutral-300 shadow-lg">
              {ABOUT.facts[2].value}
            </div>
          </div>
        </Reveal>

        <Reveal direction="right" className="w-full lg:w-1/2 lg:flex-1">
          <p className="text-lg leading-relaxed text-neutral-200">{ABOUT.intro}</p>
          <p className="mt-4 leading-relaxed text-neutral-400">{ABOUT.details}</p>

          <dl className="mt-6 space-y-2 border-t border-neutral-800 pt-6">
            {ABOUT.facts.slice(0, 2).map((fact) => (
              <div key={fact.label} className="flex gap-2 text-sm">
                <dt className="w-20 shrink-0 text-neutral-500">{fact.label}</dt>
                <dd className="text-neutral-300">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      <Reveal className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-neutral-800 bg-neutral-900/40 py-6 text-center"
          >
            <div className="text-3xl font-semibold text-cyan-400">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </div>
            <div className="mt-1 text-xs text-neutral-500">{stat.label}</div>
          </div>
        ))}
      </Reveal>
    </div>
  );
};
