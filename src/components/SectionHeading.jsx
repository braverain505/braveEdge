import Reveal from './Reveal.jsx';

/**
 * Consistent section header used across the page.
 * `align` is 'center' (default) or 'left'; `tone` is 'light' or 'dark'.
 */
export default function SectionHeading({ eyebrow, title, description, align = 'center', tone = 'light' }) {
  const isCenter = align === 'center';
  const isDark = tone === 'dark';

  return (
    <div className={isCenter ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'}>
      {eyebrow && (
        <Reveal>
          <span
            className={`eyebrow ${
              isDark ? 'border-white/15 bg-white/5 text-ink-100 shadow-none backdrop-blur' : ''
            }`}
          >
            {eyebrow}
          </span>
        </Reveal>
      )}

      <Reveal delay={60}>
        <h2
          className={`mt-5 text-3xl font-bold leading-[1.15] sm:text-4xl lg:text-[2.625rem] ${
            isDark ? 'text-white' : 'text-ink-900'
          }`}
        >
          {title}
        </h2>
      </Reveal>

      {description && (
        <Reveal delay={120}>
          <p className={`mt-5 text-base leading-relaxed sm:text-[1.0625rem] ${isDark ? 'text-ink-200/85' : 'text-ink-500'} ${isCenter ? 'mx-auto' : ''}`}>
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
