/**
 * BraveEdge Technologies lockup.
 *
 * The mark is a forward chevron with an accent bar — "edge" plus momentum. The
 * wordmark always renders the *complete* company name on one line, with
 * "Technologies" set slightly smaller and lighter as part of the same lockup,
 * rather than as a tagline beneath the name.
 *
 * The space between the two words is a real text node, so the accessible name
 * and any copy-paste both read "BraveEdge Technologies".
 */
const scaleBySize = {
  sm: {
    mark: 'h-8 w-8',
    primary: 'text-[0.875rem]',
    secondary: 'text-[0.75rem]',
  },
  md: {
    mark: 'h-8 w-8 sm:h-9 sm:w-9',
    primary: 'text-[0.9375rem] sm:text-[1.0625rem]',
    secondary: 'text-[0.75rem] sm:text-[0.9375rem]',
  },
  lg: {
    mark: 'h-11 w-11',
    primary: 'text-[1.25rem]',
    secondary: 'text-[1.0625rem]',
  },
};

export default function Logo({ variant = 'dark', size = 'md', className = '' }) {
  const isLight = variant === 'light';
  const gradientId = `be-mark-${variant}`;
  const scale = scaleBySize[size] || scaleBySize.md;

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

      <span
        className={`font-display font-extrabold leading-none tracking-tight ${
          isLight ? 'text-white' : 'text-ink-900'
        }`}
      >
        <span className={scale.primary}>BraveEdge</span>{' '}
        <span className={`font-semibold ${scale.secondary} ${isLight ? 'text-ink-200/75' : 'text-ink-500'}`}>
          Technologies
        </span>
      </span>
    </span>
  );
}
