# Alle Fotos in den public-Ordner legen

## Was sich ändert
- Alle 18 Fotos (Fotoband, Kacheln, Büro, 9 Teamfotos) werden als echte Bilddateien nach `public/photos/` gelegt, z. B. `public/photos/team-recruiter.jpg`.
- Die Website lädt die Bilder dann von Ihrem eigenen Server (`/photos/...`) statt vom Lovable-Speicher. So funktionieren sie auch auf bbm-consult.solutions.
- Aussehen und Texte bleiben gleich.
- Die Domain-Freigabe für bbm-consult.solutions wird ebenfalls im Projekt eingetragen, damit sie beim Neuladen nicht verloren geht.

## Danach auf dem Server
```text
cd ~/bbn-consulting-website
git pull
export PATH="$HOME/.bun/bin:$PATH"
bun install
pm2 restart bbn-consulting-website
```
(Falls das Projekt nicht per git auf den Server kommt: Projektdateien neu übertragen, dann `bun install` und `pm2 restart`.)

## Technische Details
- Jede Datei über die `url` aus der `.asset.json` vom laufenden Dev-Server herunterladen und nach `public/photos/<name>.jpg` speichern; Größe prüfen.
- `src/lib/photos.ts`: Imports entfernen, Pfade als Strings `/photos/<name>.jpg`.
- Pointer-Dateien in `src/assets/photos/` lokal entfernen (CDN-Objekte nicht löschen).
- `vite.config.ts`: `vite.server.allowedHosts` und `vite.preview.allowedHosts` mit `bbm-consult.solutions` und `www.bbm-consult.solutions`.
- Kontrolle: Seite /ueber-uns im Browser, alle Bilder laden von `/photos/`.
