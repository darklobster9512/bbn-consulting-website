import { createFileRoute } from "@tanstack/react-router";
import { User } from "lucide-react";
import { Bullets, ContactBox, PageLayout, SlantTitle } from "@/components/site";
import { company, meta } from "@/lib/company";

export const Route = createFileRoute("/ueber-uns")({
  head: () => ({ meta: meta("Über uns – bbm-consulting GmbH", "Die bbm-consulting GmbH aus Hamburg: unsere Werte, unser Selbstverständnis und unsere Geschäftsführung.") }),
  component: Page,
});

const team = [
  { n: company.ceo, r: "Geschäftsführer" },
  { n: company.prokura[0], r: "Prokuristin" },
  { n: company.prokura[1], r: "Prokuristin" },
];

function Page() {
  return (
    <PageLayout side={<ContactBox />}>
      <SlantTitle>Über bbm-consulting</SlantTitle>
      <p className="mb-3 font-bold">Unabhängig. Verlässlich. Hanseatisch.</p>
      <p className="mb-3">Die bbm-consulting GmbH ist eine inhabergeführte Unternehmensberatung mit Sitz in Hamburg. Wir begleiten Unternehmen unterschiedlicher Größe und Branchen in allen Fragen der Unternehmensführung und -entwicklung.</p>
      <p>Unsere Arbeit beruht auf drei Grundsätzen:</p>
      <Bullets items={["Integrität – ehrlich, transparent und diskret", "Qualität – fundierte Analysen und umsetzbare Konzepte", "Nähe – persönliche Betreuung und kurze Entscheidungswege"]} />
      <p className="mb-8">Wir verstehen uns nicht als externe Beobachter, sondern als Partner, der Verantwortung übernimmt und an Ergebnissen gemessen werden möchte.</p>

      <SlantTitle as="h2">Geschäftsführung & Prokura</SlantTitle>
      <div className="grid gap-4 sm:grid-cols-3">
        {team.map((p) => (
          <div key={p.n} className="border">
            <div className="flex h-36 items-center justify-center bg-muted text-muted-foreground"><User className="h-14 w-14" /></div>
            <div className="p-3"><p className="font-bold">{p.n}</p><p className="text-muted-foreground">{p.r}</p></div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
