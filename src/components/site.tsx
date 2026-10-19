import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { company } from "@/lib/company";

const nav = [
  { to: "/leistungen", label: "Leistungen" },
  { to: "/ueber-uns", label: "Über uns" },
  { to: "/karriere", label: "Karriere" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2 font-display text-xl font-bold">
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground">b</span>
      bbm<span className="text-primary">consulting</span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-lg">
      <div className="container-x flex h-18 items-center justify-between py-4">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="text-sm font-medium text-muted-foreground transition hover:text-foreground" activeProps={{ className: "text-sm font-medium text-primary" }}>
              {n.label}
            </Link>
          ))}
          <CTA to="/kontakt">Beratung anfragen</CTA>
        </nav>
        <button className="md:hidden" aria-label="Menü" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="container-x flex flex-col gap-4 pb-6 md:hidden">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="text-lg font-medium">
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function CTA({ to, children, variant = "primary" }: { to: "/kontakt" | "/leistungen" | "/karriere" | "/ueber-uns"; children: ReactNode; variant?: "primary" | "outline" }) {
  const cls =
    variant === "primary"
      ? "bg-primary text-primary-foreground hover:opacity-90 shadow-soft"
      : "border border-border bg-card text-foreground hover:border-primary";
  return (
    <Link to={to} className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition ${cls}`}>
      {children} <ArrowRight className="h-4 w-4" />
    </Link>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-foreground">
      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
      {children}
    </span>
  );
}

export function PageHero({ eyebrow, title, text, image }: { eyebrow: string; title: string; text: string; image?: string }) {
  return (
    <section className="hero-glow">
      <div className="container-x grid items-center gap-12 py-20 md:py-28 lg:grid-cols-2">
        <div>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">{title}</h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">{text}</p>
        </div>
        {image && <img src={image} alt="" width={1200} height={912} className="aspect-[4/3] w-full rounded-3xl object-cover shadow-soft" />}
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="container-x py-20">
      <div className="rounded-3xl bg-navy p-10 text-navy-foreground md:p-16">
        <h2 className="max-w-2xl text-3xl font-bold md:text-4xl">Bereit für den nächsten Schritt?</h2>
        <p className="mt-4 max-w-xl opacity-80">Lassen Sie uns in einem unverbindlichen Erstgespräch herausfinden, wie wir Ihr Unternehmen voranbringen.</p>
        <div className="mt-8"><CTA to="/kontakt">Gespräch vereinbaren</CTA></div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container-x grid gap-10 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">Beratungs- und Managementdienstleistungen aus Hamburg – strategisch, pragmatisch, partnerschaftlich.</p>
        </div>
        <div className="text-sm">
          <h4 className="mb-3 font-semibold">Kontakt</h4>
          <p className="text-muted-foreground">{company.name}<br />{company.street}<br />{company.city}</p>
          <p className="mt-2 text-muted-foreground">Tel. {company.phone}<br />
            <a className="hover:text-primary" href={`mailto:${company.mail.kontakt}`}>{company.mail.kontakt}</a>
          </p>
        </div>
        <div className="text-sm">
          <h4 className="mb-3 font-semibold">Navigation</h4>
          <ul className="space-y-2 text-muted-foreground">
            {nav.map((n) => <li key={n.to}><Link to={n.to} className="hover:text-primary">{n.label}</Link></li>)}
            <li><Link to="/impressum" className="hover:text-primary">Impressum</Link></li>
            <li><Link to="/datenschutz" className="hover:text-primary">Datenschutz</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t py-6 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} {company.name}. Alle Rechte vorbehalten.</div>
    </footer>
  );
}
