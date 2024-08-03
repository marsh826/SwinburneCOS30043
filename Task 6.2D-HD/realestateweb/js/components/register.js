const Register = {
  template: `
        <div class="d-flex justify-content-center align-items-center min-vh-76">
        <div class="w-100 box-400">
            <form
                @submit="checkForm"
            >
                <h1 class="text-center text-sm-start">Account Registration</h1>
                <div class="mb-1">
                    <label for="usernameReg" class="form-label">Username</label>
                    <input v-model="input.usernameReg" class="form-control" id="usernameReg" >
                </div>
                <div v-if="usernameErrors.length" id="usernameHelpBlock" class="form-text text-danger">
                    <p v-for="error in usernameErrors">{{error}}</p>  
                </div>
                <div class="mb-1">
                    <label for="passwordReg" class="form-label">Password</label>
                    <input v-model="input.passwordReg" type="password" class="form-control" id="passwordReg">
                </div>
                <div v-if="passwordErrors.length" id="passwordHelpBlock" class="form-text text-danger">
                    <p v-for="error in passwordErrors">{{error}}</p>    
                </div>
                <div class="mb-1">
                    <label for="passConfirm" class="form-label">Confirm Password</label>
                    <input v-model="input.passConfirm" type="password" class="form-control" id="passConfirm">
                </div>
                <div v-if="passConfirmErrors.length" id="passwordHelpBlock" class="form-text text-danger">
                    <p v-for="error in passConfirmErrors">{{error}}</p>    
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
                <div v-if="message" class="alert alert-secondary mt-2" role="alert">
                    <p v-response="responseStatus">{{ message }}</p> 
                </div>
        </div>
    </div>
    `,
  data() {
    return {
      message: "",
      input: {
        // HTTP response code:
        responseStatus: "",

        // PRESET DATA to test insert fucntion
        usernameReg: "admin2",
        passwordReg: "vuejs-456",
        passConfirm: "vuejs-456",

        // EMPTY DATA to test validation
        // usernameReg: "",
        // passwordReg: "",
        // passConfirm: "",
      },
      usernameErrors: [],
      passwordErrors: [],
      passConfirmErrors: [],
    };
  },
  methods: {
    checkForm: function (event) {
      this.usernameErrors = [];
      this.passwordErrors = [];
      this.passConfirmErrors = [];
      let result = true;

      // USERNAME CHECK
      if (!this.input.usernameReg) {
        this.usernameErrors.push("Username required");
        result = false;
      } else if (this.input.usernameReg.length < 3) {
        this.usernameErrors.push(
          "Username must contain at least three characters"
        );
        result = false;
      }

      // PASSWORD CHECK
      if (!this.input.passwordReg.trim()) {
        this.passwordErrors.push("Password required");
        result = false;
      } else if (this.input.passwordReg.trim().length < 8) {
        this.passwordErrors.push(
          "Password must contain at least eight characters"
        );
        result = false;
      } else if (!this.specialCharCount(this.input.passwordReg.trim())) {
        this.passwordErrors.push(
          "Password must contain at least 1 special character"
        );
        result = false;
      }

      // PASSWORD CONFIRM CHECK
      // Password Confirmation Check
      if (
        !this.input.passConfirm ||
        this.input.passConfirm !== this.input.passwordReg
      ) {
        this.passConfirmErrors.push(
          "Confirmation failed: Passwords do not match"
        );
        result = false;
      }

      // prevent form submission
      if (result === true) {
        this.register();
      } else {
        event.preventDefault();
      }
    },
    register() {
      var self = this;

      const formData = new FormData();
      formData.append("UserName", this.input.usernameReg);
      formData.append("Password", this.input.passwordReg);

      const requestOptions = {
        method: "POST",
        body: formData,
      };
      fetch("resources/apis.php?action=register", requestOptions)
        .then((response) => {
          this.responseStatus = response.status;
          if (response.status === 202) {
            self.message = "Account registration success!";
            setTimeout(() => {
              this.$router.replace({ name: "home" });
            }, 3000);
          } else if (response.status === 501) {
            self.message = "Server Error: Account registration failed.";
          }
        })
        .catch((error) => {
          // For debugging
          //   console.log("Error: " + error)
          self.message = "Server Error: Account registration failed.";
        });
    },
    specialCharCount(input) {
      const specialChar = /[!@#$%^&*(),.?":{}|<>-]/;
      return specialChar.test(input);
    },

    reset() {
      this.message = "";
      this.input.usernameReg = "";
      this.input.passwordReg = "";
      this.input.passConfirm = "";
      this.usernameErrors = [];
      this.passwordErrors = [];
      this.passConfirmErrors = [];
    },
  },
};
