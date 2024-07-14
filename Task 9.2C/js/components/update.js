const UpdateData = {
  template: `
    <div class="row">
        <div class="col">
        <div class="card mx-auto" max-width="90%">
            <div class="card-body">
                <form>
                    <div class="mb-3">
                        <label for="updateCode" class="form-label">Unit Code</label>
                        <input type="text" class="form-control" id="updateCode" v-model="updateCode">
                    </div>
                    <div class="mb-3">
                        <label for="updateDesc" class="form-label">Description</label>
                        <input type="text" class="form-control" id="updateDesc" v-model="updateDesc">
                    </div>
                    <div class="mb-3">
                        <label for="updateCP" class="form-label">Credit Points</label>
                        <input type="text" class="form-control" id="unitCP"  v-model="updateCP">
                    </div>
                    <div class="mb-3">
                        <label for="updateType" class="form-label">Type</label>
                        <input type="text" class="form-control" id="updateType"  v-model="updateType">
                    </div>
                    <button type="submit" v-on:click="updateData(updateCode, updateDesc, updateCP, updateType)" class="btn btn-primary">Submit</button>
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
      messsage: "",
      updateCode: "COS12345",
      updateDesc: "hello",
      updateCP: "29.0",
      updateType: "System Analysis",
      statusVal: "",
      statusText: "",
      headers: "",
    };
  },
  methods: {
    updateData: function (code, desc, cp, type) {
      var updateApiURL = "resources/apis.php/unitCode/" + code;
      var self = this;

      const requestOptions = {
        method: "PUT",
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

      fetch(updateApiURL, requestOptions)
        .then((response) => {
          self.statusVal = response.status;
          self.statusText = response.statusText;
          self.headers = response.headers;
          return response.json();
        })
        .then((data) => {
          self.messsage = "Data Updated Successfully";
        })
        .catch((error) => {
          self.messsage = "Error: " + error;
        });
    },
  },
};
