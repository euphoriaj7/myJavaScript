/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2
function add(number1, number2) {

    // Step 2: In the function, return the sum of the parameters number1 and number2
    return number1 + number2;
}
// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function
function addNumbers() {
    let input1 = document.getElementById("addend1").value;
    let input2 = document.getElementById("addend2").value;
    let num1 = parseInt(input1);
    let num2 = parseInt(input2);
    let result = add(num1, num2);
    // Step 4: Assign the return value to an HTML form element with an ID of sum
    document.getElementById("sum").value = result;
}
// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function
document.getElementById("addNumbers").addEventListener("click", addNumbers);
// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers
function subtract(number1, number2) {
    return number1 - number2;
}

const subtractNumbers = function() {
    let input1 = parseInt(document.querySelector('#minuend').value);
    let input2 = parseInt(document.querySelector('#subtrahend').value);
    let result = subtract(input1, input2);
    document.querySelector('#difference').value = result;
}
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);
// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers
const multiply = (number1, number2) => number1 * number2;
const multiplyNumbers = () => {
    let input1 = parseInt(document.querySelector("#factor1").value);
    let input2 = parseInt(document.querySelector("#factor2").value);
    let output1 = multiply(input1, input2);
    document.querySelector('#product').value = output1;
}
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);
// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers
const divide = (number1, number2) => number1 / number2;
const divideNumbers = () => {
    let input1 = parseInt(document.querySelector("#dividend").value);
    let input2 = parseInt(document.querySelector("#divisor").value);
    let output1 = divide(input1, input2);
    document.querySelector('#quotient').value = output1;
}
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

// Step 9: Test all of the mathematical functionality of the task3.html page.


/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
let cdate = new Date();
// Step 2: Declare a variable to hold the current year
let cyear;
// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2
cyear = cdate.getFullYear();
// Step 4: Assign the current year variable to an HTML form element with an ID of year
document.querySelector('#year').textContent = cyear;

/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
document.querySelector('#array').textContent = numArray;
// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )
document.querySelector('#odds').textContent = numArray.filter(numArray => numArray % 2);
// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
document.querySelector('#evens').textContent = numArray.filter(numArray => numArray % 2 === 0);
// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
document.querySelector('#sumOfArray').textContent = numArray.reduce((sum, numArray) => sum + numArray, 0);
// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
document.querySelector('#multiplied').textContent = numArray.map(numArray => numArray * 2);
// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
document.querySelector('#sumOfMultiplied').textContent = numArray.map(numArray => numArray * 2).reduce((sum, numArray) => sum + numArray, 0);