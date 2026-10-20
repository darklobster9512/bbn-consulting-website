# Logo „bbm consulting“ als PNG

Das Logo aus dem Kopfbereich der Seite (fett-kursiv „bbm“ + kursiv „consulting“ in Blau, Open Sans) wird als PNG-Datei erstellt, in hoher Auflösung (ca. 2000 px breit):

1. **Blau auf transparentem Hintergrund** – für helle Untergründe (Briefpapier, Dokumente)
2. **Weiß auf transparentem Hintergrund** – für dunkle/farbige Untergründe
3. **Wie auf der Website** – blaues Logo auf dem weißen, schräg angeschnittenen Feld vor blauem Balken

Die Dateien werden geprüft und zum Herunterladen in den Dateien bereitgestellt. Hinweis: PNG ist eine Bilddatei, keine bearbeitbare Vektordatei.

## Technische Details
- Logo-HTML mit Open Sans + Primärfarbe aus `src/styles.css` per Playwright mit `omit_background` rendern (dpr 4), nach `/mnt/documents/logo/` speichern.
