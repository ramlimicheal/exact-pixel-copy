import expert from "@/assets/expert.jpg";

export function CtaSection() {
  return (
    <section id="contact" className="noise border-t border-border bg-card">
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-2 lg:py-32">
        <div>
          <h2 className="font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl">
            Talk to an expert
          </h2>
          <p className="mt-7 max-w-md text-base leading-relaxed text-muted-foreground">
            Tell us where you&rsquo;re headed. We&rsquo;ll show you the fastest
            route to a sharper brand, a faster site, and a product people love
            to use.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a
              href="mailto:hello@novara.studio"
              className="inline-flex h-12 items-center rounded-full bg-lime px-7 text-sm font-semibold text-lime-foreground transition-transform hover:scale-[1.03]"
            >
              Book an intro call
            </a>
            <p className="text-xs text-muted-foreground">
              Average reply time: under 24 hours
            </p>
          </div>
        </div>

        <div className="lg:justify-self-end">
          <img
            src={expert}
            alt="Elena Ruiz, Strategy Director at Novara"
            loading="lazy"
            width={768}
            height={960}
            className="aspect-[4/5] w-full max-w-sm rounded-2xl object-cover"
          />
          <p className="mt-5 text-sm font-semibold">Elena Ruiz</p>
          <p className="mt-1 text-xs text-muted-foreground">
            Strategy Director
          </p>
        </div>
      </div>
    </section>
  );
}
