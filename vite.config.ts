import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { esbuildDecorators } from "@anatine/esbuild-decorators";

export default defineConfig({
  plugins: [react()],
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
