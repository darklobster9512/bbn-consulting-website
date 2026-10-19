import { createFileRoute } from "@tanstack/react-router";
import { Compass, Settings2, Users, LineChart, Briefcase, Target, Quote } from "lucide-react";
import hero from "@/assets/hero.jpg";
import hamburg from "@/assets/hamburg.jpg";
import { CTA, CtaBand, Eyebrow } from "@/components/site";
import { meta } from "@/lib/company";

export const Route = createFileRoute("/")({
  head: () => ({ meta: meta("bbm-consulting GmbH – Beratung & Management aus Hamburg", "Strategie-, Organisations- und Managementberatung für den Mittelstand. Pragmatisch, partnerschaftlich, wirksam.") }),
  component: Index,
});

const services = [
  { icon: Compass, t: "Strategieberatung", d: "Klare Ziele, belastbare Roadmaps und fundierte Entscheidungen." },
  { icon: Settings2, t: "Prozessoptimierung", d: "Effiziente Abläufe, weniger Reibung, messbare Ergebnisse." },
  { icon: Users, t: "Organisationsentwicklung", d: "Strukturen und Teams, die Wandel tragen." },
  { icon: Briefcase, t: "Interim-Management", d: "Erfahrene Führung genau dann, wenn Sie sie brauchen." },
  { icon: Target, t: "Projektmanagement", d: "Komplexe Vorhaben sicher ins Ziel bringen." },
  { icon: LineChart, t: "Controlling & Steuerung", d: "Transparente Kennzahlen für bessere Steuerung." },
];

const steps = [
  ["01", "Analyse", "Wir verstehen Ihr Geschäft, Ihre Ziele und Herausforderungen im Detail."],
  ["02", "Konzept", "Gemeinsam entwickeln wir maßgeschneiderte, umsetzbare Lösungen."],
  ["03", "Umsetzung", "Wir begleiten die Umsetzung operativ – bis die Wirkung sichtbar ist."],
  ["04", "Verankerung", "Nachhaltige Ergebnisse durch Befähigung Ihrer Teams."],
];

function Index() {
  return (
    <>
      <section className="hero-glow">
        <div className="container-x grid items-center gap-14 py-20 md:py-28 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <Eyebrow>Beratung & Management · Hamburg</Eyebrow>
            <h1 className="mt-6 text-5xl font-bold leading-[1.05] md:text-7xl">
              Wir machen Ihr Unternehmen <span className="text-primary">zukunftssicher.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              bbm-consulting begleitet Unternehmen von der Strategie bis zur Umsetzung – mit Erfahrung, Klarheit und echtem Engagement für Ihren Erfolg.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <CTA to="/kontakt">Erstgespräch vereinbaren</CTA>
              <CTA to="/leistungen" variant="outline">Unsere Leistungen</CTA>
            </div>
          </div>
          <img src={hero} alt="Beratungsteam im Gespräch" width={1600} height={1008} className="aspect-[4/3] w-full rounded-3xl object-cover shadow-soft" />
        </div>
      </section>

      <section className="container-x grid grid-cols-2 gap-6 py-12 md:grid-cols-4">
        {[["15+", "Jahre Erfahrung"], ["200+", "Projekte"], ["95 %", "Weiterempfehlung"], ["40+", "Branchen"]].map(([n, l]) => (
          <div key={l} className="rounded-2xl border bg-card p-6">
            <div className="font-display text-4xl font-bold text-primary">{n}</div>
            <div className="mt-1 text-sm text-muted-foreground">{l}</div>
          </div>
        ))}
      </section>

      <section className="container-x py-20">
        <div className="max-w-2xl">
          <Eyebrow>Leistungen</Eyebrow>
          <h2 className="mt-4 text-3xl font-bold md:text-5xl">Beratung, die wirkt.</h2>
          <p className="mt-4 text-muted-foreground">Wir verbinden strategisches Denken mit operativer Umsetzungsstärke.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: I, t, d }) => (
            <div key={t} className="group rounded-3xl border bg-card p-8 transition hover:-translate-y-1 hover:shadow-soft">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary-soft text-primary transition group-hover:bg-primary group-hover:text-primary-foreground"><I className="h-6 w-6" /></div>
              <h3 className="mt-6 text-xl font-semibold">{t}</h3>
              <p className="mt-2 text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="container-x">
          <Eyebrow>Vorgehen</Eyebrow>
          <h2 className="mt-4 text-3xl font-bold md:text-5xl">In vier Schritten zum Erfolg.</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {steps.map(([n, t, d]) => (
              <div key={n} className="rounded-3xl bg-card p-8">
                <div className="font-display text-sm font-bold text-primary">{n}</div>
                <h3 className="mt-4 text-xl font-semibold">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x grid items-center gap-12 py-20 lg:grid-cols-2">
        <img src={hamburg} alt="Hamburg HafenCity" loading="lazy" width={1600} height={912} className="aspect-[4/3] w-full rounded-3xl object-cover" />
        <div>
          <Eyebrow>Warum bbm</Eyebrow>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">Hanseatisch verlässlich. Unternehmerisch gedacht.</h2>
          <ul className="mt-8 space-y-5">
            {[["Partnerschaftlich", "Wir arbeiten auf Augenhöhe – als Teil Ihres Teams."], ["Pragmatisch", "Lösungen, die im Alltag funktionieren, statt Folien für die Schublade."], ["Ergebnisorientiert", "Wir messen uns an Ihrem Erfolg."]].map(([t, d]) => (
              <li key={t} className="flex gap-4"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" /><div><b>{t}</b><p className="text-muted-foreground">{d}</p></div></li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-x py-10">
        <figure className="mx-auto max-w-3xl rounded-3xl border bg-card p-10 text-center">
          <Quote className="mx-auto h-8 w-8 text-primary" />
          <blockquote className="mt-6 font-display text-2xl font-medium leading-snug">„Mit bbm-consulting haben wir unsere Prozesse neu aufgestellt und innerhalb eines Jahres spürbar an Effizienz gewonnen."</blockquote>
          <figcaption className="mt-6 text-sm text-muted-foreground">Geschäftsführer, mittelständisches Handelsunternehmen</figcaption>
        </figure>
      </section>

      <CtaBand />
    </>
  );
}
