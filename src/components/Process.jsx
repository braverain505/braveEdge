import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';
import { process } from '../data/site.js';

export default function Process() {
  return (
    <section id="process" className="scroll-mt-24 bg-ink-50/60 py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="How we work"
          title="A short, predictable path from manual to automated"
          description="Four stages, no surprises. You see the process map, the scope and the price before a line of code is written."
        />

        <ol className="relative mt-14 grid gap-6 lg:grid-cols-4 lg:gap-5">
          {/* Connector line for large screens */}
          <div
            className="pointer-events-none absolute left-0 right-0 top-[3.25rem] hidden h-px bg-gradient-to-r from-transparent via-ink-900/15 to-transparent lg:block"
            aria-hidden="true"
          />

          {process.map((stage, index) => (
            <Reveal as="li" key={stage.step} delay={index * 80} className="relative">
              <div className="flex h-full flex-col rounded-2xl border border-ink-900/10 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-brand-600/25 hover:shadow-lift">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink-900 font-display text-[0.8125rem] font-bold text-white">
                    {stage.step}
                  </span>
                  <h3 className="font-display text-[1.0625rem] font-bold text-ink-900">{stage.title}</h3>
                </div>

                <p className="mt-4 text-[0.875rem] leading-relaxed text-ink-500">{stage.description}</p>

                <p className="mt-5 border-t border-dashed border-ink-900/10 pt-4 text-[0.75rem] leading-relaxed text-ink-400">
                  {stage.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
