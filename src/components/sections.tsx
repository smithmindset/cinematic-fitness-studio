import { motion } from "motion/react";
import { ArrowRight, Dumbbell, Flame, HeartPulse, Zap, MapPin, Phone, Mail, Clock, Check } from "lucide-react";
import hero from "@/assets/hero-deadlift.jpg";
import classStrength from "@/assets/class-strength.jpg";
import classBoxing from "@/assets/class-boxing.jpg";
import classCardio from "@/assets/class-cardio.jpg";
import classHiit from "@/assets/class-hiit.jpg";
import trainer1 from "@/assets/trainer-1.jpg";
import trainer2 from "@/assets/trainer-2.jpg";
import trainer3 from "@/assets/trainer-3.jpg";

/* HERO */
export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden noise">
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="Athlete preparing a deadlift in dramatic red lighting at GO Fitness Centre"
          width={1920}
          height={1280}
          className="h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-ember)" }} />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-6 pb-24 pt-40 md:px-10 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-primary"
        >
          <span className="h-px w-10 bg-primary" />
          Lekki · Lagos · Est. 2018
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="font-display mt-6 text-[clamp(3rem,10vw,9rem)] font-bold uppercase leading-[0.9] tracking-tight text-foreground text-shadow-cinematic"
        >
          Train<br />
          <span className="text-primary">Beyond</span> Limits.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          Lagos' most elite fitness destination. Strength, conditioning, boxing and recovery — engineered by world-class coaches in a space built for relentless performance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a href="#membership" className="group inline-flex items-center gap-3 bg-primary px-8 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground transition-all hover:bg-primary-glow hover:shadow-[var(--shadow-ember)]">
            Start Training
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a href="#classes" className="inline-flex items-center gap-3 border border-border/70 px-8 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-foreground transition-colors hover:border-primary hover:text-primary">
            Explore Classes
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-20 grid max-w-3xl grid-cols-3 gap-8 border-t border-border/40 pt-8"
        >
          {[
            { v: "2,400+", l: "Members" },
            { v: "15", l: "Expert Coaches" },
            { v: "60+", l: "Weekly Classes" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-3xl text-foreground md:text-5xl">{s.v}</div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ABOUT */
export function About() {
  const features = [
    { icon: Dumbbell, t: "Olympic Platforms", d: "Eleiko bars, calibrated plates, six dedicated lifting stations." },
    { icon: Flame, t: "Combat Studio", d: "Pro-grade ring, heavy bags, padwork with certified coaches." },
    { icon: HeartPulse, t: "Recovery Zone", d: "Sauna, ice bath, percussive therapy and stretch lab." },
    { icon: Zap, t: "Performance Floor", d: "Sleds, turf, kettlebells and a 30m sprint track." },
  ];
  return (
    <section id="about" className="relative py-32 md:py-44">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-12 md:px-10">
        <div className="md:col-span-5">
          <div className="sticky top-32">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-primary">
              <span className="h-px w-10 bg-primary" />
              The Centre
            </div>
            <h2 className="font-display mt-6 text-5xl font-bold uppercase leading-[0.95] text-foreground md:text-6xl">
              A temple for those who refuse <span className="text-primary">average</span>.
            </h2>
          </div>
        </div>
        <div className="md:col-span-7 md:pt-6">
          <p className="text-lg leading-relaxed text-muted-foreground">
            GO Fitness Centre isn't a gym. It's a stage. Twenty-thousand square feet of competition-grade equipment, dedicated boxing and combat studios, performance recovery zones, and coaches who've trained athletes from the Premier League to the Olympic floor.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Built in the heart of Lekki, we train executives, athletes, and everyday warriors with the same standard — uncompromising.
          </p>
          <div className="mt-12 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
            {features.map(({ icon: Icon, t, d }) => (
              <div key={t} className="group bg-card p-8 transition-colors hover:bg-surface-2">
                <Icon className="h-7 w-7 text-primary transition-transform group-hover:scale-110" />
                <div className="font-display mt-5 text-lg uppercase tracking-wider text-foreground">{t}</div>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* CLASSES */
const classes = [
  { img: classStrength, tag: "01", title: "Strength", desc: "Olympic lifting, powerlifting and structural strength programming." },
  { img: classBoxing, tag: "02", title: "Boxing & Combat", desc: "Technique, padwork and sparring with championship coaches." },
  { img: classCardio, tag: "03", title: "Conditioning", desc: "Curved treadmills, sleds and engine work for relentless cardio." },
  { img: classHiit, tag: "04", title: "Group HIIT", desc: "60-minute coached intervals — kettlebells, intervals, intent." },
];

export function Classes() {
  return (
    <section id="classes" className="relative py-32 md:py-44">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-primary">
              <span className="h-px w-10 bg-primary" />
              Programmes
            </div>
            <h2 className="font-display mt-6 max-w-2xl text-5xl font-bold uppercase leading-[0.95] text-foreground md:text-6xl">
              Four disciplines.<br />
              <span className="text-primary">One standard.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Every class is coached. Every coach is certified. Every session ends with you stronger than you walked in.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {classes.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="group relative aspect-[4/5] overflow-hidden bg-card md:aspect-[5/6]"
            >
              <img src={c.img} alt={c.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-between p-8">
                <div className="font-display text-xs tracking-[0.3em] text-primary">/ {c.tag}</div>
                <div>
                  <h3 className="font-display text-4xl font-bold uppercase tracking-tight text-foreground md:text-5xl">{c.title}</h3>
                  <p className="mt-3 max-w-md text-sm text-muted-foreground">{c.desc}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-foreground">
                    <span className="h-px w-8 bg-primary transition-all group-hover:w-16" />
                    Book a session
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* COACHES */
const coaches = [
  { img: trainer1, name: "Tobi Adebayo", role: "Head of Strength" },
  { img: trainer2, name: "Amara Okeke", role: "Conditioning Lead" },
  { img: trainer3, name: "Kayode Bello", role: "Boxing Coach" },
];

export function Coaches() {
  return (
    <section id="coaches" className="relative bg-surface py-32 md:py-44">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-primary">
            <span className="h-px w-10 bg-primary" />
            The Coaches
          </div>
          <h2 className="font-display mt-6 text-5xl font-bold uppercase leading-[0.95] text-foreground md:text-6xl">
            The people behind every <span className="text-primary">PR</span>.
          </h2>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {coaches.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-card">
                <img src={c.img} alt={c.name} loading="lazy" className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.03]" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="font-display text-2xl uppercase tracking-tight text-foreground">{c.name}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.25em] text-primary">{c.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* MEMBERSHIP */
const plans = [
  {
    name: "Drop-In", price: "₦15,000", cadence: "single session",
    perks: ["Full floor access", "1 group class", "Locker & shower"], featured: false,
  },
  {
    name: "Performance", price: "₦95,000", cadence: "per month",
    perks: ["Unlimited floor access", "Unlimited group classes", "Recovery zone (sauna + ice)", "Body composition scan", "Member-only events"], featured: true,
  },
  {
    name: "Elite 1:1", price: "₦220,000", cadence: "per month",
    perks: ["Everything in Performance", "8 private coaching sessions", "Personal programming", "Nutrition consultation"], featured: false,
  },
];

export function Membership() {
  return (
    <section id="membership" className="relative py-32 md:py-44">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-primary">
              <span className="h-px w-10 bg-primary" />
              Membership
            </div>
            <h2 className="font-display mt-6 text-5xl font-bold uppercase leading-[0.95] text-foreground md:text-6xl">
              Commit to <span className="text-primary">the work</span>.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            No contracts. Cancel anytime. First class is on us — walk in and try the floor.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <div key={p.name} className={`relative flex flex-col border p-8 transition-all md:p-10 ${p.featured ? "border-primary bg-card shadow-[var(--shadow-ember)] md:-translate-y-4" : "border-border bg-card hover:border-primary/50"}`}>
              {p.featured && (
                <div className="absolute -top-3 left-8 bg-primary px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-primary-foreground">
                  Most Popular
                </div>
              )}
              <div className="font-display text-2xl uppercase tracking-wider text-foreground">{p.name}</div>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-display text-5xl font-bold text-foreground">{p.price}</span>
              </div>
              <div className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">{p.cadence}</div>
              <ul className="mt-8 space-y-3 border-t border-border pt-8">
                {p.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 flex-none text-primary" />
                    {perk}
                  </li>
                ))}
              </ul>
              <a href="#visit" className={`mt-10 inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.25em] transition-all ${p.featured ? "bg-primary text-primary-foreground hover:bg-primary-glow" : "border border-border text-foreground hover:border-primary hover:text-primary"}`}>
                Join {p.name}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* VISIT */
export function Visit() {
  const items = [
    { icon: MapPin, label: "Address", value: "19 Kusenla Road\nIkate Elegushi, Lekki, Lagos" },
    { icon: Phone, label: "Phone", value: "0903 000 3221", href: "tel:09030003221" },
    { icon: Mail, label: "Email", value: "gofitnessng@gmail.com", href: "mailto:gofitnessng@gmail.com" },
    { icon: Clock, label: "Hours", value: "Mon — Fri  ·  5am – 9pm\nSat  ·  7am – 3pm" },
  ];
  return (
    <section id="visit" className="relative overflow-hidden bg-surface py-32 md:py-44">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2 md:px-10">
        <div>
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-primary">
            <span className="h-px w-10 bg-primary" />
            Visit Us
          </div>
          <h2 className="font-display mt-6 text-5xl font-bold uppercase leading-[0.95] text-foreground md:text-6xl">
            Walk in.<br />
            <span className="text-primary">Walk out different.</span>
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
            Drop by for a tour, your first class, or a coffee. Our team is on the floor every day of the week.
          </p>
          <div className="mt-12 grid gap-6">
            {items.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex gap-5 border-l-2 border-primary/40 pl-5">
                <Icon className="mt-1 h-5 w-5 flex-none text-primary" />
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{label}</div>
                  {href ? (
                    <a href={href} className="mt-1 block whitespace-pre-line text-base text-foreground transition-colors hover:text-primary">{value}</a>
                  ) : (
                    <div className="mt-1 whitespace-pre-line text-base text-foreground">{value}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative overflow-hidden border border-border bg-card">
          <iframe
            title="GO Fitness Centre location"
            src="https://www.google.com/maps?q=19+Kusenla+Road+Ikate+Elegushi+Lekki+Lagos&output=embed"
            className="h-full min-h-[480px] w-full grayscale contrast-125"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="pointer-events-none absolute inset-0" style={{ background: "var(--gradient-ember)", opacity: 0.25 }} />
        </div>
      </div>
    </section>
  );
}

/* FOOTER */
export function Footer() {
  return (
    <footer className="relative border-t border-border bg-background py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row md:px-10">
        <div className="font-display text-xs uppercase tracking-[0.3em] text-muted-foreground">
          © {new Date().getFullYear()} GO Fitness Centre · Lekki, Lagos
        </div>
        <div className="font-display text-xs uppercase tracking-[0.3em] text-primary">
          Train Beyond Limits
        </div>
      </div>
    </footer>
  );
}
