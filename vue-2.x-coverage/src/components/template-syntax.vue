<template>
  <div id="template-syntax" class="card h-100">
    <div class="card-header">Template Syntax</div>
    <div class="card-body">
      <p>Using mustaches: {{ rawHtml }}</p>
      <p>Using v-html directive: <span v-html="rawHtml"></span></p>
      <p>Simple JS expressions are {{ 1 + 2 ? 'OK' : 'NOT OK' }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TemplateSyntax',
  data() {
    return {
      rawHtml:
        "<span style='color:red'>Don't use v-html on user provided data</span>"
    }
  }
}
</script>
