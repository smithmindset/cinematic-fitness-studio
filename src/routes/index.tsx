import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { Hero, About, Classes, Coaches, Membership, Visit, Footer } from "@/components/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GO Fitness Centre — Train Beyond Limits | Lekki, Lagos" },
      { name: "description", content: "Lagos' premier fitness centre in Ikate Elegushi, Lekki. Strength, conditioning, boxing and group classes with elite coaches." },
      { property: "og:title", content: "GO Fitness Centre — Train Beyond Limits" },
      { property: "og:description", content: "Lagos' premier fitness centre in Ikate Elegushi, Lekki." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <SiteNav />
      <Hero />
      <About />
      <Classes />
      <Coaches />
      <Membership />
      <Visit />
      <Footer />
    </main>
  );
}
