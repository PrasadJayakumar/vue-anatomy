<template>
  <div id="Async Components" class="card mb-2">
    <div class="card-header">Render Async Component</div>
    <div class="card-body">
      <button class="btn btn-secondary mb-2" @click="showAsynComp = true">
        Load
      </button>
      <div v-if="showAsynComp">
        <users></users>
      </div>
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
