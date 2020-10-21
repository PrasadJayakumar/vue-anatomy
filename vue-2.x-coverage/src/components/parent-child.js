import { ButtonCounter } from '../shared/components/button-counter.js';
import { VTable } from '../shared/components/v-table.js';

const template = `
<div class="shadow p-3 mb-4 bg-white rounded" style="width: 800px">
  <div id="parent-child">
    <h4>Parent-Child Components</h4>
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
          :initial="counter"
          :increment-by="1"
          @event-msg="onEventMsg('keep-alive-counter',$event)"
          v-if="buttonCounter=='show'"
        ></button-counter>
      </keep-alive>
    </transition>
    <transition>
      <button-counter
        :initial="counter"
        :increment-by="2"
        @event-msg="onEventMsg('regular-counter',$event)"
        v-if="buttonCounter=='show'"
        #fff
      ></button-counter>
    </transition>
  </div>
  <div id="lifecycle-events">
    <v-table :headers="headers" :items="eventMsgs"></v-table>
  </div>
</div>
`;

// Global Registration
Vue.component('parent-child', {
  // Local Registration
  components: {
    'button-counter': ButtonCounter,
    'v-table': VTable,
  },
  data() {
    return {
      headers: [
        { text: 'Id', value: 'id' },
        { text: 'Message', value: 'msg' },
      ],
      eventMsgs: [],
      counter: 5,
      buttonCounter: 'show',
    };
  },
  methods: {
    onEventMsg(id, msg) {
      this.eventMsgs.push({ id, msg });
    },
  },
  template,
});
