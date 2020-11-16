import Vue from 'vue'

// Register a global custom directive called `v-focus`
Vue.directive('focus', {
  bind(el, binding, vnode) {
    vnode.context.$emit('event-msg', { name: binding.name, msg: 'bind' })
  },
  inserted(el, binding, vnode) {
    vnode.context.$emit('event-msg', { name: binding.name, msg: 'inserted' })
    // Focus the element
    el.focus()
  },
  unbind(el, binding, vnode) {
    vnode.context.$emit('event-msg', { name: binding.name, msg: 'unbind' })
  }
})
