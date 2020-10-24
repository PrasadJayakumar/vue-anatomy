import lifecycleHooks from '../../lifecycle-hooks.js';

const template = `
  <button v-on:click="onClick($event)">
    You clicked me {{ count }} times.
  </button>
`;

// Define a local Vue component
export const ButtonCounter = {
  props: {
    keyName: String,
    initial: Number,
    incrementBy: {
      type: Number,
      default: 1,
      validator: function (value) {
        return value > 0;
      },
    },
  },
  data() {
    return {
      count: this.initial,
    };
  },
  methods: {
    onClick(event) {
      this.count = this.count + this.incrementBy;

      let bus = this.$root;
      bus.$emit('event-bus-msg', 'I am working', this.count, event);
    },
  },
  template,
  beforeCreate() {
    this.$emit('event-msg', { id: 'key-not-initialized', msg: 'beforeCreate' });
  },
  mixins: [lifecycleHooks],
};
