
//splits the text between what we say (" ") spacebar

let text = "How are you doing today?";
const myArray = text.split(" ");
let word = myArray[1];
console.log(word);
//print the second item into arr (are)

//splits only 3 items (how,are,you)
const myArray2 = text.split(" ", 3);
console.log(myArray2);
