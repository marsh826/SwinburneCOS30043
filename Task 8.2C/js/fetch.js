const app = Vue.createApp();

function compareFn(a, b) {
  if (a.code < b.code) {
    return -1;
  } else if (a.code > b.code) {
    return 1;
  }
  return 0;
}

app.component("unit-paginate", {
  components: {
    paginate: VuejsPaginateNext,
  },
  data() {
    return {
      message: "Loading...",
      isLoading: false,
      header: "Units Table with Pagination",
      perPage: 6,
      currentPage: 1,
      units: [],
    };
  },
  mounted() {
    fetch("./units.json")
      .then((response) => {
        console.log(response.status);
        return response.json(); //convert json body -> js object
      })
      .then((data) => {
        this.units = data;
      })
      .catch((err) => {
        console.log(err);
        this.message = err;
        this.isLoading = true;
      });
  },
  template: `
    <p v-if="isLoading">{{message}}</p>
      <h1>{{header}}</h1>
      <table class="table table-responsive">
        <thead>
          <tr>
            <th scope="col">Code</th>
            <th scope="col">Description</th>
            <th scope="col">Credit Points</th>
            <th scope="col">Type</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="u in getUnits" :key="u.code">
            <!-- for units -->
            <th scope="row">{{u.code}}</th>
            <td>{{u.desc}}</td>
            <td>{{u.cp}}</td>
            <td>{{u.type}}</td>
          </tr>
        </tbody>
      </table>
      <paginate
          :page-count="getPageCount"
          :page-range="4"
          :margin-pages="1"
          :click-handler="clickCallBack"
          :prev-text=" 'Previous' "
          :next-text=" 'Next' "
          :container-class="'pagination'"
          :page-class="'page-item'"
        >
        </paginate>
  `,
  computed: {
    sortedUnits: function () {
      return this.units.sort(compareFn);
    },
    getUnits: function () {
      let current = this.currentPage * this.perPage;
      let start = current - this.perPage;
      return this.sortedUnits.slice(start, current);
    },
    getPageCount: function () {
      return Math.ceil(this.sortedUnits.length / this.perPage);
    },
  },
  methods: {
    clickCallBack: function (pageNum) {
      this.currentPage = Number(pageNum);
    },
  },
});

app.mount("#app");
