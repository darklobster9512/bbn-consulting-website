# Neues Facebook-Pixel auf der Bewerbungsseite

## Was sich ändert
- Auf /karriere/bewerbung wird das bisherige Pixel (960502530159020) durch das neue Pixel **1677710163789062** ersetzt.
- Alles andere bleibt gleich: PageView beim Seitenaufruf, „Lead“ beim Klick auf „Bewerbung senden“, kein Banner, keine Länderprüfung.

## Technische Details
- `karriere.bewerbung.tsx`: Pixel-ID im `head().scripts`-Snippet und im noscript-Bild austauschen.
