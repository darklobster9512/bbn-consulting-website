import { createFileRoute } from "@tanstack/react-router";
import { Bullets, ContactBox, NewsBox, PageLayout, QuoteBox, Reveal, SlantTitle, Timeline } from "@/components/site";
import { company, meta } from "@/lib/company";
import { photos } from "@/lib/photos";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/ueber-uns")({
  head: () => ({ meta: meta("Über uns – bbm-consulting GmbH", "Die bbm-consulting GmbH aus Hamburg: unsere Werte, unsere Geschichte und unsere Geschäftsführung.") }),
  component: Page,
});

const T = {
  de: {
    title: "Über uns – bbm-consulting GmbH", h: "Über bbm-consulting", lead: "Unabhängig. Verlässlich. Hanseatisch.",
    p1: "Die bbm-consulting GmbH ist eine inhabergeführte Unternehmensberatung mit Sitz in Hamburg. Wir begleiten Unternehmen unterschiedlicher Größe und Branchen in allen Fragen der Unternehmensführung und -entwicklung.",
    p2: "Unsere Arbeit beruht auf drei Grundsätzen:",
    values: ["Integrität – ehrlich, transparent und diskret", "Qualität – fundierte Analysen und umsetzbare Konzepte", "Nähe – persönliche Betreuung und kurze Entscheidungswege"],
    office: "Büroräume", history: "Unsere Geschichte",
    timeline: [["2010", "Gründung als Beratungsbüro in Hamburg."], ["2015", "Erweiterung um Interim- und Projektmanagement."], ["2020", "Umfirmierung zur bbm-consulting GmbH."], ["2026", "Neue Büroräume in der Ruhrstraße, Hamburg-Altona."]] as [string, string][],
    quote: "Wir verstehen uns nicht als externe Beobachter, sondern als Partner, der Verantwortung übernimmt.", ceo: "Geschäftsführer",
    team: "Geschäftsführung & Prokura", pro: "Prokuristin",
  },
  en: {
    title: "About us – bbm-consulting GmbH", h: "About bbm-consulting", lead: "Independent. Reliable. Hanseatic.",
    p1: "bbm-consulting GmbH is an owner-managed management consultancy based in Hamburg. We support companies of all sizes and industries in every aspect of corporate management and development.",
    p2: "Our work is based on three principles:",
    values: ["Integrity – honest, transparent and discreet", "Quality – well-founded analyses and actionable concepts", "Proximity – personal support and short decision paths"],
    office: "Offices", history: "Our history",
    timeline: [["2010", "Founded as a consulting office in Hamburg."], ["2015", "Expanded into interim and project management."], ["2020", "Renamed bbm-consulting GmbH."], ["2026", "New offices in Ruhrstraße, Hamburg-Altona."]] as [string, string][],
    quote: "We do not see ourselves as outside observers, but as a partner who takes on responsibility.", ceo: "Managing Director",
    team: "Management & authorised signatories", pro: "Authorised signatory",
  },
};

function Page() {
  const t = useT(T);
  const team = [
    { n: company.ceo, r: t.ceo, img: photos.pBecker },
    { n: company.prokura[0], r: t.pro, img: photos.pAnna },
    { n: company.prokura[1], r: t.pro, img: photos.pKerstin },
  ];
  return (
    <PageLayout side={<><ContactBox /><NewsBox /></>}>
      <SlantTitle>{t.h}</SlantTitle>
      <p className="mb-3 font-bold">{t.lead}</p>
      <p className="mb-3">{t.p1}</p>
      <p>{t.p2}</p>
      <Bullets items={t.values} />

      <Reveal><img src={photos.office} alt={t.office} loading="lazy" className="bw-hover my-6 h-60 w-full object-cover" /></Reveal>

      <SlantTitle as="h2">{t.history}</SlantTitle>
      <Timeline items={t.timeline} />

      <QuoteBox text={t.quote} by={`${company.ceo}, ${t.ceo}`} />

      <SlantTitle as="h2">{t.team}</SlantTitle>
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
