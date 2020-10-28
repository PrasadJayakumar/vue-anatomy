import './global-config.js';
import './components/template-syntax.js';
import './components/computed-watchers.js';
import './components/parent-child.js';
import './components/async-comp/index.js';
import './shared/directives/v-focus.js';

import ConstantsPlugin from './constants-plugin.js';

const template = `
  <div class="container-fluid" style="width: 700px">
    <h3>Vue.js code coverage app</h3>
    <template-syntax></template-syntax>
    <computed-watchers></computed-watchers>
    <parent-child></parent-child>
    <async-comp></async-comp>
  </div>
`;

Vue.use(ConstantsPlugin);

var app = new Vue({
  name: 'app',
  el: '#app',
  template,
});
