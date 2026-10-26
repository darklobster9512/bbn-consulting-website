import { Link, useMatches, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode, type ComponentType } from "react";
import { Menu, X, ChevronRight, FileText, Info, Mail, Globe, Phone, MapPin, ArrowRight, ArrowUp, Quote, Newspaper } from "lucide-react";
import { company } from "@/lib/company";
import { photos } from "@/lib/photos";
import { useLang, type Lang } from "@/lib/i18n";

const ui = {
  de: { quote: "Beratung anfragen", call: "Anrufen", mail: "E-Mail", menu: "Menü", tagline: "Unternehmensberatung aus Hamburg", more: "Mehr erfahren", contact: "Kontakt", tel: "Tel.", quick: "Schnellkontakt", news: "Aktuelles", newsItems: [["Okt 2026", "Neuer Internetauftritt der bbm-consulting GmbH online."], ["Sep 2026", "Verstärkung im Bereich Prozessberatung – wir stellen ein."]], request: "Anfrage", top: "Nach oben", services: "Leistungen", serviceItems: ["Strategieberatung", "Managementberatung", "Organisationsentwicklung", "Interim-Management"], legal: "Rechtliches", legalItems: ["Kontakt", "Karriere", "Impressum", "Datenschutz"], vat: "USt-IdNr.", court: "Amtsgericht Hamburg" },
  en: { quote: "Request consultation", call: "Call", mail: "Email", menu: "Menu", tagline: "Management consultancy from Hamburg", more: "Learn more", contact: "Contact", tel: "Phone", quick: "Quick contact", news: "News", newsItems: [["Oct 2026", "New website of bbm-consulting GmbH is online."], ["Sep 2026", "Growing our process consulting team – we are hiring."]], request: "Enquiry", top: "Back to top", services: "Services", serviceItems: ["Strategy consulting", "Management consulting", "Organisational development", "Interim management"], legal: "Legal", legalItems: ["Contact", "Careers", "Legal notice", "Privacy policy"], vat: "VAT ID", court: "Local Court Hamburg" },
};
const useUi = () => ui[useLang().lang];

type Icon = ComponentType<{ className?: string }>;

const nav = [
  { to: "/", label: "Home", en: "Home" },
  { to: "/ueber-uns", label: "Über uns", en: "About us" },
  { to: "/leistungen", label: "Leistungen", en: "Services" },
  { to: "/karriere", label: "Karriere", en: "Careers" },
  { to: "/referenzen", label: "Referenzen", en: "References" },
  { to: "/kontakt", label: "Kontakt", en: "Contact" },
] as const;

const labelsEn: Record<string, string> = {
  "/ueber-uns": "About us", "/leistungen": "Services", "/karriere": "Careers", "/referenzen": "References",
  "/kontakt": "Contact", "/impressum": "Legal notice", "/datenschutz": "Privacy policy",
};
const labels: Record<string, string> = {
  "/ueber-uns": "Über uns", "/leistungen": "Leistungen", "/karriere": "Karriere", "/referenzen": "Referenzen",
  "/kontakt": "Kontakt", "/impressum": "Impressum", "/datenschutz": "Datenschutz",
};

function TopBar() {
  const { lang, setLang } = useLang();
  const b = (l: Lang) => <button onClick={() => setLang(l)} aria-pressed={lang === l} className={`hover:underline ${lang === l ? "font-bold" : ""}`}>{l}</button>;
  return (
    <div className="hidden border-b border-primary-dark bg-primary-dark text-[12px] text-primary-foreground md:block">
      <div className="wrap flex h-8 items-center gap-6">
        <span className="flex items-center gap-1.5"><MapPin className="h-3 w-3" />{company.street}, {company.city}</span>
        <a href={company.phoneHref} className="flex items-center gap-1.5 hover:underline"><Phone className="h-3 w-3" />{company.phone}</a>
        <a href={`mailto:${company.mail.kontakt}`} className="flex items-center gap-1.5 hover:underline"><Mail className="h-3 w-3" />{company.mail.kontakt}</a>
        <span className="ml-auto flex items-center gap-1"><Globe className="h-3 w-3" />{b("de")}/{b("en")}</span>
      </div>
    </div>
  );
}

