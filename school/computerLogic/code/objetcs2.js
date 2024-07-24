/* Name: Celestia Strode
Date: 3/20/2024
Program Name: CSCIS 156 Objects 2
Description: Creates a new car with a constructor function, and allows the user to select a car to see the details of (1/John's, 2/Sam's, 3/User's), or exit the program.
*/

// Variables
let userChoice;
let i;

// Functions
// Constructor function
function Car(driver_name, seats_number, cylinder_number){
    this.name = driver_name,
    this.seats = seats_number,
    this.cylinders = cylinder_number
}

// Constants
// Creating objects
const car1 = new Car(`John`, 2, `4 cylinder`);
const car2 = new Car(`Sam`, 4, `v8`);

// Main
// Create new object
console.log(`Add new car~~~~~~~~~~~~~`);
name = prompt(`Driver name? `);
seats = parseInt(prompt(`Number of seats? `));
cylinders = prompt(`Engine cylienders? `);
const car3 = new Car(name, seats, cylinders);
// Allows user to select options or quit program
while (i != "quit") {
    // Prompts user to choose which car they want to see the details for
    console.log(`
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Which car would you like to see?

    1. John's
    2. Sam's
    3. ${name}'s
    4. Exit
`);
    userChoice = String(prompt(`Pick an option> `)).toLowerCase();
    switch(userChoice) {
        case "1" : // Prints data for John's car
            console.log(car1);
            break;
        case "john" : // Prints data for John's car
            console.log(car1);
            break;
        case "2" : // Prints data for Sam's car
            console.log(car2);
            break;
        case "sam" : // Prints data for Sam's car
            console.log(car2);
            break;
        case "3" : // Prints data for User's car
            console.log(car3);
            break;
        case `${name.toLowerCase()}` : // Prints data for User's car
            console.log(car3);
            break;
        case "4" : // Closes program
            console.log(`
    Now Exiting...`);
            i = "quit";
            break;
        case "quit" : // Closes program
            console.log(`
    Now Exiting...`);
            i = "quit";
            break;
        case "exit" : // Closes program
            console.log(`
    Now Exiting...`);
            i = "quit";
            break;
        default :
            console.log(`\nIncorrect Input, try again.\n`);
    }}// End Main