const Login = {
  template: `
  <form v-on:submit = "checkForm">
    <label for="username" class="form-label">Username</label>
    <input v-model="input.username" type="text" id="username" class="form-control">
    <p class="text text-danger" v-for="error in usernameErrors">{{error}}</p>

    <label for="password" class="form-label">Password</label>
    <input v-model="input.password" type="password" id="password" class="form-control">
    <p class="text text-danger" v-for="error in passwordErrors">{{error}}</p>

    <button type="submit" class="btn btn-primary">Login</button>

    <p class="text text-danger">{{message}}</p>
  </form>

  `,
  data() {
    return {
      input: {
        username: "",
        password: "",
      },
      message: "",
      usernameErrors: [],
      passwordErrors: [],
    };
  },
  methods: {
    login() {
      const formData = new FormData();
      formData.append("username", this.input.username);
      formData.append("password", this.input.password);

      const requestOptions = {
        method: "POST",
        body: formData,
      };

      fetch("resources/apis.php?action=login", requestOptions)
        .then((response) => {
          if (response.status === 202) {
            this.$root.authenticatedUser = this.input.username;
            this.$root.setAuthenticated(true);
            this.$router.replace({ name: "dashboard" });
          } else if (response.status === 501) {
            this.message = "Invalid login credentials";
          }
        })
        .catch((error) => {
          console.log("Error: " + error);
        });
    },
    checkForm(event) {
      this.usernameErrors = [];
      this.passwordErrors = [];
      let result = true;

      if (!this.input.username) {
        this.usernameErrors.push("Username is required");
        result = false;
      }

      if (!this.input.password) {
        this.passwordErrors.push("Password is required");
        result = false;
      }

      if (result === true) {
        this.login();
      } else {
        event.preventDefault();
      }
    },
  },
};