export function Header() {
  const t = useUi(); const { lang } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => setOpen(false), [path]);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; }, [open]);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={`sticky top-0 z-50 bg-primary text-primary-foreground transition-shadow ${scrolled ? "shadow-lg" : ""}`}>
      <TopBar />
      <div className="wrap flex h-16 items-center md:h-20">
        <Link to="/" className="logo-tab -ml-4 flex h-16 items-center bg-background px-7 text-primary md:h-20 md:px-9">
          <span className="text-xl font-bold italic tracking-tight">bbm</span>
          <span className="ml-1 text-xl font-light italic">consulting</span>
        </Link>
        <nav className="ml-6 hidden flex-1 items-center gap-7 lg:flex">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} activeOptions={{ exact: true }}
              className="relative py-1 text-[13px] after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-primary-foreground after:transition-transform hover:after:scale-x-100 data-[status=active]:font-semibold data-[status=active]:after:scale-x-100">
              {lang === "en" ? n.en : n.label}
            </Link>
          ))}
        </nav>
        <Link to="/kontakt" className="slant ml-auto hidden bg-background px-6 py-2 text-[13px] font-semibold text-primary transition hover:bg-accent lg:block">{t.quote}</Link>
        <button className="-mr-2 ml-auto p-2 lg:hidden" aria-label={t.menu} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}</button>
      </div>
      {open && (
        <div className="fixed inset-x-0 bottom-0 top-16 overflow-y-auto bg-primary lg:hidden">
          <nav className="wrap flex flex-col border-t border-primary-dark">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} activeOptions={{ exact: true }} className="flex items-center justify-between border-b border-primary-dark py-4 text-lg data-[status=active]:font-bold">
                {lang === "en" ? n.en : n.label}<ChevronRight className="h-5 w-5" />
              </Link>
            ))}
          </nav>
          <div className="wrap mt-6 grid grid-cols-2 gap-2">
            <a href={company.phoneHref} className="slant flex items-center justify-center gap-2 bg-background py-3 font-semibold text-primary"><Phone className="h-4 w-4" />{t.call}</a>
            <a href={`mailto:${company.mail.kontakt}`} className="slant flex items-center justify-center gap-2 bg-background py-3 font-semibold text-primary"><Mail className="h-4 w-4" />{t.mail}</a>
          </div>
          <p className="wrap mt-6 pb-8 text-[13px] opacity-90">{company.name}<br />{company.street}, {company.city}</p>
        </div>
      )}
    </header>
  );
}

function Breadcrumb() {
  const matches = useMatches();
  const path = matches[matches.length - 1]?.pathname ?? "/";
  const { lang } = useLang(); const t = useUi();
  return (
    <div className="bg-footer text-[12px] text-footer-foreground">
      <div className="wrap flex h-9 items-center gap-2">
        <Link to="/" className="hover:underline">Home</Link>
        {path !== "/" && <><ChevronRight className="h-3 w-3 text-footer-muted" /><span className="font-semibold">{(lang === "en" ? labelsEn : labels)[path] ?? ""}</span></>}
        <span className="ml-auto hidden text-footer-muted sm:block">{t.tagline}</span>
      </div>
    </div>
  );
}

export function Banner({ images = [photos.bandDesk, photos.bandMeeting, photos.bandRoom] }: { images?: string[] }) {
  return (
    <div className="flex h-44 overflow-hidden md:h-[340px]">
      {images.map((src, i) => (
        <img key={i} src={src} alt="" className={`bw-hover h-full object-cover object-center ${i === 1 ? "w-full md:w-[42%]" : "hidden md:block md:w-[29%]"}`} />
      ))}
    </div>
  );
}

export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e?.isIntersecting) { el.classList.add("is-visible"); io.disconnect(); } }, { threshold: 0.1 });
    io.observe(el); return () => io.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}

export function SlantTitle({ children, as: Tag = "h1", icon: I }: { children: ReactNode; as?: "h1" | "h2"; icon?: Icon }) {
  return (
    <Tag className="slant -ml-2 mb-5 inline-flex max-w-full items-center gap-3 bg-primary px-5 py-2 text-[20px] leading-tight font-bold md:mb-6 md:px-6 text-primary-foreground md:text-[26px]">
      {I && <I className="h-5 w-5" />}{children}
    </Tag>
  );
}

