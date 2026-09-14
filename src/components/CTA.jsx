import Icon from './Icons.jsx';
import Reveal from './Reveal.jsx';
import { company } from '../data/site.js';

export default function CTA() {
  return (
    <section className="pb-20 pt-4 sm:pb-28">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-4xl border border-ink-900/10 bg-gradient-to-br from-brand-50 via-white to-ink-50 px-6 py-14 text-center sm:px-12 sm:py-16">
            <div
              className="pointer-events-none absolute inset-0 bg-grid-light bg-grid [mask-image:radial-gradient(ellipse_50%_60%_at_50%_100%,black,transparent)]"
              aria-hidden="true"
            />

            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-3xl font-bold leading-[1.15] text-ink-900 sm:text-4xl">
                Bring us your most annoying process.
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-[0.9375rem] leading-relaxed text-ink-500">
                Tell us what eats your team&apos;s week. We will map it, price it and build it — or tell you honestly
                that it is not worth automating yet.
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a href="#contact" className="btn-accent btn-lg w-full sm:w-auto">
                  Start a conversation
                  <Icon name="arrowRight" className="h-4 w-4" strokeWidth={2} />
                </a>
                <a
                  href={`mailto:${company.email}`}
                  className="btn-ghost btn-lg w-full sm:w-auto"
                >
                  <Icon name="mail" className="h-4 w-4" />
                  {company.email}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
