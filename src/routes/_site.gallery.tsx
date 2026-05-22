import { createFileRoute } from "@tanstack/react-router";
import { adventures } from "@/data/adventures";
import community from "@/assets/community.jpg";
import { useState } from "react";
import { X } from "lucide-react";
import { PageHero } from "./_site.adventures.index";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/_site/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Ricky Events" },
      { name: "description", content: "A visual journal of Ricky Events adventures across Kenya." },
      { property: "og:title", content: "Gallery — Ricky Events" },
      { property: "og:description", content: "Photo moments from our trips." },
    ],
  }),
  component: Gallery,
});

const cats = ["All", "Hiking", "Cycling", "Camping", "Nature", "Community"] as const;

function Gallery() {
  const photos = [
    ...adventures.map((a) => ({ src: a.image, cat: a.category === "Road Trip" ? "Camping" : a.category, alt: a.name })),
    { src: community, cat: "Community", alt: "Community road trip" },
    ...adventures.slice(0, 4).map((a) => ({ src: a.image, cat: a.category === "Road Trip" ? "Camping" : a.category, alt: a.name })),
  ];
  const [filter, setFilter] = useState<(typeof cats)[number]>("All");
  const [open, setOpen] = useState<string | null>(null);
  const list = filter === "All" ? photos : photos.filter((p) => p.cat === filter);
  return (
    <>
      <PageHero kicker="Gallery" title="Captured in the wild." sub="A visual journal of trails, fires and friends." />
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex flex-wrap gap-2">
            {cats.map((c) => (
              <button key={c} onClick={() => setFilter(c)} className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-widest transition-all ${
                filter === c ? "border-transparent bg-gradient-sunset text-white shadow-glow" : "border-border bg-muted text-muted-foreground hover:text-foreground"
              }`}>{c}</button>
            ))}
          </div>
          <div className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
            {list.map((p, i) => (
              <Reveal key={i} delay={(i % 9) * 0.03}>
                <button onClick={() => setOpen(p.src)} className="group block w-full overflow-hidden rounded-2xl">
                  <img src={p.src} alt={p.alt} loading="lazy" className="w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {open && (
        <div onClick={() => setOpen(null)} className="fixed inset-0 z-[100] grid place-items-center bg-black/90 p-4 backdrop-blur">
          <button className="absolute right-6 top-6 grid h-12 w-12 place-items-center rounded-full glass text-white"><X /></button>
          <img src={open} alt="" className="max-h-[88vh] max-w-[92vw] rounded-2xl object-contain shadow-glow" />
        </div>
      )}
    </>
  );
}
