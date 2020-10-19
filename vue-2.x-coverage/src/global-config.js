// Filter -- deprecated in Vue 3
Vue.filter('titleCase', function (value) {
  if (!value) return '';
  let values = value.toString().split(' ');
  return values.map((v) => v.charAt(0).toUpperCase() + v.slice(1)).join(' ');
});

Vue.config.productionTip = true;
Vue.config.devtools = true;

Vue.config.warnHandler = function (msg, vm, trace) {
  console.log(`Warn: ${msg}`);
};