import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "https://afacey.github.io/taskboard",
  server: {
    port: 3000, // Optional: Set your preferred development port
  },
  build: {
    outDir: "build", // Optional: Match CRA's default build output
    assetsDir: ".",
  },
});
