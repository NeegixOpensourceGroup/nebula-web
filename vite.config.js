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
    extensions: ['.js', '.jsx', '.json', '.vue']
  },
})
