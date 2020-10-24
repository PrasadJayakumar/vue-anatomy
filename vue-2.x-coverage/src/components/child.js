import { ButtonCounter } from '../shared/components/button-counter.js';

const template = `
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
          :keyName="$constants.KEEP_ALIVE_COUNTER"
          :initial="counter"
          :increment-by="1"
          v-on="$listeners"
          v-if="action=='show'"
        ></button-counter>
      </keep-alive>
    </transition>
    <transition>
      <component 
        :keyName="$constants.REGULAR_COUNTER"      
        v-bind:is="'button-counter'" 
        v-bind="{initial: 5, incrementBy: 2}"
        v-on="$listeners"
        v-if="action=='show'"
      >
      </component>
    </transition>
  </div>
</div>
`;

export const Child = {
  // Local Registration
  components: {
    'button-counter': ButtonCounter,
  },
  data() {
    return {
      counter: 5,
      action: 'show',
    };
  },
  template,
};
