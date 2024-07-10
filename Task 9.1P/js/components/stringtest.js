var strName = "Le Gia Hoang An";
const StringTest = {
  data: function () {
    return {
      message: "Hello VueJS!",
      prompt: "Please enter your name: ",
      strName: strName,
      nameLowerCase: strName.toLowerCase(),
      correctName: "Awesome name!",
      wrongName: "is not my name",
    };
  },
  template: `
    <div class="container">
      <h1>{{message}}</h1>
      <label for="name">{{prompt}}</label>
      <input class="ms-2" id="name" type="text" v-model="strName">
      <h5 v-if="strName.toLowerCase() == nameLowerCase">
      {{correctName}}
      </h5>
      
      <h5 v-else-if="strName.toLowerCase() != nameLowerCase">
      {{strName}} {{wrongName}}
      </h5>

      <h5 v-else-if='strName === ""'>
        You didn't put in any name!
      </h5>
    </div>
  `,
};
