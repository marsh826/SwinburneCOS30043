//Defining tthe list of units in an array
const units = [
  {
    code: "ICT10001",
    desc: "Problem Solving with ICT",
    cp: 12.5,
    type: "Core",
  },
  {
    code: "COS10005",
    desc: "Web Development",
    cp: 12.5,
    type: "Core",
  },
  {
    code: "INF10003",
    desc: "Introduction to Business Information Systems",
    cp: 12.5,
    type: "Core",
  },
  {
    code: "INF10002",
    desc: "Database Analysis and Design",
    cp: 12.5,
    type: "Core",
  },
  {
    code: "COS10009",
    desc: "Introduction to Programming",
    cp: 12.5,
    type: "Core",
  },
  {
    code: "INF30029",
    desc: "Information Technology Project Managemenet",
    cp: 12.5,
    type: "Core",
  },
  {
    code: "ICT30005",
    desc: "Professional Issues in Information Technology",
    cp: 12.5,
    type: "Core",
  },
  {
    code: "ICT30001",
    desc: "Information Technology Project",
    cp: 12.5,
    type: "Core",
  },
];

// Creating a component for the units to pass in the router
const Unit = {
  data() {
    return {
      units,
    };
  },
  //define the template for the route results
  template: `<div v-for="unit in filteredUnits">
    <h1>Unit Code: {{unit.code}}</h1>
    <ul>
        <li><strong>{{unit.code}}</strong></li>
        <li><strong>{{unit.desc}}</strong></li>
        <li><strong>{{unit.cp}}</strong></li>
        <li><strong>{{unit.type}}</strong></li>
    </ul>
  </div>`,
  computed: {
    //filter function (returns the selected unit object)
    filteredUnits: function () {
      return this.units.filter((unit) =>
        unit.code.toLowerCase().match(this.$route.params.id.toLowerCase())
      );
    },
  },
};

// Creating the VueRouter
const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: [
    {
      path: "/unit/:id",
      component: Unit,
    },
  ], //Defining path and the component
});

// Creating new app instance
const app = Vue.createApp({});

//Creating component for the lookup table
app.component("app-lookup2", {
  data: function () {
    return {
      units,
    };
  },
  //defining template for the app
  template: `<h1>Unit Information System</h1>
  <div class="table-responsive">
          <table class="table table-striped table-hover">
            <thead>
              <tr>
                <th>Unit Code</th>
                <th>Unit Description</th>
                <th>More Infos</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="unit in units" :key="unit.code">
                <td>{{ unit.code }}</td>
                <td>{{ unit.desc }}</td>
                <td>
                    <router-link :to="{ path:'/unit/'+unit.code}">
                        Show Details
                    </router-link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>`,
});

//use router, mount to app
app.use(router);
app.mount("#app");
