import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

import { IduxResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [
      vue(),
      Components({
        resolvers: [IduxResolver()],
        // 可以通过指定 `importStyle` 来按需加载 css 或 less 代码, 也支持不同的主题
        // 别忘了修改 idux.ts 中的样式导入代码
        // resolvers: [IduxResolver({ importStyle: 'css', importStyleTheme: 'default' })],
      }),
    ],
    build: {
      outDir: 'blog'
    },
    server: {
      port: 4000,
      open: true,
      proxy: {
        '/api': {
          target: `${env.VITE_PROXY_URL}/api`,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        },
        '/uploads': {
          target: `${env.VITE_PROXY_URL}/uploads`,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/uploads/, '')
        }
      }
    },
    css: {
      preprocessorOptions: {
        less: {
          charset: false,
          additionalData: `@import "./src/assets/common.less";`
        }
      }
    }
  }
})
// ({
//   plugins: [vue()],
//   build: {
//     outDir: 'blog'
//   },
//   server: {
//     port: 4000,
//     open: true,
//     proxy: {
//       '/api': {
//         target: `${import.meta.env.VITE_PROXY_URL}/api`,
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/api/, '')
//       },
//       '/uploads': {
//         target: `${import.meta.env.VITE_PROXY_URL}/uploads`,
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/uploads/, '')
//       }
//     }
//   },
// })
