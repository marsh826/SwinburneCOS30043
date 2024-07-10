const StatusPost = {
  data: function () {
    return {
      message: "My Post App",
      statPosts: [],
      strStatus: "",
    };
  },
  // define the template for the component
  template: `  
    <div class="container">
      <h1>{{message}}</h1>
      <label for='status'><strong>Status: </strong></label>
      <input type='text' id='status' name='status' v-model='strStatus' />&nbsp;
      <button type='button' v-on:click='add(strStatus)'>Post</button><br /><br />
      <div class='timeline' v-for='(post, index) in statPosts' :key='index'>
      <p>{{post}}&nbsp<button type='button' v-on:click='remove(index)'>Del</button></p></div>
      <br>
    </div>
  `,
  // defining the methods for add and remove status messages
  methods: {
    add: function (status) {
      //push status into statPosts array
      console.log(status);
      this.statPosts.push(status);
      this.strStatus = "";
    },
    remove: function (index) {
      //delete status from statPosts using index
      this.statPosts.splice(index, 1);
    },
  },
};
