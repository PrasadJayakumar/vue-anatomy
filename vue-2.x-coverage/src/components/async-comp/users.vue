<template>
  <div class="card" style="width: 18rem">
    <div class="card-body" v-for="user in usersData" :key="user.id">
      <h5 class="card-title">{{ user.fullName }}</h5>
      <p class="card-text">{{ user.email }}</p>
    </div>
  </div>
</template>

<script>
import fetchUsersData from "./users-data.js";

export default {
  data() {
    return {
      usersData: fetchUsersData,
    };
  },
};
</script>