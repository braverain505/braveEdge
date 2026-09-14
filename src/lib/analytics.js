/**
 * Provider-agnostic event tracking.
 *
 * The analytics script itself is injected at build time (see plugins/seo.js)
 * from VITE_ANALYTICS_PROVIDER. This helper only fires custom events, and it
 * dispatches to whichever provider global is present, so it keeps working if
 * you swap providers later.
 *
 * Every call is a safe no-op when nothing is configured — analytics must never
 * be able to break the page.
 */
const isBrowser = typeof window !== 'undefined';

export function track(event, props = {}) {
  if (!isBrowser || !event) return;

  try {
    // Simple Analytics queues early events via the sa_event placeholder,
    // which the build-time snippet installs.
    window.sa_event?.(event);
    window.plausible?.(event, { props });
    window.fathom?.track?.(event, props);
    window.umami?.track?.(event, props);
    window.gtag?.('event', event, props);
  } catch {
    // Swallow — never let tracking throw into a click handler.
  }
}

export default track;
