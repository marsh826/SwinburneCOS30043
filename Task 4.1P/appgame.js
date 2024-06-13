Vue.createApp({
  data() {
    return {
      title: "Number Guessing Game",
      message: "Start guessing...",
      numInput: 0,
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
      } else {
        this.message = "Please enter a number.";
      }
    },
    giveUp() {
      this.message = `The correct answer is ${this.answer}`;
    },
    startOver() {
      // Reset every variable
      this.numInput = 0;
      this.answer = Math.floor(Math.random() * 100) + 1;
      this.message = "Start guessing...";
    },
  },
}).mount("#app");
