import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { AtSign } from "lucide-react";
import { ContactBox, PageLayout, SideBox, SlantTitle } from "@/components/site";
import { company, meta } from "@/lib/company";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/kontakt")({
  head: () => ({ meta: meta("Kontakt – Erstgespräch vereinbaren | bbm-consulting Hamburg", "Vereinbaren Sie ein unverbindliches Erstgespräch mit der bbm-consulting GmbH, Ruhrstr. 126, 22761 Hamburg – per Telefon, E-Mail oder Kontaktformular.", "/kontakt") }),
  component: Page,
});

const input = "mt-1 w-full border border-input px-3 py-3 text-[16px] md:py-2 md:text-[14px] outline-none focus:border-primary";

const T = {
  de: {
    title: "Kontakt – bbm-consulting GmbH", h: "Kontakt", side: "E-Mail-Adressen", general: "Allgemein", req: "Anfragen", job: "Bewerbung", privacy: "Datenschutz",
    intro: "Sie haben Fragen oder wünschen ein persönliches Gespräch? Schreiben Sie uns – wir melden uns zeitnah bei Ihnen.",
    map: "Standort bbm-consulting", name: "Name", email: "E-Mail", company: "Unternehmen", message: "Nachricht", send: "Absenden",
    consent: "Ich habe die Datenschutzerklärung zur Kenntnis genommen und stimme der Verarbeitung meiner Angaben zur Bearbeitung der Anfrage zu.",
    subject: "Anfrage über Website",
  },
  en: {
    title: "Contact – bbm-consulting GmbH", h: "Contact", side: "Email addresses", general: "General", req: "Enquiries", job: "Applications", privacy: "Data protection",
    intro: "Do you have questions or would you like a personal meeting? Write to us – we will get back to you promptly.",
    map: "Location bbm-consulting", name: "Name", email: "Email", company: "Company", message: "Message", send: "Send",
    consent: "I have read the privacy policy and agree to my details being processed to handle my enquiry.",
    subject: "Enquiry via website",
  },
};

function Page() {
  const t = useT(T);
  const [f, setF] = useState({ name: "", email: "", company: "", message: "" });
  const submit = (e: FormEvent) => {
    e.preventDefault();
    const body = `${t.name}: ${f.name}\n${t.email}: ${f.email}\n${t.company}: ${f.company}\n\n${f.message}`;
    window.location.href = `mailto:${company.mail.kontakt}?subject=${encodeURIComponent(t.subject)}&body=${encodeURIComponent(body)}`;
  };
  return (
    <PageLayout
      side={
        <>
          <ContactBox mobile />
          <SideBox icon={AtSign} title={t.side}>
            <p>{t.general}: <a className="text-primary" href={`mailto:${company.mail.info}`}>{company.mail.info}</a></p>
            <p>{t.req}: <a className="text-primary" href={`mailto:${company.mail.kontakt}`}>{company.mail.kontakt}</a></p>
            <p>{t.job}: <a className="text-primary" href={`mailto:${company.mail.bewerbung}`}>{company.mail.bewerbung}</a></p>
            <p>{t.privacy}: <a className="text-primary" href={`mailto:${company.mail.datenschutz}`}>{company.mail.datenschutz}</a></p>
          </SideBox>
        </>
      }
    >
      <SlantTitle>{t.h}</SlantTitle>
      <p className="mb-5">{t.intro}</p>
      <div className="mb-6 border-t-4 border-primary">
        <iframe title={t.map} className="h-48 w-full grayscale md:h-64" loading="lazy"
          src="https://www.openstreetmap.org/export/embed.html?bbox=9.917%2C53.548%2C9.937%2C53.556&layer=mapnik&marker=53.5521%2C9.9271" />
      </div>
      <form onSubmit={submit} className="space-y-3">
        <div className="grid gap-3 sm:grid-cols-2">
          <label>{t.name} *<input required className={input} value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} /></label>
          <label>{t.email} *<input required type="email" className={input} value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} /></label>
        </div>
        <label className="block">{t.company}<input className={input} value={f.company} onChange={(e) => setF({ ...f, company: e.target.value })} /></label>
        <label className="block">{t.message} *<textarea required rows={7} className={input} value={f.message} onChange={(e) => setF({ ...f, message: e.target.value })} /></label>
        <label className="flex gap-2 text-[12px]"><input required type="checkbox" />{t.consent}</label>
        <button className="min-h-11 w-full border border-primary px-8 py-2 sm:w-auto text-primary hover:bg-primary hover:text-primary-foreground">{t.send}</button>
      </form>
    </PageLayout>
  );
}
