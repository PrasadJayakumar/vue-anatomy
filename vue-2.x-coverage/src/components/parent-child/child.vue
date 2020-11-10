<template>
  <div id="child">
    <div>
      <input
        id="show-button-counter"
        v-model="action"
        name="button-counter"
        type="radio"
        value="show"
      />
      <label for="show-button-counter">Show</label>
      <input
        id="hide-button-counter"
        v-model="action"
        name="button-counter"
        type="radio"
        value="hide"
      />
      <label for="hide-button-counter">Hide</label>
      <input
        id="destroy-button-counter"
        v-model="action"
        name="button-counter"
        type="radio"
        value="destroy"
      />
      <label for="destroy-button-counter">Destroy</label>
    </div>
    <div v-if="action != 'destroy'">
      <transition name="fade">
        <keep-alive>
          <button-counter
            v-if="action == 'show'"
            :key-name="$constants.KEEP_ALIVE_COUNTER"
            :initial="counter"
            :increment-by="1"
            v-on="$listeners"
          ></button-counter>
        </keep-alive>
      </transition>
      <transition>
        <component
          :is="'button-counter'"
          v-if="action == 'show'"
          :key-name="$constants.REGULAR_COUNTER"
          v-bind="{ initial: 5, incrementBy: 2 }"
          v-on="$listeners"
        >
        </component>
      </transition>
    </div>
  </div>
</template>

<script>
import ButtonCounter from '~/shared/components/button-counter.vue'
export default {
  components: {
    'button-counter': ButtonCounter
  },
  data() {
    return {
      counter: 5,
      action: 'show'
    }
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
