import { createFileRoute } from "@tanstack/react-router";
import { company, meta } from "@/lib/company";
import { PageLayout, SlantTitle } from "@/components/site";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({ meta: meta("Datenschutzerklärung | bbm-consulting GmbH Hamburg", "Datenschutzerklärung der bbm-consulting GmbH: wie wir personenbezogene Daten gemäß DSGVO verarbeiten und welche Rechte Sie als betroffene Person haben.", "/datenschutz") }),
  component: Page,
});

const c = company;
const T = {
  de: {
    title: "Datenschutzerklärung | bbm-consulting GmbH Hamburg", h: "Datenschutzerklärung", note: "",
    s: [
      ["1. Verantwortlicher", `${c.name}, ${c.street}, ${c.city}\nVertreten durch den Geschäftsführer ${c.ceo}\nTelefon: ${c.phone}\nE-Mail: ${c.mail.info}`],
      ["2. Kontakt in Datenschutzfragen", `Bei Fragen zum Datenschutz wenden Sie sich bitte an: ${c.mail.datenschutz}`],
      ["3. Allgemeines zur Datenverarbeitung", "Wir verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist. Rechtsgrundlagen sind insbesondere Art. 6 Abs. 1 lit. a, b, c und f DSGVO."],
      ["4. Hosting und Server-Logfiles", "Beim Aufruf unserer Website werden durch den Hosting-Anbieter automatisch Informationen erfasst (IP-Adresse, Datum und Uhrzeit, aufgerufene Seite, Browser, Betriebssystem, Referrer-URL). Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO zur Gewährleistung eines sicheren und stabilen Betriebs. Die Daten werden gelöscht, sobald sie nicht mehr erforderlich sind."],
      ["5. Kontaktaufnahme", "Wenn Sie uns per E-Mail oder über das Kontaktformular kontaktieren, werden Ihre Angaben (z. B. Name, E-Mail, Nachricht) zur Bearbeitung der Anfrage gespeichert. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b bzw. f DSGVO. Die Daten werden gelöscht, sobald die Anfrage abschließend bearbeitet ist und keine gesetzlichen Aufbewahrungspflichten bestehen."],
      ["6. Bewerbungen", `Bewerbungsunterlagen, die Sie an ${c.mail.bewerbung} senden, verarbeiten wir zur Durchführung des Bewerbungsverfahrens gemäß § 26 BDSG und Art. 6 Abs. 1 lit. b DSGVO. Bei Absage werden die Unterlagen spätestens sechs Monate nach Abschluss des Verfahrens gelöscht, Wenn Sie sich über unser Online-Bewerbungsformular bewerben, werden Ihre Angaben (Name, E-Mail, Telefon, Anstellungsart, Startdatum) verschlüsselt an ein externes Bewerbermanagement-System übermittelt, das in unserem Auftrag als Auftragsverarbeiter (Art. 28 DSGVO) tätig ist. sofern keine Einwilligung zur längeren Speicherung vorliegt.`],
      ["7. Cookies", "Diese Website verwendet nur technisch notwendige Cookies bzw. Speichertechnologien (z. B. zur Speicherung der gewählten Sprache). Tracking- oder Marketing-Cookies setzen wir nicht ein."],
      ["8. Externe Schriftarten", "Zur einheitlichen Darstellung nutzen wir Schriftarten von Google Fonts (Google Ireland Limited). Beim Aufruf einer Seite lädt Ihr Browser die Schriftarten, wodurch Ihre IP-Adresse an Google übermittelt werden kann. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO."],
      ["8a. Kartendienst OpenStreetMap", "Auf unserer Kontaktseite binden wir Kartenmaterial von OpenStreetMap (OpenStreetMap Foundation, St John’s Innovation Centre, Cambridge, CB4 0WS, Vereinigtes Königreich) ein. Beim Aufruf der Karte wird Ihre IP-Adresse an OpenStreetMap übermittelt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (Interesse an einer leicht auffindbaren Darstellung unseres Standorts)."],
      ["9. Ihre Rechte", "Sie haben das Recht auf Auskunft (Art. 15), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) und Widerspruch (Art. 21 DSGVO). Erteilte Einwilligungen können Sie jederzeit widerrufen. Zudem besteht ein Beschwerderecht bei einer Aufsichtsbehörde, z. B. dem Hamburgischen Beauftragten für Datenschutz und Informationsfreiheit."],
      ["10. Datensicherheit", "Diese Website nutzt eine SSL- bzw. TLS-Verschlüsselung. Wir treffen technische und organisatorische Maßnahmen, um Ihre Daten gegen Verlust und unbefugten Zugriff zu schützen."],
      ["11. Aktualität", "Stand: Oktober 2026. Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen."],
    ] as [string, string][],
  },
  en: {
    title: "Privacy Policy | bbm-consulting GmbH Hamburg", h: "Privacy policy", note: "This English translation is provided for convenience only. The German version is legally binding.",
    s: [
      ["1. Controller", `${c.name}, ${c.street}, ${c.city}\nRepresented by the managing director ${c.ceo}\nPhone: ${c.phone}\nEmail: ${c.mail.info}`],
      ["2. Data protection contact", `For questions about data protection, please contact: ${c.mail.datenschutz}`],
      ["3. General information on data processing", "We only process personal data to the extent necessary to provide a functional website and our content and services. The legal bases are in particular Art. 6 (1) (a), (b), (c) and (f) GDPR."],
      ["4. Hosting and server log files", "When you visit our website, the hosting provider automatically collects information (IP address, date and time, page accessed, browser, operating system, referrer URL). Processing is based on Art. 6 (1) (f) GDPR to ensure secure and stable operation. The data is deleted as soon as it is no longer required."],
      ["5. Contacting us", "If you contact us by email or via the contact form, your details (e.g. name, email, message) are stored to process your enquiry. The legal basis is Art. 6 (1) (b) or (f) GDPR. The data is deleted once the enquiry has been fully processed and no statutory retention obligations apply."],
      ["6. Applications", `We process application documents you send to ${c.mail.bewerbung} to carry out the application procedure in accordance with § 26 BDSG and Art. 6 (1) (b) GDPR. If rejected, documents are deleted no later than six months after the procedure ends, If you apply via our online application form, your details (name, email, phone, employment type, start date) are transmitted in encrypted form to an external applicant tracking system acting as our processor (Art. 28 GDPR). unless you have consented to longer storage.`],
      ["7. Cookies", "This website only uses technically necessary cookies or storage technologies (e.g. to remember your chosen language). We do not use tracking or marketing cookies."],
      ["8. External fonts", "For consistent display we use fonts from Google Fonts (Google Ireland Limited). When you open a page, your browser loads the fonts, which may transmit your IP address to Google. The legal basis is Art. 6 (1) (f) GDPR."],
      ["8a. OpenStreetMap", "On our contact page we embed map material from OpenStreetMap (OpenStreetMap Foundation, St John’s Innovation Centre, Cambridge, CB4 0WS, United Kingdom). When the map loads, your IP address is transmitted to OpenStreetMap. The legal basis is Art. 6 (1) (f) GDPR (interest in an easy-to-find presentation of our location)."],
      ["9. Your rights", "You have the right of access (Art. 15), rectification (Art. 16), erasure (Art. 17), restriction of processing (Art. 18), data portability (Art. 20) and objection (Art. 21 GDPR). You may withdraw consent at any time. You also have the right to lodge a complaint with a supervisory authority, e.g. the Hamburg Commissioner for Data Protection and Freedom of Information."],
      ["10. Data security", "This website uses SSL/TLS encryption. We take technical and organisational measures to protect your data against loss and unauthorised access."],
      ["11. Last updated", "As of October 2026. We reserve the right to amend this privacy policy as necessary."],
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
