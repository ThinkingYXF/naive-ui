/// <reference types="vite/client" />

// interface ImportMetaEnv {
//   readonly VITE_PROXY_URL: string
// }
// interface ImportMeta {
//   readonly env: ImportMetaEnv
// }
declare module '*.vue' {
  import { ComponentOptions } from 'vue'
  const componentOptions: ComponentOptions
  export default componentOptions
}