import Icon from './Icons.jsx';
import Reveal from './Reveal.jsx';
import { products } from '../data/site.js';

/**
 * Product access links. Cards are driven by the `products` array in
 * src/data/site.js — one entry renders one card.
 */
export default function Products() {
  return (
    <section id="products" className="scroll-mt-24 py-6 sm:py-10">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-4xl bg-ink-900 px-6 py-14 shadow-lift sm:px-10 sm:py-16 lg:px-14">
            {/* Ambient texture */}
            <div className="pointer-events-none absolute inset-0" aria-hidden="true">
              <div className="absolute inset-0 bg-grid-dark bg-grid [mask-image:radial-gradient(ellipse_70%_60%_at_15%_0%,black,transparent)]" />
              <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-brand-500/25 blur-[100px]" />
              <div className="absolute -bottom-24 left-10 h-64 w-64 rounded-full bg-teal-500/10 blur-[100px]" />
            </div>

            <div className="relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-ink-100 backdrop-blur">
                  Product access
                </span>
                <h2 className="mt-5 text-3xl font-bold leading-[1.15] text-white sm:text-4xl">
                  Platforms we have built, ready when you are.
                </h2>
                <p className="mt-5 max-w-md text-[0.9375rem] leading-relaxed text-ink-200/85">
                  Beyond client work, we build our own tools. Existing clients and partners can jump straight in using
                  the access links below.
                </p>

                <div className="mt-8 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3.5 backdrop-blur">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-ink-100">
                    <Icon name="shield" className="h-[1.125rem] w-[1.125rem]" />
                  </span>
                  <p className="text-[0.8125rem] leading-snug text-ink-200/85">
                    Need an account or a link that is not listed?{' '}
                    <a href="#contact" className="font-semibold text-white underline decoration-white/30 underline-offset-4 transition hover:decoration-white">
                      Ask us for access
                    </a>
                    .
                  </p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {products.map((product, index) => {
                  const isLive = product.status === 'live' && product.url;

                  return (
                    <Reveal key={product.name} delay={index * 80} className="h-full">
                      <article className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.09]">
                        <div className="flex items-center justify-between gap-3">
                          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-700 font-display text-base font-extrabold text-white shadow-inset">
                            {product.name.charAt(0)}
                          </span>
                          <span
                            className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[0.5625rem] font-bold uppercase tracking-wider ${
                              isLive ? 'bg-teal-500/15 text-teal-400' : 'bg-white/10 text-ink-200'
                            }`}
                          >
                            <span className={`h-1.5 w-1.5 rounded-full ${isLive ? 'bg-teal-400' : 'bg-ink-200'}`} />
                            {isLive ? 'Live' : 'In progress'}
                          </span>
                        </div>

                        <div className="mt-4 flex items-baseline gap-2">
                          <h3 className="font-display text-lg font-bold text-white">{product.name}</h3>
                          {product.tag && (
                            <span className="text-[0.6875rem] font-medium uppercase tracking-wider text-ink-300/70">
                              {product.tag}
                            </span>
                          )}
                        </div>

                        <p className="mt-2.5 flex-1 text-[0.8125rem] leading-relaxed text-ink-200/75">
                          {product.description}
                        </p>

                        {isLive ? (
                          <a
                            href={product.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-5 inline-flex items-center justify-between gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-ink-900 transition group-hover:bg-brand-50"
                          >
                            Open {product.name}
                            <Icon name="arrowUpRight" className="h-4 w-4" strokeWidth={2} />
                          </a>
                        ) : (
                          <span className="mt-5 inline-flex items-center justify-between gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-sm font-semibold text-ink-300/70">
                            Access on request
                            <Icon name="clock" className="h-4 w-4" />
                          </span>
                        )}
                      </article>
                    </Reveal>
                  );
                })}

                {/* Slot for the next product — delete when a real entry is added. */}
                <Reveal delay={products.length * 80} className="h-full">
                  <article className="flex h-full flex-col justify-center rounded-2xl border border-dashed border-white/15 p-5 text-center">
                    <p className="text-[0.8125rem] font-semibold text-ink-200/80">More tools are in the works</p>
                    <p className="mt-2 text-[0.75rem] leading-relaxed text-ink-300/60">
                      New access links appear here as each product goes live.
                    </p>
                  </article>
                </Reveal>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
