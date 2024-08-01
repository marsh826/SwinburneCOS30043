const Properties = {
  components: {
    paginate: VuejsPaginateNext,
  },
  data() {
    return {
      properties: [],
      perPage: 3,
      currentPage: 1,
      message: "Loading...",
      isLoading: false,
      citySearch: "",
      typeRadio: "All",
    };
  },
  mounted() {
    var self = this;
    var viewApiURL = "resources/apis.php?action=buyDisplay";

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
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
        self.message = err;
      });
  },
  template: `
  <h1>Property Listing</h1>
      <div class="row">
        <div class="col">
          <label for="city"><strong>City</strong></label><br>
          <input v-model="citySearch" type="text" name="city" id="city" placeholder="Search Filter:"><br>
        </div>

        <div class="col">
          <strong><p>Status</p></strong>
          <div class="form-check">
            <input v-model="typeRadio" class="form-check-input" type="radio" name="type" id="status"
              value="All">
            <label for="status">All</label>
          </div>

          <div class="form-check">
            <input v-model="typeRadio" class="form-check-input" type="radio" name="type" id="status" value="Available">
            <label for="status">Available</label>
          </div>

          <div class="form-check">
            <input v-model="typeRadio" class="form-check-input" type="radio" name="type" id="status"
              value="Under Contract">
            <label for="status">Under Contract</label>
          </div>
        </div>
      </div>

      <br><br>

    <div v-for="house in getFilteredAndPaginatedProperties" :key="house.PropertyID">
      <div class="card mb-3 rounded-5">
        <div class="row g-0">
          <div class="col-md-4">
            <img v-bind:src="house.Image" class="img-fluid rounded-start ps-5 img-property" alt="imageHouse">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">ListingPrice: &#36;{{numberWithCommas(house.ListingPrice)}}</h5>

              <p class="card-text" v-if="house.Status == 'Available'"><small class="text-body-secondary">Status: <strong class="text-success">{{house.Status}}</strong></small></p>
              <p class="card-text" v-if="house.Status == 'Under Contract'"><small class="text-body-secondary">Status: <strong class="text-danger">{{house.Status}}</strong></small></p>
              <p class="card-text"><small class="text-body-secondary">Agent: <strong>{{house.FirstName}} {{house.LastName}}</strong></small></p>
              <div class="row">
                <div class="col">
                  <p class="card-text"> <strong>City</strong>: {{house.City}}</p>
                </div>
                <div class="col">
                  <p class="card-text"> <strong>State</strong>: {{house.State}}</p>
                </div>
                <div class="col">
                  <p class="card-text"> <strong>Beds</strong>: {{house.Bedrooms}}</p>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <p class="card-text"> <strong>Address</strong>: {{house.Address}}</p>
                </div>
                <div class="col">
                  <p class="card-text"> <strong>Listing Date</strong>: {{house.ListingDate}}</p>
                </div>
                <div class="col">
                  <p class="card-text"> <strong>Bathrooms</strong>: {{house.Bathrooms}}</p>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <p class="card-text"> <strong>Postal Code</strong>: {{house.PostCode}}</p>
                </div>
                <div class="col">
                  <p class="card-text"> <strong>Square Foot</strong>: {{house.SquareFootage}} m&sup2;</p>
                </div>
                <div class="col">
                  <p class="card-text"> <strong>Garages</strong>: {{house.Garages}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <paginate
      :page-count="getPageCount"
      :page-range="2"
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
    getFilteredAndPaginatedProperties() {
      // Filter properties based on search criteria
      let filteredProperties = this.properties.filter((property) => {
        let matchesCity =
          this.citySearch === "" ||
          property.City.toLowerCase().includes(this.citySearch.toLowerCase());
        let matchesType =
          this.typeRadio === "All" || property.Status.includes(this.typeRadio);
        return matchesCity && matchesType;
      });

      // Calculate pagination indices
      let current = this.currentPage * this.perPage;
      let start = current - this.perPage;

      // Return the filtered and paginated properties
      return filteredProperties.slice(start, current);
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
  },
};
