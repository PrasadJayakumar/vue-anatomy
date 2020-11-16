<template>
  <div class="card mb-2">
    <div class="card-header">Parent-Child Components</div>
    <div class="card-body">
      <child @event-msg="onEventMsg"></child>
      <v-data-table :headers="headers" :items="eventMsgs"> </v-data-table>
    </div>
  </div>
</template>

<script>
import VDataTable from '@/shared/components/v-data-table.vue'
import Child from './child.vue'

export default {
  name: 'ParentChild',
  components: {
    Child,
    VDataTable
  },
  data() {
    return {
      headers: [
        { text: 'Id', value: 'id' },
        { text: 'Name', value: 'name' },
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
      this.eventMsgs.push({ id: this.eventMsgs.length + 1, ...event })
    }
  }
}
</script>
