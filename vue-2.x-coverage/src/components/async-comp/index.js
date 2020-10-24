import './users.js';

const template = `
<div
  id="Async Components"
  class="shadow p-3 mb-4 bg-white rounded"
>
  <button @click="showAsynComp=true">Render Async Component</button><br>
  <div v-if="showAsynComp">
    <users></users>
  </div>
</div>
`;

Vue.component('async-comp', {
  data() {
    return {
      showAsynComp: false,
    };
  },
  template,
});
