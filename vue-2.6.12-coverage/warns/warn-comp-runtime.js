// warning will be raised only when the component is used

// line 1657
// getPropDefaultValue (vm, prop, key)
// warn(
//   'Invalid default value for prop "' + key + '": ' +
//   'Props with type Object/Array must use a factory function ' +
//   'to return the default value.',
//   vm
// );
// Reference: https://github.com/vuejs/vue/issues/1032

Vue.component('warn-props-default', {
  props: {
    myList: {
      type: Array,
      default: [10, 20], // wrong usage of Array or Object defaults
      // default: () => [10, 20], // correct usage
    },
  },
  template: '<div></div>',
});

// line: 1690
// assertProp(..)
// warn(
//   'Missing required prop: "' + name + '"',
//   vm
// );

Vue.component('warn-props-req', {
  props: {
    age: {
      type: Number,
      required: true,
    },
  },
  template: '<div></div>',
});

// line: 1714
// assertProp(..)
// warn(
//   getInvalidTypeMessage(name, value, expectedTypes),
//   vm
// );

Vue.component('warn-props-type-check', {
  props: {
    age: {
      type: Number,
    },
  },
  template: '<div></div>',
});

// line: 1723
// assertProp(..)
// warn(
//   'Invalid prop: custom validator check failed for prop "' + name + '".',
//   vm
// );

Vue.component('warn-props-custom-check', {
  props: {
    age: {
      type: Number,
      validator: (value) => value >= 18,
    },
  },
  template: '<div></div>',
});

// line: 2047
// warnNonPresent, hasHandler, getHandler
// warn(
//   "Property or method \"" + key + "\" is not defined on the instance but " +
//   'referenced during render. Make sure that this property is reactive, ' +
//   'either in the data option, or for class-based components, by ' +
//   'initializing the property. ' +
//   'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
//   target
// );
Vue.component('warn-non-present', {
  template: '<div><p>check{{ msg }}</p></div>',
});

// line: 2058
// warnReservedPrefix, hasHandler, getHandler
// warn(
//   "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
//   'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
//   'prevent conflicts with Vue internals. ' +
//   'See: https://vuejs.org/v2/api/#data',
//   target
// )
Vue.component('warn-reserved-prefix', {
  data() {
    return {
      $msg: "don't use reserved prefix",
    };
  },
  template: '<div><p>check{{ $msg }}</p></div>',
});

// line: 2209
// updateListeners(...)
// warn(
//   "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
//   vm
// );
Vue.component('warn-invalid-handler', {
  template: '<div></div>',
});
