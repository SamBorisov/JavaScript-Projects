const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req, res) => {


  res.send(Fibonacci(parseFloat(req.query.n)).toString())
});

/*
TODO: implement an endpoint that, given the number N, returns the  N-th fibonacci number
Fibonacci numbers are generated based on the following rules:
fib(0) = 0
fib(1) = 1
for any n > 1:
fib(n) = fib(n - 1) + fib(n - 2)
*/
function Fibonacci(n) {
  if (parseInt(n) !== parseFloat(n) || n < 0) {
    throw new Error ("Invalid input")
  } 
  if(n === 0) {
    return 0;
  } else 
  if(n === 1) {
    return 1;
  } else {
    return Fibonacci(n - 1) + Fibonacci(n - 2);
  }
}



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
