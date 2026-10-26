# Telefonnummer 040 57307496 überall einfügen

## Was sich ändert
Die echte Nummer **040 57307496** ersetzt die alte Platzhalternummer und erscheint wieder an allen Stellen, an denen vorher eine Nummer stand:
- Obere Leiste im Kopf: Nummer neben Adresse und E-Mail (anklickbar zum Anrufen)
- Handy-Menü: „Anrufen“-Knopf neben „E-Mail“
- Untere Leiste auf dem Handy: „Anrufen“, „E-Mail“, „Anfrage“
- Kontaktkasten in der Seitenleiste: Zeile „Tel.“
- Footer: Zeile „Tel.“ unter der Adresse
- Impressum und Datenschutzerklärung: Zeile „Telefon“ (deutsch und englisch)

Damit ist im Impressum auch der zweite schnelle Kontaktweg neben der E-Mail wieder vorhanden.

## Technische Details
- `src/lib/company.ts`: `phone: "040 57307496"`, dazu `phoneHref: "+494057307496"` für tel:-Links.
- `src/components/site.tsx`: tel-Link in TopBar, „Anrufen“ im mobilen Menü (2 Spalten) und in MobileBar (3 Spalten), Tel.-Zeile in ContactBox und Footer wieder einbauen.
- `src/routes/impressum.tsx`, `src/routes/datenschutz.tsx`: Telefonzeilen de/en wieder einfügen.
- Projekt-Gedächtnis: Platzhalter-Hinweis durch die echte Nummer ersetzen.
