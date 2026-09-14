import { useEffect, useState } from 'react';
import Icon from './Icons.jsx';
import Reveal from './Reveal.jsx';
import { company, contact } from '../data/site.js';
import { track } from '../lib/analytics.js';

/**
 * Static-site friendly contact form.
 *
 * - With no configuration it composes an email in the visitor's mail client,
 *   so the site works with zero backend.
 * - Set VITE_CONTACT_ENDPOINT (see README) to POST the submission as JSON to a
 *   form service instead.
 */
const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT;

const details = [
  { icon: 'mail', label: 'Email', value: company.email, href: `mailto:${company.email}` },
  { icon: 'phone', label: 'Phone', value: company.phone, href: `tel:${company.phone.replace(/[^+\d]/g, '')}` },
  { icon: 'pin', label: 'Where we work', value: company.location, href: null },
];

export default function Contact({ draft }) {
  const [form, setForm] = useState({ name: '', email: '', company: '', process: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [fromCalculator, setFromCalculator] = useState(false);

  // Pick up a draft handed over by the ROI calculator.
  useEffect(() => {
    if (!draft?.text) return;
    setForm((prev) => ({ ...prev, process: draft.text }));
    setStatus('idle');
    setFromCalculator(true);
  }, [draft]);

  const update = (field) => (event) => setForm((prev) => ({ ...prev, [field]: event.target.value }));

  const handleSubmit = async (event) => {
    event.preventDefault();
    track('contact_form_submitted', { from_calculator: fromCalculator });

    if (!endpoint) {
      const subject = encodeURIComponent(`Automation enquiry — ${form.company || form.name}`);
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\n\nProcess to automate:\n${form.process}`
      );
      window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
      setStatus('sent');
      return;
    }

    setStatus('sending');
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      setStatus(response.ok ? 'sent' : 'error');
      if (response.ok) setForm({ name: '', email: '', company: '', process: '' });
    } catch {
      setStatus('error');
    }
  };

  const fieldClass =
    'w-full rounded-xl border border-ink-900/12 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-300 transition focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-500/10';
  const labelClass = 'mb-2 block text-[0.8125rem] font-semibold text-ink-700';

  return (
    <section id="contact" className="scroll-mt-24 border-t border-ink-900/10 bg-ink-50/60 py-20 sm:py-28">
      <div className="container-x">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <Reveal>
              <span className="eyebrow">Contact</span>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="mt-5 text-3xl font-bold leading-[1.15] text-ink-900 sm:text-4xl">{contact.heading}</h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-5 max-w-md text-[0.9375rem] leading-relaxed text-ink-500">{contact.description}</p>
            </Reveal>

            <Reveal delay={180}>
              <ul className="mt-10 space-y-4">
                {details.map((item) => (
                  <li key={item.label} className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-ink-900/10 bg-white text-brand-700 shadow-soft">
                      <Icon name={item.icon} className="h-[1.125rem] w-[1.125rem]" />
                    </span>
                    <div>
                      <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-ink-400">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a href={item.href} className="mt-1 block text-[0.9375rem] font-semibold text-ink-900 transition hover:text-brand-700">
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-1 text-[0.9375rem] font-semibold text-ink-900">{item.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={240}>
              <p className="mt-8 inline-flex items-center gap-2 text-[0.8125rem] text-ink-500">
                <Icon name="clock" className="h-4 w-4" />
                {contact.responseTime}
              </p>
            </Reveal>
          </div>

          <Reveal delay={140}>
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-ink-900/10 bg-white p-6 shadow-lift sm:p-8"
              noValidate={false}
            >
              {fromCalculator && status !== 'sent' && (
                <p className="mb-6 flex items-start gap-2.5 rounded-xl bg-brand-50 px-4 py-3 text-[0.8125rem] leading-relaxed text-brand-700">
                  <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={2.6} />
                  Your estimate has been added below — just add your details and send.
                </p>
              )}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className={labelClass} htmlFor="name">
                    Your name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={update('name')}
                    className={fieldClass}
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="email">
                    Work email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={form.email}
                    onChange={update('email')}
                    className={fieldClass}
                    placeholder="jane@company.com"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label className={labelClass} htmlFor="company">
                  Company <span className="font-normal text-ink-400">(optional)</span>
                </label>
                <input
                  id="company"
                  name="company"
                  autoComplete="organization"
                  value={form.company}
                  onChange={update('company')}
                  className={fieldClass}
                  placeholder="Company name"
                />
              </div>

              <div className="mt-5">
                <label className={labelClass} htmlFor="process">
                  Which process costs you the most time?
                </label>
                <textarea
                  id="process"
                  name="process"
                  rows={5}
                  required
                  value={form.process}
                  onChange={update('process')}
                  className={`${fieldClass} resize-y`}
                  placeholder="e.g. Every invoice that comes in gets re-typed into our finance system, then someone emails the approver…"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-accent btn-lg mt-6 w-full disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === 'sending' ? 'Sending…' : 'Send enquiry'}
                <Icon name="arrowRight" className="h-4 w-4" strokeWidth={2} />
              </button>

              {status === 'sent' && (
                <p className="mt-4 flex items-start gap-2 rounded-xl bg-teal-500/10 px-4 py-3 text-[0.8125rem] text-teal-600">
                  <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={2.6} />
                  {endpoint ? 'Thanks — we have your enquiry and will reply shortly.' : 'Your email draft is open — send it over and we will reply shortly.'}
                </p>
              )}

              {status === 'error' && (
                <p className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-[0.8125rem] text-red-600">
                  Something went wrong. Please email us directly at{' '}
                  <a href={`mailto:${company.email}`} className="font-semibold underline">
                    {company.email}
                  </a>
                  .
                </p>
              )}

              <p className="mt-4 text-[0.75rem] leading-relaxed text-ink-400">
                We only use your details to reply to this enquiry. No lists, no sharing.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
