import { createFileRoute } from "@tanstack/react-router";
import { company, meta } from "@/lib/company";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({ meta: meta("Datenschutzerklärung – bbm-consulting GmbH", "Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO bei der bbm-consulting GmbH.") }),
  component: Page,
});

function Page() {
  return (
    <section className="container-x max-w-3xl py-20">
      <h1 className="text-4xl font-bold md:text-5xl">Datenschutzerklärung</h1>
      <div className="mt-10 space-y-8 leading-relaxed text-muted-foreground [&_h2]:mb-2 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-foreground">
        <div><h2>1. Verantwortlicher</h2><p>{company.name}, {company.street}, {company.city}<br />Vertreten durch den Geschäftsführer {company.ceo}<br />Telefon: {company.phone} · E-Mail: {company.mail.info}</p></div>
        <div><h2>2. Kontakt in Datenschutzfragen</h2><p>Bei Fragen zum Datenschutz wenden Sie sich bitte an: <a className="text-primary" href={`mailto:${company.mail.datenschutz}`}>{company.mail.datenschutz}</a></p></div>
        <div><h2>3. Allgemeines zur Datenverarbeitung</h2><p>Wir verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist. Rechtsgrundlagen sind insbesondere Art. 6 Abs. 1 lit. a, b, c und f DSGVO.</p></div>
        <div><h2>4. Hosting und Server-Logfiles</h2><p>Beim Aufruf unserer Website werden durch den Hosting-Anbieter automatisch Informationen erfasst (IP-Adresse, Datum und Uhrzeit, aufgerufene Seite, Browser, Betriebssystem, Referrer-URL). Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO zur Gewährleistung eines sicheren und stabilen Betriebs. Die Daten werden gelöscht, sobald sie nicht mehr erforderlich sind.</p></div>
        <div><h2>5. Kontaktaufnahme</h2><p>Wenn Sie uns per E-Mail oder über das Kontaktformular kontaktieren, werden Ihre Angaben (z. B. Name, E-Mail, Nachricht) zur Bearbeitung der Anfrage gespeichert. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b bzw. f DSGVO. Die Daten werden gelöscht, sobald die Anfrage abschließend bearbeitet ist und keine gesetzlichen Aufbewahrungspflichten bestehen.</p></div>
        <div><h2>6. Bewerbungen</h2><p>Bewerbungsunterlagen, die Sie an {company.mail.bewerbung} senden, verarbeiten wir zur Durchführung des Bewerbungsverfahrens gemäß § 26 BDSG und Art. 6 Abs. 1 lit. b DSGVO. Bei Absage werden die Unterlagen spätestens sechs Monate nach Abschluss des Verfahrens gelöscht, sofern keine Einwilligung zur längeren Speicherung vorliegt.</p></div>
        <div><h2>7. Cookies</h2><p>Diese Website verwendet nur technisch notwendige Cookies bzw. Speichertechnologien. Tracking- oder Marketing-Cookies setzen wir nicht ein.</p></div>
        <div><h2>8. Externe Schriftarten</h2><p>Zur einheitlichen Darstellung nutzen wir Schriftarten von Google Fonts (Google Ireland Limited). Beim Aufruf einer Seite lädt Ihr Browser die Schriftarten, wodurch Ihre IP-Adresse an Google übermittelt werden kann. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.</p></div>
        <div><h2>9. Ihre Rechte</h2><p>Sie haben das Recht auf Auskunft (Art. 15), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) und Widerspruch (Art. 21 DSGVO). Erteilte Einwilligungen können Sie jederzeit widerrufen. Zudem besteht ein Beschwerderecht bei einer Aufsichtsbehörde, z. B. dem Hamburgischen Beauftragten für Datenschutz und Informationsfreiheit.</p></div>
        <div><h2>10. Datensicherheit</h2><p>Diese Website nutzt eine SSL- bzw. TLS-Verschlüsselung. Wir treffen technische und organisatorische Maßnahmen, um Ihre Daten gegen Verlust und unbefugten Zugriff zu schützen.</p></div>
        <div><h2>11. Aktualität</h2><p>Stand: Oktober 2026. Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen.</p></div>
      </div>
    </section>
  );
}
