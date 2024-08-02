const UpdateProperties = {
  template: `
  <div class="row">
      <div class="col">
      <div class="card mx-auto" max-width="90%">
          <div class="card-body">
              <form @submit.prevent="checkForm">
                  <div class="mb-3">
                    <label for="propertyID" class="form-label"><strong>PropertyID</strong></label>
                    <input type="text" class="form-control" id="propertyID" v-model="propertyID">
                    <div v-if="errorsPropertyID" class="form-text text-danger">
                      <p>{{ errorsPropertyID }}</p>
                    </div>
                  </div>

                  <div class="mb-3">
                    <label for="address" class="form-label"><strong>Address</strong></label>
                    <input type="text" class="form-control" id="address" v-model="address">
                    <div v-if="errorsAddress" class="form-text text-danger">
                      <p>{{ errorsAddress }}</p>
                    </div>
                  </div>

                  <div class="mb-3">
                    <label for="city" class="form-label"><strong>City</strong></label>
                    <input type="text" class="form-control" id="city" v-model="city">
                    <div v-if="errorsCity" class="form-text text-danger">
                      <p>{{ errorsCity }}</p>
                    </div>
                  </div> 

                  <div class="mb-3">
                    <label for="state" class="form-label"><strong>State</strong></label>
                    <input type="text" class="form-control" id="state" v-model="state">
                    <div v-if="errorsState" class="form-text text-danger">
                      <p>{{ errorsState }}</p>
                    </div>
                  </div>

                  <div class="mb-3">
                    <label for="postcode" class="form-label"><strong>Post Code</strong></label>
                    <input type="text" class="form-control" id="postcode" v-model="postcode">
                    <div v-if="errorsPostCode" class="form-text text-danger">
                      <p>{{ errorsPostCode }}</p>
                    </div>
                  </div>

                  <div class="mb-3">
                    <label for="price" class="form-label"><strong>Listing Price</strong></label>
                    <input type="text" class="form-control" id="price" v-model="price">
                    <div v-if="errorsPrice" class="form-text text-danger">
                      <p>{{ errorsPrice }}</p>
                    </div>
                  </div>

                  <div class="mb-3">
                    <label for="squareM2" class="form-label"><strong>Square Footage</strong></label>
                    <input type="text" class="form-control" id="squareM2" v-model="squareM2">
                    <div v-if="errorsSquareM2" class="form-text text-danger">
                      <p>{{ errorsSquareM2 }}</p>
                    </div>
                  </div>

                  <div class="mb-3">
                    <label for="bedrooms" class="form-label"><strong>Bedrooms</strong></label>
                    <input type="text" class="form-control" id="bedrooms" v-model="bedrooms">
                    <div v-if="errorsBedrooms" class="form-text text-danger">
                      <p>{{ errorsBedrooms }}</p>
                    </div>
                  </div>

                  <div class="mb-3">
                    <label for="bathrooms" class="form-label"><strong>Bathrooms</strong></label>
                    <input type="text" class="form-control" id="bathrooms" v-model="bathrooms">
                    <div v-if="errorsBathrooms" class="form-text text-danger">
                      <p>{{ errorsBathrooms }}</p>
                    </div>
                  </div>

                  <div class="mb-3">
                    <label for="garages" class="form-label"><strong>Garages</strong></label>
                    <input type="text" class="form-control" id="garages" v-model="garages">
                    <div v-if="errorsGarages" class="form-text text-danger">
                      <p>{{ errorsGarages }}</p>
                    </div>
                  </div>

                  <div class="mb-3">
                    <label for="status"><strong>Availability Status:</strong></label>
                    <select class="form-select" name="status" id="status" v-model="status">
                        <option value="Availability">Availability</option>
                        <option value="Under Contract">Under Contract</option>
                    </select>
                  </div>
                    <div v-if="errorsStatus" class="form-text text-danger">
                      <p>{{ errorsStatus }}</p>
                    </div>

                  <div class="mb-3">
                    <label for="image" class="form-label"><strong>Image</strong></label>
                    <input type="file" class="form-control" id="image" v-on:change="handleFileUpload">
                    <div v-if="errorsImage" class="form-text text-danger">
                      <p>{{ errorsImage }}</p>
                    </div>
                  </div>  

                  <p class="form-label"><strong>Agent</strong></p>
                  <div class="form-check">
                      <input class="form-check-input" type="radio" name="agentRadio" id="danni" v-model="agentID" value="1">
                      <label class="form-check-label" for="danni">Danni Korda</label>
                  </div>
                  <div class="form-check">
                      <input class="form-check-input" type="radio" name="agentRadio" id="cindee" v-model="agentID" value="2">
                      <label class="form-check-label" for="cindee">Cindee Raubenheim</label>
                  </div>
                  <div class="form-check">
                      <input class="form-check-input" type="radio" name="agentRadio" id="krystel" v-model="agentID" value="3">
                      <label class="form-check-label" for="krystel">Krystel Dobbson</label>
                  </div>
                  <div class="form-check">
                      <input class="form-check-input" type="radio" name="agentRadio" id="eduino" v-model="agentID" value="4">
                      <label class="form-check-label" for="eduino">Eduino Kuna</label>
                  </div>
                  <div class="form-check">
                      <input class="form-check-input" type="radio" name="agentRadio" id="nealson" v-model="agentID" value="5">
                      <label class="form-check-label" for="nealson">Nealson Morville</label>
                  </div>
                  <div class="form-check">
                      <input class="form-check-input" type="radio" name="agentRadio" id="charlena" v-model="agentID" value="6">
                      <label class="form-check-label" for="charlena">Charlena Castelyn</label>
                  </div>
                  <div v-if="errorsAgentID" class="form-text text-danger">
                      <p>{{ errorsAgentID }}</p>
                  </div>                                         
                  <button type="submit" class="btn btn-primary">Submit</button>
                    <div v-if="messages" class="alert alert-secondary mt-2" role="alert">
                        <p v-response="responseStatus">{{ messages }}</p> 
                    </div>
              </form>
          </div>
      </div>
      </div>
  </div>
`,
  data: function () {
    return {
      //PRESET DATA for testing insert function
      // propertyID: "26",
      // address: "31 Ann Moore",
      // city: "Ballarat",
      // state: "Victoria",
      // postcode: "3040",
      // price: "200000",
      // squareM2: "3298",
      // bedrooms: "3",
      // bathrooms: "2",
      // garages: "2",
      // status: "Under Contract",
      // image: null,
      // agentID: "5",
      // messages: "",

      // HTTP response code: 
      responseStatus: "",

      //EMPTY DATA for testing form validation
      // propertyID: "",
      address: "",
      city: "",
      state: "",
      postcode: "",
      price: "",
      squareM2: "",
      bedrooms: "",
      bathrooms: "",
      garages: "",
      status: "",
      image: null,
      agentID: "",
      messages: "",

      errorsPropertyID: "",
      errorsAddress: "", //error list
      errorsCity: "",
      errorsState: "",
      errorsPostCode: "",
      errorsPrice: "",
      errorsSquareM2: "",
      errorsBedrooms: "",
      errorsBathrooms: "",
      errorsGarages: "",
      errorsStatus: "",
      errorsImage: "",
      errorsAgentID: "",
    };
  },
  methods: {
    handleFileUpload(event) {
      this.image = event.target.files[0];
    },
    checkForm() {
      this.errorsPropertyID = "";
      this.errorsAddress = "";
      this.errorsCity = "";
      this.errorsState = "";
      this.errorsPostCode = "";
      this.errorsPrice = "";
      this.errorsSquareM2 = "";
      this.errorsBedrooms = "";
      this.errorsBathrooms = "";
      this.errorsGarages = "";
      this.errorsStatus = "";
      this.errorsImage = "";
      this.errorsAgentID = "";

      let isValid = true;
      let regex = /^[a-zA-Z]+$/;

      if (!this.propertyID) {
        this.errorsPropertyID = "PropertyID required";
        isValid = false;
      } else if (isNaN(this.propertyID)) {
        isValid = false;
        this.errorsPropertyID = "PropertyID must be numberic";
      }

      if (!this.address) {
        this.errorsAddress = "Address required";
        isValid = false;
      }

      if (!this.city) {
        this.errorsCity = "City required";
        isValid = false;
      } else if (!regex.test(this.city)) {
        this.errorsCity = "City must only contains alphabetic characters";
      }

      if (!this.state) {
        this.errorsState = "State required";
        isValid = false;
      } else if (!regex.test(this.state)) {
        this.errorsState = "State must only contains alphabetic characters";
      }

      if (!this.postcode) {
        this.errorsPostCode = "Post Code required";
        isValid = false;
      } else if (isNaN(this.postcode)) {
        isValid = false;
        this.errorsPostCode = "Post Code must be numberic";
      }

      if (!this.price) {
        this.errorsPrice = "Price required";
        isValid = false;
      } else if (isNaN(this.price)) {
        isValid = false;
        this.errorsPrice = "Price must be numberic";
      }

      if (!this.squareM2) {
        this.errorsSquareM2 = "Square Footage required";
        isValid = false;
      } else if (isNaN(this.squareM2)) {
        isValid = false;
        this.errorsSquareM2 = "Square Footage must be numberic";
      }

      if (!this.bedrooms) {
        this.errorsBedrooms = "Bedrooms required";
        isValid = false;
      } else if (isNaN(this.bedrooms)) {
        isValid = false;
        this.errorsBedrooms = "Bedrooms must be numberic";
      }

      if (!this.bathrooms) {
        this.errorsBathrooms = "Bathrooms required";
        isValid = false;
      } else if (isNaN(this.bathrooms)) {
        isValid = false;
        this.errorsBathrooms = "Bathrooms must be numberic";
      }

      if (!this.garages) {
        this.errorsGarages = "Garages required";
        isValid = false;
      } else if (isNaN(this.garages)) {
        isValid = false;
        this.errorsGarages = "Garages must be numberic";
      }

      if (!this.status) {
        this.errorsStatus = "Status required";
        isValid = false;
      }

      if (this.image === null) {
        this.errorsImage = "Image required";
        isValid = false;
      }

      if (!this.agentID) {
        this.errorsAgentID = "Agent required";
        isValid = false;
      }

      // prevent form submission
      if (isValid) {
        this.updateProperty();
      }
    },
    updateProperty: function () {
      var updateApiURL = "resources/apis.php?action=updateProperty";
      const today = new Date();

      const formData = new FormData();
      formData.append("PropertyID", this.propertyID);
      formData.append("Address", this.address);
      formData.append("City", this.city);
      formData.append("State", this.state);
      formData.append("PostCode", this.postcode);
      formData.append("ListingPrice", this.price);
      formData.append("ListingDate", this.formatDate(today));
      formData.append("SquareFootage", this.squareM2);
      formData.append("Bedrooms", this.bedrooms);
      formData.append("Bathrooms", this.bathrooms);
      formData.append("Garages", this.garages);
      formData.append("Status", "Available");
      formData.append("Image", this.image);
      formData.append("AgentID", this.agentID);

      // For debugging only
      //   for (let pair of formData.entries()) {
      //     console.log(`${pair[0]}: ${pair[1]}`);
      //   }

      const requestOptions = {
        method: "POST",
        body: formData,
      };
      fetch(updateApiURL, requestOptions)
        .then((response) => {
          console.log(response.status);
          this.responseStatus = response.status;

          //For Debug only
          // console.log(response.statusText);
          // console.log(response.headers);
          if(response.status === 202){
          this.messages = "Data Updated Successfully.";
          this.reloadView();
          } else if(response.status === 501){
            this.messages = "Server Error - Data Inserted Unsuccessfully";
          }
          if (!response.ok) {
            throw new Error("Network response error");
          }
        })
        .catch((error) => {
          this.messages = "Server Error - Data Inserted Unsuccessfully";
          console.log("ERROR") + error;
        });
    },
    formatDate: function (date) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");

      // Format the date as yyyy-mm-dd
      return `${year}-${month}-${day}`;
    },
  },
};
