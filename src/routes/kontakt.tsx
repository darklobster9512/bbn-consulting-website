import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { AtSign } from "lucide-react";
import { ContactBox, PageLayout, SideBox, SlantTitle } from "@/components/site";
import { company, meta } from "@/lib/company";

export const Route = createFileRoute("/kontakt")({
  head: () => ({ meta: meta("Kontakt – bbm-consulting GmbH", "Kontakt zur bbm-consulting GmbH, Ruhrstr. 126, 22761 Hamburg – telefonisch, per E-Mail oder über das Kontaktformular.") }),
  component: Page,
});

const input = "mt-1 w-full border border-input px-3 py-3 text-[16px] md:py-2 md:text-[14px] outline-none focus:border-primary";

function Page() {
  const [f, setF] = useState({ name: "", email: "", company: "", message: "" });
  const submit = (e: FormEvent) => {
    e.preventDefault();
    const body = `Name: ${f.name}\nE-Mail: ${f.email}\nUnternehmen: ${f.company}\n\n${f.message}`;
    window.location.href = `mailto:${company.mail.kontakt}?subject=${encodeURIComponent("Anfrage über Website")}&body=${encodeURIComponent(body)}`;
  };
  return (
    <PageLayout
      side={
        <>
          <ContactBox mobile />
          <SideBox icon={AtSign} title="E-Mail-Adressen">
            <p>Allgemein: <a className="text-primary" href={`mailto:${company.mail.info}`}>{company.mail.info}</a></p>
            <p>Anfragen: <a className="text-primary" href={`mailto:${company.mail.kontakt}`}>{company.mail.kontakt}</a></p>
            <p>Bewerbung: <a className="text-primary" href={`mailto:${company.mail.bewerbung}`}>{company.mail.bewerbung}</a></p>
            <p>Datenschutz: <a className="text-primary" href={`mailto:${company.mail.datenschutz}`}>{company.mail.datenschutz}</a></p>
          </SideBox>
        </>
      }
    >
      <SlantTitle>Kontakt</SlantTitle>
      <p className="mb-5">Sie haben Fragen oder wünschen ein persönliches Gespräch? Schreiben Sie uns – wir melden uns zeitnah bei Ihnen.</p>
      <div className="mb-6 border-t-4 border-primary">
        <iframe title="Standort bbm-consulting" className="h-48 w-full grayscale md:h-64" loading="lazy"
          src="https://www.openstreetmap.org/export/embed.html?bbox=9.917%2C53.548%2C9.937%2C53.556&layer=mapnik&marker=53.5521%2C9.9271" />
      </div>
      <form onSubmit={submit} className="space-y-3">
        <div className="grid gap-3 sm:grid-cols-2">
          <label>Name *<input required className={input} value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} /></label>
          <label>E-Mail *<input required type="email" className={input} value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} /></label>
        </div>
        <label className="block">Unternehmen<input className={input} value={f.company} onChange={(e) => setF({ ...f, company: e.target.value })} /></label>
        <label className="block">Nachricht *<textarea required rows={7} className={input} value={f.message} onChange={(e) => setF({ ...f, message: e.target.value })} /></label>
        <label className="flex gap-2 text-[12px]"><input required type="checkbox" />Ich habe die Datenschutzerklärung zur Kenntnis genommen und stimme der Verarbeitung meiner Angaben zur Bearbeitung der Anfrage zu.</label>
        <button className="min-h-11 w-full border border-primary px-8 py-2 sm:w-auto text-primary hover:bg-primary hover:text-primary-foreground">Absenden</button>
      </form>
    </PageLayout>
  );
}
