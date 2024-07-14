const Login = {
  data() {
    return {
      message: "",
      input: {
        username: "admin",
        password: "hellovue",
      },
      errors: [],
    };
  },
  methods: {
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
            self.message = "username or password is incorrect.";
          } else {
            this.$emit("authenticated", true);
            this.$router.replace({ name: "dashboard" });
          }
        })
        .catch((error) => {
          self.message = "Error: " + error;
        });
    },
    reset() {
      message = "";
      username = "";
      password = "";
      errors = [];
    },
  },
  template: `
  <div class="card">
    <div class="card-body">
      <h1>User Login</h1>
      <form 
      >
      <div class="mb-3">
          <label for="username">User Name</label>
          <input v-model="input.username" type="text" class="form-control" id="username" placeholder="Enter username">
      </div>
      <div class="mb-3">
          <label for="password">Password</label>
          <input v-model="input.password" type="password" class="form-control" id="password" placeholder="Enter Password">
      </div>

      <div v-if="errors.length">
        <p>Please correct the following error(s):</p>
        <ul>
          <li v-for="error in errors">{{ error }}</li>
        </ul>
      </div>

      <button class="btn btn-primary mx-2" v-on:click="login()">Submit</button>
      <button class="btn btn-secondary mx-2" v-on:click="reset()">Reset</button>
      </form>
      <p>{{message}}</p>
      </div>
    </div>
  `,
};
