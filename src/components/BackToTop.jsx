import { useEffect, useState } from 'react';
import Icon from './Icons.jsx';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-50 inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink-900/10 bg-white/90 text-ink-700 shadow-lift backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:text-ink-900 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
      }`}
    >
      <Icon name="chevronUp" className="h-5 w-5" strokeWidth={2} />
    </button>
  );
}
