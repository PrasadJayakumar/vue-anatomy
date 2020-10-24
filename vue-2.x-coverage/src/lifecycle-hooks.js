let lifecycleHooks = {
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

export default lifecycleHooks;
