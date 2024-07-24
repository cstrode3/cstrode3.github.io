/* Name: Celestia Strode
Date: 3/19/2024
Program Name: CSCIS 156 Functions 1
Description: Randomly generates product ideas and uses loops to reduce the amount of code required to run, uses functions to further minimize code clutter
*/

// Variables
let userAdjective;
let userIdea;
let userObject;
let i = 0;
let meridiem = "AM";

// Constants
// List of adjectives
const adjective = ["Furry", "Slimey", "Fast", "Energetic", "Big", "Heavy", "Scaley", "Weightless"];
// List of noun concepts
const nounIdea = ["boredom", "thought", "life", "travel", "love", "liberty", "knowledge", "courage"];
// List of objects
const nounObject = ["car", "brick", "pumpkin", "snow", "pen", "camera", "wristwatch", "book"];
// Used to cleanly format prompt text
const entryArray = ["First", "Second"];

// Functions
// Gets time and date information
function time(){
    let now = new Date();
    let hr = now.getHours();
    // Formats to 12 hour time
    if (hr > 12) {
        hr = hr - 12;
        meridiem = "PM";
    }
    let min = now.getMinutes();
    // Accounts for single digit minutes
    if (min < 10) {
        min = `0${min}`;
    }
    console.log(`Time: ${hr}:${min}${meridiem}`)
}
// Creates random numbers between 0 and 10 (inclusive)
function randNum(){
    random = Math.floor(Math.random() * adjective.length);
    return random;
}

// Main
// Prints the current time
time();

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
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
`);

// Prints each product idea on its own line
while (i <= 4) {
    i++; // Tracks how many ideas have been printed
    console.log(`${i}: ${adjective[randNum()]} ${nounIdea[randNum()]} ${nounObject[randNum()]}`);
}
// Prints the current time
time();
// End Main