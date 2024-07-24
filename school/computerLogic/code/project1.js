/* Name: Celestia Strode
Date: 1/12/2024
Program Name: CSCIS 156 Project 1
Description: This program takes in user input to calculate an interest rate over a period of an arbatrary number of years
*/

// Crates all the variables used in the calculation
let totalInterest;
let yearsRemaining;
let balanceYearOne;
let yearsRunning = 1; // Starts the years running at one (saves a few lines of code)
let newBalance;

// User input block (Creates all the constants used in the calculation)
const startingBalance = parseFloat(prompt("<<Please enter your starting balance: ")); // Gets starting balance from user
const interestRate = parseFloat(prompt("<<Please enter your interest rate as a decimal: ")); // gets interest rate from user (Requires a value between 0 and 1)
const totalYears = parseInt(prompt("<<Please enter how many years your account will be gaining interest: ")); // Gets account duration from user (Used for checking interest payouts of an arbitrary number of full years, and to print the final year of operration) 
console.log("<<You can only check your balance once per year"); // Explains the allowed values for following prompt
const frequency = parseInt(prompt("<<Please enter how often you want to check your balance ")); // Gets frequency from user used to determin how often an account should be checked
// End user input block

// Year one calculation block
totalInterest = 1 + interestRate; // Makes interest greater than 1 so that multiplying doesn't result in a smaller value
yearsRemaining = totalYears - 1; // Subtracts 1 from years remaining (Used to tell the program when to stop running)
balanceYearOne = startingBalance * totalInterest; // Calculates balance at the end of the first year
// End year one calculation block

console.log("<<After " + yearsRunning + " year, your account will contain $" + balanceYearOne.toFixed(2)); // Tells the user what their expected balance will be at the end of the first year
newBalance = balanceYearOne * totalInterest; // Establishes the new balance variable used in the while loop
// Main function
while (yearsRemaining > 0) {
    yearsRemaining -= 1; // Subtracts 1 from years remaining at the start of a new year
    yearsRunning += 1; // Adds one to years running at the start of a new year

    // Checks if it's time to print a calculation results (based on how long the calculation has been running and the user's desired frequency)
    if (yearsRunning % frequency == 0) {
        console.log("<<After " + yearsRunning + " years, your account will contain $" + newBalance.toFixed(2)); // Prints calculation results
    }

    // Makes sure to print the calculation result on the last year of running
    if (yearsRunning == totalYears && yearsRunning % frequency !== 0) {
        console.log("<<After " + yearsRunning + " years, your account will contain $" + newBalance.toFixed(2)); // Prints calculation results
    }
    newBalance = newBalance * totalInterest; // Calculates the new balance at the start of a new year
} // End main function