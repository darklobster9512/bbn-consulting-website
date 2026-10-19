import { Link } from "@tanstack/react-router";
import { useState, type ReactNode, type ComponentType } from "react";
import { Menu, X, ChevronRight, FileText, Info, Mail, Globe } from "lucide-react";
import { company } from "@/lib/company";
import band1 from "@/assets/band1.jpg";
import band2 from "@/assets/band2.jpg";
import band3 from "@/assets/band3.jpg";

const nav = [
  { to: "/", label: "Home" },
  { to: "/ueber-uns", label: "Über uns" },
  { to: "/leistungen", label: "Leistungen" },
  { to: "/karriere", label: "Karriere" },
  { to: "/referenzen", label: "Referenzen" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

function Logo() {
  return (
    <Link to="/" className="logo-tab flex h-20 items-center bg-background px-9 text-primary">
      <span className="text-xl font-bold italic tracking-tight">bbm</span>
      <span className="ml-1 text-xl font-light italic">consulting</span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-primary text-primary-foreground">
      <div className="wrap flex h-20 items-center">
        <div className="-ml-4"><Logo /></div>
        <nav className="ml-4 hidden flex-1 items-center gap-7 lg:flex">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} activeOptions={{ exact: true }} className="text-[13px] hover:underline" activeProps={{ className: "font-semibold" }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <span className="ml-auto hidden items-center gap-1 text-[13px] lg:flex"><Globe className="h-3.5 w-3.5" /><b>de</b>/en</span>
        <button className="ml-auto lg:hidden" aria-label="Menü" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && (
        <nav className="wrap flex flex-col border-t border-primary-dark pb-4 lg:hidden">
          {nav.map((n) => <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="py-2">{n.label}</Link>)}
        </nav>
      )}
    </header>
  );
}

export function Banner({ images = [band1, band2, band3] }: { images?: string[] }) {
  return (
    <div className="flex h-56 overflow-hidden md:h-[360px]">
      {images.map((src, i) => (
        <img key={i} src={src} alt="" className={`bw h-full object-cover ${i === 1 ? "w-full md:w-[42%]" : "hidden md:block md:w-[29%]"}`} />
      ))}
    </div>
  );
}

export function SlantTitle({ children, as: Tag = "h1" }: { children: ReactNode; as?: "h1" | "h2" }) {
  return (
    <Tag className="slant -ml-2 mb-6 inline-block bg-primary px-6 py-2 text-xl font-bold text-primary-foreground md:text-[26px]">
      {children}
    </Tag>
  );
}

function BarHead({ icon: I, title }: { icon: ComponentType<{ className?: string }>; title: string }) {
  return (
    <div className="flex h-[35px] items-center bg-primary text-primary-foreground">
      <span className="slant ml-2 flex h-full w-14 items-center justify-center bg-primary-dark"><I className="h-4 w-4" /></span>
      <span className="ml-3 truncate text-[13px] font-semibold">{title}</span>
    </div>
  );
}

export function SideBox({ icon = Info, title, children, framed = true }: { icon?: ComponentType<{ className?: string }>; title: string; children: ReactNode; framed?: boolean }) {
  return (
    <div className="mb-4">
      <BarHead icon={icon} title={title} />
      <div className={`p-3 text-[13px] ${framed ? "border border-t-0 border-primary" : ""}`}>{children}</div>
    </div>
  );
}

export function Tile({ title, image, text, to = "/leistungen", href, cta = "Mehr erfahren" }: { title: string; image: string; text: string; to?: "/leistungen" | "/karriere" | "/kontakt" | "/ueber-uns"; href?: string; cta?: string }) {
  const btn = "mt-auto block border border-primary py-2 text-center text-[13px] text-primary hover:bg-primary hover:text-primary-foreground";
  return (
    <article className="flex flex-col">
      <BarHead icon={FileText} title={title} />
      <img src={image} alt="" loading="lazy" className="bw h-44 w-full object-cover" />
      <p className="my-4 text-[13px]">{text}</p>
      {href ? <a href={href} className={btn}>{cta}</a> : <Link to={to} className={btn}>{cta}</Link>}
    </article>
  );
}

export function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="my-4 space-y-1 pl-3">
      {items.map((i) => <li key={i} className="flex gap-3"><ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={3} />{i}</li>)}
    </ul>
  );
}

export function ContactBox() {
  return (
    <SideBox icon={Mail} title="Kontakt">
      <p><b>{company.name}</b><br />{company.street}<br />{company.city}</p>
      <p className="mt-3">Tel.: {company.phone}<br /><a className="text-primary" href={`mailto:${company.mail.kontakt}`}>{company.mail.kontakt}</a></p>
    </SideBox>
  );
}

export function PageLayout({ children, side, banner = true }: { children: ReactNode; side?: ReactNode; banner?: boolean }) {
  return (
    <>
      {banner && <Banner />}
      <div className="wrap grid gap-4 py-7 md:grid-cols-[1fr_300px]">
        <div className="min-w-0">{children}</div>
        <aside>{side ?? <ContactBox />}</aside>
      </div>
    </>
  );
}

export function Footer() {
  return (
    <footer className="bg-footer text-footer-foreground">
      <div className="wrap py-8 text-[13px]">
        <div className="flex flex-wrap justify-between gap-4">
          <div>
            <p>© {new Date().getFullYear()} {company.name}</p>
            <p className="mt-3 text-footer-muted">{company.name} | {company.street} | D-{company.city} | USt-IdNr. {company.vat}</p>
          </div>
          <nav className="flex h-fit divide-x divide-footer-muted">
            {([["/kontakt", "Kontakt"], ["/karriere", "Karriere"], ["/datenschutz", "Datenschutz"], ["/impressum", "Impressum"]] as const).map(([to, l]) => (
              <Link key={to} to={to} className="px-3 hover:underline">{l}</Link>
            ))}
          </nav>
        </div>
        <div className="mt-6 flex gap-1">
          {["in", "X"].map((s) => (
            <span key={s} className="slant flex h-12 w-16 items-center justify-center bg-primary text-lg font-bold">{s}</span>
          ))}
        </div>
      </div>
    </footer>
  );
}
