/* Name: Celestia Strode
Date: 2/12/2024
Program Name: CSU4-2
Description: Provides the user with a set of options, and runs until the user chooses the quit option
*/

// Variables
let userChoice;
let i;

// Constants
const greet = `\nHello\n`;
const farewell = `\nGoodbye\n`;
const quit = `\nNow Exiting`;

// Main
while (i != "quit") {// Runs based on condition
    console.log(`1. Greet
2. Bid Farewell
3. Quit
`);
    userChoice = String(prompt(`Pick an option> `));
    switch(userChoice) {
        case "1" :
            console.log(greet);
            break;
        case "greet" :
            console.log(greet);
            break;
        case "Greet" :
            console.log(greet);
            break;
        case "2" :
            console.log(farewell);
            break;
        case "farewell" :
            console.log(farewell);
            break;
        case "Farewell" :
            console.log(farewell);
            break;
        case "3" :
            console.log(quit);
            i = "quit";
            break;
        case "quit" :
            console.log(quit);
            i = "quit";
            break;
        case "Quit" :
            console.log(quit);
            i = "quit";
            break;
        default :
            console.log(`\nIncorrect Input, try again.\n`);
    }
}// End Main