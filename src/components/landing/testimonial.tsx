import team2 from "@/assets/team-2.jpg";

export function Testimonial() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div
        aria-hidden="true"
        className="absolute top-1/2 -left-48 h-96 w-96 -translate-y-1/2 rounded-full bg-lime opacity-45 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/3 -left-32 h-72 w-72 rounded-full bg-sun opacity-60 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex h-9 items-center rounded-full border border-border bg-card px-4 text-xs font-semibold tracking-wide uppercase">
            Client stories
          </span>
          <h2 className="mt-6 font-display text-4xl leading-[1.08] tracking-tight sm:text-5xl">
            Collaboration that blends creativity, performance, and AI insight
          </h2>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl items-start gap-8 lg:grid-cols-[auto_1fr] lg:gap-12">
          <span
            aria-hidden="true"
            className="font-display text-[7rem] leading-[0.6] tracking-tight lg:text-[10rem]"
          >
            &ldquo;
          </span>
          <div>
            <blockquote className="font-display text-2xl leading-snug tracking-tight sm:text-3xl">
              Working with Novara felt like adding a senior design and
              engineering department overnight. Every sprint ended with
              something real we could ship — and the numbers followed within a
              quarter.
            </blockquote>
            <div className="mt-9 flex items-center gap-3">
              <img
                src={team2}
                alt="Maya Chen"
                loading="lazy"
                width={640}
                height={800}
                className="h-11 w-11 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-semibold">Maya Chen</p>
                <p className="text-xs text-muted-foreground">
                  VP Product, Northlane
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
