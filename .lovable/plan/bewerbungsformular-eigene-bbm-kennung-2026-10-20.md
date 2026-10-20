# Bewerbungsformular: eigene bbm-Kennung

## Was sich ändert
- Das Bewerbungsformular unter /karriere/bewerbung schickt Bewerbungen ab sofort mit der bbm-Kennung `6b592275-ab7d-487e-9448-496f09927a89` statt mit der von Denaro. Neue Bewerbungen kommen damit bei bbm an.
- Sonst bleibt alles gleich: Aussehen, Texte und Ablauf.

## Technische Details
- `src/routes/karriere.bewerbung.tsx`: Den Wert der Konstante `BRANDING_ID` ersetzen und den Kommentar mit „replace once available“ entfernen.
