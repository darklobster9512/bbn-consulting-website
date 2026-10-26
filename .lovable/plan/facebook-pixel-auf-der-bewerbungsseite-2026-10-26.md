# Facebook-Pixel auf der Bewerbungsseite

## Was sich ändert
- Auf /karriere/bewerbung wird Ihr Facebook-Pixel (1535479655432110) genau wie angegeben geladen und meldet `PageView` – für alle Besucher, ohne Banner und ohne Länderprüfung.
- Beim Klick auf „Bewerbung senden“ wird `fbq('track', 'Lead')` ausgelöst.
- Die Datenschutzerklärung bekommt einen kurzen Abschnitt zum Facebook-Pixel (deutsch und englisch).

Hinweis: In Deutschland verlangt das Recht für solche Pixel normalerweise eine vorherige Zustimmung. Die Verantwortung dafür liegt bei Ihnen.

## Technische Details
- `karriere.bewerbung.tsx`: Basis-Snippet per `head().scripts` nur auf dieser Seite, noscript-Bild im Seiteninhalt; `fbq('track','Lead')` im Absende-Handler.
- `datenschutz.tsx`: neuer Abschnitt de/en.
