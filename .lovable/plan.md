# Website auf eigenem Server mit bbm-consult.solutions starten

## Ursache
Die fertige Version wird für Lovables Hosting gebaut, nicht für einen normalen Server. Deshalb findet `preview` die erwartete Datei nicht. Auf Ihrem Server ist der Entwicklungsmodus der zuverlässigste Weg. Dabei erlauben wir Ihre Domain direkt.

## Auf dem Server ausführen (ganzer Block auf einmal)

```text
cd ~/bbn-consulting-website
cat > vite.config.ts <<'EOF'
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  vite: {
    server: { allowedHosts: ["bbm-consult.solutions", "www.bbm-consult.solutions"] },
    preview: { allowedHosts: ["bbm-consult.solutions", "www.bbm-consult.solutions"] },
  },
});
EOF
pm2 delete bbn-consulting-website
pm2 start "$HOME/.bun/bin/bun" --name bbn-consulting-website -- run dev --host 0.0.0.0 --port 8080
pm2 save
```

Danach https://bbm-consult.solutions neu laden.

## Empfehlung
Schneller, sicherer und ohne Serverpflege: in Lovable auf „Veröffentlichen“ klicken und bbm-consult.solutions dort als eigene Domain verbinden.

## Im Projekt
Dieselbe Domain-Freigabe trage ich auch hier ein, damit sie beim nächsten Übertragen erhalten bleibt.
