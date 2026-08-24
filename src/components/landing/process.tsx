import { ArrowUpRight } from "lucide-react";

const steps = [
  {
    n: "01",
    title: "Discover",
    text: "We dig into your goals, users, and market to find the sharpest possible angle.",
  },
  {
    n: "02",
    title: "Design",
    text: "Rapid concepts become a polished direction, tested with real users early.",
  },
  {
    n: "03",
    title: "Build",
    text: "Design and engineering ship together in weekly cycles you can actually follow.",
  },
  {
    n: "04",
    title: "Scale",
    text: "We measure, learn, and keep improving — launch is the floor, not the ceiling.",
  },
];

export function Process() {
  return (
    <section id="process" className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
          How we work
        </p>
        <h2 className="mt-5 max-w-2xl font-display text-4xl leading-[1.08] tracking-tight sm:text-5xl">
          A simple process designed for clarity, speed, and results
        </h2>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.n}
              className="rounded-2xl border border-border bg-card p-8 transition-colors hover:bg-secondary"
            >
              <span className="text-xs font-medium text-muted-foreground">
                ({step.n})
              </span>
              <h3 className="mt-8 font-display text-3xl tracking-tight">
                {step.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {step.text}
              </p>
            </div>
          ))}

          <div className="flex min-h-56 flex-col justify-between rounded-2xl bg-gradient-to-r from-lime via-lime to-sun p-8 sm:col-span-2">
            <div className="flex items-start justify-between gap-6">
              <p className="max-w-md font-display text-3xl leading-tight tracking-tight text-lime-foreground">
                Let&rsquo;s build what&rsquo;s next for your brand.
              </p>
              <ArrowUpRight
                aria-hidden="true"
                className="h-14 w-14 shrink-0 text-lime-foreground"
                strokeWidth={1.25}
              />
            </div>
            <a
              href="#contact"
              className="mt-8 inline-flex h-11 w-fit items-center rounded-full bg-card px-6 text-sm font-semibold text-card-foreground transition-transform hover:scale-[1.03]"
            >
              Start a project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
