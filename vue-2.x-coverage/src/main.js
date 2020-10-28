import Vue from 'vue';
import App from './app.vue';

// Begin: Loading resource for Webpack configuration sake
import '../public/css/bootstrap-4.5.3.css';
import '../public/css/bootstrap-grid-4.5.3.css';

import './shared/global-config.js';
import './shared/directives/v-focus.js';
// End: Webpack configuration

import ConstantsPlugin from './shared/constants-plugin.js';
Vue.use(ConstantsPlugin);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
