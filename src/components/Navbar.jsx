import { useEffect, useState } from 'react';
import Logo from './Logo.jsx';
import Icon from './Icons.jsx';
import { nav } from '../data/site.js';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Keep the page from scrolling behind the open mobile menu.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${
        scrolled ? 'border-b border-ink-900/10 bg-white/85 backdrop-blur-lg' : 'border-b border-transparent'
      }`}
    >
      <div className="container-x">
        <div className="flex h-[4.5rem] items-center justify-between gap-6">
          <a href="#top" className="shrink-0" onClick={() => setOpen(false)}>
            <Logo />
            <span className="sr-only">BraveEdge Technologies — home</span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-ink-600 transition hover:bg-ink-900/5 hover:text-ink-900"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a href="#products" className="text-sm font-semibold text-ink-700 transition hover:text-ink-900">
              Client &amp; product access
            </a>
            <a href="#contact" className="btn-accent btn-lg">
              Book a call
              <Icon name="arrowRight" className="h-4 w-4" strokeWidth={2} />
            </a>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink-900/10 bg-white text-ink-800 shadow-soft lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <Icon name={open ? 'close' : 'menu'} className="h-5 w-5" strokeWidth={1.9} />
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-ink-900/10 bg-white lg:hidden">
          <div className="container-x py-5">
            <nav className="flex flex-col" aria-label="Mobile">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-ink-900/5 py-3.5 text-[0.9375rem] font-medium text-ink-700"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <a href="#contact" onClick={() => setOpen(false)} className="btn-accent btn-lg mt-5 w-full">
              Book a discovery call
              <Icon name="arrowRight" className="h-4 w-4" strokeWidth={2} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
