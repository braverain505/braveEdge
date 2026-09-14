/**
 * BraveEdge wordmark. The mark is a forward chevron with an accent bar —
 * "edge" plus momentum. Renders inline so it can inherit colour anywhere.
 */
export default function Logo({ variant = 'dark', className = '', showCompanyType = true }) {
  const isLight = variant === 'light';
  const gradientId = `be-mark-${variant}`;

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 32 32" className="h-9 w-9 shrink-0" aria-hidden="true">
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

      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[1.0625rem] font-extrabold tracking-tight ${
            isLight ? 'text-white' : 'text-ink-900'
          }`}
        >
          BraveEdge
        </span>
        {showCompanyType && (
          <span
            className={`mt-1 text-[0.5625rem] font-semibold uppercase tracking-[0.2em] ${
              isLight ? 'text-ink-200/70' : 'text-ink-400'
            }`}
          >
            Technologies
          </span>
        )}
      </span>
    </span>
  );
}
