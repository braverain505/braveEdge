/**
 * Inline SVG icon set. Kept local so the site ships with no icon dependency.
 * Every icon inherits `currentColor` and sizing from the parent class.
 */

const paths = {
  flow: (
    <>
      <circle cx="5.6" cy="6.5" r="2.3" />
      <circle cx="5.6" cy="17.5" r="2.3" />
      <circle cx="18.4" cy="12" r="2.3" />
      <path d="M7.9 7.4 16.2 11.2" />
      <path d="M7.9 16.6 16.2 12.8" />
    </>
  ),
  spark: (
    <>
      <path d="M12 3.2l1.9 5.1 5.1 1.9-5.1 1.9-1.9 5.1-1.9-5.1L5 10.2l5.1-1.9z" />
      <path d="M18.2 16.4l.7 1.9 1.9.7-1.9.7-.7 1.9-.7-1.9-1.9-.7 1.9-.7z" />
    </>
  ),
  plug: (
    <>
      <path d="M9 3.5v4M15 3.5v4" />
      <path d="M6.5 7.5h11v3.1a5.5 5.5 0 0 1-11 0z" />
      <path d="M12 16.1v4.4" />
    </>
  ),
  chart: (
    <>
      <path d="M4 20.5h16" />
      <rect x="5.4" y="12" width="3.6" height="6.5" rx="1.1" />
      <rect x="10.2" y="7.5" width="3.6" height="11" rx="1.1" />
      <rect x="15" y="10" width="3.6" height="8.5" rx="1.1" />
    </>
  ),
  window: (
    <>
      <rect x="3" y="4.5" width="18" height="15" rx="2.6" />
      <path d="M3 9h18" />
      <circle cx="6.3" cy="6.8" r=".85" fill="currentColor" stroke="none" />
      <circle cx="9.1" cy="6.8" r=".85" fill="currentColor" stroke="none" />
      <path d="M7 12.6h5M7 15.9h7" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 5.8v5.4c0 4.2 2.9 7.1 7 9.8 4.1-2.7 7-5.6 7-9.8V5.8z" />
      <path d="m9.3 11.8 2 2 3.5-3.8" />
    </>
  ),
  arrowRight: <path d="M5 12h13M13.2 6.6 18.6 12l-5.4 5.4" />,
  arrowUpRight: <path d="M7.6 16.4 16.4 7.6M9.6 7.6h6.8v6.8" />,
  check: <path d="m5.2 12.6 4.3 4.3L18.8 7" />,
  mail: (
    <>
      <rect x="3" y="5.5" width="18" height="13" rx="2.4" />
      <path d="m4.5 8 6.6 4.6a1.6 1.6 0 0 0 1.8 0L19.5 8" />
    </>
  ),
  phone: (
    <path d="M7.1 3.8h3l1.5 3.7-2 1.3a11.3 11.3 0 0 0 5.6 5.6l1.3-2 3.7 1.5v3a2 2 0 0 1-2.2 2A16.4 16.4 0 0 1 5.1 6a2 2 0 0 1 2-2.2z" />
  ),
  pin: (
    <>
      <path d="M12 21c4-4.2 6-7.3 6-10a6 6 0 1 0-12 0c0 2.7 2 5.8 6 10z" />
      <circle cx="12" cy="10.8" r="2.3" />
    </>
  ),
  menu: <path d="M4 7.5h16M4 12h16M4 16.5h16" />,
  close: <path d="M6.4 6.4 17.6 17.6M17.6 6.4 6.4 17.6" />,
  plus: <path d="M12 5.5v13M5.5 12h13" />,
  minus: <path d="M5.5 12h13" />,
  chevronUp: <path d="m6.5 14.5 5.5-5.5 5.5 5.5" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="8.4" />
      <path d="M12 7.6V12l3.1 1.9" />
    </>
  ),
  layers: (
    <>
      <path d="m12 3.6 8.4 4.3-8.4 4.3-8.4-4.3z" />
      <path d="m3.6 12.4 8.4 4.3 8.4-4.3" />
      <path d="m3.6 16.6 8.4 4.3 8.4-4.3" />
    </>
  ),
};

export const iconNames = Object.keys(paths);

export default function Icon({ name, className = 'h-6 w-6', strokeWidth = 1.6 }) {
  const content = paths[name];
  if (!content) return null;

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {content}
    </svg>
  );
}
