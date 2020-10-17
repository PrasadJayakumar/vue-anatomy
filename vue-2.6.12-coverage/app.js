// Performance tracing
Vue.config.performance = true;

// Define a new global component called button-counter
Vue.component("button-counter", {
  name: "button-counter",
  props: {
    initialCounter: Number,
    incrementValue: {
      type: Number,
      default: 1,
      validator: function (value) {
        return value > 0;
      },
    },
  },
  data() {
    return {      
      count: this.initialCounter,
    };
  },
  template:
    '<button v-on:click="count=count+incrementValue">You clicked me {{ count }} times.</button>',
  // Lifecycle Hooks
  beforeCreate() {
    this.$emit("event-msg", `beforeCreate`);
  },
  created() {
    this.$emit("event-msg", `created`);
  },
  beforeMount() {
    this.$emit("event-msg", "beforeMount");
  },
  mounted() {
    this.$emit("event-msg", "mounted");
  },
  beforeUpdate() {
    this.$emit("event-msg", "beforeUpdate");
  },
  updated() {
    this.$emit("event-msg", "updated");
  },
  activated() {
    this.$emit("event-msg", "activated");
  },
  deactivated() {
    this.$emit("event-msg", "deactivated");
  },
  beforeDestroy() {
    this.$emit("event-msg", "beforeDestroy");
  },
  destroyed() {
    this.$emit("event-msg", "destroyed");
  },
});

new Vue({
  name: "demo",
  el: "#demo",

  data: {
    bookUrl: '',
    rawHtml:
      "<span style='color:red'>Don't use v-html on user provided data</span>",
    message: "Hello Vue",
    firstName: "Prasad",
    lastName: "Jayakumar",

    eventMsgs: [],

    counter: 5,
    buttonCounter: "show",
  },
  computed: {
    reversedMessage() {
      // `this` points to the vm instance
      return this.message.split("").reverse().join("");
    },
    fullName: {
      // getter
      get() {
        return this.firstName + " " + this.lastName;
      },
      // setter
      set(newValue) {
        var names = newValue.split(" ");
        this.firstName = names[0];
        this.lastName = names[names.length - 1];
      },
    },
  },
  methods: {
    suggestABook() {
      this.bookUrl = "https://recommendmeabook.com/";
    },
    onEventMsg(id, msg) {
      this.eventMsgs.push({ id, msg });
    },
  },
});
