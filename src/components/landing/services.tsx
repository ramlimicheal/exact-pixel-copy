import { ArrowRight } from "lucide-react";
import serviceDesign from "@/assets/service-design.jpg";
import serviceAi from "@/assets/service-ai.jpg";
import serviceDev from "@/assets/service-dev.jpg";
import serviceStrategy from "@/assets/service-strategy.jpg";

const services = [
  {
    n: "01",
    title: "Brand & Identity",
    text: "Positioning, naming, and visual systems that give your company a voice people actually remember.",
    img: serviceStrategy,
    alt: "Minimal white architectural surfaces with soft shadows",
  },
  {
    n: "02",
    title: "Web Design & Development",
    text: "Design-led marketing sites and product interfaces — built fast, and built to convert.",
    img: serviceDesign,
    alt: "Design team workshop around a wooden table at night",
  },
  {
    n: "03",
    title: "AI-Driven Products",
    text: "From prototype to production, we design and ship AI features people actually use.",
    img: serviceAi,
    alt: "Person before an immersive blue particle projection",
  },
  {
    n: "04",
    title: "Growth & Optimization",
    text: "Continuous experimentation across content, SEO, and performance to compound your results.",
    img: serviceDev,
    alt: "Dark room with a glowing analytics screen",
  },
];

export function Services() {
  return (
    <section id="services" className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
          What we do
        </p>
        <h2 className="mt-5 max-w-2xl font-display text-4xl leading-[1.08] tracking-tight sm:text-5xl">
          Design, technology, and AI — one team moving your brand forward
        </h2>

        <div className="mt-16 grid gap-16 lg:grid-cols-2">
          <div>
            {services.map((service) => (
              <div
                key={service.n}
                className="group border-t border-border py-9 first:border-t-0 first:pt-0"
              >
                <div className="flex items-baseline gap-5">
                  <span className="text-xs font-medium text-muted-foreground">
                    ({service.n})
                  </span>
                  <h3 className="font-display text-3xl tracking-tight transition-colors group-hover:text-muted-foreground">
                    {service.title}
                  </h3>
                </div>
                <p className="mt-4 max-w-md pl-12 text-sm leading-relaxed text-muted-foreground">
                  {service.text}
                </p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-1.5 pl-12 text-xs font-semibold tracking-wide uppercase transition-colors hover:text-muted-foreground"
                >
                  Learn more
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-6">
            {services.map((service) => (
              <img
                key={service.n}
                src={service.img}
                alt={service.alt}
                loading="lazy"
                width={880}
                height={640}
                className="aspect-[11/8] w-full rounded-2xl object-cover"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
