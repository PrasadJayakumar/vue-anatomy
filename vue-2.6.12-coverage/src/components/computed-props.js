Vue.component('computed-props', {
  data() {
    return {
      firstName: 'prasad',
      lastName: 'jayakumar',
    };
  },
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName;
    },
  },
  template: `
    <div id="computed-props">
      <h2>Computed Properties</h2>
      <div id="basic-examples" v-once>
        <p>Full Name (v-once): {{ fullName | titleCase}}</p>
      </div>
      <div id="computed-vs-watched">
        <input v-model="firstName" placeholder="first name" />
        <input v-model="lastName" placeholder="last name" />
        <p>Full Name: {{ fullName }}</p>
      </div>
    </div>
  `,
});
