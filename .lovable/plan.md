# Eigene Domain bbm-consult.solutions freischalten

## Was sich ändert
Die Website läuft jetzt auf Ihrem Server. Sie blockiert aber noch Aufrufe über Ihre Domain. Ich trage `bbm-consult.solutions` und `www.bbm-consult.solutions` als erlaubte Adressen ein.

## Danach auf dem Server
```text
cd ~/bbn-consulting-website
git pull            # bzw. neue Projektdateien übertragen
bun run build
pm2 restart bbn-consulting-website
```

## Technische Details
- `vite.config.ts`: `defineConfig({ vite: { preview: { allowedHosts: ["bbm-consult.solutions", "www.bbm-consult.solutions"] }, server: { allowedHosts: [...] } }, ... })`, bestehende `tanstackStart`-Einstellung bleibt.
