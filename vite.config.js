
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react()],
    // Vercel serves from the domain root; other hosts (e.g. GitHub Pages) use the repo subpath
    base: env.VITE_BASE_PATH || (process.env.VERCEL ? '/' : '/react-vite-deploy/'),
  }
})
