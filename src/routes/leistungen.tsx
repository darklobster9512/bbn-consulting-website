import { createFileRoute } from "@tanstack/react-router";
import { ListChecks, Compass, Briefcase, Users, Settings2, UserCheck, Target, Sparkles } from "lucide-react";
import { Reveal, Bullets, ContactBox, PageLayout, SideBox, SlantTitle } from "@/components/site";
import { meta } from "@/lib/company";

export const Route = createFileRoute("/leistungen")({
  head: () => ({ meta: meta("Leistungen – bbm-consulting GmbH", "Strategie-, Management- und Organisationsberatung, Prozessoptimierung, Interim- und Projektmanagement aus Hamburg.") }),
  component: Page,
});

const items = [
  { id: "strategie", icon: Compass, n: "Klarheit über Richtung und Prioritäten – und eine Roadmap, die Ihr Team trägt.", t: "Strategieberatung", d: "Wir entwickeln gemeinsam mit Ihnen eine tragfähige Unternehmensstrategie. Ausgangspunkt ist eine fundierte Analyse von Markt, Wettbewerb und eigener Position. Daraus leiten wir klare Ziele und eine umsetzbare Roadmap ab.", b: ["Markt- und Wettbewerbsanalyse", "Entwicklung von Geschäftsmodellen", "Strategische Roadmaps und Zielsysteme"] },
  { id: "management", icon: Briefcase, n: "Bessere Entscheidungen durch einen unabhängigen, erfahrenen Blick von außen.", t: "Managementberatung", d: "Als Sparringspartner unterstützen wir Geschäftsführung und Führungskräfte bei zentralen Entscheidungen – sachlich, unabhängig und vertraulich.", b: ["Sparring für Geschäftsführung und Gesellschafter", "Entscheidungsvorlagen und Business Cases", "Begleitung von Veränderungsprozessen"] },
  { id: "organisation", icon: Users, n: "Klare Verantwortlichkeiten und eine Organisation, die Wachstum ermöglicht.", t: "Organisationsentwicklung", d: "Wir gestalten Strukturen, Rollen und Verantwortlichkeiten so, dass Ihre Organisation leistungsfähig und anpassungsfähig bleibt.", b: ["Aufbau- und Ablauforganisation", "Führungskräfteentwicklung", "Unternehmenskultur und Kommunikation"] },
  { id: "prozesse", icon: Settings2, n: "Weniger Aufwand, kürzere Durchlaufzeiten und messbar geringere Kosten.", t: "Prozessoptimierung", d: "Wir analysieren Ihre Abläufe, decken Reibungsverluste auf und setzen Verbesserungen gemeinsam mit Ihren Mitarbeitern um.", b: ["Prozessanalyse und -design", "Lean Management", "Digitalisierung von Geschäftsprozessen"] },
  { id: "interim", icon: UserCheck, n: "Sofortige Handlungsfähigkeit ohne langwierige Rekrutierung.", t: "Interim-Management", d: "Erfahrene Managerinnen und Manager übernehmen kurzfristig operative Verantwortung – bei Vakanzen, in Krisen oder in Sondersituationen.", b: ["Kurzfristige Verfügbarkeit", "Operative Führungsverantwortung", "Strukturierte Übergabe an die Nachfolge"] },
  { id: "projekte", icon: Target, n: "Termin- und Budgettreue bei voller Transparenz.", t: "Projektmanagement", d: "Wir steuern komplexe Vorhaben termingerecht und im Budget – klassisch, agil oder hybrid, je nach Anforderung.", b: ["Aufbau eines Projektmanagement-Office (PMO)", "Projektsteuerung und Reporting", "Risikomanagement"] },
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
        <Reveal key={i.id}><section id={i.id} className="mb-6 border-t pt-6">
          <SlantTitle as="h2" icon={i.icon}>{i.t}</SlantTitle>
          <p>{i.d}</p>
          <Bullets items={i.b} />
          <div className="flex gap-3 border-l-4 border-primary bg-accent p-4"><Sparkles className="h-5 w-5 shrink-0 text-primary" /><p><b>Ihr Nutzen: </b>{i.n}</p></div>
        </section></Reveal>
      ))}
    </PageLayout>
  );
}
