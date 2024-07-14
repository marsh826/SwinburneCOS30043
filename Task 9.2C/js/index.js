const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: [
    {
      path: "/login",
      component: Login,
      name: "login",
    },
    {
      path: "/logout",
      name: "logout",
    },
    {
      path: "/dashboard",
      component: Dashboard,
      name: "dashboard",
    },
  ],
});

const app = Vue.createApp({
  data: function () {
    return {
      header: "Single Page App - Part 2",
      authenticated: false,
      authenticatedUser: "",
      error: false,
      errorMSG: "",
    };
  },
  mounted() {
    if (!this.authenticated) {
      this.$router.replace({ name: "login" });
    }
  },
  methods: {
    setAuthenticated(status) {
      this.authenticated = status;
    },
    logout() {
      this.authenticated = false;
    },
  },
});

app.component("app-nav", {
  template: `
        <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand">
                    <router-link to="/login" v-on:click="logout()" replace>Logout</router-link>
                </a>
            </div>
        </nav> 
  `,
  methods: {
    logout() {
      this.$root.logout();
    },
  },
});

app.component("app-view", ViewTable);
app.component("app-insert", InsertData);
app.component("app-delete", DeleteData);
app.component("app-update", UpdateData);

app.use(router);
app.mount("#app");
