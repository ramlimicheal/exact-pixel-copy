import { Award, Star } from "lucide-react";

const clients = [
  { name: "Vertex", className: "font-display text-3xl italic" },
  { name: "NORTHLANE", className: "text-lg font-bold tracking-[0.3em]" },
  { name: "kudo", className: "font-display text-3xl" },
  { name: "Aster & Co.", className: "text-xl font-semibold tracking-tight" },
  { name: "PYLON", className: "text-lg font-bold tracking-[0.2em]" },
  { name: "meridian", className: "font-display text-3xl italic" },
];

export function Trusted() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
            Who we work with
          </p>
          <h2 className="mt-5 font-display text-4xl leading-[1.08] tracking-tight sm:text-5xl">
            Trusted by teams across industries, powered by design, code &amp;
            AI
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
            From venture-backed startups to global brands, we plug in as the
            senior product team you wish you had — and stay as long as the
            results keep compounding.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="inline-flex h-10 items-center gap-2 rounded-full bg-foreground px-5 text-xs font-semibold text-background">
              <Star className="h-3.5 w-3.5 fill-current" />
              4.9 on Clutch
            </span>
            <span className="inline-flex h-10 items-center gap-2 rounded-full bg-foreground px-5 text-xs font-semibold text-background">
              <Award className="h-3.5 w-3.5" />
              Awwwards Honoree
            </span>
          </div>
        </div>

        <div className="mt-20 flex flex-wrap items-center justify-between gap-x-10 gap-y-8 border-t border-border pt-12 text-foreground/55">
          {clients.map((client) => (
            <span key={client.name} className={client.className}>
              {client.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
