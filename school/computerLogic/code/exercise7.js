/* Name: Celestia Strode
Date: 1/24/2024
Program Name: CSU2-3
Description: Asks the user for a secondary color and tells them what primary colors to mix
*/

// Crates all the variables used in the calculation
let color;

// Creates all the constants used in the calculation
const orange = "Orange";
const green = "Green";
const purple = "Purple";
const white = "White";
const black = "Black";
const red = "Red";
const yellow = "Yellow";
const blue = "Blue";

// Main function
newColor();

function newColor() {
    color = prompt('Enter a color: Orange Green Purple White Black> ');
    switch(color) {
        case "Orange":
            console.log('Mix Red and Yellow\n\n');
            break;
        case "Green":
            console.log('Mix Blue and Yellow\n\n');
            break;
        case "Purple":
            console.log('Mix Red and Blue\n\n');
            break;
        case "White":
            console.log("Don't add any colors\n\n");
            break;
        case "Black":
            console.log('Mix all colors\n\n');
            break;
        default :
            console.log('That was not a color choice\n\n');
    }
    newColor();
} // End main function