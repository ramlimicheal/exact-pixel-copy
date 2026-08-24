import { CircleCheck } from "lucide-react";
import portraitFounder from "@/assets/portrait-founder.jpg";

const points = [
  "A senior team on every engagement — no hand-offs to juniors",
  "Weekly demos and shared channels, so there are zero surprises",
  "Design and engineering under one roof, from day one",
  "AI baked into the process, not bolted on afterwards",
];

const stats = [
  { value: "14+", label: "Years shipping digital products" },
  { value: "25+", label: "Industry awards and recognitions" },
  { value: "48+", label: "Long-term client partnerships" },
];

export function DarkAbout() {
  return (
    <section className="noise bg-dark text-dark-foreground">
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <p className="text-xs font-medium tracking-widest text-dark-muted uppercase">
          Why Novara
        </p>
        <h2 className="mt-5 max-w-3xl font-display text-4xl leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
          We turn strategy, design, and technology into momentum for your
          business
        </h2>

        <div className="mt-16 grid gap-14 lg:grid-cols-2">
          <div>
            <img
              src={portraitFounder}
              alt="Adrian Vale, Founder and Creative Director of Novara"
              loading="lazy"
              width={768}
              height={960}
              className="aspect-[4/5] w-full max-w-sm rounded-2xl object-cover"
            />
            <p className="mt-5 text-sm font-semibold">Adrian Vale</p>
            <p className="mt-1 text-xs text-dark-muted">
              Founder &amp; Creative Director
            </p>
          </div>

          <div className="flex flex-col justify-between gap-10">
            <ul className="space-y-6">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-4">
                  <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-lime" />
                  <span className="text-base leading-relaxed text-dark-foreground/90">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex lg:justify-end">
              <a
                href="#team"
                className="inline-flex h-12 items-center rounded-full bg-lime px-7 text-sm font-semibold text-lime-foreground transition-transform hover:scale-[1.03]"
              >
                Meet the team
              </a>
            </div>
          </div>
        </div>

        <div className="mt-24 grid gap-12 border-t border-dark-border pt-14 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-6xl tracking-tight lg:text-7xl">
                {stat.value}
              </p>
              <p className="mt-4 max-w-48 text-sm leading-relaxed text-dark-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
