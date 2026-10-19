# Mehr Details und echte Stockfotos

Das aarcon-Grundgerüst bleibt: blaue Kopfzeile, schräge Titelbalken, Seitenleiste, dunkle Fußzeile. Es kommen gezielte Details dazu, die moderner wirken, ohne in den „KI-Landingpage“-Look zurückzufallen.

## Echte Stockfotos
- Alle KI-Bilder werden ersetzt (Fotoband, Kacheln, Karriere, Über uns) durch echte, lizenzfreie Fotos von Unsplash bzw. Pexels. Die Nutzung ist kostenlos, auch kommerziell, ohne Namensnennung.
- Motive: Schreibtisch-Detail, Beratungsgespräch, Konferenzraum, Hamburg (Speicherstadt/Elbphilharmonie), Team im Büro, Präsentation, Handschlag, Laptop mit Unterlagen.
- Die Fotos werden auf dem Lovable-Server gespeichert, damit sie schnell laden. Die alten KI-Bilder werden entfernt.
- Im Datenschutz kommt kein Drittanbieter dazu, weil die Bilder selbst gehostet sind.

## Zusätzliche Details
- **Kopfzeile:** schmale Info-Leiste darüber (Telefon, E-Mail, Adresse), kleine Schatten-Kante beim Scrollen, ein dezenter Unterstrich unter dem aktiven Menüpunkt.
- **Fotoband:** sanfter Farbübergang beim Darüberfahren (von Schwarz-Weiß zu leicht farbig), dazu ein schmaler blauer Balken mit Brotkrümel-Navigation (Home › Leistungen).
- **Startseite:**
  - Kennzahlen-Leiste im aarcon-Stil (schräge blaue Felder, z. B. „15+ Jahre“, „200+ Projekte“; als Beispielwerte markiert)
  - Zitat-Kasten mit blauem Seitenbalken
  - Leiste „Unser Vorgehen“ mit vier nummerierten Schritten
  - Seitenleiste zusätzlich mit „Schnellkontakt“-Button und „Aktuelles“
- **Kacheln:** Bild zoomt leicht beim Darüberfahren, Pfeil-Symbol im Button, sanftes Einblenden beim Scrollen.
- **Leistungen:** pro Leistung ein kleines Icon im schrägen Titel und ein kurzer „Ihr Nutzen“-Kasten.
- **Über uns:** Zeitleiste der Unternehmensgeschichte (Platzhalter-Jahre) und echte Porträt-Stockfotos fürs Team. Alternativ bleiben die Platzhalter, wenn echte Porträts folgen.
- **Kontakt:** eingebettete Karte (OpenStreetMap) zur Ruhrstr. 126. In der Datenschutzerklärung kommt dafür ein Absatz dazu.
- **Fußzeile:** drei Spalten (Unternehmen, Leistungen, Rechtliches), darüber ein „Nach oben“-Button.

## Technisch
- Die Fotos werden per curl von Unsplash/Pexels geladen und über lovable-assets hochgeladen. Eingebunden werden sie über die .asset.json-Verweise. Die Dateien src/assets/*.jpg der KI-Bilder werden gelöscht.
- Neue Bausteine in components/site.tsx: TopBar, Breadcrumb, StatStrip, QuoteBox, Steps, Timeline, Reveal (IntersectionObserver).
- Neue Design-Tokens bzw. Hilfsklassen in styles.css für Hover-Übergänge und die Einblend-Animation.
