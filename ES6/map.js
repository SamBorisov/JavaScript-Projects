
let numbers = [3,56,2,42,53,1,64];

//Map -Create a new array by doing something with each item in an array.


function double(x) {
    return x * 2;
}


const newNum1 = numbers.map(double)




const newNum2 = numbers.map( x => x * 2)
console.log(newNum2)



let newNum3 = []
numbers.forEach( x => newNum3.push(x * 2))
console.log(newNum3)



//example 
// Show only 1st 15 characters of text
let content = [
    {
    name: "a",
    meaning: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
},
{
    name: "s",
    meaning: "ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss"
},
]

const text = content.map( x => String(x.meaning).substring(0, 15));

console.log(text);