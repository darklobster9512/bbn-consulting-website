# Telefonnummer überall ausblenden

## Was sich ändert
Die Firmen-Telefonnummer wird nirgends mehr angezeigt:
- Obere Leiste im Kopf: Nummer entfernt (Adresse und E-Mail bleiben)
- Mobiles Menü: „Anrufen“-Knopf entfernt, „E-Mail“ bleibt
- Untere Leiste auf dem Handy: „Anrufen“ entfernt, „E-Mail“ und „Anfrage“ bleiben
- Kontaktkasten in der Seitenleiste und Footer: Zeile „Tel.“ entfernt
- Impressum und Datenschutzerklärung: Zeile „Telefon“ entfernt (deutsch und englisch)

Das Telefon-Feld im Bewerbungsformular bleibt, denn dort geben Bewerber ihre eigene Nummer an.

Die Nummer bleibt in den Firmendaten gespeichert und lässt sich später einfach wieder einblenden.

Hinweis: Im Impressum ist neben der E-Mail eigentlich ein zweiter schneller Kontaktweg vorgeschrieben, oft das Telefon. Ein Kontaktformular kann das ersetzen. Das sollten Sie rechtlich prüfen lassen.

## Technische Details
- `src/components/site.tsx`: tel-Links in TopBar, mobilem Menü und MobileBar entfernen (MobileBar auf 2 Spalten), Tel.-Zeile in ContactBox und Footer entfernen.
- `src/routes/impressum.tsx`, `src/routes/datenschutz.tsx`: Telefonzeilen entfernen.
- `company.phone` bleibt in `src/lib/company.ts`.
