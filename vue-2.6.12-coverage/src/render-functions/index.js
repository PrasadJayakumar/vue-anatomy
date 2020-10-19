Vue.component('render-functions', {
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
