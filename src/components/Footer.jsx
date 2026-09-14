import Logo from './Logo.jsx';
import Icon from './Icons.jsx';
import { company, footer, nav } from '../data/site.js';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-ink-950 text-ink-200">
      <div
        className="pointer-events-none absolute inset-0 bg-grid-dark bg-grid [mask-image:radial-gradient(ellipse_60%_70%_at_20%_0%,black,transparent)]"
        aria-hidden="true"
      />

      <div className="container-x relative py-14">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo variant="light" />
            <p className="mt-5 max-w-xs text-[0.8125rem] leading-relaxed text-ink-300/75">{footer.blurb}</p>

            <div className="mt-6 flex flex-col gap-2.5 text-[0.8125rem]">
              <a
                href={`mailto:${company.email}`}
                className="inline-flex items-center gap-2 text-ink-200 transition hover:text-white"
              >
                <Icon name="mail" className="h-4 w-4" />
                {company.email}
              </a>
              <a
                href={`tel:${company.phone.replace(/[^+\d]/g, '')}`}
                className="inline-flex items-center gap-2 text-ink-200 transition hover:text-white"
              >
                <Icon name="phone" className="h-4 w-4" />
                {company.phone}
              </a>
            </div>
          </div>

          {footer.columns.map((column) => (
            <div key={column.title}>
              <p className="text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-ink-400">{column.title}</p>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-[0.8125rem] text-ink-200/85 transition hover:text-white">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-ink-400">Get in touch</p>
            <p className="mt-5 text-[0.8125rem] leading-relaxed text-ink-300/75">
              Ready to remove the manual work? We reply within one business day.
            </p>
            <a href="#contact" className="btn-accent btn-lg mt-5 w-full">
              Book a discovery call
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.75rem] text-ink-400">
            © {year} {company.name}. All rights reserved.
          </p>
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2" aria-label="Footer">
            {nav.slice(0, 4).map((item) => (
              <a key={item.href} href={item.href} className="text-[0.75rem] text-ink-400 transition hover:text-ink-100">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
