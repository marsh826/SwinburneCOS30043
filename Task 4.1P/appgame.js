Vue.createApp({
  data() {
    return {
      title: "Number Guessing Game",
      message: "Start guessing...",
      numInput: "",
      answer: Math.floor(Math.random() * 100) + 1,
    };
  },
  methods: {
    checkGuess() {
      if (this.numInput < this.answer) {
        this.message = "Guess higher.";
      }

      if (this.numInput > this.answer) {
        this.message = "Guess lower.";
      }

      if (this.numInput == this.answer) {
        this.message = "You got it!";
      }
    },
    giveUp() {
      this.message = `The correct answer is ${this.answer}`;
    },
    startOver() {
      // Reset every variable
      this.numInput = "";
      this.answer = Math.floor(Math.random() * 100) + 1;
      this.message = "Start guessing...";
    },
  },
}).mount("#app");
