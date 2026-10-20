import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Briefcase, CheckSquare, Gift, ListChecks } from "lucide-react";
import { Bullets, ContactBox, PageLayout, SideBox, SlantTitle } from "@/components/site";
import { meta } from "@/lib/company";
import { useLang, useT } from "@/lib/i18n";
import { findStelle } from "@/data/stellen";

export const Route = createFileRoute("/karriere/$slug")({
  loader: ({ params }) => {
    const s = findStelle(params.slug);
    if (!s) throw notFound();
    return s;
  },
  head: ({ loaderData, params }) =>
    loaderData
      ? { meta: meta(`${loaderData.de.titel} in ${loaderData.de.standort} | bbm-consulting`, loaderData.de.kurz, `/karriere/${params.slug}`) }
      : { meta: [{ title: "Stelle nicht gefunden | bbm-consulting" }, { name: "robots", content: "noindex" }] },
  component: Page,
  notFoundComponent: () => (
    <PageLayout><SlantTitle>Stelle nicht gefunden</SlantTitle><Link to="/karriere" className="text-primary underline">Alle Stellen</Link></PageLayout>
  ),
  errorComponent: () => (
    <PageLayout><SlantTitle>Fehler</SlantTitle><Link to="/karriere" className="text-primary underline">Alle Stellen</Link></PageLayout>
  ),
});

const T = {
  de: { title: undefined as string | undefined, back: "Alle Stellen", facts: "Eckdaten", loc: "Standort", model: "Modell", time: "Arbeitszeit", pay: "Vergütung", perHour: "pro Stunde", tasks: "Ihre Aufgaben", req: "Ihr Profil", ben: "Wir bieten", apply: "Jetzt bewerben" },
  en: { title: undefined as string | undefined, back: "All positions", facts: "Key facts", loc: "Location", model: "Model", time: "Working hours", pay: "Pay", perHour: "per hour", tasks: "Your tasks", req: "Your profile", ben: "What we offer", apply: "Apply now" },
};

function Page() {
  const s = Route.useLoaderData();
  const { lang } = useLang();
  const t = useT({ de: { ...T.de, title: `${s.de.titel} | bbm-consulting` }, en: { ...T.en, title: `${s.en.titel} | bbm-consulting` } });
  const x = s[lang];
  const applyBtn = (
    <Link to="/karriere/bewerbung" search={{ stelle: s.slug }} className="flex min-h-11 items-center justify-center gap-2 bg-primary px-6 text-[13px] font-semibold text-primary-foreground hover:bg-primary-dark">{t.apply}<ArrowRight className="h-3.5 w-3.5" /></Link>
  );
  const rows: [string, string | undefined][] = [[t.loc, x.standort], [t.model, x.modell], [t.time, x.arbeitszeit], [t.pay, s.stundenlohn && `${s.stundenlohn} ${t.perHour}`]];
  return (
    <PageLayout
      side={
        <>
          <SideBox icon={Briefcase} title={t.facts}>
            <dl className="space-y-2">
              {rows.filter(([, v]) => v).map(([k, v]) => (
                <div key={k}><dt className="text-[11px] font-semibold uppercase text-muted-foreground">{k}</dt><dd>{v}</dd></div>
              ))}
            </dl>
            <div className="mt-3">{applyBtn}</div>
          </SideBox>
          <ContactBox />
        </>
      }
    >
      <Link to="/karriere" className="mb-4 inline-flex min-h-11 items-center gap-1.5 text-[13px] text-primary hover:underline"><ArrowLeft className="h-3.5 w-3.5" />{t.back}</Link>
      <div><SlantTitle>{x.titel}</SlantTitle></div>
      <p className="mb-6">{x.beschreibung}</p>
      <SlantTitle as="h2" icon={ListChecks}>{t.tasks}</SlantTitle>
      <Bullets items={x.aufgaben} />
      <SlantTitle as="h2" icon={CheckSquare}>{t.req}</SlantTitle>
      <Bullets items={x.voraussetzungen} />
      <SlantTitle as="h2" icon={Gift}>{t.ben}</SlantTitle>
      <Bullets items={x.benefits} />
      <div className="mt-6 border-t pt-6 sm:w-max">{applyBtn}</div>
    </PageLayout>
  );
}
