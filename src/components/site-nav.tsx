import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/go-fitness-logo-clean.png";

const links = [
  { label: "About", href: "#about" },
  { label: "Classes", href: "#classes" },
  { label: "Coaches", href: "#coaches" },
  { label: "Membership", href: "#membership" },
  { label: "Visit", href: "#visit" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="GO Fitness" loading="eager" width={1024} height={1024} className="h-10 w-10 object-contain" />
          <div className="leading-tight">
            <div className="font-display text-lg uppercase tracking-[0.18em] text-foreground">
              GO Fitness
            </div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-primary">
              Centre · Lekki
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-sm uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href="#membership"
          className="hidden md:inline-flex items-center gap-2 bg-primary px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-all hover:bg-primary-glow hover:shadow-[var(--shadow-ember)]"
        >
          Join Now
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="flex flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#membership"
              onClick={() => setOpen(false)}
              className="mt-2 bg-primary px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground"
            >
              Join Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
