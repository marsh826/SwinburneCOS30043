const app = Vue.createApp({
  data() {
    return {
      homeTopImage: "./css/img/house.jpg", // Ensure the path is correct
    };
  },
  computed: {
    // homeTopStyle() {
    //   return {
    //     backgroundImage: `url(${this.homeTopImage})`,
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    //     height: "400px", // Adjust height as needed
    //   };
    // },
  },
});

app.mount("#app");
