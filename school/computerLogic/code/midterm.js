/* Name: Celestia Strode
Date: 2/26/2024
Program Name: CSCIS 156 Midterm
Description: Randomly generates product ideas and uses loops to reduce the abount of code required to run
*/

// Variables
let userAdjective;
let userIdea;
let userObject;
let i = 0;

// Constants
const adjective = ["Furry", "Slimey", "Fast", "Energetic", "Big", "Heavy", "Scaley", "Weightless"];
const nounIdea = ["boredom", "thought", "life", "travel", "love", "liberty", "knowledge", "courage"];
const nounObject = ["car", "brick", "pumpkin", "snow", "pen", "camera", "wristwatch", "book"];
const entryArray = ["First", "Second"];

// Main
// Promts the user to input data
for (let i = 0; i <= 1; i++) {
    console.log(`
Provide ${entryArray[i]} set of values
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
`);
    // Gets and stores user inputs
    userAdjective = prompt(`Please enter an adjective> `);
    adjective.push(userAdjective);
    userIdea = prompt(`Please enter a noun Idea - not a tangable object> `);
    nounIdea.push(userIdea);
    userObject = prompt(`Please enter a noun - a tangable object> `);
    nounObject.push(userObject);
}

// Outputs 5 randomly generated product names
console.log(`
My five generated products!
~~~~~~~~~~~~~~~~~~~~~~~~~~~
`);
// Prints each product idea on its own line
while (i <= 4) {
    i++; // Tracks how many ideas have been printed
    console.log(`${i}: ${adjective[Math.floor(Math.random() * adjective.length)]} ${nounIdea[Math.floor(Math.random() * nounIdea.length)]} ${nounObject[Math.floor(Math.random() * nounObject.length)]}`);
}
// End Main