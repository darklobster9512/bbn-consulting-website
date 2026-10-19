import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays } from "lucide-react";
import services from "@/assets/services.jpg";
import about from "@/assets/about.jpg";
import career from "@/assets/career.jpg";
import contact from "@/assets/contact.jpg";
import { Bullets, ContactBox, PageLayout, SideBox, SlantTitle, Tile } from "@/components/site";
import { meta } from "@/lib/company";

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
          <SideBox icon={CalendarDays} title="Termine & Veranstaltungen" framed={false}>
            Derzeit liegen keine zukünftigen Termine vor.
          </SideBox>
        </>
      }
    >
      <SlantTitle>Willkommen bei bbm-consulting.</SlantTitle>
      <p className="mb-3 font-bold">Hanseatische Beratung mit Weitblick</p>
      <p className="mb-3">
        Die bbm-consulting GmbH mit Sitz in Hamburg erbringt Beratungs- und Managementdienstleistungen für mittelständische Unternehmen und Konzerne. Verlässlichkeit, Diskretion und unternehmerisches Denken prägen seit jeher unsere Arbeit.
      </p>
      <p>Wir sind eine unabhängige Unternehmensberatung mit den Kernkompetenzen</p>
      <Bullets items={["Strategie- und Managementberatung", "Organisationsentwicklung und Prozessoptimierung", "Interim-Management und Projektmanagement"]} />
      <p className="mb-3">Gerne nehmen wir uns Zeit für ein persönliches Gespräch mit Ihnen.</p>
      <p className="font-bold italic">Ihr bbm-consulting-Team</p>

      <div className="mt-6 grid gap-x-4 gap-y-8 border-t pt-6 sm:grid-cols-2">
        <Tile title="Strategie- & Managementberatung" image={services} text="Wir begleiten Geschäftsführung und Führungskräfte bei der strategischen Ausrichtung, bei Investitionsentscheidungen und in Phasen des Wandels – von der Analyse bis zur Umsetzung." />
        <Tile title="Organisation & Prozesse" image={contact} text="Effiziente Strukturen und schlanke Abläufe: Wir analysieren Ihre Organisation, identifizieren Potenziale und verankern Verbesserungen nachhaltig im Unternehmen." />
        <Tile title="Interim- & Projektmanagement" image={about} text="Erfahrene Manager übernehmen kurzfristig Verantwortung – bei Vakanzen, in Sondersituationen oder zur Steuerung komplexer Projekte." />
        <Tile title="Karriere bei bbm-consulting" image={career} to="/karriere" text="Sie möchten Unternehmen voranbringen? Wir suchen engagierte Beraterinnen und Berater, die mit uns wachsen wollen." cta="Zu den Stellen" />
      </div>
    </PageLayout>
  );
}
