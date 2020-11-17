export default {
  beforeCreate() {
    this.pushEventMsg({ name: 'yet-to-know', msg: 'beforeCreate' })
  },
  created() {
    this.pushEventMsg({ name: this.keyName, msg: 'created' })
  },
  beforeMount() {
    this.pushEventMsg({ name: this.keyName, msg: 'beforeMount' })
  },
  mounted() {
    this.pushEventMsg({ name: this.keyName, msg: 'mounted' })
  },
  beforeUpdate() {
    this.pushEventMsg({ name: this.keyName, msg: 'beforeUpdate' })
  },
  updated() {
    this.pushEventMsg({ name: this.keyName, msg: 'updated' })
  },
  activated() {
    this.pushEventMsg({ name: this.keyName, msg: 'activated' })
  },
  deactivated() {
    this.pushEventMsg({ name: this.keyName, msg: 'deactivated' })
  },
  beforeDestroy() {
    this.pushEventMsg({ name: this.keyName, msg: 'beforeDestroy' })
  },
  destroyed() {
    this.pushEventMsg({ name: this.keyName, msg: 'destroyed' })
  }
}
