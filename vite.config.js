import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 导入path
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    // 配置路径别名， @就代表当前项目的绝对路径 
    // __dirname是一个全局变量，表示当前模块所属目录的绝对路径
    // path.resolve返回一个以相对于当前的工作目录（working directory）的绝对路径, 
    // 比如当前工作目录为 D:\205\wms-web 那么 @ 就代表 D:\205\wms-web\src
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    // 自定义扩展名
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  },
  build: {
    rollupOptions: {
      output: {
        // 分包
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString()
          }
        }
      }
    },
    chunkSizeWarningLimit: 1500 // 分包文件超过1500kb会报警告
  },
  server: {
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
