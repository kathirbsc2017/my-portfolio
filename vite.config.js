import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// base "./" lets the same build work on GitHub Pages (sub-path) and Netlify/Vercel (root)
export default defineConfig({ plugins: [react()], base: "./" });
