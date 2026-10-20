# Eigener Server: Website startet nicht

## Ursache
Das Projekt nutzt **Bun** statt npm (Datei `bun.lock`). npm kommt mit dieser Paketliste nicht klar ("edgesOut"-Fehler), deshalb wurde nichts installiert und `vite` fehlt weiterhin. Am Website-Code muss nichts geändert werden.

## Lösung (auf dem Server ausführen)

```text
cd ~/bbn-consulting-website
curl -fsSL https://bun.sh/install | bash
source ~/.bashrc
rm -rf node_modules package-lock.json
bun install
bun run build
pm2 delete bbn-consulting-website
pm2 start bun --name bbn-consulting-website -- run preview --host 0.0.0.0 --port 8080
pm2 save
```

Danach mit `pm2 logs bbn-consulting-website` prüfen; die Seite läuft auf Port 8080.

Hinweis: Falls `bun run build` oder `preview` noch Fehler zeigt, die Ausgabe hier einfügen. Einfachster Weg für den Live-Betrieb bleibt das Veröffentlichen über Lovable inklusive eigener Domain bbm-consult.de.

Keine Änderungen am Projekt nötig.
