// Filter -- deprecated in Vue 3
Vue.filter('titleCase', function (value) {
  if (!value) return '';
  values = value.toString().split(' ');
  return values.map((v) => v.charAt(0).toUpperCase() + v.slice(1)).join(' ');
});

var app = new Vue({
  name: 'demo',
  el: '#demo',

  data() {
    return {
      rawHtml:
        "<span style='color:red'>Don't use v-html on user provided data</span>",
      firstName: 'prasad',
      lastName: 'jayakumar',

      eventMsgs: [],

      counter: 5,
      buttonCounter: 'show',
      warn: true,
    };
  },
  computed: {
    fullName: {
      // getter
      get() {
        return this.firstName + ' ' + this.lastName;
      },
      // setter
      set(newValue) {
        var names = newValue.split(' ');
        this.firstName = names[0];
        this.lastName = names[names.length - 1];
      },
    },
  },
  methods: {
    onEventMsg(id, msg) {
      this.eventMsgs.push({ id, msg });
    },
  },
});
