const template = `
<div
  id="template-syntax"
  class="shadow p-3 mb-4 bg-white rounded"
  style="width: 800px"
>
  <h4>Template Syntax</h4>
  <p>Using mustaches: {{ rawHtml }}</p>
  <p>Using v-html directive: <span v-html="rawHtml"></span></p>
  <p>Simple JS expressions are {{ 1+2 ? 'OK' : 'NOT OK' }}</p>
</div>
`;

Vue.component('template-syntax', {
  data() {
    return {
      rawHtml:
        "<span style='color:red'>Don't use v-html on user provided data</span>",
    };
  },
  template,
});
