# Bewerbungsformular: richtige Adresse des Bewerbermanagements

## Ursache (geprüft)
- Die Adresse, an die das Formular sendet (`laozvnaupdecerpvwzmh...`), existiert nicht mehr – sie ist im Internet nicht auffindbar. Deshalb schlägt jeder Versand fehl, egal ob aus Browser oder Server. Denaro hat dieselbe tote Adresse.
- Das funktionierende Projekt „vendis“ sendet an die neue Adresse `dgkailowvrbugapykyan.supabase.co/functions/v1/submit-application` – diese ist erreichbar – und schickt zusätzlich einen Zugangsschlüssel sowie leere Felder für Straße, PLZ, Stadt und Lebenslauf mit.

## Umsetzung
- Versand 1:1 wie bei vendis: neue Adresse, gleicher Zugangsschlüssel, gleiche Felder – mit Ihrer bbm-Kennung `6b592275-ab7d-487e-9448-496f09927a89`.
- PLZ und Stadt aus dem Formular werden mitgeschickt (vendis schickt dort leere Werte, das Feld wird also akzeptiert).
- Wieder direkt aus dem Browser wie bei vendis; der Umweg über den Server entfällt.
- „Lead“ wird wie bisher beim Klick auf „Bewerbung senden“ ausgelöst.
- Danach schicke ich eine Test-Bewerbung „Test Test“ über die Vorschau ab und prüfe, dass „Erfolgreich“ zurückkommt.

## Technische Details
- `karriere.bewerbung.tsx`: `API_URL`, `ANON_KEY`, `BRANDING_ID` als Konstanten; `fetch` mit `Authorization: Bearer ANON_KEY`, FormData inkl. `start_date`, `street:""`, `zip`, `city`, `resume:""`; `data.error` anzeigen.
- `src/lib/bewerbung.functions.ts` löschen.
