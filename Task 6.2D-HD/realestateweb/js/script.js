const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: [
    {
      path: "/agents",
      component: Agents,
      name: "agents",
    },
    {
      path: "/properties",
      component: Properties,
      name: "properties",
    },
    {
      path: "/dashboard",
      component: Dashboard,
      name: "dashboard",
    },
    {
      path: "/home",
      component: Home,
      name: "home",
    },
    {
      path: "/login",
      component: Login,
      name: "login",
    },
    {
      path: "/logout",
      name: "logout",
    },
  ],
});

const app = Vue.createApp({
  data: function () {
    return {
      isAuthenticated: false,
      authenticatedUser: "Guest",
      error: false,
      errorMSG: "",
    };
  },
  mounted() {
    if (!this.isAuthenticated) {
      this.$router.replace({ name: "home" });
    }
  },
  methods: {
    setAuthenticated(status) {
      this.isAuthenticated = status;
    },
    logout() {
      this.isAuthenticated = false;
      this.$router.push({ name: "login" });
    },
  },
});

app.component("app-navbar", {
  template: `
        <nav class="navbar navbar-expand-lg bg-primary">
          <div class="container-fluid">
            <a class="navbar-brand text-white" href="#">IAGO</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
              aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0"> 
                <li class="nav-item">
                  <router-link to="/home"
                    class="nav-link text-white"
                  >
                    Home
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/properties"
                    class="nav-link text-white"
                  >
                    Properties
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/agents"
                    class="nav-link text-white"
                  >
                    Agents  
                  </router-link>
                </li>
                <li class="nav-item" v-if="isAuthenticated">
                  <router-link to="/dashboard"
                    class="nav-link text-white"
                  >
                    Dashboard
                  </router-link>
                </li>
              </ul>
            </div>
            <div class="d-flex" v-if="isAuthenticated">
                <button class="btn btn-info me-2" type="button" v-on:click="logout()">
                  Logout 
                </button>
            </div>
            <div class="d-flex" v-else>
                <button class="btn btn-info me-2" type="button">
                  <router-link to="/login"
                    class="link-offset-2 link-underline link-underline-opacity-0"
                  >Login  
                  </router-link>
                </button>
            </div>
          </div>  
        </nav>
      `,
  computed: {
    isAuthenticated() {
      console.log(this.$root.isAuthenticated);
      console.log(this.$root.authenticatedUser);
      return this.$root.isAuthenticated;
    },
  },
  methods: {
    logout() {
      this.$root.logout();
      this.$root.authenticatedUser = "Guest";
    },
  },
});

app.component("app-footer", {
  template: `
    <footer class="py-3 bg-primary bg-gradient mt-auto">
        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
          <li class="nav-item">
            <router-link to="/home" class="nav-link text-white">
              Home
            </router-link>
          </li>
          <li class="nav-item"><a href="#" class="nav-link px-2 text-white">FAQs</a></li>
          <li class="nav-item"><a href="#" class="nav-link px-2 text-white">About</a></li>
        </ul>
        <p class="text-center text-white">©2024 IAGO Inc.</p>
    </footer>
    `,
});

app.component("app-view", ViewProperties);
app.component("app-insert", InsertProperties);
app.component("app-delete", DeleteProperties);
app.component("app-update", UpdateProperties);

app.use(router);
app.mount("#app");
