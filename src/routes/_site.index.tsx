import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Compass, Heart, Mountain, Shield, Sparkles, Star, Users, Calendar, MapPin, Camera, Instagram, MessageCircle, ArrowUpRight, Quote, Plus, Minus } from "lucide-react";
import { useState } from "react";
import hero from "@/assets/hero-mountain.jpg";
import community from "@/assets/community.jpg";
import camping from "@/assets/adv-camping.jpg";
import { adventures, categories } from "@/data/adventures";
import { AdventureCard } from "@/components/site/AdventureCard";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";

export const Route = createFileRoute("/_site/")({
  head: () => ({
    meta: [
      { title: "Ricky Events — Curated Kenyan Adventures" },
      { name: "description", content: "Hikes, cycling, camping & cinematic road trips across Kenya. Join Ricky Events — sit, we will set." },
      { property: "og:title", content: "Ricky Events — Curated Kenyan Adventures" },
      { property: "og:description", content: "Adventure begins with Ricky Events. Mt. Longonot, Elephant Hill, Mt. Kenya & more." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <FeaturedAdventures />
      <UpcomingTrips />
      <WhyUs />
      <Destinations />
      <Social />
      <Testimonials />
      <BlogTeasers />
      <CtaBanner />
      <FaqSection />
    </>
  );
}

function Hero() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  return (
    <section className="relative min-h-screen overflow-hidden text-white">
      <div className="absolute inset-0">
        <img src={hero} alt="Hikers on Mount Longonot at sunset" className="ken-burns h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-black/50" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-32 pb-24 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-white/90">
            <Sparkles className="h-3 w-3 text-accent" /> Sit, We Will Set
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-4xl font-display text-5xl font-bold leading-[0.95] text-balance md:text-7xl lg:text-8xl"
        >
          Explore Kenya <br />
          <span className="bg-gradient-to-r from-accent via-amber-300 to-accent bg-clip-text text-transparent">beyond the ordinary.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 max-w-xl text-lg text-white/80 md:text-xl"
        >
          Cinematic hikes, golden-hour cycling, starlit campfires and unforgettable community escapes — curated for explorers like you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-9 flex flex-wrap gap-3"
        >
          <Link to="/adventures" className="group inline-flex items-center gap-2 rounded-full bg-gradient-sunset px-7 py-4 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-105">
            Explore Adventures <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link to="/trips" className="inline-flex items-center gap-2 rounded-full glass px-7 py-4 text-sm font-semibold text-white">
            <Calendar className="h-4 w-4" /> Upcoming Trips
          </Link>
          <a href="https://wa.me/254796590571" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-sm font-semibold text-white hover:bg-white/10">
            <MessageCircle className="h-4 w-4 text-accent" /> Join Our Community
          </a>
        </motion.div>

        {/* Floating stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 grid max-w-3xl grid-cols-2 gap-3 md:grid-cols-4"
        >
          {[
            { v: 30, s: "+", l: "Adventures" },
            { v: 500, s: "+", l: "Travelers" },
            { v: 20, s: "+", l: "Destinations" },
            { v: 4, s: ".6★", l: "Avg rating" },
          ].map((s) => (
            <div key={s.l} className="rounded-2xl glass p-4">
              <p className="font-display text-3xl font-bold text-white"><Counter value={s.v} suffix={s.s} /></p>
              <p className="mt-1 text-xs uppercase tracking-widest text-white/70">{s.l}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Floating filter chips */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute inset-x-0 bottom-6 z-10 mx-auto hidden max-w-5xl px-6 md:block"
      >
        <div className="flex items-center gap-2 overflow-x-auto rounded-full glass-dark p-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`whitespace-nowrap rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-widest transition-all ${
                filter === c ? "bg-gradient-sunset text-white shadow-glow" : "text-white/75 hover:text-white"
              }`}
            >
              {c}
            </button>
          ))}
          <Link to="/adventures" className="ml-auto hidden items-center gap-1 whitespace-nowrap rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-widest text-forest md:inline-flex">
            See all <ArrowUpRight className="h-3 w-3" />
          </Link>
        </div>
      </motion.div>

      <a href="#featured" className="absolute bottom-2 left-1/2 hidden -translate-x-1/2 animate-float flex-col items-center text-xs uppercase tracking-widest text-white/70 md:flex">
        <ChevronDown className="h-5 w-5" />
      </a>
    </section>
  );
}

function FeaturedAdventures() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const filtered = filter === "All" ? adventures : adventures.filter((a) => a.category === filter);
  return (
    <section id="featured" className="relative bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <SectionEyebrow>Featured</SectionEyebrow>
          <div className="mt-3 flex flex-wrap items-end justify-between gap-6">
            <h2 className="max-w-3xl font-display text-4xl font-bold leading-tight text-balance md:text-6xl">
              Adventures crafted for the <span className="text-accent">soul of Kenya</span>.
            </h2>
            <Link to="/adventures" className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-accent">
              View all adventures <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-10 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-widest transition-all ${
                filter === c ? "border-transparent bg-gradient-sunset text-white shadow-glow" : "border-border bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.slice(0, 6).map((a, i) => (
            <Reveal key={a.slug} delay={i * 0.05}>
              <AdventureCard a={a} />
            </Reveal>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function UpcomingTrips() {
  const trips = adventures.slice(0, 4);
  return (
    <section className="relative overflow-hidden bg-secondary py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-glow opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <SectionEyebrow>Calendar</SectionEyebrow>
          <h2 className="mt-3 max-w-3xl font-display text-4xl font-bold leading-tight md:text-6xl">
            Upcoming trips, <span className="text-accent">filling fast.</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {trips.map((t, i) => {
            const filled = ((t.totalSlots - t.slots) / t.totalSlots) * 100;
            return (
              <Reveal key={t.slug} delay={i * 0.07}>
                <Link to="/adventures/$slug" params={{ slug: t.slug }} className="group flex overflow-hidden rounded-3xl bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-glow">
                  <div className="relative w-32 shrink-0 sm:w-48">
                    <img src={t.image} alt={t.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-x-0 top-0 bg-gradient-forest p-2 text-center text-white">
                      <p className="text-[10px] uppercase tracking-widest opacity-80">{t.date.split(",")[0]}</p>
                      <p className="font-display text-xl font-bold leading-none">{t.date.split(" ").slice(-1)[0]}</p>
                      <p className="text-[10px] uppercase tracking-widest opacity-80">{t.date.split(" ")[1]}</p>
                    </div>
                  </div>
                  <div className="flex-1 p-5">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-xs uppercase tracking-widest text-accent">{t.category} · {t.difficulty}</p>
                        <h3 className="mt-1 font-display text-xl font-bold leading-tight">{t.name}</h3>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] uppercase tracking-widest text-muted-foreground">From</p>
                        <p className="font-display text-lg font-bold">KSh {t.price.toLocaleString()}</p>
                      </div>
                    </div>
                    <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{t.blurb}</p>
                    <div className="mt-4">
                      <div className="flex items-center justify-between text-[11px] font-medium text-muted-foreground">
                        <span>{t.slots} slots left</span>
                        <span>{Math.round(filled)}% booked</span>
                      </div>
                      <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-muted">
                        <div className="h-full bg-gradient-sunset" style={{ width: `${filled}%` }} />
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const items = [
    { icon: Heart, t: "Affordable Adventures", d: "Premium experiences without the premium tax." },
    { icon: Compass, t: "Professional Planning", d: "Routes, logistics and timing — handled end-to-end." },
    { icon: Shield, t: "Safe Experiences", d: "Vetted guides, & trained first-aiders." },
    { icon: Users, t: "Vibrant Community", d: "Join 300+ explorers across Kenya & beyond." },
    { icon: Mountain, t: "Verified Guides", d: "Local experts who know every ridge by name." },
    { icon: Calendar, t: "Flexible Booking", d: "Pay in installments, switch trips, no drama." },
    { icon: Camera, t: "Photo Moments", d: "Pro photographers on every signature trip." },
    { icon: Sparkles, t: "Memories For Life", d: "Designed to be the story you tell forever." },
  ];
  return (
    <section className="relative bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <SectionEyebrow>Why us</SectionEyebrow>
          <h2 className="mt-3 max-w-3xl font-display text-4xl font-bold leading-tight md:text-6xl">
            We don't just plan trips. <span className="text-accent">We engineer memories.</span>
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <Reveal key={it.t} delay={i * 0.04}>
              <div className="group h-full rounded-3xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-glow">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-sunset text-white shadow-glow transition-transform group-hover:rotate-6">
                  <it.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{it.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{it.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Destinations() {
  const cats = [
    { t: "Hiking", img: adventures[1].image, n: "24 trails" },
    { t: "Cycling", img: adventures[3].image, n: "12 routes" },
    { t: "Camping", img: camping, n: "16 sites" },
    { t: "Nature", img: adventures[2].image, n: "20 escapes" },
    { t: "Team Building", img: community, n: "Custom" },
    { t: "Weekend Getaways", img: adventures[7].image, n: "30+ trips" },
  ];
  return (
    <section className="relative bg-gradient-forest py-24 text-white md:py-32">
      <div className="absolute inset-0 bg-gradient-glow opacity-50" />
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <SectionEyebrow light>Destinations</SectionEyebrow>
          <div className="mt-3 flex flex-wrap items-end justify-between gap-6">
            <h2 className="max-w-3xl font-display text-4xl font-bold leading-tight md:text-6xl">
              From the <span className="text-accent">Rift Valley</span> to <span className="text-accent">Mt. Kenya</span>.
            </h2>
            <p className="max-w-md text-white/70">A curated map of Kenya's most cinematic places, hand-picked by local explorers.</p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cats.map((c, i) => (
            <Reveal key={c.t} delay={i * 0.05}>
              <div className="group relative h-72 overflow-hidden rounded-3xl">
                <img src={c.img} alt={c.t} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-accent">{c.n}</p>
                    <h3 className="font-display text-2xl font-bold">{c.t}</h3>
                  </div>
                  <span className="grid h-11 w-11 place-items-center rounded-full glass text-white transition-transform group-hover:rotate-45">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Social() {
  const imgs = [adventures[0].image, adventures[3].image, adventures[5].image, adventures[6].image, adventures[2].image, community, adventures[4].image, adventures[1].image];
  return (
    <section className="relative bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <SectionEyebrow>@ricky__events</SectionEyebrow>
              <h2 className="mt-3 max-w-2xl font-display text-4xl font-bold leading-tight md:text-6xl">
                Lived in the wild. <span className="text-accent">Shared on the gram.</span>
              </h2>
            </div>
            <a href="https://www.instagram.com/ricky__events/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gradient-sunset px-6 py-3 text-sm font-semibold text-white shadow-glow">
              <Instagram className="h-4 w-4" /> Follow our adventures
            </a>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {imgs.map((src, i) => (
            <Reveal key={i} delay={i * 0.03}>
              <a href="https://www.instagram.com/ricky__events/" target="_blank" rel="noreferrer" className={`group relative block overflow-hidden rounded-2xl ${i % 5 === 0 ? "row-span-2 aspect-[1/2]" : "aspect-square"}`}>
                <img src={src} alt="Adventure moment" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/40" />
                <Instagram className="absolute right-3 top-3 h-5 w-5 text-white opacity-0 transition-opacity group-hover:opacity-100" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const reviews = [
    { n: "Wanjiku M.", r: "Mt. Longonot was a dream. The whole crew felt like family by the time we summited.", role: "Software engineer, Nairobi" },
    { n: "Brian O.", r: "Best 4,500 bob I've ever spent. Limuru cycling trip was straight cinema.", role: "Doctor, Kisumu" },
    { n: "Aisha K.", r: "Mt. Kenya with Ricky changed how I see what I'm capable of. Worth every shilling.", role: "Designer, Mombasa" },
  ];
  return (
    <section className="relative overflow-hidden bg-secondary py-24 md:py-32">
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <SectionEyebrow>Travelers</SectionEyebrow>
          <h2 className="mt-3 max-w-3xl font-display text-4xl font-bold leading-tight md:text-6xl">
            Stories from the <span className="text-accent">trail.</span>
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((rv, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="relative h-full rounded-3xl bg-card p-7 shadow-card">
                <Quote className="absolute right-6 top-6 h-10 w-10 text-accent/20" />
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="mt-4 text-base leading-relaxed text-foreground">"{rv.r}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-sunset text-sm font-bold text-white">{rv.n[0]}</div>
                  <div>
                    <p className="font-semibold">{rv.n}</p>
                    <p className="text-xs text-muted-foreground">{rv.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function BlogTeasers() {
  const posts = [
    { t: "10 things every Kenyan hiker should pack", c: "Packing", img: adventures[0].image, slug: "packing" },
    { t: "Beginner's guide to Mt. Longonot", c: "Hiking", img: adventures[4].image, slug: "longonot" },
    { t: "Why community travel hits different", c: "Stories", img: community, slug: "community" },
  ];
  return (
    <section className="relative bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <SectionEyebrow>Stories</SectionEyebrow>
              <h2 className="mt-3 max-w-2xl font-display text-4xl font-bold leading-tight md:text-6xl">From the journal.</h2>
            </div>
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold hover:text-accent">All stories <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}>
              <Link to="/blog" className="group block overflow-hidden rounded-3xl bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-glow">
                <div className="relative aspect-[5/3] overflow-hidden">
                  <img src={p.img} alt={p.t} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <span className="absolute left-4 top-4 rounded-full glass-dark px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white">{p.c}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold leading-tight transition-colors group-hover:text-accent">{p.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">5 min read · By Ricky Crew</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaBanner() {
  return (
    <section className="relative overflow-hidden">
      <img src={camping} alt="Campfire under stars" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/40" />
      <div className="relative mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40">
        <Reveal>
          <SectionEyebrow light>Ready?</SectionEyebrow>
          <h2 className="mt-3 max-w-3xl font-display text-5xl font-bold leading-[1] text-white md:text-7xl">
            Your next adventure <span className="text-accent">starts here.</span>
          </h2>
          <p className="mt-5 max-w-xl text-lg text-white/80">Reserve your spot or talk to a human — we'll match you to the perfect trip.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/trips" className="rounded-full bg-gradient-sunset px-7 py-4 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-105">Book your spot</Link>
            <Link to="/contact" className="rounded-full glass px-7 py-4 text-sm font-semibold text-white">Contact us</Link>
            <a href="https://wa.me/254796590571" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 text-sm font-semibold text-white hover:bg-white/10">
              <MessageCircle className="h-4 w-4 text-accent" /> WhatsApp Community
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FaqSection() {
  const faqs = [
    { q: "How do I book a trip?", a: "Browse adventures, pick a date, fill the booking form and pay a deposit. We confirm by WhatsApp within hours." },
    { q: "Do I need experience to hike with you?", a: "Most trips are beginner-friendly. Each adventure has a difficulty rating so you know what you're signing up for." },
    { q: "What's included in the price?", a: "Transport from Nairobi, park fees, certified guide, water and snacks. Some trips include meals — check the trip page." },
    { q: "Can I pay in installments?", a: "Yes — for trips above KSh 10,000 we offer flexible payment plans. Talk to us on WhatsApp." },
    { q: "Do you organise private group trips?", a: "Absolutely. Team building, birthdays, bachelor/ette weekends — we'll design something cinematic just for you." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <Reveal>
          <SectionEyebrow>FAQ</SectionEyebrow>
          <h2 className="mt-3 font-display text-4xl font-bold leading-tight md:text-6xl">Quick answers.</h2>
        </Reveal>
        <div className="mt-10 divide-y divide-border rounded-3xl border border-border bg-card">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <button key={i} onClick={() => setOpen(isOpen ? null : i)} className="flex w-full items-start gap-4 p-6 text-left">
                <div>
                  <p className="font-display text-lg font-semibold">{f.q}</p>
                  {isOpen && <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>}
                </div>
                <span className="ml-auto grid h-9 w-9 shrink-0 place-items-center rounded-full bg-muted">
                  {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SectionEyebrow({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <span className={`h-px w-10 ${light ? "bg-white/40" : "bg-accent"}`} />
      <span className={`text-xs font-semibold uppercase tracking-[0.35em] ${light ? "text-white/70" : "text-accent"}`}>{children}</span>
    </div>
  );
}
