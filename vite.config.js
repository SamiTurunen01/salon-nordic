import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Base path for the deployed site.
// - Custom domain or local dev: '/'
// - GitHub Pages project site (username.github.io/repo-name/): '/repo-name/'
// Override at build time without editing this file:
//   PowerShell:  $env:VITE_BASE_PATH = "/repo-name/"; npm run build
//   bash/CI:     VITE_BASE_PATH=/repo-name/ npm run build
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || "/",
});
