// Define a new global component called button-counter
Vue.component('button-counter', {
  props: {
    initialCounter: Number,
    incrementValue: {
      type: Number,
      default: 1,
      validator: function (value) {
        return value > 0;
      },
    },
  },
  data() {
    return {
      count: this.initialCounter,
    };
  },
  template:
    '<button v-on:click="count=count+incrementValue">You clicked me {{ count }} times.</button>',
  // Lifecycle Hooks
  beforeCreate() {
    this.$emit('event-msg', 'beforeCreate');
  },
  created() {
    this.$emit('event-msg', 'created');
  },
  beforeMount() {
    this.$emit('event-msg', 'beforeMount');
  },
  mounted() {
    this.$emit('event-msg', 'mounted');
  },
  beforeUpdate() {
    this.$emit('event-msg', 'beforeUpdate');
  },
  updated() {
    this.$emit('event-msg', 'updated');
  },
  activated() {
    this.$emit('event-msg', 'activated');
  },
  deactivated() {
    this.$emit('event-msg', 'deactivated');
  },
  beforeDestroy() {
    this.$emit('event-msg', 'beforeDestroy');
  },
  destroyed() {
    this.$emit('event-msg', 'destroyed');
  },
});
