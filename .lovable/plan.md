# Über uns: echte Teamfotos und erweitertes Team

Die Stockfotos im Team-Bereich werden durch Ihre 9 hochgeladenen Fotos ersetzt. Das Team wächst von 3 auf 9 Personen und wird in zwei Gruppen gezeigt.

## Geschäftsführung & Prokura
- **Ralf Becker** – Geschäftsführer (Foto: geschäftsführer.jpg, Herr mit Brille)
- **Anna Magdalene Becker** – Prokuristin (Foto: Dame mit schwarzem Kurzhaarschnitt)
- **Kerstin Randolph** – Prokuristin (Foto: Dame mit roten Haaren)

## Unser Team
- **Michael Schüller** – Projektleiter (projektleiter.jpg)
- **Simon Wieser** – Recruiter (recruiter.jpg)
- **Laura Hoffmann** – Senior Consultant (Dame mit rosa Blazer)
- **Julia Brandt** – Consultant Prozessmanagement (Dame mit langen braunen Haaren)
- **Sophie Krämer** – Junior Consultant (junge Dame, Schwarz-Weiß-Foto)
- **Sabine Lorenz** – Office Management & Assistenz (Dame mit schwarzem Blazer, rundes Foto)

Die Namen und Rollen für die vier weiteren Personen sowie die Zuordnung der beiden Prokuristinnen zu den Fotos sind Vorschläge – bitte korrigieren, falls etwas nicht stimmt.

## Gestaltung
- Alle Fotos einheitlich zugeschnitten (gleiches Hochformat, Gesicht mittig), passend zum Seitenstil in Schwarz-Weiß, beim Darüberfahren in Farbe.
- Das runde Foto wird so zugeschnitten, dass es wie die anderen wirkt.
- Name, Rolle und blaue Schrägleiste unter jedem Foto; Texte auf Deutsch und Englisch.

## Technische Details
- Fotos mit `magick` auf einheitliches 4:5-Format zuschneiden (/tmp), per `lovable-assets` hochladen, Pointer in `src/assets/photos/`, in `src/lib/photos.ts` eintragen.
- Alte Stock-Porträts (p-becker, p-anna, p-kerstin) per `lovable-assets delete` entfernen, falls nirgends sonst genutzt.
- `ueber-uns.tsx`: zwei Team-Arrays (Leitung / Team) mit `{ de, en }`-Rollen.
