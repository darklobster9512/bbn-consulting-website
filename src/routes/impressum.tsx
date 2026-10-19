import { createFileRoute } from "@tanstack/react-router";
import { company, meta } from "@/lib/company";
import { PageLayout, SlantTitle } from "@/components/site";

export const Route = createFileRoute("/impressum")({
  head: () => ({ meta: meta("Impressum – bbm-consulting GmbH", "Impressum und Anbieterkennzeichnung der bbm-consulting GmbH, Hamburg.") }),
  component: Page,
});

function Page() {
  return (
    <PageLayout banner={false}>
      <SlantTitle>Impressum</SlantTitle>
      <div className="space-y-5 [&_h2]:mb-1 [&_h2]:font-bold [&_h2]:text-foreground">
        <div><h2>Angaben gemäß § 5 DDG</h2><p>{company.name}<br />{company.street}<br />{company.city}<br />Deutschland</p></div>
        <div><h2>Vertreten durch</h2><p>Geschäftsführer: {company.ceo}<br />Prokuristen: {company.prokura.join(", ")}</p></div>
        <div><h2>Kontakt</h2><p>Telefon: {company.phone}<br />E-Mail: {company.mail.info}<br />Web: {company.domain}</p></div>
        <div><h2>Registereintrag</h2><p>Registergericht: {company.court}<br />Registernummer: {company.register}</p></div>
        <div><h2>Umsatzsteuer-ID</h2><p>Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: {company.vat}</p></div>
        <div><h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2><p>{company.ceo}, {company.street}, {company.city}</p></div>
        <div><h2>EU-Streitschlichtung</h2><p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p></div>
        <div><h2>Haftung für Inhalte</h2><p>Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Wir sind jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen. Bei Bekanntwerden von Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p></div>
        <div><h2>Haftung für Links</h2><p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter verantwortlich. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p></div>
        <div><h2>Urheberrecht</h2><p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Vervielfältigung, Bearbeitung und Verbreitung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung.</p></div>
      </div>
    </PageLayout>
  );
}
