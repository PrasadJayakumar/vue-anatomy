<template>
  <div id="computed-watchers" class="card h-100">
    <div class="card-header">Computed Properties and Watchers</div>
    <div class="card-body">
      <p v-once>Full Name (v-once): {{ fullName | titleCase }}</p>
      <p>Full Name: {{ fullName }}</p>
      <div class="row">
        <div class="col-sm-4">
          <input v-model.trim="firstName" placeholder="first name" />
          <span class="invalid-feedback" :class="{ 'd-block': !isFnValid }">
            Please provide a valid name
          </span>
        </div>
        <div class="col-sm-4">
          <input v-model.trim="lastName" placeholder="last name" />
          <span class="invalid-feedback" :style="lnStyle">
            Please provide a valid name
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComputedWatchers',
  data() {
    return {
      firstName: 'prasad',
      isFnValid: true,

      lastName: 'jayakumar',
      lnStyle: { display: 'none !important' }
    }
  },
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName
    }
  },
  watch: {
    firstName(value) {
      this.firstName = value
      this.isFnValid = this.validateName(value)
    },
    lastName(value) {
      this.lastName = value
      if (this.validateName(value))
        this.lnStyle = { display: 'none !important' }
      else this.lnStyle = { display: 'block !important' }
    }
  },
  methods: {
    validateName(value) {
      let regex = /^[a-zA-Z]+$/
      return regex.test(value)
    }
  }
}
</script>
