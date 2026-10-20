# Eigener Server: Website startet nicht

## Ursache
Das Projekt nutzt **Bun** statt npm. Bun konnte nicht installiert werden, weil auf dem Server das Programm `unzip` fehlt. Am Website-Code muss nichts geändert werden.

## Lösung (auf dem Server Zeile für Zeile ausführen)

```text
apt-get update && apt-get install -y unzip
curl -fsSL https://bun.sh/install | bash
export PATH="$HOME/.bun/bin:$PATH"
cd ~/bbn-consulting-website
bun install
bun run build
pm2 start "$HOME/.bun/bin/bun" --name bbn-consulting-website -- run preview --host 0.0.0.0 --port 8080
pm2 save
```

Danach mit `pm2 logs bbn-consulting-website` prüfen; die Seite läuft auf Port 8080.

Falls ein Schritt einen Fehler zeigt: dort aufhören und die Ausgabe hier einfügen. Einfachster Weg für den Live-Betrieb bleibt das Veröffentlichen über Lovable mit der Domain bbm-consult.de.

Keine Änderungen am Projekt nötig.
