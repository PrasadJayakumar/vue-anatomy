<template>
  <div id="app" class="container-fluid">
    <h3>Vue.js code coverage app</h3>
    <div class="row mb-2">
      <div class="col-sm-12 col-md-6">
        <template-syntax></template-syntax>
      </div>
      <div class="col-sm-12 col-md-6">
        <computed-watchers></computed-watchers>
      </div>
    </div>
    <div class="row mb-2">
      <div class="col-sm-12 col-md-6">
        <parent-child></parent-child>
      </div>
      <div class="col-sm-12 col-md-6">
        <provider-inject></provider-inject>
      </div>
    </div>
    <div class="row mb-2">
      <div class="col-sm-12 col-md-6">
        <async-comp></async-comp>
      </div>
    </div>
    <warns></warns>
  </div>
</template>

<script>
import TemplateSyntax from '@/components/template-syntax.vue'
import ComputedWatchers from '@/components/computed-watchers.vue'
import ParentChild from '@/components/parent-child/index.vue'
import ProviderInject from '@/components/provider-inject/index.vue'
import AsyncComp from '@/components/async-comp/index.vue'
import Warns from '@/components/warns/index.vue'

export default {
  name: 'App',
  components: {
    TemplateSyntax,
    ComputedWatchers,
    ParentChild,
    ProviderInject,
    AsyncComp,
    Warns
  }
}
</script>
