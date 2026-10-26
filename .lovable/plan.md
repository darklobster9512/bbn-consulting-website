# Domain bbm-consult.de freischalten

## Was sich ändert
Die Website lässt sich auf Ihrem Server auch unter bbm-consult.de und www.bbm-consult.de aufrufen (bbm-consult.solutions bleibt erlaubt).

Danach auf dem Server:
```
cd ~/bbn-consulting-website
git pull
export PATH="$HOME/.bun/bin:$PATH"
bun install
bun run build
pm2 restart bbn-consulting-website
```

## Technische Details
- `vite.config.ts`: `hosts` um `"bbm-consult.de"` und `"www.bbm-consult.de"` erweitern (gilt für server und preview).
