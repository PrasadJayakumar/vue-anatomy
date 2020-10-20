import './warn-comp-init.js';
import './warn-comp-render.js';

// line: 5933
// createElm(...)
// warn(
//   'Unknown custom element: <' + tag + '> - did you ' +
//   'register the component correctly? For recursive components, ' +
//   'make sure to provide the "name" option.',
//   vnode.context
// );

Vue.component('warn-block', {
  data() {
    return {
      warn: true,
    };
  },
  template: `
    <div id="warn-block" v-if="warn">
      <warn-unknown></warn-unknown>
      <warn-props-default></warn-props-default>
      <warn-props-req></warn-props-req>
      <warn-props-type-check age="ten"></warn-props-type-check>
      <warn-props-custom-check :age="10"></warn-props-custom-check>
      <warn-props-mutation></warn-props-mutation>
      <warn-props-reserved></warn-props-reserved>

      <warn-data-key></warn-data-key>
      <warn-data-fn></warn-data-fn>

      <warn-conflict></warn-conflict> 
      <warn-method-init></warn-method-init> 

      <warn-watch-path></warn-watch-path>

      <warn-comp-def></warn-comp-def>
      <warn-multiple-root></warn-multiple-root>
      <warn-multiple-root-render></warn-multiple-root-render>      
      <warn-non-present></warn-non-present>

      <warn-reserved-prefix></warn-reserved-prefix>
      <warn-invalid-handler @click="none"></warn-invalid-handler>
      <warn-native-modifier></warn-native-modifier>

      <warn-bind-without-args v-bind="10"></warn-bind-without-args>
      <warn-bind-lsntr-without-args></warn-bind-lsntr-without-args>
      <warn-async-reject></warn-async-reject>
      <warn-failed-mount></warn-failed-mount>
    </div>
    <div v-else>

    </div>
  `,
});
