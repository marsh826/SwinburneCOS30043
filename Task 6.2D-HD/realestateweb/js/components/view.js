const ViewProperties = {
  components: {
    paginate: VuejsPaginateNext,
  },
  data() {
    return {
      message: "Loading...",
      isLoading: false,
      perPage: 6,
      currentPage: 1,
      properties: [],
    };
  },
  created() {
    this.loadDataView();
    // Auto Refresh View Data Table every 3 seconds
    setInterval(this.loadDataView, 3000);
  },
  template: `
    <p v-if="isLoading">{{message}}</p>
        <table class="table table-responsive">
        <thead>
            <tr>
            <th scope="col">PropertyID</th>
            <th scope="col">Location</th>
            <th scope="col">Listing Price</th>
            <th scope="col">Listing Date</th>
            <th scope="col">Attributes</th>
            <th scope="col">Status</th>
            <th scope="col">Image</th>
            <th scope="col">Agent</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="property in getProperties" :key="property.PropertyID">
                <td><strong>{{property.PropertyID}}</strong></td>
                <td>
                    <ul>
                        <li><strong>Address:</strong> {{property.Address}}</li>
                        <li><strong>City:</strong> {{property.City}}</li>
                        <li><strong>State:</strong> {{property.State}}</li>
                        <li><strong>Post Code:</strong>{{property.PostCode}}</li>
                    </ul>
                </td>
                <td>&#36;{{numberWithCommas(property.ListingPrice)}}</td>
                <td>{{property.ListingDate}}</td>
                <td>
                    <ul>
                        <li><strong>Square Footage:</strong> {{property.SquareFootage}} m&sup2;</li>
                        <li><strong>Bedrooms:</strong> {{property.Bedrooms}}</li>
                        <li><strong>Bathrooms:</strong> {{property.Bathrooms}}</li>
                        <li><strong>Garages:</strong> {{property.Garages}}</li>
                    </ul>
                </td>
                <td>{{property.Status}}</td>
                <td>
                    <img v-bind:src="property.Image" class="img-fluid rounded-start ps-5 img-property" alt="imageHouse">
                </td>
                <td>{{property.FirstName}} {{property.LastName}}</td>
            </tr>
        </tbody>
        </table>
        <paginate
            :page-count="getPageCount"
            :page-range="6"
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
    getProperties: function () {
      let current = this.currentPage * this.perPage;
      let start = current - this.perPage;
      return this.properties.slice(start, current);
    },
    getPageCount: function () {
      return Math.ceil(this.properties.length / this.perPage);
    },
  },
  methods: {
    clickCallBack: function (pageNum) {
      this.currentPage = Number(pageNum);
    },
    numberWithCommas: function (x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    loadDataView: function(){
      var self = this;
      var viewApiURL = "resources/apis.php?action=dashboardDisplay";

      fetch(viewApiURL, {
        method: "GET",
        redirect: "error",
        credentials: "include",
      })
        .then((response) => {
          console.log(response.status);
          return response.json(); //convert json body -> js object
        })
        .then((data) => {
          self.properties = data;
        })
        .catch((err) => {
          console.log(err);
          self.message = err;
          this.isLoading = true;
        });
    }
  },
};
