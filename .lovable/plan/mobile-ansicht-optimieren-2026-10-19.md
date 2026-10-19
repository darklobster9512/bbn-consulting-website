# Mobile Ansicht optimieren

Die Seite funktioniert auf dem Handy bereits ohne seitliches Verrutschen. Sie wirkt aber gestreckt und nutzt den Platz nicht gut. Gezielte Verbesserungen für Bildschirme unter 768 px:

## Kopfzeile & Menü
- Die Kopfzeile wird auf dem Handy niedriger (64 statt 80 px), das Logo-Feld schmaler. So bleibt beim Scrollen mehr Inhalt sichtbar.
- Das Menü öffnet sich als vollflächiges blaues Panel:
  - große Menüpunkte mit Trennlinien und Pfeil
  - darunter die Buttons „Anrufen“ und „E-Mail“ sowie die Adresse
- Das Menü schließt automatisch bei Seitenwechsel. Solange es offen ist, scrollt die Seite dahinter nicht mit.

## Inhalte
- Das Fotoband wird auf dem Handy flacher (ca. 180 px). Der Bildausschnitt wird mittig gesetzt.
- Schräge Titel sind etwas kleiner (20 px) und brechen sauber um.
- „Unser Vorgehen“ wird auf dem Handy zweispaltig statt einer langen Liste.
- Die Kennzahlen bleiben zweispaltig, mit kompakterer Schrift.
- Kacheln: Bildhöhe angepasst, der ganze Button ist leicht antippbar (mind. 44 px hoch).
- Die Seitenleiste erscheint unter dem Inhalt mit etwas Abstand. Der „Kontakt“-Kasten wird auf dem Handy ausgeblendet, wo die neue Kontakt-Leiste (unten) ihn ersetzt. Ausnahme: die Kontakt-Seite.
- Die Team-Fotos auf „Über uns“ erscheinen zweispaltig statt untereinander.

## Kontakt & Formular
- Die Eingabefelder bekommen 16 px Schrift (sonst zoomt das iPhone beim Antippen hinein) und größere Tippflächen. Der Absenden-Button geht über die volle Breite.
- Die Karte wird etwas flacher.

## Neue feste Kontakt-Leiste unten (nur Handy)
- Schmale Leiste am unteren Rand mit drei Feldern: „Anrufen“, „E-Mail“ und „Anfrage“. Sie ist immer erreichbar und erinnert an die schrägen Elemente im Design.
- Der „Nach oben“-Button rückt dafür über die Leiste.

## Fußzeile
- Die Spalten stehen untereinander, linksbündig und mit klaren Abständen. Copyright und Registerangaben brechen lesbar um.

## Technisch
- Änderungen nur in components/site.tsx, den Seiten-Dateien und styles.css, über Breakpoint-Klassen (md:/lg:). Am Desktop-Layout ändert sich nichts.
- Am Ende Kontrolle per Screenshot bei 393 px Breite.
