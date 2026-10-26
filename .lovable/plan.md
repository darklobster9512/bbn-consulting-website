# Facebook-Pixel auf der Bewerbungsseite

## Was sich ändert
- Auf /karriere/bewerbung wird Ihr Facebook-Pixel (1535479655432110) geladen und meldet einen Seitenaufruf.
- Nach einer erfolgreich abgeschickten Bewerbung meldet der Pixel einen „Lead“ (nur wenn die Bewerbung wirklich angekommen ist, nicht bei Fehlern).
- Ohne Cookie-Banner, wie gewünscht: Besucher aus der EU und Ländern mit Einwilligungspflicht (EU, EWR, Schweiz, Großbritannien) und Besucher, deren Land nicht erkennbar ist, bekommen den Pixel nicht. Deutsche Bewerber werden also praktisch nicht gezählt. Ein Banner lässt sich später nachrüsten.
- Die Datenschutzerklärung bekommt einen Abschnitt zum Facebook-Pixel (Anbieter Meta, welche Daten, Zweck Anzeigenmessung), deutsch und englisch.

## Technische Details
- Neues Modul `src/lib/meta-pixel.ts`: Länderabfrage über `/cdn-cgi/trace` (2 s Timeout; bei Fehler/XX/T1 blockieren), danach Meta-Basis-Snippet laden, `fbq('init', id, {}, {agent:'lovable'})`, `PageView`; `trackLead()` mit eindeutiger eventID, nur wenn der Pixel geladen wurde.
- Aufruf in `karriere.bewerbung.tsx` per `useEffect` und `trackLead()` nach erfolgreichem Absenden. Kein noscript-Bild (würde die Länderprüfung umgehen).
- Hinweis: Auf Ihrem eigenen Server liefert `/cdn-cgi/trace` nur hinter Cloudflare ein Land; sonst wird der Pixel überall blockiert. Das prüfe ich nicht automatisch nach.
- `datenschutz.tsx`: neuer Abschnitt de/en.
