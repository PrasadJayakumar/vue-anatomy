// Filter -- deprecated in Vue 3
Vue.filter('titleCase', function (value) {
  if (!value) return '';
  values = value.toString().split(' ');
  return values.map((v) => v.charAt(0).toUpperCase() + v.slice(1)).join(' ');
});

var app = new Vue({
  name: 'demo',
  el: '#demo',
});
