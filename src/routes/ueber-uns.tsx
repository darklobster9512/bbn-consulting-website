import { createFileRoute } from "@tanstack/react-router";
import { Bullets, ContactBox, NewsBox, PageLayout, QuoteBox, Reveal, SlantTitle, Timeline } from "@/components/site";
import { company, meta } from "@/lib/company";
import { photos } from "@/lib/photos";

export const Route = createFileRoute("/ueber-uns")({
  head: () => ({ meta: meta("Über uns – bbm-consulting GmbH", "Die bbm-consulting GmbH aus Hamburg: unsere Werte, unsere Geschichte und unsere Geschäftsführung.") }),
  component: Page,
});

const team = [
  { n: company.ceo, r: "Geschäftsführer", img: photos.pBecker },
  { n: company.prokura[0], r: "Prokuristin", img: photos.pAnna },
  { n: company.prokura[1], r: "Prokuristin", img: photos.pKerstin },
];

function Page() {
  return (
    <PageLayout side={<><ContactBox /><NewsBox /></>}>
      <SlantTitle>Über bbm-consulting</SlantTitle>
      <p className="mb-3 font-bold">Unabhängig. Verlässlich. Hanseatisch.</p>
      <p className="mb-3">Die bbm-consulting GmbH ist eine inhabergeführte Unternehmensberatung mit Sitz in Hamburg. Wir begleiten Unternehmen unterschiedlicher Größe und Branchen in allen Fragen der Unternehmensführung und -entwicklung.</p>
      <p>Unsere Arbeit beruht auf drei Grundsätzen:</p>
      <Bullets items={["Integrität – ehrlich, transparent und diskret", "Qualität – fundierte Analysen und umsetzbare Konzepte", "Nähe – persönliche Betreuung und kurze Entscheidungswege"]} />

      <Reveal><img src={photos.office} alt="Büroräume" loading="lazy" className="bw-hover my-6 h-60 w-full object-cover" /></Reveal>

      <SlantTitle as="h2">Unsere Geschichte</SlantTitle>
      <Timeline items={[["2010", "Gründung als Beratungsbüro in Hamburg."], ["2015", "Erweiterung um Interim- und Projektmanagement."], ["2020", "Umfirmierung zur bbm-consulting GmbH."], ["2026", "Neue Büroräume in der Ruhrstraße, Hamburg-Altona."]]} />

      <QuoteBox text="Wir verstehen uns nicht als externe Beobachter, sondern als Partner, der Verantwortung übernimmt." by={`${company.ceo}, Geschäftsführer`} />

      <SlantTitle as="h2">Geschäftsführung & Prokura</SlantTitle>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
        {team.map((p) => (
          <Reveal key={p.n}>
            <div className="group border">
              <div className="h-40 overflow-hidden sm:h-56"><img src={p.img} alt={p.n} loading="lazy" className="zoom-img bw h-full w-full object-cover object-top group-hover:scale-105 group-hover:grayscale-0" /></div>
              <div className="border-t-4 border-primary p-3"><p className="font-bold">{p.n}</p><p className="text-muted-foreground">{p.r}</p></div>
            </div>
          </Reveal>
        ))}
      </div>
    </PageLayout>
  );
}
