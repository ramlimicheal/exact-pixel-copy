import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import team4 from "@/assets/team-4.jpg";

const members = [
  { img: team1, name: "Jonas Berger", role: "Head of Design" },
  { img: team2, name: "Sofia Marchetti", role: "Design Lead" },
  { img: team3, name: "Daniel Okafor", role: "Engineering Lead" },
  { img: team4, name: "Elena Ruiz", role: "Strategy Director" },
];

export function Team() {
  return (
    <section id="team" className="noise bg-dark text-dark-foreground">
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <p className="text-xs font-medium tracking-widest text-dark-muted uppercase">
          Our team
        </p>
        <h2 className="mt-5 max-w-2xl font-display text-4xl leading-[1.08] tracking-tight sm:text-5xl">
          A talented team of thinkers, engineers, and strategists
        </h2>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((member) => (
            <figure key={member.name} className="group">
              <img
                src={member.img}
                alt={`${member.name}, ${member.role} at Novara`}
                loading="lazy"
                width={640}
                height={800}
                className="aspect-[4/5] w-full rounded-2xl object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
              />
              <figcaption className="mt-5">
                <p className="text-sm font-semibold">{member.name}</p>
                <p className="mt-1 text-xs text-dark-muted">{member.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
