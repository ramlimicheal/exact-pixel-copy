import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What does a typical engagement look like?",
    a: "Most projects run in weekly cycles over six to twelve weeks. You get a dedicated senior team, a shared channel, and a demo every Friday — so progress is something you watch, not something you wait for.",
  },
  {
    q: "How fast can we launch?",
    a: "A focused marketing site typically ships in four to six weeks. Larger product builds are phased, so you start seeing live results within the first month instead of waiting for a big-bang release.",
  },
  {
    q: "Do you work with early-stage startups?",
    a: "Yes — roughly half our clients are pre-Series B. We shape the scope around your runway and prioritize the work that unlocks growth or fundraising first.",
  },
  {
    q: "How do you use AI in your process?",
    a: "AI accelerates our research, prototyping, and QA — while every design decision and line of shipped code is reviewed by senior humans. For clients, we also design and build AI-powered product features end to end.",
  },
  {
    q: "What does it cost?",
    a: "Engagements start at a fixed project fee with no hidden hours. After a short discovery call we send a written proposal with scope, timeline, and price — usually within 48 hours.",
  },
];

export function Faq() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-2 lg:py-32">
        <div>
          <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
            FAQ
          </p>
          <h2 className="mt-5 font-display text-4xl leading-[1.08] tracking-tight sm:text-5xl">
            Answers, before you even ask
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
            Everything founders and marketing leads usually want to know before
            working with us. Something missing? Just ask.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={faq.q} value={`item-${i}`}>
              <AccordionTrigger className="text-left font-display text-xl tracking-tight hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
