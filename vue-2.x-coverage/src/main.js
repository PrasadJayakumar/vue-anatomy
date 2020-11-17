import Vue from 'vue'
import App from './app.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-grid.css'

import './shared/global-config.js'
import './shared/directives/v-focus.js'

import ConstantsPlugin from './shared/constants-plugin.js'
Vue.use(ConstantsPlugin)

new Vue({
  render: h => h(App)
}).$mount('#app')
