// @lovable.dev/vite-tanstack-config already includes the core plugins — do NOT add them manually.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const hosts = ["bbm-consult.solutions", "www.bbm-consult.solutions", "bbm-consult.de", "www.bbm-consult.de"];

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    server: { entry: "server" },
  },
  vite: {
    server: { allowedHosts: hosts },
    preview: { allowedHosts: hosts },
  },
});
