# Eigener Server: Website startet nicht ("vite: not found")

## Ursache
Auf dem Server fehlen die installierten Programmpakete (Ordner `node_modules`). PM2 startet deshalb `vite dev` und bricht sofort ab (Code 127). Am Website-Code muss nichts geändert werden.

## Lösung (auf dem Server ausführen)

```text
cd ~/bbn-consulting-website
npm install                 # Pakete installieren
npm run build               # fertige Version bauen
pm2 delete bbn-consulting-website
pm2 start npm --name bbn-consulting-website -- run preview -- --host 0.0.0.0 --port 8080
pm2 save
```

Hinweise:
- Node.js 20 oder neuer nötig (`node -v` prüfen).
- `vite dev` ist nur für die Entwicklung gedacht; für den Live-Betrieb `build` + `preview` (oder Veröffentlichen über Lovable) verwenden.
- Logs prüfen mit `pm2 logs bbn-consulting-website`.

Keine Änderungen am Projekt nötig.
