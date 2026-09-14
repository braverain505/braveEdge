import Icon from './Icons.jsx';
import Reveal from './Reveal.jsx';
import { hero } from '../data/site.js';
import { track } from '../lib/analytics.js';

const nodes = [
  {
    icon: 'mail',
    title: 'Invoice received',
    detail: 'Inbox watched · attachment detected',
    tag: 'Trigger',
  },
  {
    icon: 'spark',
    title: 'Read, matched & validated',
    detail: 'Totals extracted, PO numbers reconciled',
    tag: 'AI step',
  },
  {
    icon: 'chart',
    title: 'Posted to the ledger',
    detail: 'Approval routed when variance exceeds 5%',
    tag: 'Sync',
  },
];

function Connector() {
  return (
    <div className="ml-[1.6875rem] flex h-7 items-center" aria-hidden="true">
      <svg viewBox="0 0 2 28" className="h-7 w-[2px] overflow-visible">
        <line
          x1="1"
          y1="0"
          x2="1"
          y2="28"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="4 4"
          strokeLinecap="round"
          className="animate-dash-flow text-brand-400"
        />
      </svg>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-16 sm:pt-40 lg:pb-24">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-50/70 via-white to-white" />
        <div className="absolute inset-x-0 top-0 h-[36rem] bg-grid-light bg-grid [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
        <div className="absolute -top-24 left-1/2 h-72 w-[46rem] -translate-x-1/2 rounded-full bg-brand-400/20 blur-[110px]" />
      </div>

      <div className="container-x">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          {/* Copy */}
          <div>
            <Reveal>
              <span className="eyebrow">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-teal-500" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-500" />
                </span>
                {hero.eyebrow}
              </span>
            </Reveal>

            <Reveal delay={70}>
              <h1 className="mt-6 text-[2.25rem] font-extrabold leading-[1.08] tracking-tight text-ink-900 sm:text-5xl lg:text-[3.5rem]">
                We build the automation your team keeps{' '}
                <span className="relative whitespace-nowrap">
                  <span className="text-gradient">doing by hand.</span>
                  <svg
                    viewBox="0 0 320 12"
                    className="absolute -bottom-1.5 left-0 h-2.5 w-full text-brand-400/60"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path d="M2 8.5c60-5.5 150-7.5 316-4" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
            </Reveal>

            <Reveal delay={140}>
              <p className="mt-7 max-w-xl text-[1.0625rem] leading-relaxed text-ink-500 sm:text-lg">
                {hero.subtitle}
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={hero.primaryCta.href}
                  onClick={() => track('cta_clicked', { location: 'hero' })}
                  className="btn-accent btn-lg"
                >
                  {hero.primaryCta.label}
                  <Icon name="arrowRight" className="h-4 w-4" strokeWidth={2} />
                </a>
                <a href={hero.secondaryCta.href} className="btn-ghost btn-lg">
                  {hero.secondaryCta.label}
                </a>
              </div>
            </Reveal>

            <Reveal delay={260}>
              <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-ink-900/10 pt-7">
                {[
                  { term: 'Scope', detail: 'Fixed price' },
                  { term: 'Delivery', detail: 'Weeks, not quarters' },
                  { term: 'Handover', detail: 'You own it' },
                ].map((item) => (
                  <div key={item.term}>
                    <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-ink-400">
                      {item.term}
                    </dt>
                    <dd className="mt-1.5 text-sm font-semibold text-ink-800">{item.detail}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          {/* Workflow mock */}
          <Reveal delay={180} className="relative">
            <div className="relative mx-auto max-w-md">
              <div className="rounded-3xl border border-ink-900/10 bg-white/90 p-5 shadow-lift backdrop-blur sm:p-6">
                <div className="flex items-center justify-between gap-4 border-b border-ink-900/10 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="flex gap-1.5" aria-hidden="true">
                      <span className="h-2.5 w-2.5 rounded-full bg-ink-900/10" />
                      <span className="h-2.5 w-2.5 rounded-full bg-ink-900/10" />
                      <span className="h-2.5 w-2.5 rounded-full bg-ink-900/10" />
                    </span>
                    <span className="font-mono text-[0.6875rem] text-ink-400">flows / invoice-intake</span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-500/10 px-2.5 py-1 text-[0.625rem] font-bold uppercase tracking-wider text-teal-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
                    Live
                  </span>
                </div>

                <div className="pt-5">
                  {nodes.map((node, index) => (
                    <div key={node.title}>
                      <div className="flex items-start gap-4 rounded-2xl border border-ink-900/10 bg-white p-3.5 transition hover:border-brand-600/25 hover:shadow-soft">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-ink-900/[0.04] text-brand-700">
                          <Icon name={node.icon} className="h-[1.125rem] w-[1.125rem]" />
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="text-[0.875rem] font-semibold leading-snug text-ink-900">{node.title}</p>
                          <p className="mt-1 text-[0.75rem] leading-snug text-ink-400">{node.detail}</p>
                        </div>
                        <span className="shrink-0 rounded-md bg-ink-900/[0.04] px-2 py-1 text-[0.5625rem] font-bold uppercase tracking-wider text-ink-500">
                          {node.tag}
                        </span>
                      </div>
                      {index < nodes.length - 1 && <Connector />}
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-2 border-t border-ink-900/10 pt-4 text-[0.75rem] text-ink-400">
                  <Icon name="clock" className="h-4 w-4" />
                  Runs on a schedule · no manual touches
                </div>
              </div>

              {/* Floating accents */}
              <div className="absolute -right-3 top-16 hidden animate-float-slow rounded-2xl border border-ink-900/10 bg-white px-4 py-3 shadow-lift sm:block">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-teal-500/12 text-teal-600">
                    <Icon name="check" className="h-4 w-4" strokeWidth={2.4} />
                  </span>
                  <span className="text-[0.75rem] font-semibold text-ink-800">Zero manual entry</span>
                </div>
              </div>

              <div
                className="absolute -bottom-5 -left-3 hidden animate-float-slow rounded-2xl border border-ink-900/10 bg-white px-4 py-3 shadow-lift sm:block"
                style={{ animationDelay: '1.4s' }}
              >
                <div className="flex items-center gap-2.5">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-500/12 text-brand-700">
                    <Icon name="layers" className="h-4 w-4" />
                  </span>
                  <span className="text-[0.75rem] font-semibold text-ink-800">One source of truth</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
