import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Production base for GitHub Pages project sites: set VITE_BASE_URL=/your-repo-name/
// (trailing slash required). Omit or use `/` for apex hosting or username.github.io repos.
const base = process.env.VITE_BASE_URL?.replace(/\/?$/, '/') || '/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react()],
})
