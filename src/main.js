import Vue from 'vue'
import App from './App.vue'
import router from './rotas/router.js'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
