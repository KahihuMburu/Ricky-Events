import { createFileRoute, Link } from "@tanstack/react-router";
import { adventures } from "@/data/adventures";
import community from "@/assets/community.jpg";
import { Reveal } from "@/components/site/Reveal";
import { PageHero } from "./_site.adventures.index";
import { ArrowUpRight, Search } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/_site/blog")({
  head: () => ({
    meta: [
      { title: "Travel Stories — Ricky Events" },
      { name: "description", content: "Field notes, packing guides and travel stories from Ricky Events." },
      { property: "og:title", content: "Travel Stories — Ricky Events" },
      { property: "og:description", content: "Tips and tales from the trail." },
    ],
  }),
  component: Blog,
});

const posts = [
  { t: "10 things every Kenyan hiker should pack", c: "Packing", img: adventures[0].image, slug: "packing", featured: true, excerpt: "Built from 100+ trips: the gear that actually survives a Kenyan ridge." },
  { t: "Beginner's guide to Mt. Longonot", c: "Hiking", img: adventures[4].image, slug: "longonot", excerpt: "Everything you need to know before your first crater hike." },
  { t: "Why community travel hits different", c: "Stories", img: community, slug: "community", excerpt: "On strangers becoming family, 6km into the bush." },
  { t: "Cycling Limuru: the slow Saturday playbook", c: "Cycling", img: adventures[3].image, slug: "limuru", excerpt: "Tea farms, brunch, and the route that locals actually love." },
  { t: "Training for Mt. Kenya in 8 weeks", c: "Fitness", img: adventures[6].image, slug: "mtkenya", excerpt: "A realistic ramp-up if your last hike was years ago." },
  { t: "5 underrated Kenyan weekend getaways", c: "Destinations", img: adventures[5].image, slug: "weekends", excerpt: "Beyond Naivasha and the usual suspects." },
];

function Blog() {
  const [q, setQ] = useState("");
  const list = posts.filter((p) => q === "" || p.t.toLowerCase().includes(q.toLowerCase()));
  const [featured, ...rest] = list;
  return (
    <>
      <PageHero kicker="Stories" title="From the journal." sub="Field notes, packing tips and travel love letters." />
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">{list.length} stories</p>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search stories..." className="rounded-full border border-border bg-card py-2.5 pl-10 pr-4 text-sm focus:border-accent focus:outline-none" />
            </div>
          </div>

          {featured && (
            <Reveal>
              <Link to="/blog" className="mt-10 grid overflow-hidden rounded-3xl bg-card shadow-card transition-all hover:shadow-glow lg:grid-cols-2">
                <div className="relative aspect-[4/3] overflow-hidden lg:aspect-auto">
                  <img src={featured.img} alt={featured.t} loading="lazy" className="h-full w-full object-cover" />
                  <span className="absolute left-4 top-4 rounded-full bg-gradient-sunset px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-white">Featured</span>
                </div>
                <div className="flex flex-col justify-center p-8 md:p-12">
                  <p className="text-xs uppercase tracking-widest text-accent">{featured.c}</p>
                  <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl">{featured.t}</h2>
                  <p className="mt-4 text-muted-foreground">{featured.excerpt}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent">Read story <ArrowUpRight className="h-4 w-4" /></span>
                </div>
              </Link>
            </Reveal>
          )}

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.05}>
                <Link to="/blog" className="group block overflow-hidden rounded-3xl bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-glow">
                  <div className="relative aspect-[5/3] overflow-hidden">
                    <img src={p.img} alt={p.t} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <span className="absolute left-4 top-4 rounded-full glass-dark px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white">{p.c}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-semibold leading-tight transition-colors group-hover:text-accent">{p.t}</h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.excerpt}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
