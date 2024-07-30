const InsertProperties = {
  template: `
    <div class="row">
        <div class="col">
        <div class="card mx-auto" max-width="90%">
            <div class="card-body">
                <form @submit="checkForm">
                    <div class="mb-3">
                      <label for="address" class="form-label"><strong>Address</strong></label>
                      <input type="text" class="form-control" id="address" v-model="address">
                        <div v-if="errors.address" class="invalid-feedback">
                          {{errors.address}}
                        </div>
                    </div>

                    <div class="mb-3">
                      <label for="city" class="form-label"><strong>City</strong></label>
                      <input type="text" class="form-control" id="city" v-model="city">
                        <div v-if="errors.city" class="invalid-feedback">
                          {{errors.city}}
                        </div>
                    </div>
         
                    <div class="mb-3">
                      <label for="state" class="form-label"><strong>State</strong></label>
                      <input type="text" class="form-control" id="state"  v-model="state">
                        <div v-if="errors.state" class="invalid-feedback">
                          {{errors.state}}
                        </div>
                    </div>

                    <div class="mb-3">
                      <label for="postcode" class="form-label"><strong>Post Code</strong></label>
                      <input type="text" class="form-control" id="postcode"  v-model="postcode">
                        <div v-if="errors.postcode" class="invalid-feedback">
                          {{errors.postcode}}
                        </div>
                    </div>
     
                    <div class="mb-3">
                      <label for="price" class="form-label"><strong>Listing Price</strong></label>
                      <input type="text" class="form-control" id="price"  v-model="price">
                        <div v-if="errors.price" class="invalid-feedback">
                          {{errors.price}}
                        </div>                      
                    </div>

                    <div class="mb-3">
                      <label for="squareM2" class="form-label"><strong>Square Footage</strong></label>
                      <input type="text" class="form-control" id="squareM2"  v-model="squareM2">
                        <div v-if="errors.squareM2" class="invalid-feedback">
                          {{errors.squareM2}}
                        </div>                     
                    </div>

                    <div class="mb-3">
                       <label for="bedrooms" class="form-label"><strong>Bedrooms</strong></label>
                      <input type="text" class="form-control" id="bedrooms"  v-model="bedrooms">
                        <div v-if="errors.bedrooms" class="invalid-feedback">
                          {{errors.bedrooms}}
                        </div> 
                      </div>

                    <div class="mb-3">
                      <label for="bathrooms" class="form-label"><strong>Bathrooms</strong></label>
                      <input type="text" class="form-control" id="bathrooms"  v-model="bathrooms">
                        <div v-if="errors.bathrooms" class="invalid-feedback">
                          {{errors.bathrooms}}
                        </div>                     
                      </div>
                
                    <div class="mb-3">
                      <label for="garages" class="form-label"><strong>Garages</strong></label>
                      <input type="text" class="form-control" id="garages"  v-model="garages">
                        <div v-if="errors.garages" class="invalid-feedback">
                          {{errors.garages}}
                        </div> 
                      </div>

                    <div class="mb-3">
                      <label for="image" class="form-label"><strong>Image</strong></label>
                      <input type="file" class="form-control" id="image" v-on:change="handleFileUpload">
                      <div v-if="errors.image" class="invalid-feedback">
                        {{errors.image}}
                      </div>
                    </div>


                    <p class="form-label"><strong>Agent</strong></p>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="agentRadio" 
                            id="danni" v-model="agentID" value="1">
                        <label class="form-check-label" for="danni">
                            Danni Korda
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="agentRadio"
                            id="cindee" v-model="agentID" value="2">
                        <label class="form-check-label" for="cindee">
                            Cindee Raubenheim
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="agentRadio" 
                            id="krystel" v-model="agentID" value="3">
                        <label class="form-check-label" for="krystel">
                            Krystel Dobbson
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="agentRadio" 
                            id="eduino" v-model="agentID" value="4">
                        <label class="form-check-label" for="eduino">
                            Eduino Kuna
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="agentRadio" 
                            id="nealson" v-model="agentID" value="5">
                        <label class="form-check-label" for="nealson">
                            Nealson Morville
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="agentRadio" 
                            id="charlena" v-model="agentID" value="6">
                        <label class="form-check-label" for="charlena">
                            Charlena Castelyn
                        </label>
                    </div>
                        <div v-if="errors.agentID" class="invalid-feedback">
                          {{errors.agentID}}
                        </div>                                         
                    <button type="button" v-on:click="insertProperty()" 
                        class="btn btn-primary">
                            Submit
                    </button>
                </form>
            </div>
        </div>
        </div>
    </div>
    `,
  data: function () {
    return {
      address: "31 Ann Moore",
      city: "Melbourne",
      state: "Victoria",
      postcode: "3000",
      price: "100000",
      squareM2: "2786",
      bedrooms: "4",
      bathrooms: "3",
      garages: "2",
      status: "Available",
      image: null,
      agentID: "3",
      //error list
      errors: {},
    };
  },
  methods: {
    handleFileUpload(event) {
      this.image = event.target.files[0];
    },
    checkForm(event) {
      let result = true;
      let regex = /^[a-zA-Z]+$/;
      var self = this;
      self.errors = {};

      if (!self.address) {
        self.errors.address = "Address required";
        result = false;
      }

      if (!self.city) {
        self.errors.city = "City required";
        result = false;
      } else if (!regex.test(self.city)) {
        self.errors.city = "City must only contains alphabetic characters";
      }

      if (!self.state) {
        self.errors.state = "State required";
        result = false;
      } else if (!regex.test(self.state)) {
        self.errors.state = "State must only contains alphabetic characters";
      }

      if (!self.postcode) {
        self.errors.postcode = "Post Code required";
        result = false;
      } else if (isNaN(self.postcode)) {
        result = false;
        self.errors.postcode = "Post Code must be numberic";
      }

      if (!self.price) {
        self.errors.price = "Price required";
        result = false;
      } else if (isNaN(self.price)) {
        result = false;
        self.errors.price = "Price must be numberic";
      }

      if (!self.squareM2) {
        self.errors.squareM2 = "Square Footage required";
        result = false;
      } else if (isNaN(self.squareM2)) {
        result = false;
        self.errors.squareM2 = "Square Footage must be numberic";
      }

      if (!self.bedrooms) {
        self.errors.bedrooms = "Bedrooms required";
        result = false;
      } else if (isNaN(self.bedrooms)) {
        result = false;
        self.errors.bedrooms = "Bedrooms must be numberic";
      }

      if (!self.bathrooms) {
        self.errors.bathrooms = "Bathrooms required";
        result = false;
      } else if (isNaN(self.bathrooms)) {
        result = false;
        self.errors.bathrooms = "Bathrooms must be numberic";
      }

      if (!self.garages) {
        self.errors.garages = "Garages required";
        result = false;
      } else if (isNaN(self.garages)) {
        result = false;
        self.errors.garages = "Garages must be numberic";
      }

      if (!self.status) {
        self.errors.status = "Status required";
        result = false;
      } else if (!regex.test(self.status)) {
        self.errors.status = "Status must only contains alphabetic characters";
      }

      if (self.image === null) {
        self.errors.image = "Image required";
        result = false;
      }

      if (!self.agentID) {
        self.errors.agentID = "Agent required";
        result = false;
      }

      // prevent form submission
      if (result === false) {
        event.preventDefault();
      }
    },
    insertProperty: function () {
      var insertApiURL = "resources/apis.php?action=addNewProperty";
      var self = this;
      const today = new Date();

      //   date is automatically set as today
      //   status is automatically set as available for new property

      const formData = new FormData();
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

      for (let pair of formData.entries()) {
        console.log(`${pair[0]}: ${pair[1]}`);
      }

      const requestOptions = {
        method: "POST",
        body: formData,
      };
      fetch(insertApiURL, requestOptions)
        .then((response) => {
          console.log(response.status);
          console.log(statusText);
          console.log(response.headers);
          console.log(response.json);
          if (!response.ok) {
            throw new Error("Network response error");
          }
          return response.json();
        })
        .then((data) => {
          self.messsage = "Data Inserted Successfully.";
        })
        .catch((error) => {
          self.messsage = "Server Error - Data Inserted Unsuccessfully";
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
