import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";

const host = process.env.TAURI_DEV_HOST;

export default defineConfig(async () => ({
  plugins: [
    react({
      // Use React plugin in all *.jsx and *.tsx files
      include: ["**/*.{jsx,tsx}", "./node_modules/components-gallery/"],
    }),
    svgr({
      svgrOptions: {
        exportType: "default",
      },
      include: "**/*.svg",
    }),
  ],
  resolve: {
    alias: {
      react: path.resolve("./node_modules/react"),
      "react-dom": path.resolve("./node_modules/react-dom"),
      "react/jsx-runtime": path.resolve("./node_modules/react/jsx-runtime.js"),
      "react/jsx-dev-runtime": path.resolve("./node_modules/react/jsx-dev-runtime.js"),
      "@icons": path.resolve(__dirname, "./assets/icons"),
      "@images": path.resolve(__dirname, "./assets/images"),
      "@cg-components": path.resolve(
        __dirname,
        "./node_modules/components-gallery/src/components/"
      ),
      "@cg-providers": path.resolve(__dirname, "./node_modules/components-gallery/src/providers/"),
      "@cg-hooks": path.resolve(__dirname, "./node_modules/components-gallery/src/hooks/"),
      "@cg-utils": path.resolve(__dirname, "./node_modules/components-gallery/src/utils/"),
      "@cg-icons": path.resolve(__dirname, "./node_modules/components-gallery/assets/icons"),
      "@cg-api": path.resolve(__dirname, "./node_modules/components-gallery/src/api"),
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      treeShaking: true,
    },
    exclude: ["react/jsx-runtime", "react/jsx-dev-runtime"],
  },
  // Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
  //
  // 1. prevent vite from obscuring rust errors
  clearScreen: false,
  // 2. tauri expects a fixed port, fail if that port is not available
  server: {
    port: 1420,
    strictPort: true,
    host: host || false,
    fs: {
      strict: false,
    },
    hmr: host
      ? {
          protocol: "ws",
          host,
          port: 1421,
        }
      : undefined,
    watch: {
      // 3. tell vite to ignore watching `src-tauri`
      ignored: ["**/src-tauri/**"],
    },
  },
}));
