
// fool2 returns undifined, cuz it adds automatic ";" after return--------------------------------------------
function foo1(){
    return {
        bar:"Hey"
    }
}
function foo2(){
    return 
    {
        bar:"Hey"
    }
}
//console.log(foo1())


//retun undefined, cuz func see x in it, but it doesn't have a value yet-----------------------------------
var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
}
//girl()


//returns 5, five times , cuz setTimeout is acivated after the loop---------------------------------------
// for (var i =0; i< 5; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, i * 1000)
// }



// arrow funcs in obj with (this)------------------------------------------
const object = {
    who:'world',
    greet() {
        return `Hello, ${this.who}!`;
    },
    farwell: () => {
        return `Bye, ${this.who}!`;
    }
}
// console.log(object.greet());
// console.log(object.farwell());
// farwell arrow functs look at the global scope and retruns undeifeined

//looking in the same func always 1st (b=3)----------------------------------
var b = 1;
function outer(){
    var b = 2
    function inner(){
        b++;
        var b = 3;
        console.log(b)
    }
    inner()
}
// outer();

// + and - conv---------------------------------------------
let pluts = 9 + '9' //conv to string
let minus = 9 - "10" //conv to num
//console.log(minus)



// if you set the length to the current it delets the last item-------------------------------------
const fruits = ['apple','orange','banana'];
fruits.length = 2;
//console.log(fruits[2])


// b is without var/let keyword wich makes it global (b=5)-------------------------------------
(function(){
    var a = b = 5;
})();
//console.log(b)


//passing defult data if not data comes------------------------------------
function printData(param1,param2) {
    let name = param1 || "John"
    let age = param2 || 30

    console.log(name + " " + age)
}
//printData()


//writing if statement shorter -----------------------------------------
var hasAccess = false; //make true
if ( hasAccess) {
    console.log("I did somthing but longer")
}
hasAccess && console.log("I did somthing")


//printing table------------------------------------------
var citites = [
    {
        "city":"Plovdiv"
    },
    {
        "city":"Sofia"
    },
    {
        "city":"Varna"
    },
    {
        "city":"Burgas"
    }
]
//console.table(citites)

//Caching array.lenght-----------------------------------
// let length = Array.length
// for (var i = 0; i < length; i++) {
//     console.log(Array[i])
// }

//higher order function (map is higher order)-----------------------
const arr1 = [1,4,6,34];
const map1 = arr1.map(function(x) {
    return x * 2;
});


// set timout even 0, will execute afer funcs without settimeout--------------------------
function run() {
    console.log(1);
    setTimeout(function(){ console.log(2)}, 1000);
    setTimeout(function(){ console.log(3)}, 0);
    console.log(4);
}
//run()


//cannot use arrow func as object constructors-------------------------------------
const Car = (color) => {
    this.color = color;
}
//const redCar = new Car("red");


//shortening conosle log in browser------------------------------------------------
//var c = console.log.bind(document)
//c("Hello")
cl = (e) => console.log(e);
cl("hi")
