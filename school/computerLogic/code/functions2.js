/* Name: Celestia Strode
Date: 3/19/2024
Program Name: CSCIS 156 Functions 2
Description: Calculates volume or area depending on user chioce.
*/

// Variables
let userChoice;
let i;

// Functions
// Gets dimentions of object from user
function input(){
    length = Number(prompt(`
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Please enter the length of the rectangle: `));
    width = Number(prompt(`Please enter the width of the rectangle: `));
    height = Number(prompt(`Please enter the height of the rectangle: `));
    return length;
    return width;
    return height;
}
// Calculates the area of a rectanle
function rect(s1, s2){
    a = s1 * s2;
    console.log(`
    *The area of the rectangle is ${a}`);
}
// cleans up some of the repeated text
function area(){
    if (length > 0 & width > 0){rect(length, width);}
    if (length > 0 & height > 0){rect(length, height);}
    if (width > 0 & height > 0){rect(width, height);}
}
// Calculates the volume of a cube
function cube(side1, side2, side3){
    v = side1 * side2 * side3;
    return v;
}
// cleans up some of the repeated text
function volume(){
    if (length > 0 & width > 0 & height > 0){
        vol = cube(length, width, height);
        console.log(`
    *The volume of the cube is ${vol}`);
    }
}

// Main
while (i != "quit") {
    // Prompts user to choose type of calculation
    console.log(`
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
What would you like me to do?

    1. Calculate Area
    2. Calculate Volume
    3. Quit Program
`);
    userChoice = String(prompt(`Pick an option> `)).toLowerCase();
    switch(userChoice) {
        case "1" : // Calculates area
            input();
            area();
            break;
        case "area" : // Calculates area
            input();
            area();
            break;
        case "2" : // Calculates volume
            input();
            volume();
            break;
        case "volume" : // Calculates volume
            input();
            volume();
            break;
        case "3" : // Closes program
            console.log(`
    Now Exiting...`);
            i = "quit";
            break;
        case "quit" : // Closes program
            console.log(`
    Now Exiting...`);
            i = "quit";
            break;
        default :
            console.log(`\nIncorrect Input, try again.\n`);
    }} // End Main