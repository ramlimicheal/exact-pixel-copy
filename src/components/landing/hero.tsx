import { ArrowUpRight, Star } from "lucide-react";
import heroBlob from "@/assets/hero-blob.png";

export function Hero() {
  return (
    <header id="top" className="noise overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-14 pb-8 lg:pt-20">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <h1 className="font-display text-6xl leading-[1.02] tracking-tight sm:text-7xl lg:text-[5.25rem]">
              Smart design meets
              <br />
              <em className="italic">seamless development</em>
            </h1>
            <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground">
              Novara is a digital studio pairing brand, product design, and
              engineering — so your next launch ships faster and lands harder.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a
                href="#contact"
                className="inline-flex h-12 items-center rounded-full bg-foreground px-7 text-sm font-medium text-background transition-colors hover:bg-foreground/85"
              >
                Start a project
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-1.5 text-sm font-medium underline underline-offset-4 transition-colors hover:text-muted-foreground"
              >
                See our work
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="relative">
            <img
              src={heroBlob}
              alt="Abstract iridescent green and yellow 3D sculpture"
              width={1200}
              height={900}
              className="w-full"
            />
            <div className="absolute top-4 left-0 hidden w-64 rounded-2xl border border-border bg-card p-4 shadow-xl sm:block">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-foreground text-background">
                  <Star className="h-4 w-4 fill-current" />
                </span>
                <div>
                  <p className="text-sm font-semibold">Rated 4.9/5</p>
                  <p className="text-xs text-muted-foreground">
                    from 120+ client reviews
                  </p>
                </div>
              </div>
              <a
                href="#contact"
                className="mt-4 flex h-9 items-center justify-center rounded-full bg-lime text-xs font-semibold text-lime-foreground transition-transform hover:scale-[1.02]"
              >
                Get started
              </a>
            </div>
          </div>
        </div>

        <p
          aria-hidden="true"
          className="mt-4 font-display text-[19vw] leading-none tracking-tight text-foreground/[0.045] select-none lg:text-[15rem]"
        >
          Novara®
        </p>
      </div>
    </header>
  );
}
