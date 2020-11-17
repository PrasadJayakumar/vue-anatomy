<template>
  <button class="btn btn-secondary btn-sm" @click="onClick()">
    You clicked me {{ count }} times
  </button>
</template>

<script>
import lifecycleHooks from './lifecycle-hooks-comp.js'

export default {
  name: 'ButtonCounterV2',
  mixins: [lifecycleHooks],
  props: {
    keyName: {
      type: String,
      default: 'button-counter-v2'
    },
    initial: {
      type: Number,
      default: 0
    },
    incrementBy: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      count: this.initial
    }
  },
  beforeCreate() {
    this.pushEventMsg({
      name: 'key-not-initialized',
      msg: 'beforeCreate'
    })
  },
  inject: ['pushEventMsg'],
  methods: {
    onClick() {
      this.count = this.count + this.incrementBy
    }
  }
}
</script>
