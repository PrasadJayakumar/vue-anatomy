import { AnchoredHeading } from './anchored-heading.js';

const template = `
<div class="shadow p-3 mb-4 bg-white rounded" style="width: 800px">
  <anchored-heading :level="5">
    <template v-slot:default> {{ "render function" | title-case }} </template>
    <template v-slot:sub-heading>child elements included</template>
  </anchored-heading>
</div>
`;

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
  template,
});
