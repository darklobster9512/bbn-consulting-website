# Karriere-Stellen und Bewerbungsformular (wie Denaro, im bbm-Design)

## Was entsteht
- **/karriere** – Übersicht der 5 Stellen aus dem Referenzprojekt (Onlineprozess-Tester, Berater Unternehmensberatung, Berater IT-Beratung, Architekt Hochbau, Recruiter) als Kacheln im bestehenden Stil (blaue Kopfbalken, Schrägtitel, Seitenleiste). Standort wird von Düsseldorf auf Hamburg angepasst.
- **/karriere/[stelle]** – eigene Detailseite je Stelle: Beschreibung, Aufgaben, Voraussetzungen, Benefits, Eckdaten (Standort, Modell, Arbeitszeit, Vergütung) in der Seitenleiste, Button „Jetzt bewerben“.
- **/karriere/bewerbung** – zweistufiges Formular wie bei Denaro:
  - Schritt 1: Stelle (vorausgewählt, wenn man von einer Stelle kommt), Vorname, Nachname, E-Mail, Telefon, Frage zur Staatsangehörigkeit/Arbeitserlaubnis
  - Schritt 2: Anstellungsart (Minijob/Teilzeit/Vollzeit), Startdatum, PLZ, Stadt
  - Erfolgsmeldung nach dem Absenden, Hinweis auf Datenschutz
- Alle Texte auf Deutsch und Englisch (de/en-Umschalter).
- Design: eckig, blaue Schrägbalken, Open Sans, Schrittanzeige als blaue Schrägfelder – kein Denaro-Look.

## Versand
Bewerbungen gehen an dasselbe Bewerbermanagement wie bei Denaro. Für bbm wird eine **eigene Kennung** gebraucht – bis Sie diese liefern, nutze ich vorübergehend die Denaro-Kennung (Bewerbungen würden dann bei Denaro landen). Bitte die bbm-Kennung nachreichen.

## Datenschutz
Abschnitt in der Datenschutzerklärung zum Bewerbungsverfahren und zur Übermittlung an das Bewerbermanagement-System ergänzen.

## Technische Details
- `src/data/stellen.ts` mit `{ de, en }`-Feldern pro Stelle, `findStelle(slug)`.
- Routen: `karriere.tsx` → Layout mit `<Outlet />`, `karriere.index.tsx`, `karriere.$slug.tsx` (notFound bei unbekanntem Slug, head aus loader), `karriere.bewerbung.tsx` (validateSearch `stelle`, noindex).
- POST `FormData` an denselben Endpoint wie Referenz; `BRANDING_ID` als Konstante zum einfachen Austausch.
- Test: Pflichtfeld-Prüfung pro Schritt.
