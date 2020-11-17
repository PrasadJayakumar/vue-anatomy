// Reference: https://vuetifyjs.com/en/components/data-tables/#item
<template>
  <div>
    <div
      class="table-responsive"
      style="overflow-x: auto; overflow-y: auto; height: 200px"
    >
      <table class="table table-striped table-sm">
        <thead>
          <th v-for="header in headers" :key="header.value">
            {{ header.text }}
          </th>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.id">
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
      </table>
    </div>
    <div style="padding-top: 8px">
      <slot name="footer">some stats...</slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    headers: {
      type: Array,
      default: () => []
    },
    items: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {}
  }
}
</script>
