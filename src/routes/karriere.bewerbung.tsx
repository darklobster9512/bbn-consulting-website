import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CheckCircle2, Loader2, RotateCcw, Send } from "lucide-react";
import { useState, type ReactNode } from "react";
import { ContactBox, PageLayout, SideBox, SlantTitle } from "@/components/site";
import { company } from "@/lib/company";
import { useLang, useT } from "@/lib/i18n";
import { stellen, stepValid, findStelle, type ApplyForm } from "@/data/stellen";

/** bbm's account id in the applicant-tracking system. */
const BRANDING_ID = "6b592275-ab7d-487e-9448-496f09927a89";
const API_URL = "https://laozvnaupdecerpvwzmh.supabase.co/functions/v1/submit-application";

export const Route = createFileRoute("/karriere/bewerbung")({
  validateSearch: (search: Record<string, unknown>): { stelle: string } => ({
    stelle: typeof search["stelle"] === "string" ? search["stelle"] : "",
  }),
  head: () => ({
    meta: [
      { title: "Online bewerben | Karriere bei bbm-consulting Hamburg" },
      { name: "description", content: "Bewerben Sie sich in zwei kurzen Schritten online bei der bbm-consulting GmbH in Hamburg – Kontaktdaten und Rahmenbedingungen genügen." },
      { property: "og:title", content: "Online bewerben | bbm-consulting" },
      { property: "og:description", content: "Ihre Bewerbung bei der bbm-consulting GmbH in zwei kurzen Schritten." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
    scripts: [{ children: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','1535479655432110',{},{agent:'lovable'});fbq('track','PageView');` }],
  }),
  component: Page,
});

const T = {
  de: {
    title: "Online bewerben | Karriere bei bbm-consulting Hamburg", h: "Ihre Bewerbung", back: "Alle Stellen", lead: "Zwei kurze Schritte – Kontaktdaten und Rahmenbedingungen. Wir melden uns persönlich bei Ihnen zurück.",
    s1: "Kontakt", s2: "Details", req: "Pflichtfelder", job: "Stelle", choose: "Bitte wählen", initiative: "Initiativbewerbung",
    vorname: "Vorname", nachname: "Nachname", email: "E-Mail", telefon: "Telefon", nat: "Besitzen Sie die deutsche Staatsbürgerschaft?", yes: "Ja", no: "Nein",
    natNo: "Für diese Stellen ist aktuell die deutsche Staatsbürgerschaft erforderlich. Gerne können Sie sich per E-Mail initiativ bewerben.",
    art: "Anstellungsart", mini: "Minijob", teil: "Teilzeit", voll: "Vollzeit", start: "Startdatum", plz: "PLZ", stadt: "Stadt",
    next: "Weiter", prev: "Zurück", send: "Bewerbung senden", sending: "Wird gesendet …", missing: "Bitte füllen Sie alle Pflichtfelder korrekt aus.", fail: "Senden fehlgeschlagen. Bitte versuchen Sie es erneut.",
    okH: "Ihre Bewerbung ist eingegangen.", okP: "Vielen Dank. Wir sichten Ihre Angaben und melden uns in Kürze bei Ihnen.", again: "Neue Bewerbung senden",
    privacy: "Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Angaben im Rahmen des Bewerbungsverfahrens zu. Weitere Informationen finden Sie in unserer", privacyLink: "Datenschutzerklärung",
    side: "So geht es weiter", steps: ["Wir prüfen Ihre Angaben", "Persönlicher Rückruf", "Kennenlerngespräch"], alt: "Alternativ per E-Mail:",
  },
  en: {
    title: "Apply online | Careers at bbm-consulting Hamburg", h: "Your application", back: "All positions", lead: "Two short steps – contact details and basic conditions. We will get back to you personally.",
    s1: "Contact", s2: "Details", req: "Required fields", job: "Position", choose: "Please choose", initiative: "Unsolicited application",
    vorname: "First name", nachname: "Last name", email: "Email", telefon: "Phone", nat: "Do you hold German citizenship?", yes: "Yes", no: "No",
    natNo: "These positions currently require German citizenship. You are welcome to send an unsolicited application by email.",
    art: "Employment type", mini: "Mini-job", teil: "Part-time", voll: "Full-time", start: "Start date", plz: "Postcode", stadt: "City",
    next: "Next", prev: "Back", send: "Send application", sending: "Sending …", missing: "Please fill in all required fields correctly.", fail: "Sending failed. Please try again.",
    okH: "Your application has been received.", okP: "Thank you. We will review your details and get back to you shortly.", again: "Send another application",
    privacy: "By submitting, you agree to the processing of your details for the application process. More information in our", privacyLink: "privacy policy",
    side: "What happens next", steps: ["We review your details", "Personal call back", "Introductory meeting"], alt: "Alternatively by email:",
  },
};

const empty: ApplyForm = { vorname: "", nachname: "", email: "", telefon: "", staatsangehoerigkeit: "", anstellungsart: "", startdatum: "", plz: "", stadt: "" };
const field = "h-11 w-full border border-input bg-background px-3 text-[16px] outline-none transition focus:border-primary md:text-[14px]";

function F({ id, label, children, full }: { id: string; label: string; children: ReactNode; full?: boolean }) {
  return (
    <div className={full ? "sm:col-span-2" : ""}>
      <label htmlFor={id} className="mb-1 block text-[12px] font-semibold">{label} <span className="text-primary">*</span></label>
      {children}
    </div>
  );
}

function Page() {
  const t = useT(T);
  const { lang } = useLang();
  const { stelle: pre } = Route.useSearch();
  const [step, setStep] = useState<1 | 2>(1);
  const [form, setForm] = useState<ApplyForm>(empty);
  const [stelle, setStelle] = useState(findStelle(pre) ? pre : "");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  const set = (k: keyof ApplyForm) => (e: { target: { value: string } }) => setForm({ ...form, [k]: e.target.value });

  const next = () => {
    if (form.staatsangehoerigkeit === "nein") return;
    if (!stepValid(1, form)) return setError(t.missing);
    setError(null); setStep(2);
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) return next();
    if (!stepValid(2, form)) return setError(t.missing);
    setError(null); setBusy(true);
    try {
      const fd = new FormData();
      fd.append("first_name", form.vorname.trim().slice(0, 100));
      fd.append("last_name", form.nachname.trim().slice(0, 100));
      fd.append("email", form.email.trim().slice(0, 255));
      fd.append("phone", form.telefon.trim().slice(0, 50));
      fd.append("employment_type", form.anstellungsart);
      fd.append("start_date", form.startdatum);
      fd.append("branding_id", BRANDING_ID);
      (window as unknown as { fbq?: (...a: unknown[]) => void }).fbq?.("track", "Lead");
      const res = await fetch(API_URL, { method: "POST", body: fd });
      const data = (await res.json().catch(() => ({}))) as { success?: boolean };
      if (!data.success) throw new Error();
      setDone(true);
    } catch {
      setError(t.fail);
    } finally {
      setBusy(false);
    }
  };

  const reset = () => { setDone(false); setStep(1); setForm(empty); setError(null); };

  return (
    <>
    <noscript><img height="1" width="1" style={{ display: "none" }} alt="" src="https://www.facebook.com/tr?id=1535479655432110&ev=PageView&noscript=1" /></noscript>
    <PageLayout
      side={
        <>
          <SideBox icon={Send} title={t.side}>
            <ol className="space-y-2">
              {t.steps.map((s, i) => <li key={s} className="flex items-center gap-2"><span className="slant flex h-6 w-8 items-center justify-center bg-primary text-[11px] font-bold text-primary-foreground">{i + 1}</span>{s}</li>)}
            </ol>
            <p className="mt-3">{t.alt}<br /><a className="font-semibold text-primary" href={`mailto:${company.mail.bewerbung}`}>{company.mail.bewerbung}</a></p>
          </SideBox>
          <ContactBox />
        </>
      }
    >
      <Link to="/karriere" className="mb-4 inline-flex min-h-11 items-center gap-1.5 text-[13px] text-primary hover:underline"><ArrowLeft className="h-3.5 w-3.5" />{t.back}</Link>
      <div><SlantTitle>{t.h}</SlantTitle></div>
      <p className="mb-6">{t.lead}</p>

      {done ? (
        <div className="border border-primary p-8 text-center">
          <CheckCircle2 className="mx-auto h-12 w-12 text-primary" strokeWidth={1.5} />
          <h2 className="mt-4 text-[20px] font-bold">{t.okH}</h2>
          <p className="mt-2">{t.okP}</p>
          <button onClick={reset} className="mx-auto mt-6 flex min-h-11 items-center gap-2 border border-primary px-6 text-[13px] text-primary hover:bg-primary hover:text-primary-foreground"><RotateCcw className="h-4 w-4" />{t.again}</button>
        </div>
      ) : (
        <form onSubmit={submit} noValidate className="border border-primary">
          <div className="flex flex-wrap items-center gap-2 bg-muted p-3">
            {[t.s1, t.s2].map((l, i) => (
              <span key={l} className={`slant flex h-9 items-center gap-2 px-5 text-[13px] font-semibold ${step === i + 1 || step > i + 1 ? "bg-primary text-primary-foreground" : "bg-background text-muted-foreground"}`}>0{i + 1} {l}</span>
            ))}
            <span className="ml-auto text-[12px] text-muted-foreground"><span className="text-primary">*</span> {t.req}</span>
          </div>

          {step === 1 ? (
            <div className="grid gap-4 p-4 sm:grid-cols-2 md:p-6">
              <div className="sm:col-span-2">
                <label htmlFor="stelle" className="mb-1 block text-[12px] font-semibold">{t.job}</label>
                <select id="stelle" value={stelle} onChange={(e) => setStelle(e.target.value)} className={field}>
                  <option value="">{t.initiative}</option>
                  {stellen.map((s) => <option key={s.slug} value={s.slug}>{s[lang].titel}</option>)}
                </select>
              </div>
              <F id="vorname" label={t.vorname}><input id="vorname" maxLength={100} autoComplete="given-name" value={form.vorname} onChange={set("vorname")} className={field} /></F>
              <F id="nachname" label={t.nachname}><input id="nachname" maxLength={100} autoComplete="family-name" value={form.nachname} onChange={set("nachname")} className={field} /></F>
              <F id="email" label={t.email}><input id="email" type="email" maxLength={255} autoComplete="email" value={form.email} onChange={set("email")} className={field} /></F>
              <F id="telefon" label={t.telefon}><input id="telefon" type="tel" maxLength={50} autoComplete="tel" value={form.telefon} onChange={set("telefon")} className={field} /></F>
              <fieldset className="sm:col-span-2">
                <legend className="mb-1 text-[12px] font-semibold">{t.nat} <span className="text-primary">*</span></legend>
                <div className="flex gap-2">
                  {[["ja", t.yes], ["nein", t.no]].map(([v, l]) => (
                    <label key={v} className={`flex min-h-11 min-w-24 cursor-pointer items-center justify-center border px-5 text-[13px] font-semibold ${form.staatsangehoerigkeit === v ? "border-primary bg-primary text-primary-foreground" : "border-input hover:border-primary"}`}>
                      <input type="radio" name="nat" value={v} checked={form.staatsangehoerigkeit === v} onChange={set("staatsangehoerigkeit")} className="sr-only" />{l}
                    </label>
                  ))}
                </div>
                {form.staatsangehoerigkeit === "nein" && <p className="mt-2 border-l-4 border-primary bg-muted p-3 text-[13px]">{t.natNo}</p>}
              </fieldset>
              {error && <p className="text-[13px] font-semibold text-destructive sm:col-span-2">{error}</p>}
              <div className="sm:col-span-2">
                <button type="button" onClick={next} disabled={form.staatsangehoerigkeit === "nein"} className="flex min-h-11 w-full items-center justify-center gap-2 bg-primary px-8 text-[14px] font-semibold text-primary-foreground hover:bg-primary-dark disabled:opacity-50 sm:w-auto">{t.next}<ArrowRight className="h-4 w-4" /></button>
              </div>
            </div>
          ) : (
            <div className="grid gap-4 p-4 sm:grid-cols-2 md:p-6">
              <F id="art" label={t.art}>
                <select id="art" value={form.anstellungsart} onChange={set("anstellungsart")} className={field}>
                  <option value="">{t.choose}</option>
                  <option value="minijob">{t.mini}</option>
                  <option value="teilzeit">{t.teil}</option>
                  <option value="vollzeit">{t.voll}</option>
                </select>
              </F>
              <F id="start" label={t.start}><input id="start" type="date" value={form.startdatum} onChange={set("startdatum")} className={field} /></F>
              <F id="plz" label={t.plz}><input id="plz" maxLength={10} autoComplete="postal-code" placeholder="22761" value={form.plz} onChange={set("plz")} className={field} /></F>
              <F id="stadt" label={t.stadt}><input id="stadt" maxLength={100} autoComplete="address-level2" placeholder="Hamburg" value={form.stadt} onChange={set("stadt")} className={field} /></F>
              {error && <p className="text-[13px] font-semibold text-destructive sm:col-span-2">{error}</p>}
              <div className="flex flex-col-reverse gap-2 sm:col-span-2 sm:flex-row">
                <button type="button" onClick={() => setStep(1)} className="flex min-h-11 items-center justify-center gap-2 border border-primary px-6 text-[14px] text-primary hover:bg-primary hover:text-primary-foreground"><ArrowLeft className="h-4 w-4" />{t.prev}</button>
                <button type="submit" disabled={busy} className="flex min-h-11 items-center justify-center gap-2 bg-primary px-8 text-[14px] font-semibold text-primary-foreground hover:bg-primary-dark disabled:opacity-60">
                  {busy ? <>{t.sending}<Loader2 className="h-4 w-4 animate-spin" /></> : <>{t.send}<Send className="h-4 w-4" /></>}
                </button>
              </div>
            </div>
          )}
        </form>
      )}
      <p className="mt-6 text-[12px] text-muted-foreground">{t.privacy} <Link to="/datenschutz" className="text-primary underline">{t.privacyLink}</Link>.</p>
    </PageLayout>
    </>
  );
}
