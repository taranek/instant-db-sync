import babel from "vite-plugin-babel";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { esbuildDecorators } from "@anatine/esbuild-decorators";

export default defineConfig({
  plugins: [
    react(),
    /*    // Babel will try to pick up Babel config files (.babelrc or .babelrc.json)
    babel({
      babelConfig: {
        plugins: [
          ["@babel/plugin-proposal-decorators", { legacy: true }],
          ["@babel/plugin-proposal-class-properties", { loose: false }],
        ],
      },
    }),*/
  ],
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
