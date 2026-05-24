import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    tsconfigPaths: true, // Native TSConfig path resolution in Vite 8
  },
  plugins: [
    tailwindcss(),    // Active theme skin engine
    reactRouter(),   // Structural Core (formerly Remix)
  ],
});