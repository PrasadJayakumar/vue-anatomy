<template>
  <div v-if="warn" id="warn-block">
    <component
      :is="comp.name"
      v-for="comp in warnComps"
      :key="comp.name"
      v-bind="comp.props"
    ></component>
    <warn-invalid-handler @click="none"></warn-invalid-handler>
    <warn-bind-without-args v-bind="10"></warn-bind-without-args>
  </div>
  <div v-else></div>
</template>

<script>
// import './warn-comp-init.js'
import './warn-comp-render.js'

export default {
  name: 'Warns',
  data() {
    return {
      warn: false,
      warnComps: [
        { name: 'warn-unknown' },
        { name: 'warn-props-default' },
        { name: 'warn-props-req' },
        { name: 'warn-props-type-check', props: { age: 'ten' } },
        { name: 'warn-props-custom-check', props: { age: '10' } },
        { name: 'warn-props-mutation' },
        { name: 'warn-props-reserved' },
        { name: 'warn-data-key' },
        { name: 'warn-data-fn' },
        { name: 'warn-conflict' },
        { name: 'warn-method-init' },
        { name: 'warn-watch-path' },
        { name: 'warn-comp-def' },
        { name: 'warn-multiple-root' },
        { name: 'warn-multiple-root-render' },
        { name: 'warn-non-present' },
        { name: 'warn-reserved-prefix' },
        { name: 'warn-native-modifier' },
        { name: 'warn-bind-lsntr-without-args' },
        { name: 'warn-async-reject' },
        { name: 'warn-failed-mount' }
      ]
    }
  }
}
</script>
