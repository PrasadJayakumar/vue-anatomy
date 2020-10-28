// Begin: Loading resource for Webpack configuration sake

import Vue from 'vue';
globalThis.Vue = Vue;

import '../public/css/global.css'
import '../public/css/bootstrap-4.5.3.css'
import '../public/css/bootstrap-grid-4.5.3.css'
import '../public/favicon.ico'

// End: Webpack configuration

// Filter -- deprecated in Vue 3
Vue.filter('titleCase', function (value) {
  if (!value) return '';
  let values = value.toString().split(' ');
  return values.map((v) => v.charAt(0).toUpperCase() + v.slice(1)).join(' ');
});

Vue.config.performance = true;
// Vue.config.productionTip = true;
// Vue.config.devtools = true;

Vue.config.warnHandler = function (msg, vm, trace) {
  console.log(`Warn: ${msg}`);
};

Vue.config.errorHandler = function (msg, vm, trace) {
  console.log(`Error: ${msg}`);
};
