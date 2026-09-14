/**
 * Flintwire wordmark.
 *
 * The mark is a forward chevron with an accent bar — forward motion.
 *
 * The name is set in two related brand colours: "Flint" in brand blue and
 * "wire" in the teal accent, matching the blue-to-teal pairing already used by
 * the mark and the scroll progress bar. The two halves sit in adjacent spans
 * with no space, so they read as the single word "Flintwire" while still
 * giving each half its own colour.
 *
 * Shade choice is deliberate, not decorative: on white, `teal-700` is the only
 * teal light enough to look right and dark enough to stay legible (teal-600
 * fails contrast at this text size); on dark, the lighter `brand-300` and
 * `teal-400` are used instead.
 */
const scaleBySize = {
  sm: {
    mark: 'h-7 w-7',
    text: 'text-[0.9375rem]',
  },
  md: {
    mark: 'h-8 w-8 sm:h-9 sm:w-9',
    text: 'text-[1.0625rem] sm:text-[1.1875rem]',
  },
  lg: {
    mark: 'h-11 w-11',
    text: 'text-[1.5rem]',
  },
};

export default function Logo({ variant = 'dark', size = 'md', className = '' }) {
  const isLight = variant === 'light';
  const gradientId = `fw-mark-${variant}`;
  const scale = scaleBySize[size] || scaleBySize.md;

  const flintColor = isLight ? 'text-brand-300' : 'text-brand-600';
  const wireColor = isLight ? 'text-teal-400' : 'text-teal-700';

  return (
    <span className={`inline-flex items-center gap-2 sm:gap-2.5 ${className}`}>
      <svg viewBox="0 0 32 32" className={`${scale.mark} shrink-0`} aria-hidden="true">
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={isLight ? '#5b85fd' : '#1e40ec'} />
            <stop offset="100%" stopColor={isLight ? '#1e40ec' : '#0f2039'} />
          </linearGradient>
        </defs>
        <rect width="32" height="32" rx="9" fill={`url(#${gradientId})`} />
        <path
          d="M11.5 9.5 18 16l-6.5 6.5"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M19 22.5h3.2" fill="none" stroke="#90b0ff" strokeWidth="2.6" strokeLinecap="round" />
      </svg>

      <span className={`font-display font-extrabold leading-none tracking-tight ${scale.text}`}>
        <span className={flintColor}>Flint</span>
        <span className={wireColor}>wire</span>
      </span>
    </span>
  );
}
