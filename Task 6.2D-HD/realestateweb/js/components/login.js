const Login = {
  data() {
    return {
      message: "",
      input: {
        username: "admin",
        password: "vue123",
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
      } else if (this.input.username.length < 3) {
        this.usernameErrors.push(
          "Username must contain at least three characters"
        );
        result = false;
      }

      // PASSWORD CHECK
      if (!this.input.password) {
        this.passwordErrors.push("Password required");
        result = false;
      }

      // prevent form submission
      if (result === false) {
        event.preventDefault();
      }
    },
    login() {
      var self = this;
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: this.input.username,
          password: this.input.password,
        }),
      };
      fetch("resources/api_user.php/", requestOptions)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if (data == null) {
            self.message = "Username or Password is incorrect.";
          } else {
            this.$root.setAuthenticated(true);
            this.$router.replace({ name: "dashboard" });
          }
        })
        .catch((error) => {
          self.message = "Error: " + error;
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
                <h1 class="text-center text-sm-start">User Login</h1>
                <div class="mb-1">
                    <label for="username" class="form-label">Username</label>
                    <input v-model="input.username" type="username" class="form-control" id="username">
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
                        <button type="submit" class="btn btn-primary" v-on:click="login()">Submit</button>
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
