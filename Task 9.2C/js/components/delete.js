const DeleteData = {
  template: `
    <div class="row">
        <div class="col">
        <div class="card mx-auto " max-width="90%">
            <div class="card-body">
            <form>
                <div class="mb-3">
                    <label for="deleteUnitCode" class="form-label">Unit Code</label>
                    <input type="text" class="form-control" id="deleteUnitCode" v-model="deleteUnitCode">
                </div>
                <button type="submit" class="btn btn-danger" v-on:click="deleteData(deleteUnitCode)">Delete</button>
            </form>
            </div>
        </div>
        </div>

        <div class ="col-12 col-md-6">
          <div class="card mx-auto" max-width="90%">
              <div class="card-body">
                <p>Output Message : {{ messsage }}</p>
                <p>Status Code: {{statusVal}}</p>
                <p>Status: {{statusText}}</p>
                <p>Response Headers: {{headers}}</p>  
              </div>
          </div>
        </div>
    </div>  
    `,
  data: function () {
    return {
      deleteUnitCode: "COS12345",
      messsage: "",
      statusVal: "",
      statusText: "",
      headers: "",
    };
  },
  methods: {
    deleteData: function (unitCode) {
      var deleteApiURL = "resources/apis.php/unitCode/" + unitCode;
      var self = this;

      const requestOptions = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          deleteUnitCode: unitCode,
        }),
      };

      fetch(deleteApiURL, requestOptions)
        .then((response) => {
          self.statusVal = response.status;
          self.statusText = response.statusText;
          self.headers = response.headers;
          return response.json();
        })
        .then((data) => {
          self.messsage = "Delete success!";
        })
        .catch((error) => {
          self.messsage = "Error: " + error;
        });
    },
  },
};
