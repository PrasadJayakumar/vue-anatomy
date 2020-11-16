<template>
  <div class="card mb-2">
    <div class="card-header">Parent-Child Components</div>
    <div class="card-body">
      <child @event-msg="onEventMsg"></child>
      <v-table :headers="headers" :items="eventMsgs">
        <template #header>Header...</template>
        <template #footer>Footer...</template>
      </v-table>
    </div>
  </div>
</template>

<script>
import VTable from './v-table.vue'
import Child from './child.vue'

export default {
  name: 'ParentChild',
  components: {
    Child,
    VTable
  },
  data() {
    return {
      headers: [
        { text: 'Id', value: 'id' },
        { text: 'Message', value: 'msg' }
      ],
      eventMsgs: []
    }
  },
  mounted() {
    let vm = this.$root
    vm.$on('event-bus-msg', function(...args) {
      console.log('event bus msg: ', args)
    })
  },
  methods: {
    onEventMsg(event) {
      this.eventMsgs.push(event)
    }
  }
}
</script>
