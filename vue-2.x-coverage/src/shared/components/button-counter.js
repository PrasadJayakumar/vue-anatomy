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
  // Lifecycle Hooks
  beforeCreate() {
    this.$emit('event-msg', { id: 'yet-to-know', msg: 'beforeCreate' });
  },
  created() {
    this.$emit('event-msg', { id: this.keyName, msg: 'created' });
  },
  beforeMount() {
    this.$emit('event-msg', { id: this.keyName, msg: 'beforeMount' });
  },
  mounted() {
    this.$emit('event-msg', { id: this.keyName, msg: 'mounted' });
  },
  beforeUpdate() {
    this.$emit('event-msg', { id: this.keyName, msg: 'beforeUpdate' });
  },
  updated() {
    this.$emit('event-msg', { id: this.keyName, msg: 'updated' });
  },
  activated() {
    this.$emit('event-msg', { id: this.keyName, msg: 'activated' });
  },
  deactivated() {
    this.$emit('event-msg', { id: this.keyName, msg: 'deactivated' });
  },
  beforeDestroy() {
    this.$emit('event-msg', { id: this.keyName, msg: 'beforeDestroy' });
  },
  destroyed() {
    this.$emit('event-msg', { id: this.keyName, msg: 'destroyed' });
  },
};
