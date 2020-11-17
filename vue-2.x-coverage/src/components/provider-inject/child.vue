<template>
  <div id="child" class="row mb-2 align-items-center">
    <div class="col-sm-12 col-md-6">
      <button-counter-v2
        :key-name="$constants.REGULAR_COUNTER"
        :initial="counter"
        :increment-by="1"
      ></button-counter-v2>
    </div>
  </div>
</template>

<script>
import ButtonCounterV2 from './button-counter-v2'
export default {
  components: {
    ButtonCounterV2
  },
  data() {
    return {
      counter: 0
    }
  }
}
</script>
