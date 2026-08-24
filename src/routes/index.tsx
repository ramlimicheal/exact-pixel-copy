import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/landing/nav";
import { Hero } from "@/components/landing/hero";
import { WorkMarquee } from "@/components/landing/work-marquee";
import { Trusted } from "@/components/landing/trusted";
import { Services } from "@/components/landing/services";
import { DarkAbout } from "@/components/landing/dark-about";
import { Testimonial } from "@/components/landing/testimonial";
import { Process } from "@/components/landing/process";
import { Team } from "@/components/landing/team";
import { Insights } from "@/components/landing/insights";
import { Faq } from "@/components/landing/faq";
import { CtaSection } from "@/components/landing/cta-section";
import { Footer } from "@/components/landing/footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Novara — Smart Design Meets Seamless Development" },
      {
        name: "description",
        content:
          "Novara is a digital studio pairing brand, product design, and engineering — so your next launch ships faster and lands harder.",
      },
      {
        property: "og:title",
        content: "Novara — Smart Design Meets Seamless Development",
      },
      {
        property: "og:description",
        content:
          "A digital studio for brands that want design, code, and AI working as one.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground antialiased">
      <Nav />
      <Hero />
      <WorkMarquee />
      <Trusted />
      <Services />
      <DarkAbout />
      <Testimonial />
      <Process />
      <Team />
      <Insights />
      <Faq />
      <CtaSection />
      <Footer />
    </main>
  );
}
