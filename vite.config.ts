import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import contentCollections from "@content-collections/vite";
import viteTsConfigPaths from "vite-tsconfig-paths";
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tanstackRouter(),
    contentCollections(),
    viteTsConfigPaths({
      projects: ["./tsconfig.json"],
    }),
    tailwindcss()
  ],
});
