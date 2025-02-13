import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";

const host = process.env.TAURI_DEV_HOST;


export default defineConfig(async () => ({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        exportType: "default",
      },
      include: "**/*.svg",
    }),
  ],
  resolve: {
    alias: {
      "@icons": path.resolve(__dirname, "./assets/icons"),
      "@images": path.resolve(__dirname, "./assets/images"),
      "@cg-components": path.resolve(
            __dirname,
            "./node_modules/components-gallery/src/components/"
          ),
          "@cg-providers": path.resolve(
            __dirname,
            "./node_modules/components-gallery/src/providers/"
          ),
          "@cg-hooks": path.resolve(
            __dirname,
            "./node_modules/components-gallery/src/hooks/"
          ),
          "@cg-utils": path.resolve(
            __dirname,
            "./node_modules/components-gallery/src/utils/"
          ),
          "@cg-icons": path.resolve(
            __dirname,
            "./node_modules/components-gallery/assets/icons"
          ),
          "@cg-api": path.resolve(
            __dirname,
            "./node_modules/components-gallery/src/api"
          ),
    },
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
