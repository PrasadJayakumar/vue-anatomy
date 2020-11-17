<template>
  <div class="card h-100">
    <div class="card-header">Parent-Child Components</div>
    <div class="card-body">
      <child @event-msg="onEventMsg"></child>
      <v-data-table :headers="headers" :items="eventMsgs">
        <template v-slot:msg="{ item }">
          <span :style="getStyle(item.msg)">{{ item.msg }}</span>
        </template>
      </v-data-table>
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
      msgStyle: {
        color: 'red'
      },
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
    getStyle(msg) {
      return ['bind', 'inserted', 'unbind'].includes(msg)
        ? { color: 'orangered' }
        : {}
    },
    onEventMsg(event) {
      this.eventMsgs.push({ id: this.eventMsgs.length + 1, ...event })
    }
  }
}
</script>
