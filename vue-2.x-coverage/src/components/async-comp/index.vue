<template>
  <div id="Async Components" class="shadow p-3 mb-4 bg-white rounded">
    <button @click="showAsynComp = true">Render Async Component</button><br />
    <div v-if="showAsynComp">
      <users></users>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  name: "async-comp",
  data() {
    return {
      showAsynComp: false,
    };
  },
  components: {
    users: () => import(/* webpackChunkName: 'users' */ "./users.vue"),
  },
};
</script>