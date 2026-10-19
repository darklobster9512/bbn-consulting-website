import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays } from "lucide-react";
import { Bullets, ContactBox, NewsBox, PageLayout, QuoteBox, SideBox, SlantTitle, StatStrip, Steps, Tile } from "@/components/site";
import { meta } from "@/lib/company";
import { photos } from "@/lib/photos";

export const Route = createFileRoute("/")({
  head: () => ({ meta: meta("bbm-consulting GmbH – Unternehmensberatung Hamburg", "Unabhängige Unternehmensberatung aus Hamburg: Strategie-, Management- und Organisationsberatung sowie Interim- und Projektmanagement.") }),
  component: Index,
});

function Index() {
  return (
    <PageLayout
      side={
        <>
          <ContactBox />
          <NewsBox />
          <SideBox icon={CalendarDays} title="Termine & Veranstaltungen" framed={false}>
            Derzeit liegen keine zukünftigen Termine vor.
          </SideBox>
        </>
      }
    >
      <SlantTitle>Willkommen bei bbm-consulting.</SlantTitle>
      <p className="mb-3 font-bold">Hanseatische Beratung mit Weitblick</p>
      <p className="mb-3">
        Die bbm-consulting GmbH mit Sitz in Hamburg erbringt Beratungs- und Managementdienstleistungen für mittelständische Unternehmen und Konzerne. Verlässlichkeit, Diskretion und unternehmerisches Denken prägen unsere Arbeit.
      </p>
      <p>Wir sind eine unabhängige Unternehmensberatung mit den Kernkompetenzen</p>
      <Bullets items={["Strategie- und Managementberatung", "Organisationsentwicklung und Prozessoptimierung", "Interim-Management und Projektmanagement"]} />
      <p className="mb-3">Gerne nehmen wir uns Zeit für ein persönliches Gespräch mit Ihnen.</p>
      <p className="font-bold italic">Ihr bbm-consulting-Team</p>

      <StatStrip stats={[["15+", "Jahre Erfahrung"], ["200+", "Projekte"], ["40+", "Branchen"], ["95 %", "Weiterempfehlung"]]} />

      <SlantTitle as="h2">Unser Vorgehen</SlantTitle>
      <Steps steps={[["Analyse", "Wir verstehen Ihr Geschäft und Ihre Ziele im Detail."], ["Konzept", "Maßgeschneiderte, umsetzbare Lösungen."], ["Umsetzung", "Operative Begleitung bis zur Wirkung."], ["Verankerung", "Nachhaltige Ergebnisse durch Befähigung."]]} />

      <QuoteBox text="Mit bbm-consulting haben wir unsere Prozesse neu aufgestellt und innerhalb eines Jahres spürbar an Effizienz gewonnen." by="Geschäftsführer, mittelständisches Handelsunternehmen" />

      <div className="grid gap-x-4 gap-y-8 border-t pt-6 sm:grid-cols-2">
        <Tile title="Strategie- & Managementberatung" image={photos.presentation} text="Wir begleiten Geschäftsführung und Führungskräfte bei der strategischen Ausrichtung, bei Investitionsentscheidungen und in Phasen des Wandels." />
        <Tile title="Organisation & Prozesse" image={photos.workshop} text="Effiziente Strukturen und schlanke Abläufe: Wir analysieren Ihre Organisation und verankern Verbesserungen nachhaltig." />
        <Tile title="Interim- & Projektmanagement" image={photos.handshake} text="Erfahrene Manager übernehmen kurzfristig Verantwortung – bei Vakanzen, in Sondersituationen oder in komplexen Projekten." />
        <Tile title="Karriere bei bbm-consulting" image={photos.team} to="/karriere" text="Sie möchten Unternehmen voranbringen? Wir suchen engagierte Beraterinnen und Berater, die mit uns wachsen wollen." cta="Zu den Stellen" />
      </div>
    </PageLayout>
  );
}
