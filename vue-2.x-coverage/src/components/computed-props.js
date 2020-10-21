const template = `
<div
  id="computed-props"
  class="shadow p-3 mb-4 bg-white rounded"
  style="width: 800px"
>
  <h4>Computed Properties</h4>
  <p v-once>Full Name (v-once): {{ fullName | titleCase}}</p>
  <p>Full Name: {{ fullName }}</p>
  <input v-model="firstName" placeholder="first name" />
  <input v-model="lastName" placeholder="last name" />
</div>
`;

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
  template,
});
