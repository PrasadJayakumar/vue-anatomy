<template>
  <div class="shadow p-3 mb-4 bg-white rounded">
    <h4>Parent-Child Components</h4>
    <child @event-msg="onEventMsg"></child>
    <div id="lifecycle-events">
      <v-table :headers="headers" :items="eventMsgs"></v-table>
    </div>
  </div>
</template>

<script>
import VTable from "../shared/components/v-table.vue";
import Child from "./child.vue";

export default {
  name: "parent-child",
  components: {
    Child,
    VTable,
  },
  data() {
    return {
      headers: [
        { text: "Id", value: "id" },
        { text: "Message", value: "msg" },
      ],
      eventMsgs: [],
    };
  },
  methods: {
    onEventMsg(event) {
      this.eventMsgs.push(event);
    },
  },
  mounted() {
    let vm = this.$root;
    vm.$on("event-bus-msg", function (...args) {
      console.log("event bus msg: ", args);
    });
  },
};
</script>