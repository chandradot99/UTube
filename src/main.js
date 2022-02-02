import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'

library.add(fas)

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .component('font-awesome-layers', FontAwesomeLayers)
  .component('font-awesome-layers-text', FontAwesomeLayersText)
  .use(router)
  .use(store)
  .mount('#app')
