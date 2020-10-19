import { AnchoredHeading } from './anchored-heading.js';

// Global Registration
Vue.component('render-functions', {

  // Local Registration
  components: {
    'anchored-heading': AnchoredHeading,
  },
  data() {
    return {
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
  template: `
    <div>
      <anchored-heading :level="4">
        <template v-slot:default>
          {{ "render function" | title-case }}
        </template>
        <template v-slot:sub-heading>child elements included</template>
      </anchored-heading>
    </div>
  `,
});
