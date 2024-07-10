function compareFn(a, b) {
  if (a.name < b.name) {
    return -1;
  } else if (a.name > b.name) {
    return 1;
  }
  return 0;
}

const StudentMarks = {
  components: {
    paginate: VuejsPaginateNext,
  },
  data: function () {
    return {
      title: "Data Table Pagination VueJS",
      message: "Loading...",
      isLoading: false,
      perPage: 5,
      currentPage: 1,
      units: [],
    };
  },
  mounted() {
    var request = this;
    fetch("./marks.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        request.units = data;
      })
      .catch((err) => {
        request.message = err;
        request.isLoading = true;
      });
  },
  template: `
      <div class="container">
        <p v-if="isLoading">{{message}}</p>
        <h1>{{title}}</h1>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Student Name</th>
                    <th scope="col">Marks</th>
                </tr>
            </thead>
            <tbody v-for="u in getItems">
                <tr>
                    <td>{{u.name}}</td>
                    <td>{{u.marks}}</td>
                </tr>
            </tbody>
        </table>
        <paginate
            :page-count="getPageCount"
            :page-range="5"
            :margin-pages="1"
            :click-handler="clickCallBack"
            :prev-text=" 'Previous' "
            :next-text=" 'Next' "
            :container-class="'pagination'"
            :page-class="'page-item'"
        >
        </paginate>
      </div>
    `,
  computed: {
    sortedUnits: function () {
      return this.units.sort(compareFn);
    },
    getItems: function () {
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
};
