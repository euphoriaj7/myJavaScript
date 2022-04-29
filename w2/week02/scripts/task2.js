/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
const myName = "Jeff";

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector("#name").innerText = myName;

// Step 3: declare and instantiate a variable to hold the current year
const dateTime = new Date().getFullYear();

// Step 4: place the value of the current year variable into the HTML file
document.querySelector("#year").innerHTML = dateTime;

// Step 5: declare and instantiate a variable to hold the name of your picture
const myPic = "images/IMG_4866.jpg";

// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector("img").src = myPic;



/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
const myFoodArray = ["Pizza", "Burgers", "Fries", "Chicken Wings"];

// Step 2: place the values of the favorite foods variable into the HTML file
document.querySelector("#food").innerText = myFoodArray;

// Step 3: declare and instantiate a variable to hold another favorite food
const otherFav = "Mozzarella Sticks";

// Step 4: add the variable holding another favorite food to the favorite food array
myFoodArray.push(otherFav)

// Step 5: repeat Step 2
document.querySelector("#food").innerText = myFoodArray;

// Step 6: remove the first element in the favorite foods array
myFoodArray.pop()[0];

// Step 7: repeat Step 2
document.querySelector("#food").innerText = myFoodArray;

// Step 8: remove the last element in the favorite foods array
myFoodArray.pop();

// Step 7: repeat Step 2
document.querySelector("#food").innerText = myFoodArray;