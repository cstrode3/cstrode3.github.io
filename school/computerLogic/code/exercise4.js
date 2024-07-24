/* Name: Celestia Strode
Date: 1/10/2024
Program Name: CSU1-4
Description: This program takes in user input to convert distance values between metric and imperial
*/

// Crates the main variables used in the calculation
let miles;
let kilometers;

// Crates all the constants used in the calculation
const KilometersPerMile = 1.609;
const milesPerKilometer = 0.6214;
const PI = 3.14;

console.log("Let's convert some numbers!\n"); // Tells the use the purpose of the program

miles = prompt("Enter a number of miles:\n "); // Asks for a number of miles
kilometers = prompt("Enter a number of kilometers:\n "); // Asks for a number of kilometers

let milesToKilometers = Number(miles) * KilometersPerMile; // Converts miles to kilometers
let kilometersToMiles = Number(kilometers) * milesPerKilometer; // Converts kilometers to miles

console.log("\n-------Results-------") // Lets the user know this is the results screen
console.log(parseFloat(miles) + " miles is " + milesToKilometers + " kilometers\n"); // Prints the calculation result to the console
console.log(parseFloat(kilometers) + " kilometers is " + kilometersToMiles + " miles"); // Prints the calculation result to the console