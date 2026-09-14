import Icon from './Icons.jsx';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';
import { differentiators } from '../data/site.js';

const before = [
  'Six tools and four spreadsheets per process',
  'Approvals chased over email and chat',
  'Reports rebuilt by hand every month',
  'The process lives in one person’s head',
];

const after = [
  'One workflow across the tools you already use',
  'Approvals routed, logged and chased automatically',
  'Numbers correct before anyone asks for them',
  'Documented, so the whole team can run it',
];

export default function WhyUs() {
  return (
    <section id="why" className="scroll-mt-24 py-20 sm:py-28">
      <div className="container-x">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Why BraveEdge Technologies"
              title="Automation partners who sweat the edge cases"
              description="Anyone can wire up a happy path. The value shows up when things go wrong — and that is where we spend our effort."
            />

            <ul className="mt-10 space-y-6">
              {differentiators.map((item, index) => (
                <Reveal as="li" key={item.title} delay={index * 70} className="flex gap-4">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink-900 text-white">
                    <Icon name="check" className="h-4 w-4" strokeWidth={2.6} />
                  </span>
                  <div>
                    <h3 className="text-[0.9375rem] font-semibold text-ink-900">{item.title}</h3>
                    <p className="mt-1.5 text-[0.875rem] leading-relaxed text-ink-500">{item.description}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>

          <Reveal delay={120}>
            <div className="overflow-hidden rounded-3xl border border-ink-900/10 bg-white shadow-lift">
              <div className="border-b border-ink-900/10 px-6 py-4">
                <p className="font-display text-sm font-bold text-ink-900">A typical engagement</p>
                <p className="mt-1 text-[0.75rem] text-ink-400">What changes after we ship</p>
              </div>

              <div className="divide-y divide-ink-900/10">
                <div className="px-6 py-6">
                  <p className="text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-ink-400">Before</p>
                  <ul className="mt-4 space-y-3">
                    {before.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Icon name="close" className="mt-0.5 h-4 w-4 shrink-0 text-ink-300" strokeWidth={2.2} />
                        <span className="text-[0.875rem] leading-snug text-ink-500">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-brand-50/80 to-white px-6 py-6">
                  <p className="text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-brand-700">After</p>
                  <ul className="mt-4 space-y-3">
                    {after.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-teal-500/15 text-teal-600">
                          <Icon name="check" className="h-2.5 w-2.5" strokeWidth={3} />
                        </span>
                        <span className="text-[0.875rem] font-medium leading-snug text-ink-800">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex items-center gap-3 border-t border-ink-900/10 bg-ink-50/70 px-6 py-4">
                <Icon name="clock" className="h-4 w-4 shrink-0 text-ink-400" />
                <p className="text-[0.75rem] leading-snug text-ink-500">
                  Most projects reach first value within 2–4 weeks of kickoff.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
