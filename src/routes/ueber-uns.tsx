import { createFileRoute } from "@tanstack/react-router";
import { Bullets, ContactBox, NewsBox, PageLayout, QuoteBox, Reveal, SlantTitle, Timeline } from "@/components/site";
import { company, meta } from "@/lib/company";
import { photos } from "@/lib/photos";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/ueber-uns")({
  head: () => ({ meta: meta("Über uns – inhabergeführte Beratung aus Hamburg | bbm-consulting", "Lernen Sie die bbm-consulting GmbH kennen: inhabergeführte Unternehmensberatung aus Hamburg mit klaren Werten, langjähriger Erfahrung und persönlicher Betreuung.", "/ueber-uns") }),
  component: Page,
});

const T = {
  de: {
    title: "Über uns – inhabergeführte Beratung aus Hamburg | bbm-consulting", h: "Über bbm-consulting", lead: "Unabhängig. Verlässlich. Hanseatisch.",
    p1: "Die bbm-consulting GmbH ist eine inhabergeführte Unternehmensberatung mit Sitz in Hamburg. Wir begleiten Unternehmen unterschiedlicher Größe und Branchen in allen Fragen der Unternehmensführung und -entwicklung.",
    p2: "Unsere Arbeit beruht auf drei Grundsätzen:",
    values: ["Integrität – ehrlich, transparent und diskret", "Qualität – fundierte Analysen und umsetzbare Konzepte", "Nähe – persönliche Betreuung und kurze Entscheidungswege"],
    office: "Büroräume", history: "Unsere Geschichte",
    timeline: [["2005", "Gründung als Beratungsbüro in Hamburg."], ["2012", "Erweiterung um Interim- und Projektmanagement."], ["2018", "Umfirmierung zur bbm-consulting GmbH."], ["2026", "Neue Büroräume in der Ruhrstraße, Hamburg-Altona."]] as [string, string][],
    quote: "Wir verstehen uns nicht als externe Beobachter, sondern als Partner, der Verantwortung übernimmt.", ceo: "Geschäftsführer",
    team: "Geschäftsführung & Prokura", pro: "Prokuristin", staff: "Unser Team", roles: ["Projektleiter", "Recruiter", "Senior Consultant", "Consultant Prozessmanagement", "Junior Consultant", "Office Management & Assistenz"],
  },
  en: {
    title: "About us – owner-managed consultancy from Hamburg | bbm-consulting", h: "About bbm-consulting", lead: "Independent. Reliable. Hanseatic.",
    p1: "bbm-consulting GmbH is an owner-managed management consultancy based in Hamburg. We support companies of all sizes and industries in every aspect of corporate management and development.",
    p2: "Our work is based on three principles:",
    values: ["Integrity – honest, transparent and discreet", "Quality – well-founded analyses and actionable concepts", "Proximity – personal support and short decision paths"],
    office: "Offices", history: "Our history",
    timeline: [["2005", "Founded as a consulting office in Hamburg."], ["2012", "Expanded into interim and project management."], ["2018", "Renamed bbm-consulting GmbH."], ["2026", "New offices in Ruhrstraße, Hamburg-Altona."]] as [string, string][],
    quote: "We do not see ourselves as outside observers, but as a partner who takes on responsibility.", ceo: "Managing Director",
    team: "Management & authorised signatories", pro: "Authorised signatory", staff: "Our team", roles: ["Project Manager", "Recruiter", "Senior Consultant", "Consultant Process Management", "Junior Consultant", "Office Management & Assistant"],
  },
};

function Page() {
  const t = useT(T);
  const team = [
    { n: company.ceo, r: t.ceo, img: photos.pBecker },
    { n: company.prokura[0], r: t.pro, img: photos.pAnna },
    { n: company.prokura[1], r: t.pro, img: photos.pKerstin },
  ];
  const staff = (["Michael Schüller", "Simon Wieser", "Laura Hoffmann", "Julia Brandt", "Sophie Krämer", "Sabine Lorenz"] as const).map((n, i) => ({
    n, r: t.roles[i] ?? "", img: [photos.pSchueller, photos.pWieser, photos.pHoffmann, photos.pBrandt, photos.pKraemer, photos.pLorenz][i] ?? photos.team,
  }));
  const grid = (list: { n: string; r: string; img: string }[]) => (
    <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
      {list.map((p) => (
        <Reveal key={p.n}>
          <div className="group border">
            <div className="aspect-[4/5] overflow-hidden"><img src={p.img} alt={p.n} loading="lazy" className="zoom-img bw h-full w-full object-cover object-top group-hover:scale-105 group-hover:grayscale-0" /></div>
            <div className="border-t-4 border-primary p-3"><p className="font-bold">{p.n}</p><p className="text-muted-foreground">{p.r}</p></div>
          </div>
        </Reveal>
      ))}
    </div>
  );
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
      {grid(team)}
      <SlantTitle as="h2">{t.staff}</SlantTitle>
      {grid(staff)}
    </PageLayout>
  );
}
