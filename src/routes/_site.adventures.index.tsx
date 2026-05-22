import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { adventures, categories } from "@/data/adventures";
import { AdventureCard } from "@/components/site/AdventureCard";
import { Reveal } from "@/components/site/Reveal";
import { Search } from "lucide-react";

export const Route = createFileRoute("/_site/adventures/")({
  head: () => ({
    meta: [
      { title: "Adventures — Ricky Events Tours & Travel" },
      { name: "description", content: "Browse curated Kenyan hikes, cycling, camping, road trips and nature escapes." },
      { property: "og:title", content: "All Adventures — Ricky Events" },
      { property: "og:description", content: "Hand-picked adventures across Kenya — pick your next story." },
    ],
  }),
  component: AdventuresPage,
});

function AdventuresPage() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const [q, setQ] = useState("");
  const list = adventures.filter((a) =>
    (filter === "All" || a.category === filter) &&
    (q === "" || a.name.toLowerCase().includes(q.toLowerCase()))
  );
  return (
    <>
      <PageHero title="Every adventure, one place." kicker="Adventures" sub="Browse, filter and find the trip that's calling your name." />
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-widest transition-all ${
                    filter === c ? "border-transparent bg-gradient-sunset text-white shadow-glow" : "border-border bg-muted text-muted-foreground hover:text-foreground"
                  }`}
                >{c}</button>
              ))}
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search adventures..." className="w-full rounded-full border border-border bg-card py-2.5 pl-10 pr-4 text-sm focus:border-accent focus:outline-none md:w-72" />
            </div>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((a, i) => (
              <Reveal key={a.slug} delay={i * 0.04}>
                <AdventureCard a={a} />
              </Reveal>
            ))}
          </div>
          {list.length === 0 && (
            <p className="py-20 text-center text-muted-foreground">No adventures match your search yet.</p>
          )}
        </div>
      </section>
    </>
  );
}

export function PageHero({ title, kicker, sub, image }: { title: string; kicker: string; sub: string; image?: string }) {
  return (
    <section className="relative flex min-h-[60vh] items-end overflow-hidden pt-32 text-white">
      <div className="absolute inset-0">
        <img src={image ?? adventures[0].image} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-black/40 to-black/40" />
      </div>
      <div className="relative mx-auto w-full max-w-7xl px-6 pb-16 md:px-10 md:pb-24">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-accent">{kicker}</p>
        <h1 className="mt-3 max-w-4xl font-display text-5xl font-bold leading-[1] text-balance md:text-7xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg text-white/80">{sub}</p>
      </div>
    </section>
  );
}
