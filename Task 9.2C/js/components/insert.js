const InsertData = {
  template: `
    <div class="row">
        <div class="col">
        <div class="card mx-auto" max-width="90%">
            <div class="card-body">
                <form>
                    <div class="mb-3">
                        <label for="unitCode" class="form-label">Unit Code</label>
                        <input type="text" class="form-control" id="unitCode" v-model="unitCode">
                    </div>
                    <div class="mb-3">
                        <label for="unitDesc" class="form-label">Description</label>
                        <input type="text" class="form-control" id="unitDesc" v-model="unitDesc">
                    </div>
                    <div class="mb-3">
                        <label for="unitCP" class="form-label">Credit Points</label>
                        <input type="text" class="form-control" id="unitCP"  v-model="unitCP">
                    </div>
                    <div class="mb-3">
                        <label for="unitType" class="form-label">Type</label>
                        <input type="text" class="form-control" id="unitType"  v-model="unitType">
                    </div>
                    <button type="submit" v-on:click="postData(unitCode, unitDesc, unitCP, unitType)" class="btn btn-primary">Submit</button>
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
      unitCode: "COS12345",
      unitDesc: "hi",
      unitCP: "12.5",
      unitType: "Core",
      messsage: "",
      statusVal: "",
      statusText: "",
      headers: "",
    };
  },
  methods: {
    postData: function (code, desc, cp, type) {
      var insertApiURL = "resources/apis.php/";
      var self = this;

      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          unitCode: code,
          unitDescription: desc,
          unitCreditPoint: cp,
          unitType: type,
        }),
      };

      fetch(insertApiURL, requestOptions)
        .then((response) => {
          self.statusVal = response.status;
          self.statusText = response.statusText;
          self.headers = response.headers;
          return response.json();
        })
        .then((data) => {
          self.messsage = "Data Inserted Successfully.";
        })
        .catch((error) => {
          self.messsage = "Error: " + error;
        });
    },
  },
};
