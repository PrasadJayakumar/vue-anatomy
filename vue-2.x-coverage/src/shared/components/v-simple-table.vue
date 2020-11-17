// Reference: https://vuetifyjs.com/en/components/simple-tables/
<template>
  <div>
    <div
      class="table-responsive"
      style="overflow-x: auto; overflow-y: auto; height: 200px;"
    >
      <table class="table table-striped table-sm">
        <slot></slot>
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
