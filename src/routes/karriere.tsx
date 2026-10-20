import { createFileRoute } from "@tanstack/react-router";
import { Send } from "lucide-react";
import { Bullets, ContactBox, PageLayout, SideBox, SlantTitle, Tile } from "@/components/site";
import { company, meta } from "@/lib/company";
import { photos } from "@/lib/photos";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/karriere")({
  head: () => ({ meta: meta("Karriere – bbm-consulting GmbH", "Offene Stellen bei der bbm-consulting GmbH in Hamburg. Jetzt bewerben.") }),
  component: Page,
});

const imgs = [photos.presentation, photos.workshop, photos.success, photos.team];

const T = {
  de: {
    title: "Karriere – bbm-consulting GmbH", h: "Karriere", side: "Bewerbung", subject: "Bewerbung: ", cta: "Jetzt bewerben",
    s1: "Bitte senden Sie Ihre vollständigen Unterlagen (Anschreiben, Lebenslauf, Zeugnisse) als PDF an:", s2: "Initiativbewerbungen sind jederzeit willkommen.",
    p1: "Wir suchen Menschen, die etwas bewegen wollen. Bei bbm-consulting erwarten Sie anspruchsvolle Aufgaben, frühe Verantwortung und ein kollegiales Team.",
    p2: "Was wir Ihnen bieten:",
    perks: ["Individuelle Weiterbildung und Zertifizierungen", "Flexible Arbeitszeiten und mobiles Arbeiten", "Moderne Büroräume in Hamburg-Altona", "Leistungsgerechte Vergütung"],
    jobs: [
      ["Senior Consultant (m/w/d) Strategie", "Vollzeit, Hamburg. Sie verantworten Strategieprojekte bei unseren Mandanten und führen kleine Projektteams."],
      ["Consultant (m/w/d) Prozessmanagement", "Vollzeit, Hamburg / mobil. Sie analysieren und optimieren Geschäftsprozesse gemeinsam mit unseren Kunden."],
      ["Projektmanager (m/w/d)", "Vollzeit, Hamburg. Sie steuern komplexe Kundenprojekte termin- und budgetgerecht."],
      ["Werkstudent (m/w/d) Consulting", "Teilzeit, Hamburg. Sie unterstützen unsere Berater bei Recherchen, Analysen und Präsentationen."],
    ] as [string, string][],
  },
  en: {
    title: "Careers – bbm-consulting GmbH", h: "Careers", side: "Application", subject: "Application: ", cta: "Apply now",
    s1: "Please send your complete documents (cover letter, CV, references) as a PDF to:", s2: "Unsolicited applications are always welcome.",
    p1: "We are looking for people who want to make a difference. At bbm-consulting you can expect challenging tasks, early responsibility and a collegial team.",
    p2: "What we offer:",
    perks: ["Individual training and certifications", "Flexible working hours and remote work", "Modern offices in Hamburg-Altona", "Performance-based pay"],
    jobs: [
      ["Senior Consultant (m/f/d) Strategy", "Full-time, Hamburg. You are responsible for strategy projects with our clients and lead small project teams."],
      ["Consultant (m/f/d) Process Management", "Full-time, Hamburg / remote. You analyse and optimise business processes together with our clients."],
      ["Project Manager (m/f/d)", "Full-time, Hamburg. You steer complex client projects on time and on budget."],
      ["Working Student (m/f/d) Consulting", "Part-time, Hamburg. You support our consultants with research, analyses and presentations."],
    ] as [string, string][],
  },
};

function Page() {
  const t = useT(T);
  const mail = (s: string) => `mailto:${company.mail.bewerbung}?subject=${encodeURIComponent(t.subject + s)}`;
  return (
    <PageLayout
      side={
        <>
          <SideBox icon={Send} title={t.side}>
            <p>{t.s1}</p>
            <p className="mt-2"><a className="font-semibold text-primary" href={`mailto:${company.mail.bewerbung}`}>{company.mail.bewerbung}</a></p>
            <p className="mt-2">{t.s2}</p>
          </SideBox>
          <ContactBox />
        </>
      }
    >
      <SlantTitle>{t.h}</SlantTitle>
      <p className="mb-3">{t.p1}</p>
      <p>{t.p2}</p>
      <Bullets items={t.perks} />
      <div className="mt-6 grid gap-x-4 gap-y-8 border-t pt-6 sm:grid-cols-2">
        {t.jobs.map(([title, d], i) => <Tile key={i} title={title} image={imgs[i] ?? photos.team} text={d} href={mail(title)} cta={t.cta} />)}
      </div>
    </PageLayout>
  );
}
