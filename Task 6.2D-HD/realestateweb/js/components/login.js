const Login = {
  data() {
    return {
      message: "",
      input: {
        // PRESET DATA for testing login function
        // username: "admin",
        // password: "vuejs-123",

        // EMPTY DATA for testing form validation
        username: "",
        password: "",
      },
      usernameErrors: [],
      passwordErrors: [],
    };
  },
  methods: {
    checkForm: function (event) {
      this.usernameErrors = [];
      this.passwordErrors = [];
      let result = true;

      // USERNAME CHECK
      if (!this.input.username) {
        this.usernameErrors.push("Username required");
        result = false;
      }

      // PASSWORD CHECK
      if (!this.input.password) {
        this.passwordErrors.push("Password required");
        result = false;
      }

      // prevent form submission
      if (result === true) {
        this.login();
      } else {
        event.preventDefault();
      }
    },
    login() {
      var self = this;

      const formData = new FormData();
      formData.append("UserName", this.input.username);
      formData.append("Password", this.input.password);

      const requestOptions = {
        method: "POST",
        body: formData,
      };
      fetch("resources/apis.php?action=login", requestOptions)
        .then((response) => {
          if(response.status === 202){
             this.$root.authenticatedUser = this.input.username;
            console.log(this.$root.authenticatedUser);
            this.$root.setAuthenticated(true);
            this.$router.replace({ name: "dashboard" });
          } else {
            self.message = "Username or Password is incorrect.";
          }
        })
        .catch((error) => {
          // For debugging
          // console.log("Error: " + error)
          self.message = "Error: Username or Password is not correct";
        });
    },
    reset() {
      this.message = "";
      this.input.username = "";
      this.input.password = "";
      this.usernameErrors = [];
      this.passwordErrors = [];
    },
  },
  template: `
    <div class="d-flex justify-content-center align-items-center min-vh-76">
        <div class="w-100 box-400">
            <form
                @submit="checkForm"
            >
                <h1 class="text-center text-sm-start">Admin Login</h1>
                <div class="mb-1">
                    <label for="username" class="form-label">Username</label>
                    <input v-model="input.username" type="username" class="form-control" id="username" >
                </div>
                <div v-if="usernameErrors.length" id="usernameHelpBlock" class="form-text text-danger">
                    <p v-for="error in usernameErrors">{{error}}</p>  
                </div>
                <div class="mb-1">
                    <label for="password" class="form-label">Password</label>
                    <input v-model="input.password" type="password" class="form-control" id="password">
                </div>
                <div v-if="passwordErrors.length" id="passwordHelpBlock" class="form-text text-danger">
                    <p v-for="error in passwordErrors">{{error}}</p>    
                </div>
                <div class="row">
                    <div class="col-3">
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                    <div class="col-3">
                        <button type="button" class="btn btn-warning" v-on:click="reset()">Reset</button>
                    </div>
                </div>
            </form>
            <p class="text-danger">{{message}}</p>
        </div>
    </div>
    `,
};
