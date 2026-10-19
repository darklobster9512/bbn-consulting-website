# Komplett neues Design im Stil von aarcon.net

Die Website wird neu gestaltet: klassisch, seriös und kompakt wie aarcon.net, nicht mehr wie eine typische KI-Landingpage. Die Markenfarbe ist Blau statt Rot. Inhalte, Seiten und Rechtstexte bleiben erhalten.

## Look & Feel (übernommen von aarcon.net)
- **Kopfzeile:** durchgehender, kräftig blauer Balken (ca. 80 px). Das Logo sitzt links in einem weißen, schräg angeschnittenen Feld (Parallelogramm). Daneben schlichte weiße Menüpunkte: Home, Über uns, Leistungen, Karriere, Referenzen, Kontakt. Rechts steht „de/en“ als Platzhalter.
- **Banner:** breites Schwarz-Weiß-Fotoband (ca. 360 px hoch) aus drei aneinandergesetzten Bildern. Es gibt keinen großen Werbe-Titel darüber.
- **Überschriften:** weiße Schrift auf einem blauen, schräg geschnittenen Balken („Willkommen bei bbm-consulting.“).
- **Schrift:** Open Sans, klein und sachlich (ca. 14 px), schwarzer Fließtext. Aufzählungen haben blaue Pfeil-Symbole.
- **Aufbau:** zentrierter Inhalt mit ca. 1000 px Breite, zweispaltig. Links steht der Hauptinhalt, rechts eine Seitenleiste mit Infokästen (blaue Kopfzeile mit schrägem Icon-Feld, weißer Kasten mit blauem Rahmen), z. B. „Kontakt“ und „Termine“.
- **Kacheln:** Raster mit zwei Spalten. Jede Kachel hat eine blaue Kopfleiste mit Icon, ein Schwarz-Weiß-Foto, einen kurzen Text und einen umrandeten Button „Mehr erfahren“.
- **Fußzeile:** dunkelgrau. Links stehen Copyright und Adresszeile, rechts die Links Kontakt | Karriere | Datenschutz | Impressum, darunter schräge blaue Social-Buttons (LinkedIn, Xing).
- Keine runden Karten, keine Verläufe, keine Schatten und keine Kennzahlen-Kacheln mehr.

## Seiten (gleiches Raster überall)
- **Home:** Fotoband, Begrüßungstext mit Kernkompetenzen, Seitenleiste und vier Leistungskacheln.
- **Über uns:** Fotoband, Text, Führungsteam als schlichte Liste mit Foto-Platzhalter, Seitenleiste.
- **Leistungen:** eine Übersicht mit Abschnitten pro Leistung, jeweils mit blauem Schräg-Titel.
- **Karriere:** Text, Stellenliste als Kacheln, Bewerbungs-Kasten in der Seitenleiste.
- **Referenzen (neu):** schlichte Seite mit Branchen und Beispiel-Projekten (Platzhalter).
- **Kontakt:** Formular im gleichen nüchternen Stil, Adresse in der Seitenleiste.
- **Impressum und Datenschutz:** inhaltlich unverändert, im neuen Layout.

## Bilder
- Die vorhandenen Fotos werden über Graustufen schwarz-weiß dargestellt.
- Dazu kommen 3 neue, ruhigere Fotos für das Banner (Schreibtisch-Detail, Beratungsgespräch, Konferenztisch), passend zur Bildsprache von aarcon.

## Technisch
- Neue Design-Tokens in styles.css: Blau, Dunkelgrau für die Fußzeile, Radius 0, Open Sans. Neue Hilfsklassen für die schrägen Formen (clip-path).
- Die gemeinsamen Bausteine in components/site.tsx werden ersetzt: Header, Banner, schräger Titel, Seitenleisten-Kasten, Kachel, Footer.
- Alle Seiten werden auf ein gemeinsames Zwei-Spalten-Layout umgebaut. Dazu kommt die neue Seite /referenzen mit eigenem Seitentitel und eigener Beschreibung.
