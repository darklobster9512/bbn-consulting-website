import { createFileRoute } from "@tanstack/react-router";
import { Bullets, ContactBox, PageLayout, SlantTitle } from "@/components/site";
import { meta } from "@/lib/company";

export const Route = createFileRoute("/referenzen")({
  head: () => ({ meta: meta("Referenzen – bbm-consulting GmbH", "Branchen und ausgewählte Projekte der bbm-consulting GmbH aus Hamburg.") }),
  component: Page,
});

const projects = [
  ["Handel", "Neuausrichtung der Filialorganisation eines norddeutschen Handelsunternehmens."],
  ["Logistik", "Prozessoptimierung im Lager- und Transportmanagement eines Logistikdienstleisters."],
  ["Industrie", "Interim-Geschäftsführung während einer Restrukturierungsphase."],
  ["Dienstleistung", "Aufbau eines Projektmanagement-Office für ein wachsendes Dienstleistungsunternehmen."],
];

function Page() {
  return (
    <PageLayout side={<ContactBox />}>
      <SlantTitle>Referenzen</SlantTitle>
      <p>Unsere Mandanten stammen aus unterschiedlichsten Branchen, unter anderem:</p>
      <Bullets items={["Handel und Konsumgüter", "Logistik und Verkehr", "Industrie und Produktion", "Dienstleistung und Immobilien"]} />
      <p className="mb-6">Aus Gründen der Vertraulichkeit nennen wir Mandanten nur mit deren ausdrücklicher Zustimmung. Gerne stellen wir im persönlichen Gespräch Kontakt zu Referenzkunden her.</p>
      <SlantTitle as="h2">Ausgewählte Projekte</SlantTitle>
      <table className="w-full border text-left">
        <thead className="bg-primary text-primary-foreground"><tr><th className="p-2">Branche</th><th className="p-2">Projekt</th></tr></thead>
        <tbody>
          {projects.map(([b, p]) => <tr key={b} className="border-t even:bg-muted"><td className="p-2 font-semibold">{b}</td><td className="p-2">{p}</td></tr>)}
        </tbody>
      </table>
    </PageLayout>
  );
}
