import serviceDesign from "@/assets/service-design.jpg";
import serviceAi from "@/assets/service-ai.jpg";
import serviceDev from "@/assets/service-dev.jpg";
import serviceStrategy from "@/assets/service-strategy.jpg";
import insight3 from "@/assets/insight-3.jpg";
import insight4 from "@/assets/insight-4.jpg";

const items = [
  { img: serviceDesign, title: "Atlas Coffee — Brand & Web" },
  { img: serviceAi, title: "Lumen Expo — AI Installation" },
  { img: serviceDev, title: "Northlane — Product Platform" },
  { img: serviceStrategy, title: "Forma Haus — Identity System" },
  { img: insight3, title: "Buildwise — Marketing Site" },
  { img: insight4, title: "Urban Grid — Data Platform" },
];

export function WorkMarquee() {
  return (
    <section id="work" className="py-16">
      <div className="mx-auto mb-8 flex max-w-7xl items-baseline justify-between px-6">
        <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
          Selected work
        </p>
        <p className="text-xs text-muted-foreground">2019 — 2026</p>
      </div>
      <div className="overflow-hidden">
        <div className="flex w-max animate-marquee gap-6 pr-6">
          {[...items, ...items].map((item, i) => (
            <figure key={i} className="w-60 shrink-0 sm:w-72">
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                width={880}
                height={640}
                className="aspect-[4/3] w-full rounded-xl object-cover"
              />
              <figcaption className="mt-3 text-xs font-medium text-muted-foreground">
                {item.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
