import { createFileRoute, Link } from "@tanstack/react-router";
import { adventures } from "@/data/adventures";
import { Reveal } from "@/components/site/Reveal";
import { useEffect, useState } from "react";
import { Calendar, Clock, Users } from "lucide-react";
import { PageHero } from "./_site.adventures.index";

export const Route = createFileRoute("/_site/trips")({
  head: () => ({
    meta: [
      { title: "Upcoming Trips — Ricky Events" },
      { name: "description", content: "All upcoming Ricky Events trips, dates and remaining slots." },
      { property: "og:title", content: "Upcoming Trips" },
      { property: "og:description", content: "Reserve your spot before it sells out." },
    ],
  }),
  component: Trips,
});

function useCountdown(target: Date) {
  const [d, setD] = useState(0);
  useEffect(() => {
    const tick = () => setD(Math.max(0, target.getTime() - Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);
  const days = Math.floor(d / 86400000);
  const hrs = Math.floor((d / 3600000) % 24);
  const mins = Math.floor((d / 60000) % 60);
  return { days, hrs, mins };
}

function Trips() {
  return (
    <>
      <PageHero kicker="Calendar" title="Upcoming trips." sub="Confirmed dates, remaining slots, live countdowns. Reserve before they sell out." />
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-5 px-6 md:px-10 md:grid-cols-2">
          {adventures.map((t, i) => <TripRow key={t.slug} t={t} i={i} />)}
        </div>
      </section>
    </>
  );
}

function TripRow({ t, i }: { t: (typeof adventures)[number]; i: number }) {
  const { days, hrs, mins } = useCountdown(new Date(Date.now() + (i + 1) * 4 * 86400000 + 3600000 * 6));
  const filled = ((t.totalSlots - t.slots) / t.totalSlots) * 100;
  return (
    <Reveal delay={i * 0.04}>
      <Link to="/adventures/$slug" params={{ slug: t.slug }} className="group flex overflow-hidden rounded-3xl bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-glow">
        <div className="relative w-40 shrink-0 overflow-hidden">
          <img src={t.image} alt={t.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
        </div>
        <div className="flex-1 p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-widest text-accent">{t.category}</p>
              <h3 className="mt-1 font-display text-xl font-semibold leading-tight">{t.name}</h3>
            </div>
            <p className="font-display text-lg font-bold">KSh {t.price.toLocaleString()}</p>
          </div>
          <div className="mt-3 flex flex-wrap gap-3 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1"><Calendar className="h-3.5 w-3.5" />{t.date}</span>
            <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{t.duration}</span>
            <span className="inline-flex items-center gap-1"><Users className="h-3.5 w-3.5" />{t.slots}/{t.totalSlots} slots</span>
          </div>
          <div className="mt-3 flex gap-1 text-center">
            {[{ v: days, l: "d" }, { v: hrs, l: "h" }, { v: mins, l: "m" }].map((c, k) => (
              <div key={k} className="flex-1 rounded-lg bg-secondary px-2 py-1.5">
                <p className="font-display text-base font-bold leading-none">{String(c.v).padStart(2, "0")}</p>
                <p className="text-[9px] uppercase tracking-widest text-muted-foreground">{c.l}</p>
              </div>
            ))}
          </div>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-muted">
            <div className="h-full bg-gradient-sunset" style={{ width: `${filled}%` }} />
          </div>
        </div>
      </Link>
    </Reveal>
  );
}
