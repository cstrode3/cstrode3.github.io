/* Name: Celestia Strode
Date: 1/23/2024
Program Name: CSU2-1
Description: Creates a random number and allows the user to guess the number
*/

// Variables------------------------------------------
let guess; // Tracks the user's guess

// Constants------------------------------------------
const random = Math.floor(Math.random() * 10); // Creates the random number for the user to guess.

// Main---------------------------------------------------
console.log('The computer will pick a random number between 1 and 10.\nTry and guess the number!'); // Tells the user what the program is for
guess = parseInt(prompt('Guess a number between 1 and 10:\n ')); // Gets the guess value from user

if(guess > random) {
    console.log('Your guess was too high.'); // Tells the user if their guess was too high
}
else if(guess < random) {
    console.log('Your guess was too low.'); // Tells the user if their guess was too low
}
else if(guess == random) {
    console.log('You got it!'); // Tells the user if their guess was correct
} // End main function