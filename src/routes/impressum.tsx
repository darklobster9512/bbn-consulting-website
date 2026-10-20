import { createFileRoute } from "@tanstack/react-router";
import { company, meta } from "@/lib/company";
import { PageLayout, SlantTitle } from "@/components/site";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/impressum")({
  head: () => ({ meta: meta("Impressum – bbm-consulting GmbH", "Impressum und Anbieterkennzeichnung der bbm-consulting GmbH, Hamburg.") }),
  component: Page,
});

const c = company;
const T = {
  de: {
    title: "Impressum – bbm-consulting GmbH", h: "Impressum", note: "",
    s: [
      ["Angaben gemäß § 5 DDG", `${c.name}\n${c.street}\n${c.city}\nDeutschland`],
      ["Vertreten durch", `Geschäftsführer: ${c.ceo}\nProkuristen: ${c.prokura.join(", ")}`],
      ["Kontakt", `Telefon: ${c.phone}\nE-Mail: ${c.mail.info}\nWeb: ${c.domain}`],
      ["Registereintrag", `Registergericht: ${c.court}\nRegisternummer: ${c.register}`],
      ["Umsatzsteuer-ID", `Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: ${c.vat}`],
      ["Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV", `${c.ceo}, ${c.street}, ${c.city}`],
      ["EU-Streitschlichtung", "Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen."],
      ["Haftung für Inhalte", "Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Wir sind jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen. Bei Bekanntwerden von Rechtsverletzungen werden wir diese Inhalte umgehend entfernen."],
      ["Haftung für Links", "Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter verantwortlich. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen."],
      ["Urheberrecht", "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Vervielfältigung, Bearbeitung und Verbreitung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung."],
    ] as [string, string][],
  },
  en: {
    title: "Legal notice – bbm-consulting GmbH", h: "Legal notice", note: "This English translation is provided for convenience only. The German version is legally binding.",
    s: [
      ["Information pursuant to § 5 DDG", `${c.name}\n${c.street}\n${c.city}\nGermany`],
      ["Represented by", `Managing director: ${c.ceo}\nAuthorised signatories (Prokura): ${c.prokura.join(", ")}`],
      ["Contact", `Phone: ${c.phone}\nEmail: ${c.mail.info}\nWeb: ${c.domain}`],
      ["Commercial register", `Register court: Local Court Hamburg\nRegister number: ${c.register}`],
      ["VAT ID", `VAT identification number pursuant to § 27a UStG: ${c.vat}`],
      ["Responsible for content pursuant to § 18 (2) MStV", `${c.ceo}, ${c.street}, ${c.city}`],
      ["EU dispute resolution", "We are neither willing nor obliged to participate in dispute resolution proceedings before a consumer arbitration board."],
      ["Liability for content", "As a service provider, we are responsible for our own content on these pages in accordance with general law. However, we are not obliged to monitor transmitted or stored third-party information. Upon becoming aware of legal violations, we will remove such content immediately."],
      ["Liability for links", "Our website contains links to external third-party websites over whose content we have no influence. The respective provider is always responsible for the content of linked pages. Upon becoming aware of legal violations, we will remove such links immediately."],
      ["Copyright", "The content and works created by the site operators on these pages are subject to German copyright law. Reproduction, editing and distribution beyond the limits of copyright law require written consent."],
    ] as [string, string][],
  },
};

function Page() {
  const t = useT(T);
  return (
    <PageLayout banner={false}>
      <SlantTitle>{t.h}</SlantTitle>
      {t.note && <p className="mb-5 border-l-4 border-primary bg-muted px-4 py-2 italic">{t.note}</p>}
      <div className="space-y-5 [&_h2]:mb-1 [&_h2]:font-bold [&_h2]:text-foreground">
        {t.s.map(([h, p]) => <div key={h}><h2>{h}</h2><p className="whitespace-pre-line">{p}</p></div>)}
      </div>
    </PageLayout>
  );
}
