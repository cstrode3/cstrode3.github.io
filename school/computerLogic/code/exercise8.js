/* Name: Celestia Strode
Date: 2/12/2024
Program Name: CSU4-1
Description: Stores values from user in an array and prints them to the console
*/

// Variables
let userValue = 0;

// Constants
const values = [];

// Main
for (let i = 0; i <= 4; i++) {
    userValue = parseFloat(prompt(`Enter Number ${values.length + 1}> `));
    values.push(userValue);
}
for (let i = 0; i <= 4; i++) {
    console.log(`${values[i]}`);
}// End Main