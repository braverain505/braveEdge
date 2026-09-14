import Icon from './Icons.jsx';
import Reveal from './Reveal.jsx';
import { valueProps } from '../data/site.js';

export default function ValueBar() {
  return (
    <section className="border-y border-ink-900/10 bg-ink-50/60">
      <div className="container-x">
        <ul className="grid gap-x-8 gap-y-7 py-10 sm:grid-cols-2 lg:grid-cols-4">
          {valueProps.map((item, index) => (
            <Reveal as="li" key={item.title} delay={index * 60} className="flex items-start gap-3.5">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-600/10 text-brand-700">
                <Icon name="check" className="h-3.5 w-3.5" strokeWidth={2.6} />
              </span>
              <div>
                <p className="text-sm font-semibold text-ink-900">{item.title}</p>
                <p className="mt-1 text-[0.8125rem] leading-relaxed text-ink-500">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
