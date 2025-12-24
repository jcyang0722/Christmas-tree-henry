import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Christmas-tree-henry/', // 必须添加这一行，注意前后的斜杠
})