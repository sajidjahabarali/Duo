import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths"; // Corrected to a default import

export default defineConfig({
  plugins: [
    tailwindcss(),    // Active theme skin engine
    reactRouter(),   // Structural Core (formerly Remix)
    tsconfigPaths(), // Clean import paths mapping
  ],
});