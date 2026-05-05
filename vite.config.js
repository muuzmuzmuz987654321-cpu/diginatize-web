import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { execSync } from 'child_process'

try {
  import.meta.resolve('@splinetool/react-spline');
} catch (e) {
  console.log("Auto-installing required Spline dependencies...");
  try {
    execSync("npm install @splinetool/react-spline @splinetool/runtime", { stdio: 'inherit' });
  } catch (err) {
    console.error("Auto-install failed", err);
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? './' : '/',
  plugins: [react()],
  server: {
    fs: {
      strict: false,
    }
  }
})
