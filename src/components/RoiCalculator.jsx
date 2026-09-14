import { useMemo, useState } from 'react';
import Icon from './Icons.jsx';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';
import { roi } from '../data/site.js';
import { track } from '../lib/analytics.js';

const count = new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 });

function Slider({ id, label, hint, value, onChange, limits, format }) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <label htmlFor={id} className="text-[0.875rem] font-semibold text-ink-800">
          {label}
        </label>
        <output htmlFor={id} className="font-display text-[0.9375rem] font-bold tabular-nums text-brand-700">
          {format(value)}
        </output>
      </div>

      <input
        id={id}
        type="range"
        min={limits.min}
        max={limits.max}
        step={limits.step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="mt-3 h-1.5 w-full cursor-pointer appearance-none rounded-full bg-ink-900/10 accent-brand-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
      />

      <div className="mt-2 flex justify-between text-[0.6875rem] text-ink-400">
        <span>{format(limits.min)}</span>
        <span>{hint}</span>
        <span>{format(limits.max)}</span>
      </div>
    </div>
  );
}

export default function RoiCalculator({ onSendEstimate }) {
  const [people, setPeople] = useState(roi.defaults.people);
  const [hours, setHours] = useState(roi.defaults.hours);

  const { automatableShare, workingWeeks, hoursPerWeek, hoursPerDay } = roi.assumptions;

  const result = useMemo(() => {
    const weeklyHours = people * hours * automatableShare;
    const annualHours = weeklyHours * workingWeeks;
    return {
      weeklyHours,
      annualHours,
      daysFreed: annualHours / hoursPerDay,
      weeksFreed: annualHours / hoursPerWeek,
    };
  }, [people, hours, automatableShare, workingWeeks, hoursPerWeek, hoursPerDay]);

  const handleSend = () => {
    const lines = [
      'Estimate from the website calculator:',
      `• People doing the repetitive work: ${people}`,
      `• Repetitive hours per person per week: ${hours}`,
      `• Hours recovered per year: ${count.format(Math.round(result.annualHours))}`,
      `• Working days freed per year: ${count.format(Math.round(result.daysFreed))}`,
      '',
      `This assumes ${Math.round(automatableShare * 100)}% of the repetitive time entered can be automated, across ${workingWeeks} working weeks.`,
      'Assuming that is roughly right, here is the process I would like to automate:',
    ];

    track('roi_estimate_requested', { people, hours });
    onSendEstimate(lines.join('\n'));
  };

  const stats = [
    { label: 'Hours back each week', value: `${count.format(Math.round(result.weeklyHours))} hrs` },
    { label: 'Working days freed each year', value: `${count.format(Math.round(result.daysFreed))} days` },
    { label: 'Weeks of work freed', value: `${result.weeksFreed.toFixed(1)} wks` },
  ];

  return (
    <section id="calculator" className="scroll-mt-24 py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading eyebrow={roi.eyebrow} title={roi.title} description={roi.description} />

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Inputs */}
          <Reveal>
            <div className="flex h-full flex-col justify-center rounded-3xl border border-ink-900/10 bg-white p-6 shadow-soft sm:p-8">
              <div className="space-y-8">
                <Slider
                  id="roi-people"
                  label="People doing the repetitive work"
                  hint="How many people touch this process?"
                  value={people}
                  onChange={setPeople}
                  limits={roi.limits.people}
                  format={(value) => count.format(value)}
                />
                <Slider
                  id="roi-hours"
                  label="Repetitive hours per person, per week"
                  hint="Rough is fine"
                  value={hours}
                  onChange={setHours}
                  limits={roi.limits.hours}
                  format={(value) => `${value} hrs`}
                />
              </div>

              <p className="mt-8 flex items-start gap-2.5 border-t border-ink-900/10 pt-6 text-[0.75rem] leading-relaxed text-ink-400">
                <Icon name="shield" className="mt-0.5 h-4 w-4 shrink-0" />
                Nothing is sent anywhere until you press the button. The calculation runs entirely in your browser.
              </p>
            </div>
          </Reveal>

          {/* Results */}
          <Reveal delay={100}>
            <div className="relative flex h-full flex-col overflow-hidden rounded-3xl bg-ink-900 p-6 shadow-lift sm:p-8">
              <div
                className="pointer-events-none absolute inset-0 bg-grid-dark bg-grid [mask-image:radial-gradient(ellipse_80%_60%_at_100%_0%,black,transparent)]"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-500/25 blur-[90px]"
                aria-hidden="true"
              />

              <div className="relative">
                <p className="text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-ink-300/70">
                  Hours recovered every year
                </p>
                <p className="mt-3 font-display text-4xl font-extrabold tabular-nums text-white sm:text-[3.25rem] sm:leading-none">
                  {count.format(Math.round(result.annualHours))}
                  <span className="ml-2 text-xl font-bold text-ink-300/70">hrs</span>
                </p>

                <dl className="mt-8 space-y-3 border-t border-white/10 pt-7">
                  {stats.map((stat) => (
                    <div key={stat.label} className="flex items-baseline justify-between gap-4">
                      <dt className="text-[0.8125rem] text-ink-200/80">{stat.label}</dt>
                      <dd className="font-display text-[0.9375rem] font-bold tabular-nums text-white">{stat.value}</dd>
                    </div>
                  ))}
                </dl>

                <button type="button" onClick={handleSend} className="btn-accent btn-lg mt-8 w-full">
                  Send me this estimate
                  <Icon name="arrowRight" className="h-4 w-4" strokeWidth={2} />
                </button>

                <p className="mt-4 text-[0.75rem] leading-relaxed text-ink-300/60">
                  This is an estimate, not a promise. It assumes {Math.round(automatableShare * 100)}% of the
                  repetitive time you entered can be automated — we validate that against a real process map before
                  committing to anything.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
