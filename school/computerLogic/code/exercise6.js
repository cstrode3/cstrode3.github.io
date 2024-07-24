/* Name: Celestia Strode
Date: 1/24/2024
Program Name: CSU2-2
Description: Gets the time of day from the user and greets the user based on the entered time.
*/

// Crates all the variables used in the calculation
let time;

// Main function
time = parseInt(prompt('Enter the hour in military time (1-24)\n> ')); // Gets current time from user
if((time < 6) || (time > 20)) {
    console.log('Good Day'); // Prints a message if the the entered time is not morning, afternoon, or evening
}
else if((time >= 6) && (time < 12)) {
    console.log('Good morning'); // Prints a message if the entered time is during the morning
}
else if((time >= 12) && (time < 18)) {
    console.log('Good afternoon'); // Prints a message if the entered time is during the afternoon
}
else if((time >= 18) && (time <= 20)) {
    console.log('Good evening'); // Prints a message if the entered time is during the evening
}
// End main function