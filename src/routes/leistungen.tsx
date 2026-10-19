import { createFileRoute } from "@tanstack/react-router";
import { ListChecks } from "lucide-react";
import { Bullets, ContactBox, PageLayout, SideBox, SlantTitle } from "@/components/site";
import { meta } from "@/lib/company";

export const Route = createFileRoute("/leistungen")({
  head: () => ({ meta: meta("Leistungen – bbm-consulting GmbH", "Strategie-, Management- und Organisationsberatung, Prozessoptimierung, Interim- und Projektmanagement aus Hamburg.") }),
  component: Page,
});

const items = [
  { id: "strategie", t: "Strategieberatung", d: "Wir entwickeln gemeinsam mit Ihnen eine tragfähige Unternehmensstrategie. Ausgangspunkt ist eine fundierte Analyse von Markt, Wettbewerb und eigener Position. Daraus leiten wir klare Ziele und eine umsetzbare Roadmap ab.", b: ["Markt- und Wettbewerbsanalyse", "Entwicklung von Geschäftsmodellen", "Strategische Roadmaps und Zielsysteme"] },
  { id: "management", t: "Managementberatung", d: "Als Sparringspartner unterstützen wir Geschäftsführung und Führungskräfte bei zentralen Entscheidungen – sachlich, unabhängig und vertraulich.", b: ["Sparring für Geschäftsführung und Gesellschafter", "Entscheidungsvorlagen und Business Cases", "Begleitung von Veränderungsprozessen"] },
  { id: "organisation", t: "Organisationsentwicklung", d: "Wir gestalten Strukturen, Rollen und Verantwortlichkeiten so, dass Ihre Organisation leistungsfähig und anpassungsfähig bleibt.", b: ["Aufbau- und Ablauforganisation", "Führungskräfteentwicklung", "Unternehmenskultur und Kommunikation"] },
  { id: "prozesse", t: "Prozessoptimierung", d: "Wir analysieren Ihre Abläufe, decken Reibungsverluste auf und setzen Verbesserungen gemeinsam mit Ihren Mitarbeitern um.", b: ["Prozessanalyse und -design", "Lean Management", "Digitalisierung von Geschäftsprozessen"] },
  { id: "interim", t: "Interim-Management", d: "Erfahrene Managerinnen und Manager übernehmen kurzfristig operative Verantwortung – bei Vakanzen, in Krisen oder in Sondersituationen.", b: ["Kurzfristige Verfügbarkeit", "Operative Führungsverantwortung", "Strukturierte Übergabe an die Nachfolge"] },
  { id: "projekte", t: "Projektmanagement", d: "Wir steuern komplexe Vorhaben termingerecht und im Budget – klassisch, agil oder hybrid, je nach Anforderung.", b: ["Aufbau eines Projektmanagement-Office (PMO)", "Projektsteuerung und Reporting", "Risikomanagement"] },
];

function Page() {
  return (
    <PageLayout
      side={
        <>
          <SideBox icon={ListChecks} title="Unsere Leistungen">
            <ul className="space-y-1">
              {items.map((i) => <li key={i.id}><a href={`#${i.id}`} className="text-primary hover:underline">{i.t}</a></li>)}
            </ul>
          </SideBox>
          <ContactBox />
        </>
      }
    >
      <SlantTitle>Leistungen</SlantTitle>
      <p className="mb-6">Von der strategischen Ausrichtung bis zur operativen Umsetzung: Wir erbringen Beratungs- und Managementdienstleistungen aus einer Hand – individuell auf die Anforderungen unserer Mandanten zugeschnitten.</p>
      {items.map((i) => (
        <section key={i.id} id={i.id} className="mb-6 border-t pt-6">
          <SlantTitle as="h2">{i.t}</SlantTitle>
          <p>{i.d}</p>
          <Bullets items={i.b} />
        </section>
      ))}
    </PageLayout>
  );
}
