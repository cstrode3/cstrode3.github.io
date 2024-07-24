/* Name: Celestia Strode
Date: 3/20/2024
Program Name: CSCIS 156 Bubble Sort 1
Description: User can enter how many/which numbers to sort, and program sorts them.
*/

// Variables
let cardArray = [];
let len;
let userInput;

// Constants

// Main
console.log(`   Array sorter~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
len = prompt(`How many numbers would you like to sort? `);
console.log();
for(x = 0; x < len; x++) {
    userInput = prompt(`    Enter number ${x + 1} :`);
    cardArray.push(userInput);
}
console.log(`
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
The array you want to sort is: ${cardArray}

        Now Sorting...`); // User message
for(i = 0; i < (len - 1); i++) {
    for(j = 0; j < (len - 1 - i); j++) {
        if(cardArray[j] > cardArray[j + 1]) {
            temp = cardArray[j];
            cardArray[j] = cardArray[j + 1];
            cardArray[j + 1] = temp;
        }
        console.log(cardArray); // Debugging
    }
}
console.log(`
~~~~~~~~~~~~~~~~~~~~~~~~~~~
The array is now sorted: ${cardArray}`);
// End Main