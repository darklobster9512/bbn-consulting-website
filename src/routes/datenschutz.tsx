import { createFileRoute } from "@tanstack/react-router";
import { company, meta } from "@/lib/company";
import { PageLayout, SlantTitle } from "@/components/site";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({ meta: meta("Datenschutzerklärung – bbm-consulting GmbH", "Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO bei der bbm-consulting GmbH.") }),
  component: Page,
});

function Page() {
  return (
    <PageLayout banner={false}>
      <SlantTitle>Datenschutzerklärung</SlantTitle>
      <div className="space-y-5 [&_h2]:mb-1 [&_h2]:font-bold [&_h2]:text-foreground">
        <div><h2>1. Verantwortlicher</h2><p>{company.name}, {company.street}, {company.city}<br />Vertreten durch den Geschäftsführer {company.ceo}<br />Telefon: {company.phone} · E-Mail: {company.mail.info}</p></div>
        <div><h2>2. Kontakt in Datenschutzfragen</h2><p>Bei Fragen zum Datenschutz wenden Sie sich bitte an: <a className="text-primary" href={`mailto:${company.mail.datenschutz}`}>{company.mail.datenschutz}</a></p></div>
        <div><h2>3. Allgemeines zur Datenverarbeitung</h2><p>Wir verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist. Rechtsgrundlagen sind insbesondere Art. 6 Abs. 1 lit. a, b, c und f DSGVO.</p></div>
        <div><h2>4. Hosting und Server-Logfiles</h2><p>Beim Aufruf unserer Website werden durch den Hosting-Anbieter automatisch Informationen erfasst (IP-Adresse, Datum und Uhrzeit, aufgerufene Seite, Browser, Betriebssystem, Referrer-URL). Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO zur Gewährleistung eines sicheren und stabilen Betriebs. Die Daten werden gelöscht, sobald sie nicht mehr erforderlich sind.</p></div>
        <div><h2>5. Kontaktaufnahme</h2><p>Wenn Sie uns per E-Mail oder über das Kontaktformular kontaktieren, werden Ihre Angaben (z. B. Name, E-Mail, Nachricht) zur Bearbeitung der Anfrage gespeichert. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b bzw. f DSGVO. Die Daten werden gelöscht, sobald die Anfrage abschließend bearbeitet ist und keine gesetzlichen Aufbewahrungspflichten bestehen.</p></div>
        <div><h2>6. Bewerbungen</h2><p>Bewerbungsunterlagen, die Sie an {company.mail.bewerbung} senden, verarbeiten wir zur Durchführung des Bewerbungsverfahrens gemäß § 26 BDSG und Art. 6 Abs. 1 lit. b DSGVO. Bei Absage werden die Unterlagen spätestens sechs Monate nach Abschluss des Verfahrens gelöscht, sofern keine Einwilligung zur längeren Speicherung vorliegt.</p></div>
        <div><h2>7. Cookies</h2><p>Diese Website verwendet nur technisch notwendige Cookies bzw. Speichertechnologien. Tracking- oder Marketing-Cookies setzen wir nicht ein.</p></div>
        <div><h2>8. Externe Schriftarten</h2><p>Zur einheitlichen Darstellung nutzen wir Schriftarten von Google Fonts (Google Ireland Limited). Beim Aufruf einer Seite lädt Ihr Browser die Schriftarten, wodurch Ihre IP-Adresse an Google übermittelt werden kann. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.</p></div>
        <div><h2>8a. Kartendienst OpenStreetMap</h2><p>Auf unserer Kontaktseite binden wir Kartenmaterial von OpenStreetMap (OpenStreetMap Foundation, St John’s Innovation Centre, Cambridge, CB4 0WS, Vereinigtes Königreich) ein. Beim Aufruf der Karte wird Ihre IP-Adresse an OpenStreetMap übermittelt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (Interesse an einer leicht auffindbaren Darstellung unseres Standorts).</p></div>
        <div><h2>9. Ihre Rechte</h2><p>Sie haben das Recht auf Auskunft (Art. 15), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) und Widerspruch (Art. 21 DSGVO). Erteilte Einwilligungen können Sie jederzeit widerrufen. Zudem besteht ein Beschwerderecht bei einer Aufsichtsbehörde, z. B. dem Hamburgischen Beauftragten für Datenschutz und Informationsfreiheit.</p></div>
        <div><h2>10. Datensicherheit</h2><p>Diese Website nutzt eine SSL- bzw. TLS-Verschlüsselung. Wir treffen technische und organisatorische Maßnahmen, um Ihre Daten gegen Verlust und unbefugten Zugriff zu schützen.</p></div>
        <div><h2>11. Aktualität</h2><p>Stand: Oktober 2026. Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen.</p></div>
      </div>
    </PageLayout>
  );
}
