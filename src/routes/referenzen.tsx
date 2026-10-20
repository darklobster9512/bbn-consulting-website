import { createFileRoute } from "@tanstack/react-router";
import { Bullets, ContactBox, PageLayout, SlantTitle } from "@/components/site";
import { meta } from "@/lib/company";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/referenzen")({
  head: () => ({ meta: meta("Referenzen – bbm-consulting GmbH", "Branchen und ausgewählte Projekte der bbm-consulting GmbH aus Hamburg.") }),
  component: Page,
});

const T = {
  de: {
    title: "Referenzen – bbm-consulting GmbH", h: "Referenzen", p1: "Unsere Mandanten stammen aus unterschiedlichsten Branchen, unter anderem:",
    ind: ["Handel und Konsumgüter", "Logistik und Verkehr", "Industrie und Produktion", "Dienstleistung und Immobilien"],
    p2: "Aus Gründen der Vertraulichkeit nennen wir Mandanten nur mit deren ausdrücklicher Zustimmung. Gerne stellen wir im persönlichen Gespräch Kontakt zu Referenzkunden her.",
    h2: "Ausgewählte Projekte", c1: "Branche", c2: "Projekt",
    projects: [
      ["Handel", "Neuausrichtung der Filialorganisation eines norddeutschen Handelsunternehmens."],
      ["Logistik", "Prozessoptimierung im Lager- und Transportmanagement eines Logistikdienstleisters."],
      ["Industrie", "Interim-Geschäftsführung während einer Restrukturierungsphase."],
      ["Dienstleistung", "Aufbau eines Projektmanagement-Office für ein wachsendes Dienstleistungsunternehmen."],
    ] as [string, string][],
  },
  en: {
    title: "References – bbm-consulting GmbH", h: "References", p1: "Our clients come from a wide range of industries, including:",
    ind: ["Retail and consumer goods", "Logistics and transport", "Industry and manufacturing", "Services and real estate"],
    p2: "For reasons of confidentiality, we only name clients with their express consent. We are happy to put you in touch with reference clients in a personal meeting.",
    h2: "Selected projects", c1: "Industry", c2: "Project",
    projects: [
      ["Retail", "Realignment of the branch organisation of a northern German retail company."],
      ["Logistics", "Process optimisation in warehouse and transport management for a logistics provider."],
      ["Industry", "Interim management during a restructuring phase."],
      ["Services", "Setting up a project management office for a growing service company."],
    ] as [string, string][],
  },
};

function Page() {
  const t = useT(T);
  return (
    <PageLayout side={<ContactBox />}>
      <SlantTitle>{t.h}</SlantTitle>
      <p>{t.p1}</p>
      <Bullets items={t.ind} />
      <p className="mb-6">{t.p2}</p>
      <SlantTitle as="h2">{t.h2}</SlantTitle>
      <table className="w-full border text-left">
        <thead className="bg-primary text-primary-foreground"><tr><th className="p-2">{t.c1}</th><th className="p-2">{t.c2}</th></tr></thead>
        <tbody>
          {t.projects.map(([b, p]) => <tr key={b} className="border-t even:bg-muted"><td className="p-2 font-semibold">{b}</td><td className="p-2">{p}</td></tr>)}
        </tbody>
      </table>
    </PageLayout>
  );
}
