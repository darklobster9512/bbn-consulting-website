import { createFileRoute } from "@tanstack/react-router";
import { ListChecks, Compass, Briefcase, Users, Settings2, UserCheck, Target, Sparkles } from "lucide-react";
import { Reveal, Bullets, ContactBox, PageLayout, SideBox, SlantTitle } from "@/components/site";
import { meta } from "@/lib/company";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/leistungen")({
  head: () => ({ meta: meta("Leistungen – bbm-consulting GmbH", "Strategie-, Management- und Organisationsberatung, Prozessoptimierung, Interim- und Projektmanagement aus Hamburg.") }),
  component: Page,
});

const icons = { strategie: Compass, management: Briefcase, organisation: Users, prozesse: Settings2, interim: UserCheck, projekte: Target };
type Item = { id: keyof typeof icons; t: string; d: string; b: string[]; n: string };

const T: { de: { title: string; h: string; side: string; intro: string; benefit: string; items: Item[] }; en: { title: string; h: string; side: string; intro: string; benefit: string; items: Item[] } } = {
  de: {
    title: "Leistungen – bbm-consulting GmbH", h: "Leistungen", side: "Unsere Leistungen", benefit: "Ihr Nutzen: ",
    intro: "Von der strategischen Ausrichtung bis zur operativen Umsetzung: Wir erbringen Beratungs- und Managementdienstleistungen aus einer Hand – individuell auf die Anforderungen unserer Mandanten zugeschnitten.",
    items: [
      { id: "strategie", n: "Klarheit über Richtung und Prioritäten – und eine Roadmap, die Ihr Team trägt.", t: "Strategieberatung", d: "Wir entwickeln gemeinsam mit Ihnen eine tragfähige Unternehmensstrategie. Ausgangspunkt ist eine fundierte Analyse von Markt, Wettbewerb und eigener Position. Daraus leiten wir klare Ziele und eine umsetzbare Roadmap ab.", b: ["Markt- und Wettbewerbsanalyse", "Entwicklung von Geschäftsmodellen", "Strategische Roadmaps und Zielsysteme"] },
      { id: "management", n: "Bessere Entscheidungen durch einen unabhängigen, erfahrenen Blick von außen.", t: "Managementberatung", d: "Als Sparringspartner unterstützen wir Geschäftsführung und Führungskräfte bei zentralen Entscheidungen – sachlich, unabhängig und vertraulich.", b: ["Sparring für Geschäftsführung und Gesellschafter", "Entscheidungsvorlagen und Business Cases", "Begleitung von Veränderungsprozessen"] },
      { id: "organisation", n: "Klare Verantwortlichkeiten und eine Organisation, die Wachstum ermöglicht.", t: "Organisationsentwicklung", d: "Wir gestalten Strukturen, Rollen und Verantwortlichkeiten so, dass Ihre Organisation leistungsfähig und anpassungsfähig bleibt.", b: ["Aufbau- und Ablauforganisation", "Führungskräfteentwicklung", "Unternehmenskultur und Kommunikation"] },
      { id: "prozesse", n: "Weniger Aufwand, kürzere Durchlaufzeiten und messbar geringere Kosten.", t: "Prozessoptimierung", d: "Wir analysieren Ihre Abläufe, decken Reibungsverluste auf und setzen Verbesserungen gemeinsam mit Ihren Mitarbeitern um.", b: ["Prozessanalyse und -design", "Lean Management", "Digitalisierung von Geschäftsprozessen"] },
      { id: "interim", n: "Sofortige Handlungsfähigkeit ohne langwierige Rekrutierung.", t: "Interim-Management", d: "Erfahrene Managerinnen und Manager übernehmen kurzfristig operative Verantwortung – bei Vakanzen, in Krisen oder in Sondersituationen.", b: ["Kurzfristige Verfügbarkeit", "Operative Führungsverantwortung", "Strukturierte Übergabe an die Nachfolge"] },
      { id: "projekte", n: "Termin- und Budgettreue bei voller Transparenz.", t: "Projektmanagement", d: "Wir steuern komplexe Vorhaben termingerecht und im Budget – klassisch, agil oder hybrid, je nach Anforderung.", b: ["Aufbau eines Projektmanagement-Office (PMO)", "Projektsteuerung und Reporting", "Risikomanagement"] },
    ],
  },
  en: {
    title: "Services – bbm-consulting GmbH", h: "Services", side: "Our services", benefit: "Your benefit: ",
    intro: "From strategic direction to operational implementation: we provide consulting and management services from a single source – tailored to the individual needs of our clients.",
    items: [
      { id: "strategie", n: "Clarity on direction and priorities – and a roadmap your team can carry.", t: "Strategy consulting", d: "Together with you, we develop a sustainable corporate strategy. The starting point is a thorough analysis of the market, competition and your own position. From this we derive clear goals and an actionable roadmap.", b: ["Market and competitor analysis", "Business model development", "Strategic roadmaps and target systems"] },
      { id: "management", n: "Better decisions through an independent, experienced outside view.", t: "Management consulting", d: "As a sparring partner, we support executives and managers in key decisions – objectively, independently and confidentially.", b: ["Sparring for management and shareholders", "Decision papers and business cases", "Guidance through change processes"] },
      { id: "organisation", n: "Clear responsibilities and an organisation that enables growth.", t: "Organisational development", d: "We design structures, roles and responsibilities so that your organisation stays effective and adaptable.", b: ["Organisational structure and workflows", "Leadership development", "Corporate culture and communication"] },
      { id: "prozesse", n: "Less effort, shorter lead times and measurably lower costs.", t: "Process optimisation", d: "We analyse your workflows, uncover friction losses and implement improvements together with your employees.", b: ["Process analysis and design", "Lean management", "Digitalisation of business processes"] },
      { id: "interim", n: "Immediate capacity to act without lengthy recruitment.", t: "Interim management", d: "Experienced managers take on operational responsibility at short notice – for vacancies, crises or special situations.", b: ["Availability at short notice", "Operational leadership responsibility", "Structured handover to successors"] },
      { id: "projekte", n: "On time and on budget with full transparency.", t: "Project management", d: "We steer complex projects on time and within budget – classic, agile or hybrid, depending on requirements.", b: ["Setting up a project management office (PMO)", "Project control and reporting", "Risk management"] },
    ],
  },
};

function Page() {
  const t = useT(T);
  return (
    <PageLayout
      side={
        <>
          <SideBox icon={ListChecks} title={t.side}>
            <ul className="space-y-1">
              {t.items.map((i) => <li key={i.id}><a href={`#${i.id}`} className="text-primary hover:underline">{i.t}</a></li>)}
            </ul>
          </SideBox>
          <ContactBox />
        </>
      }
    >
      <SlantTitle>{t.h}</SlantTitle>
      <p className="mb-6">{t.intro}</p>
      {t.items.map((i) => (
        <Reveal key={i.id}><section id={i.id} className="mb-6 border-t pt-6">
          <SlantTitle as="h2" icon={icons[i.id]}>{i.t}</SlantTitle>
          <p>{i.d}</p>
          <Bullets items={i.b} />
          <div className="flex gap-3 border-l-4 border-primary bg-accent p-4"><Sparkles className="h-5 w-5 shrink-0 text-primary" /><p><b>{t.benefit}</b>{i.n}</p></div>
        </section></Reveal>
      ))}
    </PageLayout>
  );
}
