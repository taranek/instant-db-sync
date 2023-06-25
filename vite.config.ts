import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { esbuildDecorators } from "@anatine/esbuild-decorators";
import viteCompression from "vite-plugin-compression";

export default defineConfig({
  plugins: [react(), viteCompression()],
  optimizeDeps: {
    esbuildOptions: {
      plugins: [
        esbuildDecorators({
          tsconfig: "./tsconfig.json",
        }),
      ],
    },
  },
  // ...
});
