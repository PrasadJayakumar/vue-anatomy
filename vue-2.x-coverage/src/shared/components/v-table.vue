<template>
  <div>
    <div style="padding: 8px 0px">
      <b><slot name="header"></slot></b>
    </div>

    <div
      style="overflow-x: auto; overflow-y: auto; height: 200px; width: 500px"
    >
      <table class="table table-striped">
        <tr>
          <th>#</th>
          <th v-for="(header, idx) in headers" :key="'h' + idx">
            {{ header.text }}
          </th>
        </tr>
        <tbody>
          <tr v-for="(item, rowIdx) in items" :key="'r' + rowIdx">
            <td>{{ rowIdx + 1 }}</td>
            <td
              v-for="(header, colIdx) in headers"
              :key="'r' + rowIdx + 'c' + colIdx"
            >
              {{ item[headers[colIdx].value] }}
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
