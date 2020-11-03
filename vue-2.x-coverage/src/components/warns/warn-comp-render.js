import Vue from 'vue';

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

Vue.component("warn-props-default", {
  props: {
    myList: {
      type: Array,
      default: [10, 20], // wrong usage of Array or Object defaults
      // default: () => [10, 20], // correct usage
    },
  },
  template: "<div></div>",
});

// line: 1690
// assertProp(..)
// warn(
//   'Missing required prop: "' + name + '"',
//   vm
// );

Vue.component("warn-props-req", {
  props: {
    age: {
      type: Number,
      required: true,
    },
  },
  template: "<div></div>",
});

// line: 1714
// assertProp(..)
// warn(
//   getInvalidTypeMessage(name, value, expectedTypes),
//   vm
// );

Vue.component("warn-props-type-check", {
  props: {
    age: {
      type: Number,
    },
  },
  template: "<div></div>",
});

// line: 1723
// assertProp(..)
// warn(
//   'Invalid prop: custom validator check failed for prop "' + name + '".',
//   vm
// );

Vue.component("warn-props-custom-check", {
  props: {
    age: {
      type: Number,
      validator: (value) => value >= 18,
    },
  },
  template: "<div></div>",
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
Vue.component("warn-non-present", {
  template: "<div><p>{{ msg }}</p></div>",
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
Vue.component("warn-reserved-prefix", {
  data() {
    return {
      $msg: "don't use reserved prefix",
    };
  },
  template: "<div><p>{{ $msg }}</p></div>",
});

// line: 2209
// updateListeners(...)
// warn(
//   "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
//   vm
// );
Vue.component("warn-invalid-handler", {
  template: "<div></div>",
});

// line: 2761
// bindObjectProps(...)
// warn(
//   'v-bind without argument expects an Object or Array value',
//   this
// );
Vue.component("warn-bind-without-args", {
  template: "<div></div>",
});

// line: 2869
// bindObjectListeners (data, value)
// warn(
//   'v-on without argument expects an Object value',
//   this
// );
Vue.component("warn-bind-lsntr-without-args", {
  methods: {
    myFn() {},
  },
  template: '<div v-on="myFn"></div>',
});

// line: 3198
// createComponent(...)
// warn(("Invalid Component definition: " + (String(Ctor))), context);
Vue.component("warn-comp-def", "wrong-comp-def");

// line: 3390
// _createElement(...)
// warn(
//   'Avoid using non-primitive value as key, ' +
//   'use string/number value instead.',
//   context
// );
// Vue.component('warn-non-prim-key', {
//   template: '<div></div>',
// });

Vue.component("warn-data-key", {
  render: function (createElement) {
    let nonPrimitiveValue = { myKey: "not-correct" };
    return createElement("div", { key: nonPrimitiveValue });
  },
});

// line: 3417
// _createElement(...)
// warn(
//   ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
//   context
// );
Vue.component("warn-native-modifier", {
  template: '<div v-on:click.native="myFn"></div>',
});

// line: 3577
// renderMixin(...)
// warn(
//   'Multiple root nodes returned from render function. Render function ' +
//   'should return a single root node.',
//   vm
// );
Vue.component("warn-multiple-root-render", {
  render: function (createElement) {
    return [createElement("div", {}), createElement("div", {})];
  },
});

// line: 3679
// resolveAsyncComponent(...)
// warn(
//   "Failed to resolve async component: " + (String(factory)) +
//   (reason ? ("\nReason: " + reason) : '')
// );
Vue.component("warn-async-reject", function (resolve, reject) {
  setTimeout(function () {
    // Pass the component definition to the resolve callback
    reject("check the warning");
  }, 500);
});

// line: 4037
// mountComponent(...)
// warn(
//   'Failed to mount component: template or render function not defined.',
//   vm
// );
Vue.component("warn-failed-mount", {});

// line: 4457
// Watcher(...)
// warn(
//   "Failed watching path: \"" + expOrFn + "\" " +
//   'Watcher only accepts simple dot-delimited paths. ' +
//   'For full control, use a function instead.',
//   vm
// );
Vue.component("warn-watch-path", {
  data() {
    return {
      val: { a: 0, b: 1 },
    };
  },
  watch: {
    "val['a']": function (newVal, oldVal) {},
  },
});

// line: 4670
// initProps(...)
// warn(
//   ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
//   vm
// );
Vue.component("warn-props-reserved", {
  props: ["key", "ref", "slot", "is", "slot-scope"],
  template: "<div></div>",
});

// line: 4677
// initProps(...)
// warn(
//   "Avoid mutating a prop directly since the value will be " +
//   "overwritten whenever the parent component re-renders. " +
//   "Instead, use a data or computed property based on the prop's " +
//   "value. Prop being mutated: \"" + key + "\"",
//   vm
// );
Vue.component("warn-child-comp", {
  props: ["parentVal"],
  methods: {
    fn() {
      this.parentVal = { c: 2 }; // AVOID
    },
  },
  template: "<div>{{ fn() }}</div>",
});
Vue.component("warn-props-mutation", {
  data() {
    return {
      val: { a: 0, b: 1 },
    };
  },
  template: `<warn-child-comp :parent-val='val'></warn-child-comp>`,
});

// line: 4706
// initData(...)
// warn(
//   'data functions should return an object:\n' +
//   'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
//   vm
// );
Vue.component("warn-data-fn", {
  data() {
    return "not correct";
  },
  template: "<div></div>",
});

// line: 4766
// initComputed (vm, computed)
// warn(
//   ("Getter is missing for computed property \"" + key + "\"."),
//   vm
// );
// line: 4818
// defineComputed (...)
// warn(
//   ("Computed property \"" + key + "\" was assigned to but it has no setter."),
//   this
// );
// line: 4721 - initData(...)
// warn("Method \"" + key + "\" has already been defined as a data property.")
// line: 4728 - initData(...)
// warn(
//   "The data property \"" + key + "\" is already declared as a prop. " +
//   "Use prop default value instead.",
//   vm
// );
// line: 4789 - initComputed(...)
// warn(("The computed property \"" + key + "\" is already defined in data."), vm);
// warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
Vue.component("warn-conflict", {
  props: ["valA", "valB"],
  data() {
    return { valA: 10, valC: 20 };
  },
  computed: {
    valB() {
      return 30;
    },
    valC() {
      return 40;
    },
    valD: {
      // getter missing
      // setter missing
    },
  },
  methods: {
    valD() {},
  },
  template: "<div></div>",
});

// initMethods (vm, methods)
// line 4853
// warn(
//   "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
//   "Did you reference the function correctly?",
//   vm
// );
// line 4861
// warn(
//   ("Method \"" + key + "\" has already been defined as a prop."),
//   vm
// );
// line 4866
// warn(
//   "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
//   "Avoid defining component methods that start with _ or $."
// );
Vue.component("warn-method-init", {
  props: ["val"],
  methods: {
    objNotAllowed: {},
    val() {},
    _NotAllowed() {},
    $NotAllowed() {},
  },
  template: "<div></div>",
});

// stateMixin (Vue)
// line 4915
// warn(
//   'Avoid replacing instance root $data. ' +
//   'Use nested data properties instead.',
//   this
// );
// line 4922
// warn("$props is readonly.", this);
// TODO

// line: 9645
// closeElement(...)
// warnOnce(
//   "Component template should contain exactly one root element. " +
//   "If you are using v-if on multiple elements, " +
//   "use v-else-if to chain them instead.",
//   { start: element.start }
// );
Vue.component("warn-multiple-root", {
  template: "<div></div><div></div>",
});
