Vue.component('container', {
  template: `    
<div class="container">
  <div style="padding: 8px 0px">
    <b><slot name="header"></slot></b>
  </div>
  <div>
    <slot></slot>
  </div>
  <div style="padding-top: 8px">
    <slot name="footer">some stats...</slot>
  </div>
</div>
`,
});
