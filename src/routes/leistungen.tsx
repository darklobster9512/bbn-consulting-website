import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import img from "@/assets/services.jpg";
import { CtaBand, PageHero } from "@/components/site";
import { meta } from "@/lib/company";

export const Route = createFileRoute("/leistungen")({
  head: () => ({ meta: meta("Leistungen – bbm-consulting GmbH", "Strategie-, Prozess- und Organisationsberatung, Interim- und Projektmanagement aus Hamburg.") }),
  component: Page,
});

const items = [
  { t: "Strategieberatung", d: "Wir entwickeln mit Ihnen eine klare Unternehmensstrategie – von der Markt- und Wettbewerbsanalyse bis zur konkreten Roadmap.", b: ["Markt- & Wettbewerbsanalyse", "Geschäftsmodell-Entwicklung", "Strategische Roadmaps"] },
  { t: "Managementberatung", d: "Wir unterstützen Geschäftsführung und Führungskräfte bei zentralen Entscheidungen und in Veränderungsphasen.", b: ["Sparring für Geschäftsführung", "Entscheidungsvorlagen", "Change-Management"] },
  { t: "Organisationsentwicklung", d: "Wir gestalten Strukturen, Rollen und Zusammenarbeit so, dass Ihre Organisation agil und leistungsfähig bleibt.", b: ["Aufbau- & Ablauforganisation", "Führungskräfteentwicklung", "Kulturwandel"] },
  { t: "Prozessoptimierung", d: "Wir analysieren Ihre Abläufe, identifizieren Potenziale und setzen Verbesserungen nachhaltig um.", b: ["Prozessanalyse & -design", "Lean-Methoden", "Digitalisierung von Abläufen"] },
  { t: "Interim-Management", d: "Erfahrene Managerinnen und Manager übernehmen kurzfristig Verantwortung – bei Vakanzen, Krisen oder Projekten.", b: ["Schnelle Verfügbarkeit", "Operative Führung", "Übergabe an Nachfolge"] },
  { t: "Projektmanagement", d: "Wir steuern komplexe Vorhaben termingerecht, im Budget und mit klarer Kommunikation.", b: ["PMO-Aufbau", "Klassisch & agil", "Risikomanagement"] },
];

function Page() {
  return (
    <>
      <PageHero eyebrow="Leistungen" title="Unser Leistungsspektrum für Ihren Erfolg." text="Von der strategischen Ausrichtung bis zur operativen Umsetzung: Wir bieten Beratungs- und Managementdienstleistungen aus einer Hand." image={img} />
      <section className="container-x grid gap-6 py-20 md:grid-cols-2">
        {items.map((i, idx) => (
          <article key={i.t} className="rounded-3xl border bg-card p-8 md:p-10">
            <span className="font-display text-sm font-bold text-primary">{String(idx + 1).padStart(2, "0")}</span>
            <h2 className="mt-3 text-2xl font-bold">{i.t}</h2>
            <p className="mt-3 text-muted-foreground">{i.d}</p>
            <ul className="mt-6 space-y-2">
              {i.b.map((b) => <li key={b} className="flex items-center gap-3 text-sm"><Check className="h-4 w-4 text-primary" />{b}</li>)}
            </ul>
          </article>
        ))}
      </section>
      <CtaBand />
    </>
  );
}
