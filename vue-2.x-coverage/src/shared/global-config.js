import Vue from 'vue';

// Filter -- deprecated in Vue 3
Vue.filter('titleCase', function(value) {
  if (!value) return '';
  let values = value.toString().split(' ');
  return values.map((v) => v.charAt(0).toUpperCase() + v.slice(1)).join(' ');
});

Vue.config.performance = true;

Vue.config.warnHandler = function(msg, vm, trace) {
  console.log(`Warn: ${msg}`);
};

Vue.config.errorHandler = function(msg, vm, trace) {
  console.log(`Error: ${msg}`);
};
