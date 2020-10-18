var app = new Vue({
  name: 'demo',
  el: '#demo',

  data: {
    bookUrl: '',
    rawHtml:
      "<span style='color:red'>Don't use v-html on user provided data</span>",
    firstName: 'Prasad',
    lastName: 'Jayakumar',

    eventMsgs: [],

    counter: 5,
    buttonCounter: 'show',
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
    suggestABook() {
      this.bookUrl = 'https://recommendmeabook.com/';
    },
    onEventMsg(id, msg) {
      this.eventMsgs.push({ id, msg });
    },
  },
});