export function BarHead({ icon: I, title }: { icon: Icon; title: string }) {
  return (
    <div className="flex h-[35px] items-center bg-primary text-primary-foreground">
      <span className="slant ml-2 flex h-full w-14 items-center justify-center bg-primary-dark"><I className="h-4 w-4" /></span>
      <span className="ml-3 truncate text-[13px] font-semibold">{title}</span>
    </div>
  );
}

export function SideBox({ icon = Info, title, children, framed = true }: { icon?: Icon; title: string; children: ReactNode; framed?: boolean }) {
  return (
    <div className="mb-4">
      <BarHead icon={icon} title={title} />
      <div className={`p-3 text-[13px] ${framed ? "border border-t-0 border-primary" : ""}`}>{children}</div>
    </div>
  );
}

export function Tile({ title, image, text, to = "/leistungen", href, cta }: { title: string; image: string; text: string; to?: "/leistungen" | "/karriere" | "/kontakt" | "/ueber-uns"; href?: string; cta?: string }) {
  const t = useUi();
  const btn = "group/btn mt-auto flex min-h-11 items-center justify-center gap-2 border border-primary py-2 text-[13px] text-primary transition hover:bg-primary hover:text-primary-foreground";
  const inner = <>{cta ?? t.more}<ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" /></>;
  return (
    <Reveal className="h-full">
      <article className="group flex h-full flex-col">
        <BarHead icon={FileText} title={title} />
        <div className="h-48 overflow-hidden sm:h-44">
          <img src={image} alt="" loading="lazy" className="zoom-img bw h-full w-full object-cover group-hover:scale-105 group-hover:grayscale-0" />
        </div>
        <p className="my-4 text-[13px]">{text}</p>
        {href ? <a href={href} className={btn}>{inner}</a> : <Link to={to} className={btn}>{inner}</Link>}
      </article>
    </Reveal>
  );
}

export function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="my-4 space-y-1 pl-3">
      {items.map((i) => <li key={i} className="flex gap-3"><ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={3} />{i}</li>)}
    </ul>
  );
}

export function StatStrip({ stats }: { stats: [string, string][] }) {
  return (
    <div className="my-8 grid grid-cols-2 gap-2 sm:grid-cols-4">
      {stats.map(([n, l]) => (
        <div key={l} className="slant bg-primary px-5 py-3 md:px-6 md:py-4 text-primary-foreground">
          <div className="text-xl font-bold md:text-2xl">{n}</div>
          <div className="text-[12px] opacity-90">{l}</div>
        </div>
      ))}
    </div>
  );
}

export function QuoteBox({ text, by }: { text: string; by: string }) {
  return (
    <Reveal>
      <figure className="my-8 border-l-4 border-primary bg-muted px-6 py-5">
        <Quote className="h-6 w-6 text-primary" />
        <blockquote className="mt-2 text-[15px] italic">{text}</blockquote>
        <figcaption className="mt-2 text-[12px] font-semibold text-muted-foreground">— {by}</figcaption>
      </figure>
    </Reveal>
  );
}

export function Steps({ steps }: { steps: [string, string][] }) {
  return (
    <div className="grid grid-cols-2 gap-px bg-border sm:grid-cols-4">
      {steps.map(([t, d], i) => (
        <Reveal key={t} className="bg-background p-4">
          <div className="text-3xl font-light text-primary">{String(i + 1).padStart(2, "0")}</div>
          <div className="mt-1 font-bold">{t}</div>
          <p className="mt-1 text-[12px] text-muted-foreground">{d}</p>
        </Reveal>
      ))}
    </div>
  );
}

export function Timeline({ items }: { items: [string, string][] }) {
  return (
    <ol className="relative my-6 ml-3 border-l-2 border-primary">
      {items.map(([y, t]) => (
        <li key={y} className="mb-5 ml-6">
          <span className="absolute -left-[7px] mt-1 h-3 w-3 bg-primary" />
          <div className="font-bold text-primary">{y}</div>
          <p>{t}</p>
        </li>
      ))}
    </ol>
  );
}

