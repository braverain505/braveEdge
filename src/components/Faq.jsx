import Icon from './Icons.jsx';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';
import { faqs } from '../data/site.js';

/**
 * FAQ accordion.
 *
 * Uses native <details>/<summary> so it works without JavaScript, is keyboard
 * accessible for free, and keeps every answer in the DOM for search engines.
 * The same content generates FAQPage structured data at build time.
 */
export default function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 bg-ink-50/60 py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Questions"
          title="The things clients ask before they sign"
          description="If your question is not here, ask it directly — we would rather answer it before you commit to anything."
        />

        <div className="mx-auto mt-14 max-w-3xl divide-y divide-ink-900/10 overflow-hidden rounded-2xl border border-ink-900/10 bg-white shadow-soft">
          {faqs.map((item, index) => (
            <Reveal key={item.question} delay={index * 40}>
              <details className="group" open={index === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-5 py-5 transition hover:bg-ink-50/70 sm:px-7 [&::-webkit-details-marker]:hidden">
                  <h3 className="text-[0.9375rem] font-semibold leading-snug text-ink-900 sm:text-base">
                    {item.question}
                  </h3>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-ink-900/10 bg-white text-ink-600 transition group-open:rotate-180">
                    <Icon name="chevronUp" className="h-3.5 w-3.5 rotate-180" strokeWidth={2.4} />
                  </span>
                </summary>
                <div className="px-5 pb-6 pr-14 sm:px-7">
                  <p className="text-[0.875rem] leading-relaxed text-ink-500">{item.answer}</p>
                </div>
              </details>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mt-10 text-center text-sm text-ink-500">
            Still unsure whether your process is worth automating?{' '}
            <a href="#contact" className="link-underline">
              Ask us and we will tell you straight
              <Icon name="arrowRight" className="h-4 w-4" strokeWidth={2} />
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
