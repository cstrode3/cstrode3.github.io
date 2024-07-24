/* Name: Celestia Strode
Date: 1/29/2024
Program Name: CSCIS 156 Project 2
Description: Gets an order from the user and calculates the cost of the order
*/

// Variables
let toppingsTotal;
let discount;
let total;
let topping1;
let topping2;
let topping3;

// Constants
const yogurt = 1.00;
const tomatoes = 0.50;
const lettuce = 0.30;
const skittles = 0.75;

// Main
console.log("~~~~~~~~~~~~~~~~~~~~Fixin's~~~~~~~~~~~~~~~~~~~~\nYogurt - $1.00\nTomatoes - $0.50\nLettuce - $0.30\nSkittles - $0.75"); // Prints a menu of available options to the console

topping1 = prompt('<<Please enter first topping: '); // Gets first topping from user

switch(topping1) { // Uses the entered topping & assigns a cost
    case "Yogurt":
        topping1 = yogurt; // Sets the cost of the first topping
        break;
    case "Tomatoes":
        topping1 = tomatoes; // Sets the cost of the first topping
        break;
    case "Lettuce":
        topping1 = lettuce; // Sets the cost of the first topping
        break;
    case "Skittles":
        topping1 = skittles; // Sets the cost of the first topping
        break;
    default:
        topping1 = 0; // Sets the cost of the first topping
        console.log("Topping not available. Disregarding request."); // Catches misspellings and items not on the menu
        break;
}

topping2 = prompt('<<Please enter second topping: '); // Gets second topping from user

switch(topping2) { // Uses the entered topping & assigns a cost
    case "Yogurt":
        topping2 = yogurt; // Sets the cost of the second topping
        break;
    case "Tomatoes":
        topping2 = tomatoes; // Sets the cost of the second topping
        break;
    case "Lettuce":
        topping2 = lettuce; // Sets the cost of the second topping
        break;
    case "Skittles":
        topping2 = skittles; // Sets the cost of the second topping
        break;
    default:
        topping2 = 0; // Sets the cost of the second topping
        console.log("Topping not available. Disregarding request."); // Catches misspellings and items not on the menu
        break;
}

topping3 = prompt('<<Please enter third topping: '); // Gets third topping from user

switch(topping3) { // Uses the entered topping & assigns a cost
    case "Yogurt":
        topping3 = yogurt; // Sets the cost of the third topping
        break;
    case "Tomatoes":
        topping3 = tomatoes; // Sets the cost of the third topping
        break;
    case "Lettuce":
        topping3 = lettuce; // Sets the cost of the third topping
        break;
    case "Skittles":
        topping3 = skittles; // Sets the cost of the third topping
        break;
    default:
        topping3 = 0; // Sets the cost of the third topping
        console.log("Topping not available. Disregarding request."); // Catches misspellings and items not on the menu
        break;
}

toppingsTotal = topping1 + topping2 + topping3; // Finds the total cost of the toppings

if (toppingsTotal >= 1.00) { // Applies a discount if the total cost of the toppings is $1 or more

    console.log('>>Your toppings cost $' + toppingsTotal.toFixed(2)); // Tells the user the total cost of the toppings

    discount = Math.floor(toppingsTotal * 0.10 * 100)/100; // calculates how much should be subtracted from the total cost based on a 10% discount
    console.log('>>You saved $' + discount.toFixed(2) + '!'); // Tells the user how much they saved by getting the discount

    total = toppingsTotal - discount; // Calculates the final cost by subtracting the discount from the cost of the toppings
    console.log('>>Your total is $' + total.toFixed(2)); // Tells the user the final cost.
}

else {
    console.log('>>Your toppings cost $' + toppingsTotal.toFixed(2)); // Tells the user the total cost of the toppings
} // End Main