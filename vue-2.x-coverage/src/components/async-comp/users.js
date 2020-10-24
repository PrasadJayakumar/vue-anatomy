const template = `
<div class="card" style="width: 18rem;">
  <div class="card-body" v-for="user in users" :key="user.id">
    <h5 class="card-title">{{user.fullName}}</h5>
    <p class="card-text">{{user.email}}</p>
  </div>
</div>
`;

Vue.component('users', (resolve, reject) => {
  setTimeout(async () => {
    let usersData = await import('./users-data.js');
    resolve({
      data() {
        return {
          users: usersData.default.data,
        };
      },
      template,
    });
  }, 500);
});
