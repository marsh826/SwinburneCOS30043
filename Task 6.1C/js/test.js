const app = Vue.createApp({
  data() {
    return {
      fName: "",
      lName: "",
      uName: "",
      password: "",
      passConfirm: "",
      email: "",
      address: "",
      suburb: "",
      postCode: "",
      phone: "",
      errors: [],
    };
  },
  methods: {
    specialCharCount: function (input) {
      const specialChar = /[!@#$%^&*(),.?":{}|<>]/;
      return specialChar.test(input);
    },

    checkForm: function (event) {
      this.errors = [];
      let result = true;

      // FIRST NAME CHECK
      if (!this.fName) {
        this.errors.push("First name required");
        result = false;
      } else if (!/^[a-zA-Z ]*$/.test(this.fName)) {
        this.errors.push("First name must only contain letters");
        result = false;
      }

      // LAST NAME CHECK
      if (!this.lName) {
        this.errors.push("Last name required");
        result = false;
      } else if (!/^[a-zA-Z]*$/.test(this.lName)) {
        this.errors.push("Last name must only contain letters");
        result = false;
      }

      // USERNAME CHECK
      if (!this.uName) {
        this.errors.push("Username required");
        result = false;
      } else if (this.uName.length < 3) {
        this.errors.push("Username must contain at least three characters");
        result = false;
      }

      // PASSWORD CHECK
      if (!this.password) {
        this.errors.push("Password required");
        result = false;
      } else if (this.password.length < 8) {
        this.errors.push("Password must contain at least eight characters");
        result = false;
      } else if (!this.specialCharCount(this.password)) {
        this.errors.push("Password must contain at least 1 special character");
        result = false;
      }

      // PASSWORD CONFIRM CHECK
      if (!this.passConfirm || this.passConfirm !== this.password) {
        this.errors.push("Confirmation failed: Passwords do not match");
        result = false;
      }

      // EMAIL CHECK
      const validRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (!this.email) {
        this.errors.push("Email required");
        result = false;
      } else if (!validRegex.test(this.email.toLowerCase())) {
        this.errors.push("Invalid email format");
        result = false;
      }

      // STREET ADDRESS CHECK
      if (this.address.length > 40) {
        this.errors.push("Address can only have 40 characters maximum");
        result = false;
      }

      // SUBURB
      if (this.suburb.length > 20) {
        this.errors.push("Suburb can only have 20 characters maximum");
        result = false;
      }

      // POST CODE CHECK
      if (!this.postCode) {
        this.errors.push("Postal Code required");
        result = false;
      } else if (
        this.postCode.length !== 4 ||
        this.postCode[0] !== "0" ||
        !/^\d+$/.test(this.postCode)
      ) {
        this.errors.push(
          "Postcode must have 4 numeric digits and must start with 0"
        );
        result = false;
      }

      // MOBILE PHONE CHECK
      if (
        this.phone.length !== 10 ||
        !/^\d+$/.test(this.phone) ||
        this.phone.substring(0, 2) !== "04"
      ) {
        this.errors.push(
          "Mobile number must have 10 numeric digits and must start with '04'"
        );
        result = false;
      }

      // prevent form submission
      if (result === false) {
        event.preventDefault();
      }
    },
  },
});

app.mount("#app");
