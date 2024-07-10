const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: [
    {
      //String Test route
      path: "/stringtest",
      component: StringTest,
      name: "stringtest",
    },
    {
      //Status Post route
      path: "/statuspost",
      component: StatusPost,
      name: "statuspost",
    },
    {
      //Student Marks route
      path: "/studentmarks",
      component: StudentMarks,
      name: "studentmarks",
    },
  ],
});

const app = Vue.createApp();

app.component("app-navigate", {
  template: `
        <h1>{{header}}</h1>
        <div>
            <ul class="nav justify-content-center">
                <li class="nav-item">
                    <a><router-link :to="{path: '/stringtest'}" class="nav-link">String Test</router-link></a>
                </li>
                
                <li class="nav-item">
                    <a><router-link :to="{path: '/statuspost'}" class="nav-link">Status Post</router-link></a>
                </li>
                
                <li class="nav-item">
                    <a><router-link :to="{path: '/studentmarks'}" class="nav-link">Student Marks</router-link></a>
                </li>
            </ul>
        </div>


    `,
  data() {
    return {
      header: "SPA - VueJS + BootStrap",
      select: "",
    };
  },
});

app.use(router);
app.mount("#app");
