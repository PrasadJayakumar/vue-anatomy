import { VTable } from '../shared/components/v-table.js';
import { Child } from './child.js';

const template = `
<div class="shadow p-3 mb-4 bg-white rounded" style="width: 800px">
  <h4>Parent-Child Components</h4>
  <child @event-msg="onEventMsg"></child>
  <div id="lifecycle-events">
    <v-table :headers="headers" :items="eventMsgs"></v-table>
  </div>
</div>
`;

// Global Registration
Vue.component('parent-child', {
  // Local Registration
  components: {
    child: Child,
    'v-table': VTable,
  },
  data() {
    return {
      headers: [
        { text: 'Id', value: 'id' },
        { text: 'Message', value: 'msg' },
      ],
      eventMsgs: [],
    };
  },
  methods: {
    onEventMsg(event) {
      this.eventMsgs.push(event);
    },
  },
  template,
});
