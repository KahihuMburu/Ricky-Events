import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-forest text-white/90">
      <div className="absolute inset-0 bg-gradient-glow opacity-50" />
      <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <img src={logo} alt="Ricky Events" className="h-12 w-12 rounded-full bg-white/95 p-0.5" />
              <div>
                <div className="font-display text-xl font-bold text-white">Ricky Events</div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-white/60">Sit, we will set</div>
              </div>
            </div>
            <p className="mt-4 max-w-xs text-sm text-white/70">
              Curated Kenyan adventures for explorers who refuse to live the ordinary. Hike. Ride. Camp. Belong.
            </p>
            <div className="mt-5 flex gap-2">
              {[
                { icon: Instagram, href: "https://www.instagram.com/ricky__events/" },
                { icon: Facebook, href: "https://www.facebook.com/profile.php?id=100085339740524" },
                { icon: MessageCircle, href: "https://wa.me/254796590571" },
              ].map(({ icon: Icon, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noreferrer"
                  className="grid h-10 w-10 place-items-center rounded-full glass transition-transform hover:scale-110 hover:bg-accent">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-accent">Explore</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {[["/adventures","Adventures"],["/trips","Upcoming Trips"],["/gallery","Gallery"],["/blog","Travel Stories"]].map(([to,l]) => (
                <li key={to}><Link to={to} className="hover:text-accent">{l}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-accent">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +254 796590571</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> eventsricky@gmail.com</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Nairobi, Kenya</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-accent">Newsletter</h4>
            <p className="mt-4 text-sm text-white/70">Adventure drops, early-bird trips, monthly stories.</p>
            <form className="mt-3 flex overflow-hidden rounded-full glass">
              <input type="email" placeholder="you@example.com" className="flex-1 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none" />
              <button className="bg-gradient-sunset px-5 text-sm font-semibold text-white">Join</button>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/60 md:flex-row">
          <p>© {new Date().getFullYear()} Ricky Events Tours & Travel. All rights reserved.</p>
          <p>Crafted with love in Nairobi 🇰🇪</p>
        </div>
      </div>
    </footer>
  );
}
