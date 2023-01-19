// The spread (...) syntax allows an iterable, such as an array or string, to be expanded in places where zero or more arguments 
// (for function calls) or elements (for array literals) are expected. In an object literal, 
// the spread syntax enumerates the properties of an object and adds the key-value pairs to the object being created.

const citrus = ["Lime", "Lemon", "Orange"];
const fruits = ["Apple", ...citrus, "Banana", "Coconut"];

console.log(fruits)

const fullName = {
  fName: "Hirai",
  lName: "Momo"
};

const user = {
  ...fullName,
  id: 1,
  username: "myoiminatwice"
};

console.log(user);



function sum(x, y, z) {
    return x + y + z;
  }
  
  const numbers = [1, 2, 3];
  
  console.log(sum(...numbers));
  // Expected output: 6
  
  console.log(sum.apply(null, numbers));
  // Expected output: 6
  