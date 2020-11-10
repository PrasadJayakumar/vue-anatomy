<template>
  <div id="app" class="container-fluid" style="width: 700px">
    <h3>Vue.js code coverage app</h3>
    <template-syntax></template-syntax>
    <computed-watchers></computed-watchers>
    <parent-child></parent-child>
    <async-comp></async-comp>
    <warns></warns>
  </div>
</template>

<script>
import TemplateSyntax from '~/components/template-syntax.vue'
import ComputedWatchers from '~/components/computed-watchers.vue'
import ParentChild from '~/components/parent-child/index.vue'
import AsyncComp from '~/components/async-comp/index.vue'
import Warns from '~/components/warns/index.vue'

export default {
  name: 'App',
  components: {
    TemplateSyntax,
    ComputedWatchers,
    ParentChild,
    AsyncComp,
    Warns
  }
}
</script>
