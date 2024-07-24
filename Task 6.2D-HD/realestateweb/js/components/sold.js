const Sold = {
  data() {
    return {
      properties: [],
    };
  },
  created() {
    var self = this;
    var viewApiURL = "resources/apis.php?action=soldDisplay";

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
    <h1>Properties Under Contract</h1>
      <div v-for="house in properties" :key="house.PropertyID">
      <div class="card mb-3 rounded-5">
        <div class="row g-0">
          <div class="col-md-4">
            <img :src="house.Image.url" class="img-fluid rounded-start ps-5" alt="imageHouse">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">ListingPrice: &#36;{{house.ListingPrice}}</h5>
              <p class="card-text"><small class="text-body-secondary">Status: <strong class="text-danger">{{house.Status}}</strong></small></p>
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
    `,
};
