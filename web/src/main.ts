import { createApp } from 'vue'
import Idux from './idux'
import './style.css'
import App from './App.vue'
import router from './router'
import store from './store'
import { createGlobalConfig } from '@idux/components/config'
const loadIconDynamically = (iconName: string) => {
  return fetch(`/idux-icons/${iconName}.svg`).then(res => res.text())
}
const globalConfig = createGlobalConfig({
  icon: { loadIconDynamically },
})

const app = createApp(App);

app.use(router)
  .use(store)
  .use(Idux)
  .use(globalConfig)
  .mount('#app')
