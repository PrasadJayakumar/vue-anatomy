import Vue from 'vue'

Vue.config.warnHandler = function(msg) {
  console.log(`Warn[fix-me]: ${msg}`)
}

Vue.config.errorHandler = function(msg) {
  console.log(`Error[fix-me]: ${msg}`)
}

// line: 5073
// Vue (options)
// warn('Vue is a constructor and should be called with the `new` keyword');
// line: 5384
// initGlobalAPI (Vue)
// warn(
//   'Do not replace the Vue.config object, set individual fields instead.'
// );
// Vue({});

// line: 5666
// query (el)
// warn(
//   'Cannot find element: ' + el
// );
new Vue({ el: '#not-exists' })

// line: 1170
// strats.el
// warn(
//   "option \"" + key + "\" can only be used during instance " +
//   'creation with the `new` keyword.'
// );  template: `

// line: 1261
// strats.data
// warn(
//   'The "data" option should be a function ' +
//   'that returns a per-instance value in component ' +
//   'definitions.',
//   vm
// );

Vue.component('warn-data', {
  data: function() {
    return { val: 1000 }
  }
})
delete Vue.options.components['warn-data']

// line: 1414
// validateComponentName(name)
// warn(
//   'Invalid component name: "' + name + '". Component names ' +
//   'should conform to valid custom element name in html5 specification.'
// );

// Warnings are thrown at two different places
// 1. as part of Create asset registration methods
// 2. as part of Vue.extend

Vue.component('100-warn-invalid-name', {})
delete Vue.options.components['100-warn-invalid-name']

// line: 1420
// validateComponentName(name)
// warn(
//   'Do not use built-in or reserved HTML elements as component ' +
//   'id: ' + name
// );
Vue.component('input', {})
delete Vue.options.components['input']

// line 1444
// normalizeProps (options, vm)
// warn('props must be strings when using array syntax.');

Vue.component('warn-props', {
  props: [100, false]
})
delete Vue.options.components['warn-props']

// line 1456
// normalizeProps (options, vm)
// warn(
//   "Invalid value for option \"props\": expected an Array or an Object, " +
//   "but got " + (toRawType(props)) + ".",
//   vm
// );

Vue.component('warn-props', {
  props: 'I am not the right value type'
})
delete Vue.options.components['warn-props']

// line 1509
// assertObjectType (name, value, vm)
// warn(
//   "Invalid value for option \"" + name + "\": expected an Object, " +
//   "but got " + (toRawType(value)) + ".",
//   vm
// );

Vue.component('warn-computed', {
  computed: 'I am not the right value type'
})
delete Vue.options.components['warn-computed']
