import { createFileRoute } from "@tanstack/react-router";
import { adventures } from "@/data/adventures";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import community from "@/assets/community.jpg";
import {
  Heart,
  Mountain,
  Compass,
  Users,
  Globe,
  Target,
  Eye,
  Shield,
  Leaf,
  Star,
  Zap,
} from "lucide-react";
import { PageHero } from "./_site.adventures.index";

export const Route = createFileRoute("/_site/about")({
  head: () => ({
    meta: [
      { title: "About — Ricky Events Tours & Travel" },
      {
        name: "description",
        content:
          "We're a Kenyan adventure crew turning weekends into stories worth telling.",
      },
      { property: "og:title", content: "About Ricky Events" },
      {
        property: "og:description",
        content:
          "A Kenyan adventure crew turning weekends into stories worth telling.",
      },
      { property: "og:image", content: adventures[0].image },
    ],
  }),
  component: About,
});

const stats = [
  { v: 500, s: "+", l: "Travelers" },
  { v: 30, s: "+", l: "Trips Run" },
  { v: 4, s: "+", l: "Years Active" },
  { v: 95, s: "%", l: "Return Rate" },
];

const beliefs = [
  {
    i: Heart,
    t: "Adventure for Everyone",
    d: "We design premium experiences priced honestly for real Kenyans — not just the privileged few. Great adventures should be within reach.",
  },
  {
    i: Leaf,
    t: "Respect the Land",
    d: "Leave-no-trace ethics on every trip. We move through nature as guests, not conquerors. The wilderness must outlive us.",
  },
  {
    i: Compass,
    t: "Story Over Selfies",
    d: "We engineer moments, not just photo backdrops. The conversations around the campfire will outlast any Instagram reel.",
  },
  {
    i: Users,
    t: "Strangers to Family",
    d: "Our community is the trip's best feature. Dozens of our repeat travelers met on their first Ricky Events hike.",
  },
];

const values = [
  {
    icon: Shield,
    title: "Safety First",
    desc: "Every trip is led by vetted, experienced guides. We never compromise on safety protocols, first aid, and route planning.",
  },
  {
    icon: Zap,
    title: "Youthful Energy",
    desc: "We bring contagious enthusiasm to every adventure. This isn't corporate tourism ; it's vibrant, community-driven exploration.",
  },
  {
    icon: Globe,
    title: "Kenyan Pride",
    desc: "We exist to help Kenyans fall in love with their own backyard — because the most extraordinary landscapes on earth are right here.",
  },
  {
    icon: Star,
    title: "Authentic Experiences",
    desc: "No tourist traps, no rushed itineraries. We go deeper, slower, and more meaningfully than any packaged tour operator.",
  },
];

