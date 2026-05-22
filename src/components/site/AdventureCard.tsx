import { Link } from "@tanstack/react-router";
import { Clock, Users, Star, Mountain, ArrowUpRight } from "lucide-react";
import type { Adventure } from "@/data/adventures";

export function AdventureCard({ a }: { a: Adventure }) {
  const filled = ((a.totalSlots - a.slots) / a.totalSlots) * 100;
  const almostFull = a.slots <= 6;
  return (
    <Link
      to="/adventures/$slug"
      params={{ slug: a.slug }}
      className="group relative block overflow-hidden rounded-3xl bg-card shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-glow"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={a.image}
          alt={a.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
        <div className="absolute left-4 top-4 flex gap-2">
          <span className="rounded-full glass-dark px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">{a.category}</span>
          {almostFull && (
            <span className="rounded-full bg-gradient-sunset px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-glow">
              Almost Full
            </span>
          )}
        </div>
        <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full glass-dark px-3 py-1 text-xs font-semibold text-white">
          <Star className="h-3 w-3 fill-accent text-accent" /> {a.rating}
        </div>

        <div className="absolute inset-x-0 bottom-0 p-5 text-white">
          <p className="text-xs uppercase tracking-widest text-accent">{a.date}</p>
          <h3 className="mt-1 font-display text-2xl font-bold leading-tight">{a.name}</h3>
          <p className="mt-1 line-clamp-2 text-sm text-white/80">{a.blurb}</p>

          <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-white/80">
            <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {a.duration}</span>
            <span className="flex items-center gap-1"><Mountain className="h-3.5 w-3.5" /> {a.difficulty}</span>
            <span className="flex items-center gap-1"><Users className="h-3.5 w-3.5" /> {a.slots} slots left</span>
          </div>

          <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/15">
            <div className="h-full bg-gradient-sunset" style={{ width: `${filled}%` }} />
          </div>

          <div className="mt-4 flex items-end justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-white/60">From</p>
              <p className="font-display text-2xl font-bold">KSh {a.price.toLocaleString()}</p>
            </div>
            <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-sunset text-white shadow-glow transition-transform group-hover:rotate-45">
              <ArrowUpRight className="h-5 w-5" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
