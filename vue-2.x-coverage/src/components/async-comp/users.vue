<template>
  <div class="card-group">
    <div v-for="user in usersData" :key="user.id" class="card">
      <div class="card-body">
        <h5 class="card-title">{{ user.fullName }}</h5>
        <p class="card-text">{{ user.email }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import fetchUsersData from './users-data.js'

export default {
  data() {
    return {
      usersData: fetchUsersData
    }
  }
}
</script>
