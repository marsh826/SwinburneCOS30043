const ViewTable = {
  components: {
    paginate: VuejsPaginateNext,
  },
  data() {
    return {
      message: "Loading...",
      isLoading: false,
      perPage: 6,
      currentPage: 1,
      units: [],
    };
  },
  created() {
    var self = this;
    var viewApiURL = "resources/apis.php/";

    fetch(viewApiURL)
      .then((response) => {
        console.log(response.status);
        return response.json(); //convert json body -> js object
      })
      .then((data) => {
        self.units = data;
      })
      .catch((err) => {
        console.log(err);
        self.message = err;
        this.isLoading = true;
      });
  },
  template: `
    <p v-if="isLoading">{{message}}</p>
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
            <th scope="row">{{u.unitCode}}</th>
            <td>{{u.unitDescription}}</td>
            <td>{{u.unitCreditPoint}}</td>
            <td>{{u.unitType}}</td>
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
      return this.units.sort(function (a, b) {
        if (a.unitCode < b.unitCode) {
          return -1;
        } else if (a.unitCode > b.unitCode) {
          return 1;
        }
        return 0;
      });
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
};
