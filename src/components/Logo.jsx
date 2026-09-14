/**
 * Flintwire logo.
 *
 * Renders `src/assets/flintwire.png` — the brand lockup, mark plus the
 * "flintwire" wordmark — as one image, so the artwork and the lettering can
 * never drift apart.
 *
 * The artwork is blue (#1050f0) with dark navy (#101030) lettering on a
 * transparent background. That reads well on the white header, but the navy
 * half would all but disappear against the near-black footer, so the `light`
 * variant sets the image on a white rounded chip to keep it legible.
 *
 * The asset is pre-cropped and downscaled to 720px wide (≈3.7:1). The largest
 * rendered height is 2.75rem, giving a width of ~163px, so the single file
 * still covers a 4x display — no separate retina asset is needed.
 */
import logoUrl from '../assets/flintwire.png';

// Intrinsic pixel size of the asset. Passed to <img> so the browser can reserve
// the right space before the image loads and the header never shifts.
const INTRINSIC_WIDTH = 720;
const INTRINSIC_HEIGHT = 194;

const scaleBySize = {
  sm: {
    image: 'h-6',
    chip: 'px-2 py-1',
  },
  md: {
    image: 'h-8 sm:h-9',
    chip: 'px-2.5 py-1.5',
  },
  lg: {
    image: 'h-11',
    chip: 'px-3 py-2',
  },
};

export default function Logo({ variant = 'dark', size = 'md', className = '' }) {
  const isLight = variant === 'light';
  const scale = scaleBySize[size] || scaleBySize.md;

  const image = (
    <img
      src={logoUrl}
      alt="Flintwire"
      width={INTRINSIC_WIDTH}
      height={INTRINSIC_HEIGHT}
      className={`${scale.image} w-auto shrink-0`}
      decoding="async"
    />
  );

  // On light backgrounds the artwork sits directly on the page.
  if (!isLight) {
    return <span className={`inline-flex items-center ${className}`}>{image}</span>;
  }

  // On dark backgrounds it gets a white chip so the navy lettering stays visible.
  return (
    <span className={`inline-flex items-center rounded-xl bg-white shadow-soft ${scale.chip} ${className}`}>
      {image}
    </span>
  );
}
