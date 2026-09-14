import Icon from './Icons.jsx';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';
import { services } from '../data/site.js';

export default function Services() {
  return (
    <section id="services" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="What we do"
          title="Automation, built around how your business already works"
          description="No rip-and-replace. We work with the tools you have, connect what is disconnected, and remove the manual steps in between."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={(index % 3) * 70}>
              <article className="card card-hover group h-full">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-50 to-brand-100 text-brand-700 ring-1 ring-inset ring-brand-600/10 transition group-hover:from-brand-600 group-hover:to-brand-700 group-hover:text-white">
                  <Icon name={service.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-[1.0625rem] font-semibold text-ink-900">{service.title}</h3>
                <p className="mt-2.5 text-[0.875rem] leading-relaxed text-ink-500">{service.description}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mt-12 text-center text-sm text-ink-500">
            Not sure which of these you need?{' '}
            <a href="#contact" className="link-underline">
              Describe the process and we will tell you
              <Icon name="arrowRight" className="h-4 w-4" strokeWidth={2} />
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
