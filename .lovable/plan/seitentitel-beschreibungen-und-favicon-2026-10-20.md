# Seitentitel, Beschreibungen und Favicon

## Seitentitel und Beschreibungen
Jede Seite bekommt einen eigenen, suchmaschinenfreundlichen Titel (ca. 50–60 Zeichen) und eine Beschreibung (ca. 140–160 Zeichen) auf Deutsch, mit Hamburg-Bezug und den wichtigsten Leistungen:

- Home: „Unternehmensberatung Hamburg | bbm-consulting GmbH“
- Über uns: „Über uns – inhabergeführte Beratung aus Hamburg | bbm-consulting“
- Leistungen: „Strategie-, Management- & Prozessberatung | bbm-consulting“
- Karriere: „Karriere & Jobs in der Unternehmensberatung Hamburg | bbm-consulting“
- Referenzen: „Referenzen & Projekte | bbm-consulting Hamburg“
- Kontakt: „Kontakt – Erstgespräch vereinbaren | bbm-consulting Hamburg“
- Impressum / Datenschutz: kurze sachliche Titel

Beim Umschalten auf Englisch erhält der Browser-Tab passende englische Titel. Zusätzlich: Link-Vorschau-Bild aus dem jeweiligen Fotoband (für WhatsApp, LinkedIn usw.), Seitenname „bbm-consulting“ und Verweis auf die eigene Adresse jeder Seite.

## Favicon
- Ein schlichtes Symbol: kleines „b“ in Weiß, kursiv-fett wie im Logo, auf blauem, schräg angeschnittenem Feld (passend zum Header-Stil).
- Generiert, geprüft auf Lesbarkeit in kleiner Größe, dann als Favicon eingebunden; das alte Standard-Symbol wird entfernt.

## Technische Details
- `meta()` in `src/lib/company.ts` um optionales `og:image`/`twitter:image` (Unsplash-URL mit `w=1200&h=630&fit=crop`) und `og:url`/canonical erweitern; neue Texte in jedem `head()` und in den `title`-Feldern der `{ de, en }`-Objekte.
- `og:site_name` in `__root.tsx`.
- Favicon: `imagegen` premium, 512×512 → `magick` auf 64×64 nach `public/favicon.png`, Link in `__root.tsx`, `public/favicon.ico` löschen.
