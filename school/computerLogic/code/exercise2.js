/* Name: Celestia Strode
Date: 1/8/2024
Program Name: CSU1-2
Description: This program takes in user input to create an invoice.
*/

// Creates variables used throughout the program.
let userName;
let businessName;
let clientName;
let clientBusinessName;
let ratePerHour;
let hoursWorkedDay1;
let hoursWorkedDay2;
let hoursWorkedDay3;
let totalHours;
let totalDue;

console.log("-------Gathering Information-------"); // Lets the user know what stage of the program they are currently in

clientName = prompt("Enter Client's Name:\n "); // Gets Client's name from user

businessName = prompt("Business name:\n "); // Gets business's name from user

ratePerHour = prompt("Rate Per Hour?\n >"); // Gets rate per hour from user

hoursWorkedDay1 = prompt("Hours Worked on day 1:\n>"); // Gets hours worked from user

hoursWorkedDay2 = prompt("Hours Worked on day 2:\n >"); // Gets hours worked from user

hoursWorkedDay3 = prompt("Hours Worked on day 3:\n >"); // Gets hours worked from user

totalHours = Number(hoursWorkedDay1) + Number(hoursWorkedDay2) + Number(hoursWorkedDay3); // Calculates total hours worked
totalDue = ratePerHour * totalHours; // Calculates total payment due

console.log("-------Invoice-------"); // Lets the user know what stage of the program they are currently in

console.log("Brianna Watt DBA " + clientName); // Prints the user's name to the colsole
console.log("Invoice for " + businessName); // Explains who needs to pay the invoice and prints that information to the console
console.log("Hours: " + totalHours); // Prints the hours worked to the console
console.log("Rate: " + ratePerHour); // Prints the hourly rate to the console
console.log("Total: " + totalDue); // Prints the total amount due to the console