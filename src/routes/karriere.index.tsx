import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Briefcase, Clock, MapPin, Send } from "lucide-react";
import { BarHead, Bullets, ContactBox, PageLayout, Reveal, SideBox, SlantTitle } from "@/components/site";
import { company, meta } from "@/lib/company";
import { useLang, useT } from "@/lib/i18n";
import { stellen } from "@/data/stellen";

export const Route = createFileRoute("/karriere/")({
  head: () => ({ meta: meta("Karriere & Jobs in der Unternehmensberatung Hamburg | bbm-consulting", "Starten Sie Ihre Karriere bei der bbm-consulting GmbH in Hamburg: offene Stellen in der Beratung, flache Hierarchien und spannende Projekte. Jetzt bewerben.", "/karriere") }),
  component: Page,
});

const T = {
  de: {
    title: "Karriere & Jobs in der Unternehmensberatung Hamburg | bbm-consulting", h: "Karriere", side: "Bewerbung", jobs: "Offene Stellen", details: "Zur Stelle", apply: "Jetzt bewerben",
    s1: "Bewerben Sie sich in zwei kurzen Schritten online – oder senden Sie Ihre Unterlagen an:", s2: "Initiativbewerbungen sind jederzeit willkommen.",
    p1: "Wir suchen Menschen, die etwas bewegen wollen. Bei bbm-consulting erwarten Sie anspruchsvolle Aufgaben, frühe Verantwortung und ein kollegiales Team.",
    p2: "Was wir Ihnen bieten:",
    perks: ["Individuelle Weiterbildung und Zertifizierungen", "Flexible Arbeitszeiten und mobiles Arbeiten", "Moderne Büroräume in Hamburg-Altona", "Leistungsgerechte Vergütung"],
  },
  en: {
    title: "Careers & Consulting Jobs in Hamburg | bbm-consulting", h: "Careers", side: "Application", jobs: "Open positions", details: "View position", apply: "Apply now",
    s1: "Apply online in two short steps – or send your documents to:", s2: "Unsolicited applications are always welcome.",
    p1: "We are looking for people who want to make a difference. At bbm-consulting you can expect challenging tasks, early responsibility and a collegial team.",
    p2: "What we offer:",
    perks: ["Individual training and certifications", "Flexible working hours and remote work", "Modern offices in Hamburg-Altona", "Performance-based pay"],
  },
};

function Page() {
  const t = useT(T);
  const { lang } = useLang();
  return (
    <PageLayout
      side={
        <>
          <SideBox icon={Send} title={t.side}>
            <p>{t.s1}</p>
            <p className="mt-2"><a className="font-semibold text-primary" href={`mailto:${company.mail.bewerbung}`}>{company.mail.bewerbung}</a></p>
            <p className="mt-2">{t.s2}</p>
            <Link to="/karriere/bewerbung" search={{ stelle: "" }} className="mt-3 flex min-h-11 items-center justify-center gap-2 bg-primary text-[13px] font-semibold text-primary-foreground hover:bg-primary-dark">{t.apply}<ArrowRight className="h-3.5 w-3.5" /></Link>
          </SideBox>
          <ContactBox />
        </>
      }
    >
      <SlantTitle>{t.h}</SlantTitle>
      <p className="mb-3">{t.p1}</p>
      <p>{t.p2}</p>
      <Bullets items={t.perks} />
      <SlantTitle as="h2" icon={Briefcase}>{t.jobs}</SlantTitle>
      <div className="space-y-5">
        {stellen.map((s) => {
          const x = s[lang];
          return (
            <Reveal key={s.slug}>
              <article className="border border-primary">
                <BarHead icon={Briefcase} title={x.titel} />
                <div className="p-4 text-[13px]">
                  <div className="mb-2 flex flex-wrap gap-x-5 gap-y-1 text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-primary" />{x.standort}</span>
                    <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-primary" />{x.modell}</span>
                    {s.stundenlohn && <span className="font-semibold text-primary">{s.stundenlohn} / h</span>}
                  </div>
                  <p>{x.kurz}</p>
                  <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                    <Link to="/karriere/$slug" params={{ slug: s.slug }} className="group/btn flex min-h-11 items-center justify-center gap-2 border border-primary px-5 text-primary transition hover:bg-primary hover:text-primary-foreground">{t.details}<ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" /></Link>
                    <Link to="/karriere/bewerbung" search={{ stelle: s.slug }} className="flex min-h-11 items-center justify-center gap-2 bg-primary px-5 font-semibold text-primary-foreground hover:bg-primary-dark">{t.apply}</Link>
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </PageLayout>
  );
}
