import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { fileURLToPath } from "url";
import flowbiteReact from "flowbite-react/plugin/vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url)); // __dirname is not defined in ES modules
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), flowbiteReact()],
});