function About() {
  return (
    <>
      <PageHero
        kicker="About Us"
        title="A Kenyan adventure crew."
        sub="We turn weekends into stories worth telling — one ridge, one ride, one campfire at a time."
      />

      {/* ── Brand Story ── */}
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:px-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl shadow-card">
              <img
                src={community}
                alt="Ricky Events community"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              {/* Overlay badge */}
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl glass-dark px-5 py-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                  Est. 2020 · Nairobi, Kenya
                </p>
                <p className="mt-1 text-sm text-white/80 font-medium">
                  Born from a WhatsApp group. Built by a community.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
              Our Story
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold leading-tight md:text-5xl">
              Built by explorers,
              <br />
              for explorers.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Ricky Events started as a small group of friends with one rule:
              every weekend should feel like a movie. We were tired of watching
              Kenya's breathtaking landscapes on social media while sitting at
              home. So we laced up our boots, packed light, and started moving.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              A few muddy hikes later, hundreds of strangers had become a
              family — and a community-led travel brand was born from pure,
              unapologetic love for adventure. No boardrooms. No investors. Just
              people who believed that the trail was calling and life was too
              short not to answer.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Today we run premium, photo-worthy and honestly-priced adventures
              across Kenya, hosted by guides who treat you like family from the
              first WhatsApp message to the last campfire goodbye.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((s) => (
                <div
                  key={s.l}
                  className="rounded-2xl border border-border bg-card p-4 text-center"
                >
                  <p className="font-display text-3xl font-bold text-foreground">
                    <Counter value={s.v} suffix={s.s} />
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                    {s.l}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="bg-muted/30 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
                What Drives Us
              </p>
              <h2 className="mt-3 font-display text-4xl font-bold leading-tight md:text-5xl">
                Purpose & Direction
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Every adventure we run is grounded in a clear sense of why we do
                this — and where we're going.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {/* Mission */}
            <Reveal delay={0.05}>
              <div className="h-full rounded-3xl border border-border bg-card p-8 md:p-10 shadow-card hover:shadow-glow transition-shadow duration-500">
                <div className="flex items-center gap-3 mb-6">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-sunset text-white shadow-glow flex-shrink-0">
                    <Target className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                      Our Mission
                    </p>
                    <h3 className="font-display text-2xl font-bold mt-0.5">
                      Why We Exist
                    </h3>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To create unforgettable adventures that build genuine community,
                  make travel accessible to every Kenyan, and inspire a deeper
                  connection with the natural world around us.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "Build a community of curious, bold explorers",
                    "Champion Kenya's extraordinary landscapes",
                    "Foster personal growth through shared experience",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Vision */}
            <Reveal delay={0.1}>
              <div className="h-full rounded-3xl border border-border bg-card p-8 md:p-10 shadow-card hover:shadow-glow transition-shadow duration-500">
                <div className="flex items-center gap-3 mb-6">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-forest text-white shadow-glow flex-shrink-0">
                    <Eye className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                      Our Vision
                    </p>
                    <h3 className="font-display text-2xl font-bold mt-0.5">
                      Where We're Going
                    </h3>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To become Africa's most trusted and inspiring adventure travel
                  brand ; a movement that empowers young Africans to explore
                  boldly, connect meaningfully, and see the world through the lens
                  of curiosity and courage.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "Inspire a generation of confident African explorers",
                    "Create meaningful cross-cultural travel experiences",
                    "Build a movement, not just a travel company",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-green-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── What We Believe ── */}
      <section className="bg-gradient-forest py-24 text-white md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
              Core Values
            </p>
            <h2 className="mt-3 max-w-3xl font-display text-4xl font-bold leading-tight md:text-6xl">
              What We Believe.
            </h2>
            <p className="mt-4 max-w-xl text-white/65 leading-relaxed">
              These aren't corporate values on a wall — they're the principles
              that shape every trip, every trail, and every campfire conversation.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {beliefs.map((v, i) => (
              <Reveal key={v.t} delay={i * 0.06}>
                <div className="group h-full rounded-3xl glass p-6 transition-all duration-300 hover:bg-white/10">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-sunset text-white shadow-glow transition-transform duration-300 group-hover:scale-110">
                    <v.i className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold">
                    {v.t}
                  </h3>
                  <p className="mt-2 text-sm text-white/70 leading-relaxed">
                    {v.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Additional Values ── */}
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
                How We Operate
              </p>
              <h2 className="mt-3 font-display text-4xl font-bold leading-tight md:text-5xl">
                The Ricky Events Standard
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Behind every adventure is a team that obsesses over the details —
                so you can focus entirely on the experience.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.07}>
                <div className="group rounded-3xl border border-border bg-card p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-glow text-center">
                  <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gradient-sunset text-white shadow-glow transition-transform duration-300 group-hover:scale-110 mb-5">
                    <v.icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-display text-lg font-bold">{v.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-muted/30 py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
              Ready?
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold leading-tight md:text-5xl">
              The trail is calling.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Join hundreds of Kenyans who've already made memories worth talking
              about. Your next adventure is a WhatsApp message away.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="/adventures"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-sunset px-7 py-3 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-105"
              >
                <Mountain className="h-4 w-4" /> Browse Adventures
              </a>
              <a
                href="https://wa.me/254796590571"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3 text-sm font-semibold text-foreground transition-all hover:bg-card hover:shadow-card"
              >
                <Users className="h-4 w-4" /> Join the Community
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}