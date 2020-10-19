Vue.component('warn-block', {
  data() {
    return {
      warn: true,
    }
  },
  template: ` 
    <div id="warn-block" v-if="warn">
      <warn-props-default></warn-props-default>
      <warn-props-req></warn-props-req>
      <warn-props-type-check age="ten"></warn-props-type-check>
      <warn-props-custom-check :age="10"></warn-props-custom-check>
      <warn-non-present></warn-non-present>
      <warn-reserved-prefix></warn-reserved-prefix>
      <warn-invalid-handler @click="none"></warn-invalid-handler>
      <warn-bind-without-args v-bind="10"></warn-bind-without-args>
      <warn-bind-lsntr-without-args></warn-bind-lsntr-without-args>
      <warn-comp-def></warn-comp-def>
    </div>
  `
})
