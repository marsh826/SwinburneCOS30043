const DeleteProperties = {
  template: `
        <div class="row">
          <div class="col">
            <div class="card mx-auto">
              <div class="card-body">
                <form @submit="checkForm">
                  <div class="mb-3">
                    <label for="propertyID" class="form-label"><strong>Enter the PropertyID for property removal</strong></label>
                    <input type="text" class="form-control" id="propertyID" v-model="propertyID">
                  </div>
                  <button type="submit" class="btn btn-danger">Delete</button>
                    <div v-if="errors.length" id="passwordHelpBlock" class="form-text text-danger">
                        <p>{{errors}}</p>    
                    </div>
                  <div v-if="messages.length" class="alert alert-success mt-2">
                     <p>{{ messages }}</p> 
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      `,
  data: function () {
    return {
      propertyID: "26",
      errors: "",
      messages: "",
    };
  },
  methods: {
    // testMessages: function () {
    //   this.errors = "Test error message";
    //   this.messages = "Test success message";
    // },
    checkForm: function () {
      this.errors = "";
      this.message = "";
      let isValid = true;

      if (!this.propertyID) {
        this.errors = "PropertyID required";
        isValid = false;
      } else if (isNaN(this.propertyID)) {
        this.errors = "PropertyID must be numeric";
        isValid = false;
      }

      if (isValid) {
        this.deleteProperty();
      }
    },

    deleteProperty: function () {
      const deleteApiURL = "resources/apis.php?action=deleteProperty";
      const formData = new FormData();
      formData.append("PropertyID", this.propertyID);

      const requestOptions = {
        method: "POST",
        body: formData,
      };

      fetch(deleteApiURL, requestOptions)
        .then((response) => {
          console.log(response.status);
          console.log(response.statusText);
          console.log(response.headers);
          this.messages = "Delete success!";
        })
        .catch((error) => {
          this.errors = "Server Error - Data Deleted Unsuccessfully";
        });
    },
  },
};
