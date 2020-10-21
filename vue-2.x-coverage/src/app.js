import './global-config.js';
import './components/template-syntax.js';
import './components/computed-props.js';
import './components/parent-child.js';
import './components/render-functions/index.js';
import './components/warns/index.js';

const template = `
  <div class="container-fluid">
    <h3>Vue.js code coverage app</h3>
    <template-syntax></template-syntax>
    <computed-props></computed-props>
    <parent-child></parent-child>
    <render-functions></render-functions>
    <warn-block></warn-block>
  </div>
`;

var app = new Vue({
  name: 'app',
  el: '#app',
  template,
});
