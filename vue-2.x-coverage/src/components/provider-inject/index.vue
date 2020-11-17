<template>
  <div class="card h-100">
    <div class="card-header">Provider Inject</div>
    <div class="card-body">
      <child @event-msg="onEventMsg"></child>
      <v-simple-table>
        <thead>
          <th v-for="header in headers" :key="header.value">
            {{ header.text }}
          </th>
        </thead>
        <tbody>
          <tr v-for="item in eventMsgs" :key="item.id">
            <td
              v-for="(header, colIdx) in headers"
              :key="header.value + '-' + item.id"
            >
              <slot :name="header.value" :item="item">
                {{ item[headers[colIdx].value] }}
              </slot>
            </td>
          </tr>
        </tbody>
      </v-simple-table>
    </div>
  </div>
</template>

<script>
import VSimpleTable from '@/shared/components/v-simple-table.vue'
import Child from './child.vue'

export default {
  name: 'ProviderInject',
  components: {
    Child,
    VSimpleTable
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
  provide() {
    return {
      pushEventMsg: event => {
        this.eventMsgs.push({ id: this.eventMsgs.length + 1, ...event })
      }
    }
  }
}
</script>
