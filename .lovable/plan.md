# Bewerbungsformular 1:1 wie Denaro

## Befund
- PLZ und Stadt sind nicht das Problem: Denaro fragt sie auch ab, schickt sie aber ebenfalls nicht mit. Die gesendeten Felder sind bei beiden identisch (Vorname, Nachname, E-Mail, Telefon, Anstellungsart, Startdatum, Kennung).
- Der ursprüngliche Fehler war „Failed to fetch“: Das Bewerbermanagement nimmt direkte Browser-Anfragen nur von Denaros Adresse an, nicht von der bbm-Vorschau oder bbm-consult.de. Deshalb schlägt eine reine 1:1-Kopie hier in der Vorschau fehl.

## Umsetzung
- Ablauf und Felder exakt wie Denaro: dieselben Pflichtfelder, gleiche Prüfung, „Lead“ wird vor dem Senden ausgelöst, Fehlertext aus dem Bewerbermanagement wird angezeigt.
- PLZ und Stadt bleiben als Felder sichtbar (wie bei Denaro), werden aber wie dort nicht übertragen.
- Versand weiterhin über den eigenen Webserver (nötig, damit es in der Lovable-Vorschau und auf bbm-consult.de klappt).
- Nach dem Umbau sende ich eine Test-Bewerbung direkt über die Lovable-Vorschau ab und prüfe die Antwort; sie landet als „Test Lovable“ in Ihrem System.

## Technische Details
- `src/lib/bewerbung.functions.ts`: Antwortdaten 1:1 durchreichen (`success`, `error`), Status/Body serverseitig loggen.
- `karriere.bewerbung.tsx`: `fbq('track','Lead')` vor `try` wie Referenz; `setError(r.error || t.fail)`.
- Test über `stack_modern--invoke-server-function` gegen die Vorschau bzw. Prüfung der Server-Logs, da die Sandbox die Zieladresse nicht erreicht.
