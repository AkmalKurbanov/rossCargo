import {
  createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import VueLazyLoad from 'vue3-lazyload'
import {
  createI18n
} from 'vue-i18n'

import ru from './locales/ru.json'
const i18n = createI18n({
  locale: 'ru',
  fallbackLocale: 'kg',
  messages: {
    ru
  }
})
const app = createApp(App)
app.use(router)
app.use(VueLazyLoad)
app.use(i18n)
app.mount('#app')

















