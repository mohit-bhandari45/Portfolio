import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

// Plugin to duplicate index.html as 404.html for GitHub Pages / static host SPA fallback
const copy404Plugin = () => ({
  name: 'copy-404',
  closeBundle() {
    const distPath = path.resolve(__dirname, 'dist');
    const indexPath = path.resolve(distPath, 'index.html');
    const target404 = path.resolve(distPath, '404.html');
    if (fs.existsSync(indexPath) && !fs.existsSync(target404)) {
      fs.copyFileSync(indexPath, target404);
      console.log('Successfully created 404.html SPA fallback in dist/');
    }
  },
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), copy404Plugin()],
  appType: 'spa',
});
