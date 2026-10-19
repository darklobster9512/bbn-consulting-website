import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import img from "@/assets/contact.jpg";
import { PageHero } from "@/components/site";
import { company, meta } from "@/lib/company";

export const Route = createFileRoute("/kontakt")({
  head: () => ({ meta: meta("Kontakt – bbm-consulting GmbH", "Nehmen Sie Kontakt mit bbm-consulting in Hamburg auf – telefonisch, per E-Mail oder über das Kontaktformular.") }),
  component: Page,
});

const input = "w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/20";

function Page() {
  const [f, setF] = useState({ name: "", email: "", company: "", message: "" });
  const submit = (e: FormEvent) => {
    e.preventDefault();
    const body = `Name: ${f.name}\nE-Mail: ${f.email}\nUnternehmen: ${f.company}\n\n${f.message}`;
    window.location.href = `mailto:${company.mail.kontakt}?subject=${encodeURIComponent("Anfrage über Website")}&body=${encodeURIComponent(body)}`;
  };
  return (
    <>
      <PageHero eyebrow="Kontakt" title="Lassen Sie uns sprechen." text="Wir freuen uns auf Ihre Nachricht und melden uns in der Regel innerhalb eines Werktages." image={img} />
      <section className="container-x grid gap-10 py-20 lg:grid-cols-[1fr_1.4fr]">
        <div className="space-y-4">
          {[
            { i: MapPin, t: "Adresse", c: <>{company.name}<br />{company.street}<br />{company.city}</> },
            { i: Phone, t: "Telefon", c: <a href={`tel:${company.phone}`}>{company.phone}</a> },
            { i: Mail, t: "E-Mail", c: <><a className="block hover:text-primary" href={`mailto:${company.mail.kontakt}`}>{company.mail.kontakt}</a><a className="block hover:text-primary" href={`mailto:${company.mail.info}`}>{company.mail.info}</a></> },
          ].map(({ i: I, t, c }) => (
            <div key={t} className="flex gap-4 rounded-3xl border bg-card p-6">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary"><I className="h-5 w-5" /></div>
              <div><h3 className="font-semibold">{t}</h3><div className="mt-1 text-sm text-muted-foreground">{c}</div></div>
            </div>
          ))}
        </div>
        <form onSubmit={submit} className="space-y-4 rounded-3xl border bg-card p-8 shadow-soft">
          <h2 className="text-2xl font-bold">Nachricht senden</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <input required placeholder="Name *" className={input} value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} />
            <input required type="email" placeholder="E-Mail *" className={input} value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} />
          </div>
          <input placeholder="Unternehmen" className={input} value={f.company} onChange={(e) => setF({ ...f, company: e.target.value })} />
          <textarea required rows={6} placeholder="Ihre Nachricht *" className={input} value={f.message} onChange={(e) => setF({ ...f, message: e.target.value })} />
          <label className="flex gap-3 text-xs text-muted-foreground"><input required type="checkbox" className="mt-0.5" />Ich habe die Datenschutzerklärung gelesen und stimme der Verarbeitung meiner Daten zu.</label>
          <button className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft hover:opacity-90">Absenden</button>
        </form>
      </section>
    </>
  );
}
