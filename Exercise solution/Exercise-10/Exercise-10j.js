// Initialize calculation from local storage or an empty string
let calculation = localStorage.getItem("calculation") || '0';

// display paragraph for the calculator
let displayText = document.getElementById("Calculation");
displayText.textContent = calculation;

// Function to update local storage with the current calculation
function updateLocalStorage() {
    localStorage.setItem("calculation", calculation);
    // update the localstorage calculation in the display
    displayText.textContent = calculation;
}

// Function to update the calculation with a given assignment
function updateCalculation(assignment) {
    calculation += assignment;
    console.log(calculation);
    displayText.textContent = calculation;
    updateLocalStorage();

    // Smooth scroll to the right to show the latest input
    displayText.scrollLeft = displayText.scrollWidth;
    displayText.scroll({
        left: displayText.scrollWidth,
        behavior: 'smooth'
    });
}

// Function to calculate the result and update the calculation
function calculate() {
    calculation = eval(calculation);
    console.log(calculation);
    displayText.textContent = calculation;
    updateLocalStorage();
}

// Function to clear the calculation and update local storage
function clearCalculation() {
    calculation = '';
    console.log('Cleared...');
    updateLocalStorage();
    displayText.textContent = '0';
}