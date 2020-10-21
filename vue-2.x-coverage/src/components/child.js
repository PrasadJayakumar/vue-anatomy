import { ButtonCounter } from '../shared/components/button-counter.js';

const template = `
<div id="child">
  <span>
    <input
      id="show-button-counter"
      v-model="buttonCounter"
      name="button-counter"
      type="radio"
      value="show"
    />
    <label for="show-button-counter">Show</label>
    <input
      id="hide-button-counter"
      v-model="buttonCounter"
      name="button-counter"
      type="radio"
      value="hide"
    />
    <label for="hide-button-counter">Hide</label>
  </span>
  <transition name="fade">
    <keep-alive>
      <button-counter
        keyName="keep-alive-counter"
        :initial="counter"
        :increment-by="1"
        v-on="$listeners"
        v-if="buttonCounter=='show'"
      ></button-counter>
    </keep-alive>
  </transition>
  <transition>
    <button-counter
      keyName="regular-counter"
      :initial="counter"
      :increment-by="2"
      v-on="$listeners"
      v-if="buttonCounter=='show'"
      #fff
    ></button-counter>
  </transition>
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
      buttonCounter: 'show',
    };
  },
  template,
};
