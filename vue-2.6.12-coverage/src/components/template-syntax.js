Vue.component('template-syntax', {
  data() {
    return {
      rawHtml:
        "<span style='color:red'>Don't use v-html on user provided data</span>",
    };
  },
  template: `
      <div id="template-syntax">
        <h2>Template Syntax</h2>
        <p>Using mustaches: {{ rawHtml }}</p>
        <p>Using v-html directive: <span v-html="rawHtml"></span></p>
        <p>Simple JS expressions are {{ 1+2 ? 'OK' : 'NOT OK' }}</p>
      </div>
  `,
});
