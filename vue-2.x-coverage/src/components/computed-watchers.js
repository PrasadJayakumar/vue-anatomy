const template = `
<div
  id="computed-watchers"
  class="shadow p-3 mb-4 bg-white rounded"
>
  <h4>Computed Properties and Watchers</h4>
  <p v-once>Full Name (v-once): {{ fullName | titleCase}}</p>
  <p>Full Name: {{ fullName }}</p>
  <div class="form-row">
    <div class="col-md-4 mb-3">
      <input v-model="firstName" placeholder="first name" />
      <span class="invalid-feedback" v-bind:class="{'d-block': !isFnValid}">
        Please provide a valid name
      </span>
    </div>
    <div class="col-md-4 mb-3">
      <input v-model="lastName" placeholder="last name" />
      <span class="invalid-feedback" v-bind:style="lnStyle">
        Please provide a valid name
      </span>
    </div>
  </div>
</div>
`;

Vue.component('computed-watchers', {
  data() {
    return {
      firstName: 'prasad',
      isFnValid: true,

      lastName: 'jayakumar',
      lnStyle: { display: 'none !important' },
    };
  },
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName;
    },
  },
  watch: {
    firstName(value) {
      this.firstName = value;
      this.isFnValid = this.validateName(value);
    },
    lastName(value) {
      this.lastName = value;
      if (this.validateName(value))
        this.lnStyle = { display: 'none !important' };
      else this.lnStyle = { display: 'block !important' };
    },
  },
  methods: {
    validateName(value) {
      let regex = /^[a-zA-Z]+$/;
      return regex.test(value);
    },
  },
  template,
});
