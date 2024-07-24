/* Name: Celestia Strode
Date: 3/20/2024
Program Name: CSCIS 156 Objects 1
Description: Program prints my first name, my favorite color, and greets the user with that information.
*/

// Create a person object
const person = {
    firstName: "Celeste",
    lastName: "Strode",
    favoriteColor: "Pink",
    greet: function() {
        return `Hello, my name is ${this.firstName} ${this.lastName}, and my favorite color is ${this.favoriteColor.toLowerCase()}.`
    }
};

// Main
// Access and display object properties
console.log(person.firstName), // Celeste
console.log(person.favoriteColor); // Pink

// Invoke the greet function
console.log(person.greet()); // Hello, my name is Celeste Strode, and my favorite color is Pink.
// End Main