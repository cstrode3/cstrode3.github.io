/* Name: Celestia Strode
Date: 1/10/2024
Program Name: CSU1-1
Description: This program takes in user input to calculate a rate per day value.
*/

// Crates the 3 variables used in the calculation
let disiredWeight;
let allowedTime;
let possibleRate;

disiredWeight = prompt("How many pounds of newspaper do you hope to bring in?\n> "); // Asks user for desired amount of newspaper by weight in pounds

allowedTime = prompt("How many days do you have to bring in newspaper?\n> "); // Asks user for the number of days they have to collect the desired amount of newspaper

possibleRate = Number(disiredWeight) / Number(allowedTime); // Calculates the amount of newspaper required per day by weight

console.log("You will need to bring in " + possibleRate + " pounds of paper each day in order to reach your goal of " + disiredWeight + " pounds in " + allowedTime + " days."); // Prints the calculation result to the console