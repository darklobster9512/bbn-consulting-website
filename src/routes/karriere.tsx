import { createFileRoute } from "@tanstack/react-router";
import { Send } from "lucide-react";
import { Bullets, ContactBox, PageLayout, SideBox, SlantTitle, Tile } from "@/components/site";
import { company, meta } from "@/lib/company";
import { photos } from "@/lib/photos";

export const Route = createFileRoute("/karriere")({
  head: () => ({ meta: meta("Karriere – bbm-consulting GmbH", "Offene Stellen bei der bbm-consulting GmbH in Hamburg. Jetzt bewerben.") }),
  component: Page,
});

const jobs = [
  { t: "Senior Consultant (m/w/d) Strategie", img: photos.presentation, d: "Vollzeit, Hamburg. Sie verantworten Strategieprojekte bei unseren Mandanten und führen kleine Projektteams." },
  { t: "Consultant (m/w/d) Prozessmanagement", img: photos.workshop, d: "Vollzeit, Hamburg / mobil. Sie analysieren und optimieren Geschäftsprozesse gemeinsam mit unseren Kunden." },
  { t: "Projektmanager (m/w/d)", img: photos.success, d: "Vollzeit, Hamburg. Sie steuern komplexe Kundenprojekte termin- und budgetgerecht." },
  { t: "Werkstudent (m/w/d) Consulting", img: photos.team, d: "Teilzeit, Hamburg. Sie unterstützen unsere Berater bei Recherchen, Analysen und Präsentationen." },
];

function Page() {
  const mail = (s: string) => `mailto:${company.mail.bewerbung}?subject=${encodeURIComponent("Bewerbung: " + s)}`;
  return (
    <PageLayout
      side={
        <>
          <SideBox icon={Send} title="Bewerbung">
            <p>Bitte senden Sie Ihre vollständigen Unterlagen (Anschreiben, Lebenslauf, Zeugnisse) als PDF an:</p>
            <p className="mt-2"><a className="font-semibold text-primary" href={`mailto:${company.mail.bewerbung}`}>{company.mail.bewerbung}</a></p>
            <p className="mt-2">Initiativbewerbungen sind jederzeit willkommen.</p>
          </SideBox>
          <ContactBox />
        </>
      }
    >
      <SlantTitle>Karriere</SlantTitle>
      <p className="mb-3">Wir suchen Menschen, die etwas bewegen wollen. Bei bbm-consulting erwarten Sie anspruchsvolle Aufgaben, frühe Verantwortung und ein kollegiales Team.</p>
      <p>Was wir Ihnen bieten:</p>
      <Bullets items={["Individuelle Weiterbildung und Zertifizierungen", "Flexible Arbeitszeiten und mobiles Arbeiten", "Moderne Büroräume in Hamburg-Altona", "Leistungsgerechte Vergütung"]} />
      <div className="mt-6 grid gap-x-4 gap-y-8 border-t pt-6 sm:grid-cols-2">
        {jobs.map((j) => <Tile key={j.t} title={j.t} image={j.img} text={j.d} href={mail(j.t)} cta="Jetzt bewerben" />)}
      </div>
    </PageLayout>
  );
}
