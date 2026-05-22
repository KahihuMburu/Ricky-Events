import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { adventures, type Adventure } from "@/data/adventures";
import { AdventureCard } from "@/components/site/AdventureCard";
import {
  Calendar, Clock, MapPin, Mountain, Star, Users, Check, X,
  MessageCircle, ArrowRight, Sparkles, Smartphone, Copy, ShieldCheck, Navigation, Heart,
} from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { useState } from "react";

const WHATSAPP_NUMBER = "254796590571"; // update to real number
const COMMUNITY_URL = "https://chat.whatsapp.com/"; // update to real community link
const PAYBILL = "247247";
const ACCOUNT_PREFIX = "RICKY";

export const Route = createFileRoute("/_site/adventures/$slug")({
  loader: ({ params }) => {
    const adv = adventures.find((a) => a.slug === params.slug);
    if (!adv) throw notFound();
    return { adv };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.adv.name} — Ricky Events` },
      { name: "description", content: loaderData?.adv.blurb },
      { property: "og:title", content: loaderData?.adv.name },
      { property: "og:description", content: loaderData?.adv.blurb },
      { property: "og:image", content: loaderData?.adv.image },
    ],
  }),
  notFoundComponent: () => (
    <div className="grid min-h-[60vh] place-items-center px-6 pt-32 text-center">
      <div>
        <p className="text-xs uppercase tracking-widest text-accent">Not found</p>
        <h1 className="mt-2 font-display text-4xl">Adventure not found</h1>
        <Link to="/adventures" className="mt-6 inline-block rounded-full bg-gradient-sunset px-6 py-3 text-sm font-semibold text-white">Back to adventures</Link>
      </div>
    </div>
  ),
  errorComponent: ({ error }) => <div className="p-20 text-center">{error.message}</div>,
  component: AdventureDetail,
});

function AdventureDetail() {
  const { adv } = Route.useLoaderData() as { adv: Adventure };
  const [tab, setTab] = useState<"itinerary" | "included" | "packing">("itinerary");
  const [copied, setCopied] = useState<string | null>(null);
  const related = adventures.filter((a) => a.slug !== adv.slug && a.category === adv.category).slice(0, 3);
  const filled = ((adv.totalSlots - adv.slots) / adv.totalSlots) * 100;
  const accountNumber = `${ACCOUNT_PREFIX}-${adv.slug.toUpperCase()}`;

  const waMessage = encodeURIComponent(
    `Hi Ricky Events! I'd like more info about "${adv.name}" on ${adv.date}. Are slots still available?`
  );
  const waBookMessage = encodeURIComponent(
    `Hi Ricky Events! I've sent payment for "${adv.name}" (${adv.date}). Please confirm my slot.`
  );

  const copy = (value: string, key: string) => {
    navigator.clipboard?.writeText(value);
    setCopied(key);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[80vh] items-end overflow-hidden pt-32 text-white">
        <img src={adv.image} alt={adv.name} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-black/30 to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-16 md:px-10 md:pb-24">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-accent">{adv.category}</p>
          <h1 className="mt-3 max-w-4xl font-display text-5xl font-bold leading-[1] text-balance md:text-7xl">{adv.name}</h1>
          <p className="mt-5 max-w-2xl text-lg text-white/85">{adv.blurb}</p>

          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            {[
              { i: Calendar, t: adv.date }, { i: Clock, t: adv.duration },
              { i: Mountain, t: adv.difficulty }, { i: Users, t: `${adv.slots} slots left` },
              { i: Star, t: `${adv.rating} rating` }, { i: MapPin, t: "Kenya" },
            ].map((m, i) => (
              <span key={i} className="inline-flex items-center gap-2 rounded-full glass px-4 py-2"><m.i className="h-4 w-4 text-accent" /> {m.t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* OVERVIEW + HIGHLIGHTS */}
      <section className="bg-background py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:px-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">About this adventure</p>
              <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">The story you'll bring home</h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">{adv.description}</p>
            </Reveal>

            <Reveal>
              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {adv.highlights.map((h) => (
                  <div key={h} className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4">
                    <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gradient-sunset text-white shadow-glow">
                      <Sparkles className="h-4 w-4" />
                    </span>
                    <p className="text-sm font-medium leading-snug">{h}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div className="rounded-3xl border border-border bg-card p-6 shadow-card lg:sticky lg:top-28">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Trip facts</p>
              <dl className="mt-5 space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <Navigation className="mt-0.5 h-4 w-4 text-accent" />
                  <div>
                    <dt className="text-xs uppercase tracking-widest text-muted-foreground">Meeting point</dt>
                    <dd className="font-medium">{adv.meetingPoint}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-4 w-4 text-accent" />
                  <div>
                    <dt className="text-xs uppercase tracking-widest text-muted-foreground">Pickup time</dt>
                    <dd className="font-medium">{adv.pickupTime}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mountain className="mt-0.5 h-4 w-4 text-accent" />
                  <div>
                    <dt className="text-xs uppercase tracking-widest text-muted-foreground">Difficulty</dt>
                    <dd className="font-medium">{adv.difficulty}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-4 w-4 text-accent" />
                  <div>
                    <dt className="text-xs uppercase tracking-widest text-muted-foreground">Safety</dt>
                    <dd className="font-medium">Certified guide & first-aid on every trip</dd>
                  </div>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TABS + BOOKING */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:px-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Reveal>
              <div className="flex flex-wrap gap-2 border-b border-border">
                {(["itinerary", "included", "packing"] as const).map((t) => (
                  <button key={t} onClick={() => setTab(t)} className={`relative px-5 py-3 text-sm font-semibold capitalize transition-colors ${tab === t ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}>
                    {t === "included" ? "What's included" : t === "packing" ? "What to pack" : "Itinerary"}
                    {tab === t && <span className="absolute inset-x-3 -bottom-px h-0.5 bg-gradient-sunset" />}
                  </button>
                ))}
              </div>
            </Reveal>

            <div className="mt-8">
              {tab === "itinerary" && (
                <ol className="relative ml-4 space-y-6 border-l-2 border-dashed border-border pl-6">
                  {adv.itinerary.map((s, i) => (
                    <Reveal key={i} delay={i * 0.05}>
                      <li className="relative">
                        <span className="absolute -left-[33px] grid h-6 w-6 place-items-center rounded-full bg-gradient-sunset text-[11px] font-bold text-white shadow-glow">{i + 1}</span>
                        <p className="text-xs font-semibold uppercase tracking-widest text-accent">{s.t}</p>
                        <p className="mt-1 font-display text-lg">{s.e}</p>
                      </li>
                    </Reveal>
                  ))}
                </ol>
              )}
              {tab === "included" && (
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <h3 className="font-display text-xl font-semibold">Included</h3>
                    <ul className="mt-4 space-y-2">
                      {adv.included.map((x) => (<li key={x} className="flex items-start gap-2 text-sm"><Check className="mt-0.5 h-4 w-4 text-accent" />{x}</li>))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold">Not included</h3>
                    <ul className="mt-4 space-y-2">
                      {adv.excluded.map((x) => (<li key={x} className="flex items-start gap-2 text-sm text-muted-foreground"><X className="mt-0.5 h-4 w-4" />{x}</li>))}
                    </ul>
                  </div>
                </div>
              )}
              {tab === "packing" && (
                <ul className="grid gap-2 sm:grid-cols-2">
                  {adv.packing.map((p) => (
                    <li key={p} className="flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 text-sm">
                      <span className="grid h-7 w-7 place-items-center rounded-full bg-secondary text-accent"><Check className="h-4 w-4" /></span>{p}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <div className="rounded-3xl border border-border bg-card p-6 shadow-card">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">From</p>
                <p className="font-display text-4xl font-bold">KSh {adv.price.toLocaleString()} <span className="text-sm font-normal text-muted-foreground">/ person</span></p>
                <div className="mt-5">
                  <div className="flex items-center justify-between text-xs font-medium text-muted-foreground">
                    <span>{adv.slots} slots left</span><span>{Math.round(filled)}% booked</span>
                  </div>
                  <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-muted"><div className="h-full bg-gradient-sunset" style={{ width: `${filled}%` }} /></div>
                </div>
                <form className="mt-6 space-y-3" onSubmit={(e) => e.preventDefault()}>
                  <input className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm" placeholder="Full name" />
                  <input className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm" placeholder="Phone (WhatsApp)" />
                  <div className="flex gap-2">
                    <input type="number" min={1} defaultValue={1} className="w-24 rounded-xl border border-border bg-background px-4 py-3 text-sm" />
                    <input type="date" className="flex-1 rounded-xl border border-border bg-background px-4 py-3 text-sm" />
                  </div>
                  <a href="#pay" className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-sunset px-5 py-3.5 text-sm font-semibold text-white shadow-glow">
                    Reserve my spot <ArrowRight className="h-4 w-4" />
                  </a>
                  <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}`} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-xl border border-border bg-secondary px-5 py-3 text-sm font-semibold">
                    <MessageCircle className="h-4 w-4 text-accent" /> WhatsApp inquiry
                  </a>
                </form>
                <p className="mt-3 text-center text-xs text-muted-foreground">No upfront commitment. We confirm by WhatsApp.</p>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      {/* M-PESA PAYMENT */}
      <section id="pay" className="bg-background py-20 md:py-28 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Secure your slot</p>
              <h2 className="mt-2 font-display text-4xl font-bold md:text-5xl">Pay easily via M-Pesa</h2>
              <p className="mt-4 text-muted-foreground">
                Pay the full amount or a 50% deposit to confirm your slot. Once you pay, send your M-Pesa confirmation SMS to us on WhatsApp and we'll lock in your spot.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-8 lg:grid-cols-5">
            {/* M-Pesa card */}
            <Reveal className="lg:col-span-3">
              <div className="rounded-3xl border border-border bg-gradient-to-br from-card to-secondary p-6 shadow-card md:p-8">
                <div className="flex items-center gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#00A859] text-white shadow-glow">
                    <Smartphone className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">Lipa na M-Pesa</p>
                    <h3 className="font-display text-2xl font-bold">Paybill payment</h3>
                  </div>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <PayField label="Paybill number" value={PAYBILL} copied={copied === "pb"} onCopy={() => copy(PAYBILL, "pb")} />
                  <PayField label="Account number" value={accountNumber} copied={copied === "ac"} onCopy={() => copy(accountNumber, "ac")} />
                  <PayField label="Amount (full)" value={`KSh ${adv.price.toLocaleString()}`} copied={copied === "amt"} onCopy={() => copy(String(adv.price), "amt")} />
                  <PayField label="Deposit (50%)" value={`KSh ${Math.round(adv.price / 2).toLocaleString()}`} copied={copied === "dep"} onCopy={() => copy(String(Math.round(adv.price / 2)), "dep")} />
                </div>

                <ol className="mt-8 space-y-3 text-sm">
                  {[
                    "Go to M-Pesa → Lipa na M-Pesa → Pay Bill",
                    `Enter Business Number: ${PAYBILL}`,
                    `Enter Account Number: ${accountNumber}`,
                    `Enter Amount: KSh ${adv.price.toLocaleString()} (or 50% deposit)`,
                    "Enter your M-Pesa PIN and confirm",
                    "Forward the M-Pesa SMS confirmation to us on WhatsApp",
                  ].map((step, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gradient-sunset text-[11px] font-bold text-white">{i + 1}</span>
                      <span className="leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waBookMessage}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-sunset px-7 py-3.5 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.02]"
                >
                  I've paid — confirm my slot <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>

            {/* Side: not ready to pay */}
            <Reveal className="lg:col-span-2">
              <div className="flex h-full flex-col gap-6">
                <div className="rounded-3xl border border-border bg-card p-7 shadow-card">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-secondary text-accent">
                    <MessageCircle className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-xl font-bold">Not ready yet? Ask us anything.</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Chat with a human on WhatsApp — we'll answer questions about fitness level, group size, gear and logistics.</p>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.02]"
                  >
                    <MessageCircle className="h-4 w-4" /> WhatsApp inquiry
                  </a>
                </div>

                <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-sunset p-7 text-white shadow-glow">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white/15 text-white backdrop-blur">
                    <Heart className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-xl font-bold">Join the Ricky community</h3>
                  <p className="mt-2 text-sm text-white/90">Get first dibs on new trips, member-only discounts and meet fellow explorers before you book.</p>
                  <a
                    href={COMMUNITY_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-foreground transition-transform hover:scale-[1.02]"
                  >
                    Join the community <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          <p className="mt-8 text-center text-xs text-muted-foreground">
            Refunds available up to 7 days before the trip date. Slots are confirmed in the order payments are received.
          </p>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-secondary py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <h3 className="font-display text-3xl font-bold">More like this</h3>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((a) => <AdventureCard key={a.slug} a={a} />)}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

function PayField({ label, value, copied, onCopy }: { label: string; value: string; copied: boolean; onCopy: () => void }) {
  return (
    <div className="rounded-2xl border border-border bg-background p-4">
      <div className="flex items-start justify-between gap-3">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">{label}</p>
        <button
          onClick={onCopy}
          className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-secondary text-accent transition-colors hover:bg-accent hover:text-white"
          aria-label={`Copy ${label}`}
          type="button"
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-3.5 w-3.5" />}
        </button>
      </div>
      <p className="mt-2 font-display text-lg font-bold tracking-wide break-all leading-tight md:text-xl">{value}</p>
    </div>
  );
}
