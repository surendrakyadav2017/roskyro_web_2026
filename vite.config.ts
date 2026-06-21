import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig} from 'vite';

// Static assets (logo, favicons, sitemap, robots.txt) live at the project root
// alongside the source code rather than in a separate /public folder, because
// they were uploaded flat via the GitHub web UI. This plugin copies just those
// specific files into the build output if present. It intentionally never
// throws — a missing/renamed asset should not break the entire production
// build; it just won't be in dist/, which is easy to spot and fix afterwards.
const ROOT_STATIC_FILES = [
  'logo.png',
  'favicon-16.png',
  'favicon-32.png',
  'favicon-48.png',
  'apple-touch-icon.png',
  'icon-192.png',
  'icon-512.png',
  'robots.txt',
  'sitemap.xml',
];

function copyRootStaticAssets() {
  return {
    name: 'copy-root-static-assets',
    closeBundle() {
      const outDir = path.resolve(__dirname, 'dist');
      for (const file of ROOT_STATIC_FILES) {
        try {
          const src = path.resolve(__dirname, file);
          const dest = path.resolve(outDir, file);
          if (fs.existsSync(src)) {
            fs.copyFileSync(src, dest);
          } else {
            console.warn(`[copy-root-static-assets] Skipping missing file: ${file}`);
          }
        } catch (err) {
          console.warn(`[copy-root-static-assets] Could not copy ${file}:`, err);
        }
      }
    },
  };
}

export default defineConfig(() => {
  return {
    publicDir: false as const,
    plugins: [react(), tailwindcss(), copyRootStaticAssets()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
