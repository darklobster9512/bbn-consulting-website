# Bewerbungsformular: Absenden reparieren

## Befund
- Die bbm-Kennung `6b592275-ab7d-487e-9448-496f09927a89` ist bereits gesetzt und wird mitgeschickt (im letzten Versuch sichtbar).
- Ziel, Felder und Ablauf sind identisch mit Denaro (gleiche Adresse `.../functions/v1/submit-application`).
- Der Browser bekommt aber gar keine Antwort („Failed to fetch“). Das heißt: Das Bewerbermanagement lässt Anfragen direkt aus dem Browser von Ihren Adressen (Vorschau, bbm-consult.de) nicht zu – bei Denaro ist dessen Adresse freigeschaltet, Ihre nicht.

## Lösung
- Die Bewerbung wird nicht mehr direkt vom Browser, sondern über Ihren eigenen Webserver an das Bewerbermanagement weitergeleitet. Server-zu-Server gibt es diese Sperre nicht – das funktioniert damit unabhängig von der Domain.
- Gleiche Felder, gleiche Kennung, gleiche Zieladresse wie bei Denaro.
- Fehlermeldungen zeigen künftig den echten Grund aus dem Bewerbermanagement statt nur „Senden fehlgeschlagen“.
- Facebook „Lead“ bleibt beim Klick auf „Bewerbung senden“.

## Technische Details
- Neue `src/lib/bewerbung.functions.ts`: `createServerFn({ method: "POST" })` mit Eingabeprüfung (Längen wie bisher), baut `FormData` inkl. `BRANDING_ID` und `fetch`t die Edge Function; gibt `{ success, error }` zurück.
- `karriere.bewerbung.tsx`: direkten `fetch` durch Aufruf der Server-Funktion ersetzen; `data.error` anzeigen.
- Nach dem Umbau eine Test-Bewerbung im Vorschau-Browser absenden und Antwort prüfen (landet dann in Ihrem System als „Test“).
- Server: danach `git pull`, `bun install`, `bun run build`, `pm2 restart`.
