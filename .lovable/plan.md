# Domain bbm-consult.solutions direkt auf dem Server freischalten

Die Website blockiert noch Aufrufe über Ihre Domain. Das lässt sich direkt auf dem Server beheben, ohne Projektdateien neu zu übertragen.

## Auf dem Server ausführen
Den ganzen Block auf einmal einfügen:

```text
cd ~/bbn-consulting-website
cat > vite.config.ts <<'EOF'
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  vite: {
    preview: { allowedHosts: ["bbm-consult.solutions", "www.bbm-consult.solutions"] },
    server: { allowedHosts: ["bbm-consult.solutions", "www.bbm-consult.solutions"] },
  },
});
EOF
bun run build
pm2 restart bbn-consulting-website
```

Danach https://bbm-consult.solutions neu laden.

## Im Projekt
Ich nehme dieselbe Änderung auch hier im Projekt vor. So bleibt sie beim nächsten Übertragen erhalten.
