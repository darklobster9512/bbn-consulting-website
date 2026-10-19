import { createFileRoute } from "@tanstack/react-router";
import img from "@/assets/about.jpg";
import hamburg from "@/assets/hamburg.jpg";
import { CtaBand, Eyebrow, PageHero } from "@/components/site";
import { company, meta } from "@/lib/company";

export const Route = createFileRoute("/ueber-uns")({
  head: () => ({ meta: meta("Über uns – bbm-consulting GmbH", "Lernen Sie bbm-consulting kennen: unsere Werte, unsere Geschichte und unser Führungsteam in Hamburg.") }),
  component: Page,
});

const team = [
  { n: company.ceo, r: "Geschäftsführer" },
  { n: company.prokura[0], r: "Prokuristin" },
  { n: company.prokura[1], r: "Prokuristin" },
];

function Page() {
  return (
    <>
      <PageHero eyebrow="Über uns" title="Partner für nachhaltigen Unternehmenserfolg." text="bbm-consulting ist eine inhabergeführte Beratung aus Hamburg. Wir stehen für Verlässlichkeit, Klarheit und Ergebnisse, die bleiben." image={img} />
      <section className="container-x grid gap-12 py-20 lg:grid-cols-2">
        <div>
          <Eyebrow>Unsere Geschichte</Eyebrow>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">Aus Hamburg für Unternehmen in ganz Deutschland.</h2>
        </div>
        <div className="space-y-4 text-muted-foreground">
          <p>Gegründet mit dem Anspruch, Beratung praxisnah und auf Augenhöhe zu gestalten, unterstützt bbm-consulting heute Unternehmen unterschiedlichster Größen und Branchen.</p>
          <p>Unser Team vereint langjährige Management-Erfahrung mit methodischer Kompetenz. Wir verstehen uns nicht als externe Beobachter, sondern als Mitgestalter Ihres Erfolgs.</p>
        </div>
      </section>
      <section className="bg-secondary py-20">
        <div className="container-x">
          <Eyebrow>Werte</Eyebrow>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[["Integrität", "Ehrlich, transparent und vertrauenswürdig – in jeder Situation."], ["Exzellenz", "Höchste Qualität in Analyse, Konzept und Umsetzung."], ["Nähe", "Persönliche Betreuung und kurze Wege."]].map(([t, d]) => (
              <div key={t} className="rounded-3xl bg-card p-8"><h3 className="text-xl font-semibold">{t}</h3><p className="mt-2 text-muted-foreground">{d}</p></div>
            ))}
          </div>
        </div>
      </section>
      <section className="container-x py-20">
        <Eyebrow>Führung</Eyebrow>
        <h2 className="mt-4 text-3xl font-bold md:text-4xl">Unser Führungsteam</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {team.map((p) => (
            <div key={p.n} className="rounded-3xl border bg-card p-8">
              <div className="grid h-16 w-16 place-items-center rounded-2xl bg-primary-soft font-display text-xl font-bold text-primary">
                {p.n.split(" ").map((s) => s[0]).slice(0, 2).join("")}
              </div>
              <h3 className="mt-6 text-xl font-semibold">{p.n}</h3>
              <p className="text-muted-foreground">{p.r}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="container-x"><img src={hamburg} alt="Hamburg" loading="lazy" width={1600} height={912} className="h-80 w-full rounded-3xl object-cover" /></section>
      <CtaBand />
    </>
  );
}
