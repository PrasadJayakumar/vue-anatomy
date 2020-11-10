<template>
  <div id="Async Components" class="shadow p-3 mb-4 bg-white rounded">
    <button @click="showAsynComp = true">Render Async Component</button><br />
    <div v-if="showAsynComp">
      <users></users>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AsyncComp',
  components: {
    users: () => import(/* webpackChunkName: 'users' */ './users.vue')
  },
  data() {
    return {
      showAsynComp: false
    }
  }
}
</script>
