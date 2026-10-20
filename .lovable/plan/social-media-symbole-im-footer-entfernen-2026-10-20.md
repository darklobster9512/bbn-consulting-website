# Social-Media-Symbole im Footer entfernen

- Die zwei blauen Schrägfelder „in“ und „X“ unten im Footer werden entfernt.
- Alles andere im Footer bleibt unverändert (Spalten, Rechtslinks, Nach-oben-Button).

## Technische Details
- In `src/components/site.tsx` (Footer) das `["in", "X"].map(...)`-Element samt umschließendem Container entfernen.
