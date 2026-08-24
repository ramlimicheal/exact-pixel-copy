import { ArrowUpRight } from "lucide-react";
import insight1 from "@/assets/insight-1.jpg";
import insight2 from "@/assets/insight-2.jpg";
import insight3 from "@/assets/insight-3.jpg";
import insight4 from "@/assets/insight-4.jpg";

const posts = [
  {
    img: insight1,
    alt: "Crumpled metallic silver foil texture",
    date: "Aug 12, 2026",
    tag: "Brand",
    title: "Why brand systems break at scale — and how to fix them",
  },
  {
    img: insight2,
    alt: "Soft grey light rays on a minimal surface",
    date: "Jul 28, 2026",
    tag: "Product",
    title: "Designing the interfaces that AI features deserve",
  },
  {
    img: insight3,
    alt: "Construction crane against a pink dusk sky",
    date: "Jul 09, 2026",
    tag: "Process",
    title: "From brief to launch in six weeks: our delivery playbook",
  },
  {
    img: insight4,
    alt: "Aerial view of dense city rooftops",
    date: "Jun 20, 2026",
    tag: "Engineering",
    title: "The performance budget every marketing site needs",
  },
];

export function Insights() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
            Insights
          </p>
          <h2 className="mt-5 max-w-xl font-display text-4xl leading-[1.08] tracking-tight sm:text-5xl">
            Notes from the studio
          </h2>
        </div>
        <a
          href="#contact"
          className="hidden h-11 items-center gap-2 rounded-full bg-foreground px-6 text-sm font-medium text-background transition-colors hover:bg-foreground/85 sm:inline-flex"
        >
          View all articles
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>

      <div className="mt-14 grid gap-x-6 gap-y-14 sm:grid-cols-2">
        {posts.map((post) => (
          <a key={post.title} href="#contact" className="group block">
            <div className="overflow-hidden rounded-2xl">
              <img
                src={post.img}
                alt={post.alt}
                loading="lazy"
                width={880}
                height={620}
                className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <p className="mt-5 text-xs font-medium tracking-wide text-muted-foreground uppercase">
              {post.date} · {post.tag}
            </p>
            <h3 className="mt-2 max-w-md font-display text-2xl leading-snug tracking-tight transition-colors group-hover:text-muted-foreground">
              {post.title}
            </h3>
          </a>
        ))}
      </div>
    </section>
  );
}
