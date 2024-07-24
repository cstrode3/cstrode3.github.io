/* Name: Celestia Strode
Date: 2/09/2024
Program Name: CSCIS 156 Project 3
Description: Randomly generates product ideas for a company that needs new ideas.
*/

// Variables
let firstAdjective;
let firstIdea;
let firstObject;
let secondAdjective;
let secondIdea;
let secondObject;

// Constants

// Create 3 arrays named adjective, nounIdea, and nounObject with 8 values each
const adjective = ["Furry", "Slimey", "Fast", "Energetic", "Big", "Heavy", "Scaley", "Weightless"];
const nounIdea = ["boredom", "thought", "life", "travel", "love", "liberty", "knowledge", "courage"];
const nounObject = ["car", "brick", "pumpkin", "snow", "pen", "camera", "wristwatch", "book"];

// Main

// For each of the three arrays ask the user to add two values
console.log(`
Provide a first set of values
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
`);
firstAdjective = prompt(`Please enter an adjective> `);
firstIdea = prompt(`Please enter a noun Idea - not a tangable object> `);
firstObject = prompt(`Please enter a noun - a tangable object> `);

console.log(`
Provide a second set of values
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
`);
secondAdjective = prompt(`Please enter an adjective> `);
secondIdea = prompt(`Please enter a noun Idea - not a tangable object> `);
secondObject = prompt(`Please enter a noun - a tangable object> `);

//  Have the program add the user input values to the array
adjective.push(firstAdjective);
nounIdea.push(firstIdea);
nounObject.push(firstObject);
adjective.push(secondAdjective);
nounIdea.push(secondIdea);
nounObject.push(secondObject);

// Output 5 randomly generated product names
//console.log("");
console.log(`
My five generated products!
~~~~~~~~~~~~~~~~~~~~~~~~~~~

${adjective[Math.floor(Math.random() * adjective.length)]} ${nounIdea[Math.floor(Math.random() * nounIdea.length)]} ${nounObject[Math.floor(Math.random() * nounObject.length)]}
${adjective[Math.floor(Math.random() * adjective.length)]} ${nounIdea[Math.floor(Math.random() * nounIdea.length)]} ${nounObject[Math.floor(Math.random() * nounObject.length)]}
${adjective[Math.floor(Math.random() * adjective.length)]} ${nounIdea[Math.floor(Math.random() * nounIdea.length)]} ${nounObject[Math.floor(Math.random() * nounObject.length)]}
${adjective[Math.floor(Math.random() * adjective.length)]} ${nounIdea[Math.floor(Math.random() * nounIdea.length)]} ${nounObject[Math.floor(Math.random() * nounObject.length)]}
${adjective[Math.floor(Math.random() * adjective.length)]} ${nounIdea[Math.floor(Math.random() * nounIdea.length)]} ${nounObject[Math.floor(Math.random() * nounObject.length)]}`);
// End Main