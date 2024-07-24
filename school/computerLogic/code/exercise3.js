/* Name: Celestia Strode
Date: 1/10/2024
Program Name: CSU1-3
Description: This program takes in user input to calculate an estimate for floor tiling.
*/

// Crates all the variables used in the calculation
let floorLength;
let floorWidth;
let costPerFoot;
let totalArea;
let totalCost;

floorLength = prompt("What is the length in feet of the space you're tiling?\n> "); // Asks for room's length in feet

floorWidth = prompt("What is the width in feet of the space you're tiling?\n> "); // Asks for room's width in feet

costPerFoot = prompt("What is the cost per foot of the tile you're using?\n> "); // Asks for tile's cost per foot

totalArea = Number(floorLength) * Number(floorWidth); // Calculates the area of the room by multiplying the length times the width

totalCost = totalArea * Number(costPerFoot); // Calculates the cost for the room by multiplying the area times the cost per foot

console.log("The room is " + totalArea + " square feet.\nAt $" + costPerFoot + " per sq.ft., It will cost $" + totalCost + " to tile it. "); // Prints the calculation result to the console