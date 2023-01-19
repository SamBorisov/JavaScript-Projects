
let numbers = [3,56,2,42,53,1,64];

//Filter - Create a new array by keeping the items that return true.


const filtered = numbers.filter( x =>  x > 10)
console.log(filtered)



let filteredArr = []
numbers.forEach( x => {
  if (x < 10){
    filteredArr.push(x);
  }
})
console.log(filteredArr)