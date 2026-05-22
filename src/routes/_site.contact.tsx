import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone, Instagram, Facebook, Send } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { PageHero } from "./_site.adventures.index";
import { useState } from "react";

export const Route = createFileRoute("/_site/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Ricky Events" },
      { name: "description", content: "Talk to the Ricky Events crew about your next adventure or private trip." },
      { property: "og:title", content: "Contact Ricky Events" },
      { property: "og:description", content: "Talk to a human about your next adventure." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero kicker="Contact" title="Let's plan something cinematic." sub="Personal trip, group escape or just a question — we reply fast." />
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:px-10 lg:grid-cols-3">
          <Reveal>
            <div className="space-y-3">
              {[
                { i: Phone, t: "Call us", v: "+254 796 590 571" },
                { i: MessageCircle, t: "WhatsApp", v: "Chat with the crew", href: "https://wa.me/254796590571" },
                { i: Mail, t: "Email", v: "eventsricky@gmail.com" },
                { i: MapPin, t: "Base camp", v: "Nairobi, Kenya" },
              ].map((c) => (
                <a key={c.t} href={c.href ?? "#"} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-glow">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-sunset text-white shadow-glow"><c.i className="h-5 w-5" /></span>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">{c.t}</p>
                    <p className="font-display text-lg font-semibold">{c.v}</p>
                  </div>
                </a>
              ))}
              <div className="flex gap-2 pt-2">
                <a href="https://www.instagram.com/ricky__events/" target="_blank" rel="noreferrer" className="grid h-11 w-11 place-items-center rounded-full bg-gradient-forest text-white"><Instagram className="h-4 w-4" /></a>
                <a href="https://www.facebook.com/profile.php?id=100085339740524" target="_blank" rel="noreferrer" className="grid h-11 w-11 place-items-center rounded-full bg-gradient-forest text-white"><Facebook className="h-4 w-4" /></a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="rounded-3xl border border-border bg-card p-6 shadow-card lg:col-span-2"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Full name"><input required className="input" /></Field>
                <Field label="Phone"><input required className="input" /></Field>
                <Field label="Email"><input type="email" required className="input" /></Field>
                <Field label="Inquiry">
                  <select className="input">
                    <option>General question</option>
                    <option>Book a trip</option>
                    <option>Private group / team building</option>
                    <option>Partnership</option>
                  </select>
                </Field>
                <div className="sm:col-span-2">
                  <Field label="Message"><textarea required rows={5} className="input resize-none" placeholder="Tell us about your dream trip..." /></Field>
                </div>
              </div>
              <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-sunset px-7 py-3.5 text-sm font-semibold text-white shadow-glow">
                {sent ? "Sent — we'll be in touch" : "Send message"} <Send className="h-4 w-4" />
              </button>
            </form>
          </Reveal>
        </div>

        <div className="mx-auto mt-16 max-w-7xl px-6 md:px-10">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-border shadow-card">
              <iframe
                title="Ricky Events on the map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=36.6%2C-1.45%2C37.0%2C-1.20&layer=mapnik"
                className="h-[420px] w-full"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <style>{`.input{width:100%;border:1px solid var(--color-border);background:var(--color-background);border-radius:12px;padding:12px 14px;font-size:14px;outline:none;}.input:focus{border-color:var(--color-accent);}`}</style>
    </>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}