export function ContactBox({ mobile = false }: { mobile?: boolean }) {
  const t = useUi();
  return (
    <div className={mobile ? "" : "hidden md:block"}>
    <SideBox icon={Mail} title={t.contact}>
      <p><b>{company.name}</b><br />{company.street}<br />{company.city}</p>
      <p className="mt-3">{t.tel} <a className="text-primary" href={company.phoneHref}>{company.phone}</a><br /><a className="text-primary" href={`mailto:${company.mail.kontakt}`}>{company.mail.kontakt}</a></p>
      <Link to="/kontakt" className="mt-3 flex items-center justify-center gap-2 bg-primary py-2 font-semibold text-primary-foreground transition hover:bg-primary-dark">
        {t.quick} <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </SideBox>
    </div>
  );
}

export function NewsBox() {
  const t = useUi();
  return (
    <SideBox icon={Newspaper} title={t.news}>
      <ul className="space-y-3">
        {t.newsItems.map(([d, t]) => (
          <li key={d} className="border-b pb-2 last:border-0"><div className="text-[11px] font-semibold text-primary">{d}</div>{t}</li>
        ))}
      </ul>
    </SideBox>
  );
}

export function PageLayout({ children, side, banner = true }: { children: ReactNode; side?: ReactNode; banner?: boolean }) {
  return (
    <>
      {banner && <Banner />}
      <Breadcrumb />
      <div className="wrap grid gap-6 py-8 md:grid-cols-[1fr_300px]">
        <div className="min-w-0">{children}</div>
        <aside className="mt-4 border-t pt-6 md:mt-0 md:border-0 md:pt-0 md:sticky md:top-32 md:self-start">{side ?? <ContactBox />}</aside>
      </div>
    </>
  );
}

export function MobileBar() {
  const t = useUi();
  const cell = "slant flex flex-1 flex-col items-center justify-center gap-0.5 bg-primary py-2 text-[11px] font-semibold text-primary-foreground";
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-1 border-t border-primary-dark bg-background p-1 pb-[max(0.25rem,env(safe-area-inset-bottom))] md:hidden">
      <a href={company.phoneHref} className={cell}><Phone className="h-4 w-4" />{t.call}</a>
      <a href={`mailto:${company.mail.kontakt}`} className={cell}><Mail className="h-4 w-4" />{t.mail}</a>
      <Link to="/kontakt" className={cell}><ArrowRight className="h-4 w-4" />{t.request}</Link>
    </div>
  );
}

export function Footer() {
  const t = useUi();
  return (
    <footer className="relative bg-footer pb-16 text-footer-foreground md:pb-0">
      <button aria-label={t.top} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="slant absolute -top-5 right-4 md:right-[max(1rem,calc((100vw-1000px)/2+1rem))] flex h-10 w-14 items-center justify-center bg-primary text-primary-foreground transition hover:bg-primary-dark">
        <ArrowUp className="h-4 w-4" />
      </button>
      <div className="wrap grid gap-6 py-10 text-[13px] sm:grid-cols-3 sm:gap-8">
        <div>
          <h4 className="mb-3 font-bold">{company.name}</h4>
          <p className="text-footer-muted">{company.street}<br />D-{company.city}<br />{t.tel} {company.phone}<br />{company.mail.info}</p>
        </div>
        <div>
          <h4 className="mb-3 font-bold">{t.services}</h4>
          <ul className="space-y-1 text-footer-muted">
            {t.serviceItems.map((l) => (
              <li key={l}><Link to="/leistungen" className="hover:text-footer-foreground">{l}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-bold">{t.legal}</h4>
          <ul className="space-y-1 text-footer-muted">
            {(["/kontakt", "/karriere", "/impressum", "/datenschutz"] as const).map((to, i) => (
              <li key={to}><Link to={to} className="hover:text-footer-foreground">{t.legalItems[i]}</Link></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-footer-muted/30">
        <div className="wrap flex flex-wrap items-center justify-between gap-4 py-4 text-[12px] text-footer-muted">
          <span className="leading-relaxed">© {new Date().getFullYear()} {company.name}<span className="hidden sm:inline"> · </span><br className="sm:hidden" />{company.register}, {t.court} · {t.vat} {company.vat}</span>
        </div>
      </div>
    </footer>
  );
}
