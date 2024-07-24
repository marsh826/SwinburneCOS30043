const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: [
    {
      path: "/agents",
      component: Agents,
      name: "agents",
    },
    {
      path: "/buy",
      component: Buy,
      name: "buy",
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
      path: "/sold",
      component: Sold,
      name: "sold",
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
      authenticated: false,
      authenticatedUser: "",
      error: false,
      errorMSG: "",
    };
  },
  mounted() {
    this.$router.replace({ name: "home" });
  },
  method: {
    setAuthenticated(status) {
      this.authenticated = status;
    },
    logout() {
      this.authenticated = false;
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
                  <router-link to="/buy"
                    class="nav-link text-white"
                  >
                    Buy 
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/sold"
                    class="nav-link text-white"
                  >
                    Sold 
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/agents"
                    class="nav-link text-white"
                  >
                    Agents  
                  </router-link>
                </li>
              </ul>
              <div class="d-flex">
                <button class="btn btn-info me-2" type="button">
                  <router-link to="/login"
                    class="link-offset-2 link-underline link-underline-opacity-0"
                  >Login  
                  </router-link>
                </button>
              </div>
            </div>
          </div>
        </nav>
      `,
});

app.component("app-footer", {
  template: `
    <footer class="py-3 bg-primary bg-gradient">
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

app.use(router);
app.mount("#app");

{
  /* <router-link to="/agents"
class="link-offset-2 link-underline link-underline-opacity-0"
>Agents  
</router-link>

{
  path: "/agents",
  component: Agents,
  name: "agents",
}, */
}
