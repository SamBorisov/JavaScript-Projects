
let numbers = [3,56,2,42,53,1,64];

//Reduce - Accumulate a value by doing something to each item in an array.


let reducedNum = 0;

numbers.forEach(currX => reducedNum += currX)
console.log(reducedNum)



const usingReduceSimple = numbers.reduce( (accumulator, currX) =>  accumulator + currX)


const usingReduce = numbers.reduce( (accumulator, currX) => {
    console.log("acc " + accumulator)
    console.log("curNum " + currX)
    return accumulator + currX;
})
console.log(usingReduce)