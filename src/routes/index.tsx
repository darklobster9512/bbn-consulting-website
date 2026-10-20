import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays } from "lucide-react";
import { Bullets, ContactBox, NewsBox, PageLayout, QuoteBox, SideBox, SlantTitle, StatStrip, Steps, Tile } from "@/components/site";
import { meta } from "@/lib/company";
import { photos } from "@/lib/photos";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({ meta: meta("Unternehmensberatung Hamburg | bbm-consulting GmbH", "Unabhängige Unternehmensberatung in Hamburg: Strategie, Management, Organisation, Prozessoptimierung sowie Interim- und Projektmanagement für den Mittelstand.", "/") }),
  component: Index,
});

const T = {
  de: {
    title: "bbm-consulting GmbH – Unternehmensberatung Hamburg",
    events: "Termine & Veranstaltungen", noEvents: "Derzeit liegen keine zukünftigen Termine vor.",
    h1: "Willkommen bei bbm-consulting.", lead: "Hanseatische Beratung mit Weitblick",
    p1: "Die bbm-consulting GmbH mit Sitz in Hamburg erbringt Beratungs- und Managementdienstleistungen für mittelständische Unternehmen und Konzerne. Verlässlichkeit, Diskretion und unternehmerisches Denken prägen unsere Arbeit.",
    p2: "Wir sind eine unabhängige Unternehmensberatung mit den Kernkompetenzen",
    core: ["Strategie- und Managementberatung", "Organisationsentwicklung und Prozessoptimierung", "Interim-Management und Projektmanagement"],
    p3: "Gerne nehmen wir uns Zeit für ein persönliches Gespräch mit Ihnen.", sign: "Ihr bbm-consulting-Team",
    stats: [["15+", "Jahre Erfahrung"], ["200+", "Projekte"], ["40+", "Branchen"], ["95 %", "Weiterempfehlung"]] as [string, string][],
    approach: "Unser Vorgehen",
    steps: [["Analyse", "Wir verstehen Ihr Geschäft und Ihre Ziele im Detail."], ["Konzept", "Maßgeschneiderte, umsetzbare Lösungen."], ["Umsetzung", "Operative Begleitung bis zur Wirkung."], ["Verankerung", "Nachhaltige Ergebnisse durch Befähigung."]] as [string, string][],
    quote: "Mit bbm-consulting haben wir unsere Prozesse neu aufgestellt und innerhalb eines Jahres spürbar an Effizienz gewonnen.",
    quoteBy: "Geschäftsführer, mittelständisches Handelsunternehmen",
    tiles: [
      ["Strategie- & Managementberatung", "Wir begleiten Geschäftsführung und Führungskräfte bei der strategischen Ausrichtung, bei Investitionsentscheidungen und in Phasen des Wandels."],
      ["Organisation & Prozesse", "Effiziente Strukturen und schlanke Abläufe: Wir analysieren Ihre Organisation und verankern Verbesserungen nachhaltig."],
      ["Interim- & Projektmanagement", "Erfahrene Manager übernehmen kurzfristig Verantwortung – bei Vakanzen, in Sondersituationen oder in komplexen Projekten."],
      ["Karriere bei bbm-consulting", "Sie möchten Unternehmen voranbringen? Wir suchen engagierte Beraterinnen und Berater, die mit uns wachsen wollen."],
    ] as [string, string][],
    jobsCta: "Zu den Stellen",
  },
  en: {
    title: "bbm-consulting GmbH – Management Consultancy Hamburg",
    events: "Dates & events", noEvents: "There are currently no upcoming events.",
    h1: "Welcome to bbm-consulting.", lead: "Hanseatic consulting with foresight",
    p1: "bbm-consulting GmbH, based in Hamburg, provides consulting and management services for medium-sized companies and corporate groups. Reliability, discretion and entrepreneurial thinking define our work.",
    p2: "We are an independent management consultancy with the core competencies",
    core: ["Strategy and management consulting", "Organisational development and process optimisation", "Interim management and project management"],
    p3: "We are happy to take the time for a personal conversation with you.", sign: "Your bbm-consulting team",
    stats: [["15+", "Years of experience"], ["200+", "Projects"], ["40+", "Industries"], ["95 %", "Recommendation rate"]] as [string, string][],
    approach: "Our approach",
    steps: [["Analysis", "We understand your business and goals in detail."], ["Concept", "Tailored, actionable solutions."], ["Implementation", "Hands-on support until results show."], ["Embedding", "Lasting results through enablement."]] as [string, string][],
    quote: "With bbm-consulting we restructured our processes and gained noticeable efficiency within a year.",
    quoteBy: "Managing director, mid-sized retail company",
    tiles: [
      ["Strategy & management consulting", "We support executives and managers in strategic direction, investment decisions and periods of change."],
      ["Organisation & processes", "Efficient structures and lean workflows: we analyse your organisation and embed improvements for the long term."],
      ["Interim & project management", "Experienced managers take on responsibility at short notice – for vacancies, special situations or complex projects."],
      ["Careers at bbm-consulting", "Want to move companies forward? We are looking for committed consultants who want to grow with us."],
    ] as [string, string][],
    jobsCta: "View openings",
  },
};

function Index() {
  const t = useT(T);
  return (
    <PageLayout
      side={
        <>
          <ContactBox />
          <NewsBox />
          <SideBox icon={CalendarDays} title={t.events} framed={false}>{t.noEvents}</SideBox>
        </>
      }
    >
      <SlantTitle>{t.h1}</SlantTitle>
      <p className="mb-3 font-bold">{t.lead}</p>
      <p className="mb-3">{t.p1}</p>
      <p>{t.p2}</p>
      <Bullets items={t.core} />
      <p className="mb-3">{t.p3}</p>
      <p className="font-bold italic">{t.sign}</p>

      <StatStrip stats={t.stats} />

      <SlantTitle as="h2">{t.approach}</SlantTitle>
      <Steps steps={t.steps} />

      <QuoteBox text={t.quote} by={t.quoteBy} />

      <div className="grid gap-x-4 gap-y-8 border-t pt-6 sm:grid-cols-2">
        {t.tiles.map(([title, text], i) => i === 3
          ? <Tile key={i} title={title} image={photos.team} to="/karriere" text={text} cta={t.jobsCta} />
          : <Tile key={i} title={title} image={[photos.presentation, photos.workshop, photos.handshake][i] ?? photos.team} text={text} />)}
      </div>
    </PageLayout>
  );
}
