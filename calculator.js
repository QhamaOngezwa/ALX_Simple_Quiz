const addButton = documentgetElementById("add");
const subtractButton = documentgetElementById("subtract");
const multiplyButton = documentgetElementById("multiply");
const divideButton = documentgetElementById("divide");

const number1 = parseFloat(getElementById(number1).value) || 0;
const number2 = parseFloat(getElementById(number2).value) || 0;

function add(number1, number2){
document.getElementById("calculation-result").textContent = result;
    return number1 + number2;
}
function subtract(number1, number2){
document.getElementById("calculation-result").textContent = result;

    return number1 - number2;
}
function multiply(number1, number2){
document.getElementById("calculation-result").textContent = result;

    return number1 * number2;
}
function divide(number1, number2){
document.getElementById("calculation-result").textContent = result;

    return number1 / number2;
}

addButton.addEventListener("click", add);
subtractButton.addEventListener("click", subtract);
multiplyButton.addEventListener("click", multiply);
divideButton.addEventListener("click", divide);
