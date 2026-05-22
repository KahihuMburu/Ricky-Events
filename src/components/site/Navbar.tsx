import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/adventures", label: "Adventures" },
  { to: "/trips", label: "Upcoming" },
  { to: "/gallery", label: "Gallery" },
  { to: "/blog", label: "Stories" },
  { to: "/contact", label: "Contact" },
] as const;

// Social media icon SVGs inline for zero-dependency usage
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );
}

type SocialLink = {
  label: string;
  href: string;
  Icon: React.FC<{ className?: string }>;
  hoverColor: string;
  glowColor: string;
};

const socialLinks: SocialLink[] = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/ricky__events/",
    Icon: InstagramIcon,
    hoverColor: "hover:text-pink-400",
    glowColor: "hover:shadow-[0_0_12px_rgba(236,72,153,0.6)]",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100085339740524",
    Icon: FacebookIcon,
    hoverColor: "hover:text-blue-400",
    glowColor: "hover:shadow-[0_0_12px_rgba(96,165,250,0.6)]",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/rickyevents/?viewAsMember=true",
    Icon: LinkedInIcon,
    hoverColor: "hover:text-sky-400",
    glowColor: "hover:shadow-[0_0_12px_rgba(56,189,248,0.6)]",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@ricky.events",
    Icon: TikTokIcon,
    hoverColor: "hover:text-white",
    glowColor: "hover:shadow-[0_0_12px_rgba(255,255,255,0.4)]",
  },
];

function SocialIcon({ label, href, Icon, hoverColor, glowColor }: SocialLink) {
  return (
    <div className="relative group/social">
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label={label}
        className={`grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-white/5 text-white/60 transition-all duration-300 ${hoverColor} ${glowColor} hover:border-white/25 hover:bg-white/10 hover:scale-110`}
      >
        <Icon className="h-3.5 w-3.5" />
      </a>
      {/* Tooltip */}
      <div className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover/social:opacity-100 transition-opacity duration-200 z-50">
        <div className="rounded-md bg-black/80 px-2 py-1 text-[10px] font-medium text-white whitespace-nowrap backdrop-blur-sm">
          {label}
        </div>
        <div className="mx-auto h-1.5 w-1.5 -translate-y-0.5 rotate-45 bg-black/80" />
      </div>
    </div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  const transparent = isHome && !scrolled;

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${transparent ? "bg-transparent" : "glass-dark"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Ricky Events" className="h-11 w-11 rounded-full bg-white/90 object-contain p-0.5 ring-1 ring-white/30" />
          <div className="hidden sm:block leading-tight">
            <div className="font-display text-lg font-bold text-white">Ricky Events</div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-white/70">Tours & Travel</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="group relative rounded-full px-4 py-2 text-sm font-medium text-white/85 transition-colors hover:text-white"
              activeProps={{ className: "text-white" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
              <span className="pointer-events-none absolute inset-x-4 -bottom-0.5 h-px scale-x-0 bg-gradient-sunset transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        {/* Right side: social icons + WhatsApp + menu */}
        <div className="flex items-center gap-2">
          {/* Social icons — hidden on mobile to avoid crowding */}
          <div className="hidden items-center gap-1.5 xl:flex mr-1">
            {socialLinks.map((s) => (
              <SocialIcon key={s.label} {...s} />
            ))}
          </div>

          {/* Thin divider */}
          <div className="hidden xl:block h-5 w-px bg-white/20 mx-1" />

          <a
            href="https://wa.me/254796590571"
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full bg-gradient-sunset px-4 py-2 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-105 md:inline-flex"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-full glass text-white lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden"
          >
            <div className="mx-4 mb-4 rounded-3xl glass-dark p-4">
              <nav className="flex flex-col">
                {links.map((l) => (
                  <Link key={l.to} to={l.to} className="rounded-xl px-4 py-3 text-base text-white/90 hover:bg-white/10">
                    {l.label}
                  </Link>
                ))}
                <a href="https://wa.me/254796590571" className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-gradient-sunset px-4 py-3 text-sm font-semibold text-white">
                  <MessageCircle className="h-4 w-4" /> Join WhatsApp Community
                </a>

                {/* Social icons in mobile menu */}
                <div className="mt-3 flex items-center justify-center gap-3 border-t border-white/10 pt-3">
                  {socialLinks.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={s.label}
                      className={`grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-white/5 text-white/60 transition-all duration-200 ${s.hoverColor} hover:border-white/30 hover:bg-white/10`}
                    >
                      <s.Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}