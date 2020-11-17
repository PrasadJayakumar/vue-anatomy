export default {
  beforeCreate() {
    this.$emit('event-msg', { name: 'yet-to-know', msg: 'beforeCreate' })
  },
  created() {
    this.$emit('event-msg', { name: this.keyName, msg: 'created' })
  },
  beforeMount() {
    this.$emit('event-msg', { name: this.keyName, msg: 'beforeMount' })
  },
  mounted() {
    this.$emit('event-msg', { name: this.keyName, msg: 'mounted' })
  },
  beforeUpdate() {
    this.$emit('event-msg', { name: this.keyName, msg: 'beforeUpdate' })
  },
  updated() {
    this.$emit('event-msg', { name: this.keyName, msg: 'updated' })
  },
  activated() {
    this.$emit('event-msg', { name: this.keyName, msg: 'activated' })
  },
  deactivated() {
    this.$emit('event-msg', { name: this.keyName, msg: 'deactivated' })
  },
  beforeDestroy() {
    this.$emit('event-msg', { name: this.keyName, msg: 'beforeDestroy' })
  },
  destroyed() {
    this.$emit('event-msg', { name: this.keyName, msg: 'destroyed' })
  }
}
