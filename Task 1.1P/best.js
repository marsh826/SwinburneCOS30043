//Calculator Script

//shows user's input on the calculator
const display = document.getElementById("display");

//adding new values to the display
function appendToDisplay(input) {
    display.value += input;
}

//Clear calculator display
function clearDisplay() {
    display.value = "";
}

//Calculate the result of input
function calculate() {
    try {
        //Determines which type of mathematical operation was used
        display.value = eval(display.value);
    } 
    catch(error) {
        display.value = "Error";
    }
}

//current colour theme of the calculator
let currentCycle = 1;

//Change current colour theme into the next theme
function changeColourCycle() {
    let displayColour = document.getElementById("display");
    let calculatorColour = document.getElementById("calculator");

   
    currentCycle += 1;
    console.log(currentCycle);

    if(currentCycle > 3) {
        currentCycle = 1;
    }

    if(currentCycle == 1) {
        displayColour.style.backgroundColor = "black";
        calculatorColour.style.backgroundColor = "darkgrey";
    }

    if(currentCycle == 2) {
        displayColour.style.backgroundColor = "darkgreen";
        calculatorColour.style.backgroundColor = "darkseagreen";
    }

    if(currentCycle == 3) {
        displayColour.style.backgroundColor = "darkslateblue";
        calculatorColour.style.backgroundColor = "darkviolet";
    }
}

