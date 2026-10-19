import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, Clock, HeartHandshake, MapPin, TrendingUp, Laptop, Mail } from "lucide-react";
import img from "@/assets/career.jpg";
import { Eyebrow, PageHero } from "@/components/site";
import { company, meta } from "@/lib/company";

export const Route = createFileRoute("/karriere")({
  head: () => ({ meta: meta("Karriere – bbm-consulting GmbH", "Starten Sie Ihre Karriere bei bbm-consulting in Hamburg. Offene Stellen und Bewerbung.") }),
  component: Page,
});

const benefits = [
  { i: GraduationCap, t: "Weiterbildung", d: "Individuelles Budget für Trainings und Zertifizierungen." },
  { i: Clock, t: "Flexible Arbeitszeiten", d: "Vertrauensarbeitszeit und Work-Life-Balance." },
  { i: Laptop, t: "Mobiles Arbeiten", d: "Remote-Anteile und moderne Ausstattung." },
  { i: TrendingUp, t: "Entwicklung", d: "Klare Karrierepfade und frühe Verantwortung." },
  { i: HeartHandshake, t: "Teamkultur", d: "Kollegiales Miteinander und regelmäßige Events." },
  { i: MapPin, t: "Standort Hamburg", d: "Modernes Büro mit guter Anbindung." },
];

const jobs = [
  ["Senior Consultant (m/w/d) Strategie", "Vollzeit · Hamburg"],
  ["Consultant (m/w/d) Prozessmanagement", "Vollzeit · Hamburg / Remote"],
  ["Projektmanager (m/w/d)", "Vollzeit · Hamburg"],
  ["Werkstudent (m/w/d) Consulting", "Teilzeit · Hamburg"],
];

function Page() {
  return (
    <>
      <PageHero eyebrow="Karriere" title="Gestalten Sie mit uns die Zukunft." text="Wir suchen Menschen, die etwas bewegen wollen – mit Neugier, Teamgeist und unternehmerischem Denken." image={img} />
      <section className="container-x py-20">
        <Eyebrow>Benefits</Eyebrow>
        <h2 className="mt-4 text-3xl font-bold md:text-4xl">Was wir bieten</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {benefits.map(({ i: I, t, d }) => (
            <div key={t} className="rounded-3xl border bg-card p-8">
              <I className="h-7 w-7 text-primary" />
              <h3 className="mt-4 text-lg font-semibold">{t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-secondary py-20">
        <div className="container-x">
          <Eyebrow>Offene Stellen</Eyebrow>
          <div className="mt-8 divide-y rounded-3xl bg-card">
            {jobs.map(([t, m]) => (
              <a key={t} href={`mailto:${company.mail.bewerbung}?subject=${encodeURIComponent("Bewerbung: " + t)}`} className="flex flex-wrap items-center justify-between gap-4 p-6 transition hover:bg-primary-soft md:p-8">
                <div><h3 className="text-lg font-semibold">{t}</h3><p className="text-sm text-muted-foreground">{m}</p></div>
                <span className="text-sm font-semibold text-primary">Jetzt bewerben →</span>
              </a>
            ))}
          </div>
          <div className="mt-10 rounded-3xl bg-navy p-10 text-navy-foreground">
            <h3 className="text-2xl font-bold">Initiativbewerbung</h3>
            <p className="mt-2 opacity-80">Keine passende Stelle dabei? Senden Sie uns Ihre Unterlagen gerne initiativ.</p>
            <a href={`mailto:${company.mail.bewerbung}`} className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-semibold text-primary-foreground"><Mail className="h-4 w-4" />{company.mail.bewerbung}</a>
          </div>
        </div>
      </section>
    </>
  );
}
