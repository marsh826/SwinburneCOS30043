const app = Vue.createApp({});

//populate menu with a variable
app.component("my-menu", {
  props: ["menu"], //defining the props
  template: `<ul><li v-for="tab in menu">{{tab}}</li></ul>`,
  //defining template for the menu list
});

app.mount("#app");
