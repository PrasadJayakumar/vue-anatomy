<template>
  <button class="btn btn-secondary mr-1" @click="onClick($event)">
    You clicked me {{ count }} times.
  </button>
</template>

<script>
import lifecycleHooks from '../lifecycle-hooks-comp.js'

export default {
  name: 'ButtonCounter',
  mixins: [lifecycleHooks],
  props: {
    keyName: {
      type: String,
      default: 'button-counter'
    },
    initial: {
      type: Number,
      default: 0
    },
    incrementBy: {
      type: Number,
      default: 1,
      validator: function(value) {
        return value > 0
      }
    }
  },
  data() {
    return {
      count: this.initial
    }
  },
  beforeCreate() {
    this.$emit('event-msg', { id: 'key-not-initialized', msg: 'beforeCreate' })
  },
  methods: {
    onClick(event) {
      this.count = this.count + this.incrementBy

      let bus = this.$root
      bus.$emit('event-bus-msg', 'I am working', this.count, event)
    }
  }
}
</script>
