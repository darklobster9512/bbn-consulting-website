# Englische Version der Website

## Ziel
Ein Klick auf „en“ oben rechts im Header schaltet die gesamte Website auf Englisch um, ein Klick auf „de“ wieder zurück. Die aktive Sprache wird fett dargestellt.

## Was übersetzt wird
- Kopfzeile, Menü (auch das Handy-Menü), untere Handy-Leiste, Brotkrumen-Leiste, Fußzeile
- Alle Seiten: Home, Über uns, Leistungen, Karriere, Referenzen, Kontakt (inkl. Formularfelder und vorbereitete E-Mail)
- Seitenboxen (Kontakt, Aktuelles), Kennzahlen, Zitate, Zeitstrahl
- Impressum und Datenschutz (englische Fassung als Vorlage; deutsche Fassung bleibt rechtlich maßgeblich, mit Hinweis)
- Seitentitel im Browser-Tab

Das Design bleibt unverändert.

## Verhalten
- Die URLs bleiben gleich (z. B. /leistungen), nur der Inhalt wechselt.
- Die gewählte Sprache wird im Browser gemerkt, sodass sie beim nächsten Besuch erhalten bleibt.
- Standardsprache bleibt Deutsch.

## Technische Details
- `src/lib/i18n.tsx`: React-Context mit `lang` ("de" | "en"), `setLang`, Hook `useT()`; Sprache in localStorage, Auslesen erst nach dem Laden (kein Hydration-Mismatch), `<html lang>` wird angepasst.
- Übersetzungstexte je Seite als `{ de, en }`-Objekte direkt in den Routendateien bzw. in `site.tsx` für gemeinsame Elemente.
- TopBar: „de/en“ werden zu zwei Buttons.
- Provider in `src/routes/__root.tsx` um Header/Outlet/Footer.
- Test in `src/test`: Umschalten auf „en“ zeigt englisches Menü.
