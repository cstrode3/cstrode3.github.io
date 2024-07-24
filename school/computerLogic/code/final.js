/* Name: Celestia Strode
Date: 3/22/2024
Program Name: CSCIS 156 Final Project
Description: Generates a custom amount of random numbers decided by the user, stores those numbers in an array, and displays the array of numbers to the user. This program also asks the user if they want the numbers sorted, and will sort the array if desired, or will close itself if the user does not want the numbers sorted.
*/

// Variables
let numOfRandNum;
let userChoice;
let run = true;

// Constants
const randomNumbers = [];

// Functions
function numberFactory() {
    randNum = Math.floor(Math.random() * 100); // Generates random numbers
    randomNumbers.push(randNum); // Stores randomly generated numbers in an array
}
function diplayRandomNumbers() { // Inserts a blank line then prints the array of numbers
    console.log();
    console.log(randomNumbers);
}
function deRandomizer() { // Sorts an array of numbers by value
    len = randomNumbers.length; // Creates a temporary variable and assignes it a value
    for(i = 0; i < (len - 1); i++) { // Cycles through every value in an array
        for(j = 0; j < (len - 1 - i); j++) {
            if(randomNumbers[j] > randomNumbers[j + 1]) {
                temp = randomNumbers[j];// Creates a temp variable and assignes it a value
                randomNumbers[j] = randomNumbers[j + 1];
                randomNumbers[j + 1] = temp;
            }
        }
    }
}
function reset() {
    deRandomizer(); // Calls the array sorter
    diplayRandomNumbers(); // Calls the function for displaying an array of numbers
    randomNumbers.splice(0); // Resets the array of numbers so that it's empty
}
function close(){ // Displays a closing message before closing the program
    console.log(`
    Thank you - ending the program...`);
    run = false;
}

// Main
while (run != false) {// Tells the program to run unless it's shut off
    numOfRandNum = parseInt(prompt(`
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
How many random numbers would you like? >`)); // Asks the user how many numbers to make
    for(l = 0; l < numOfRandNum; l++) { // Runs as many times as the user asks it to
        numberFactory(); // Makes the random numbers
    }
    diplayRandomNumbers(); // Displays the array of unsorted randomly generated numbers
    // Asks user if they would like their numbers sorted
    console.log(`
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Would you like your numbers sorted?

    1. Y = Yes
    2. N = No
`);
    userChoice = String(prompt(`Pick an option> `)).toLowerCase();
    switch(userChoice) { // Checks what the user wants and runs acording code
        case "1" : // Sorts an array of numbers, displays sorted array, and resets it
            reset();
            break;
        case "y" : // Sorts an array of numbers, displays sorted array, and resets it
            reset();
            break;
        case "yes" : // Sorts an array of numbers, displays sorted array, and resets it
            reset();
            break;
        case "2" : // Displays a closing message before closing the program
            close();
            break;
        case "n" : // Displays a closing message before closing the program
            close();
            break;
        case "no" : // Displays a closing message before closing the program
            close();
            break;
        default : // Catches invalid inputs and promts the user to try again
            console.log(`\nIncorrect Input, try again.\n`);
    }
}
// End Main