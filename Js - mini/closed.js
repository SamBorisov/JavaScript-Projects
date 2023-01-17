// Name converter:

var a = prompt("text here")
b = a.slice(0,1);
b = b.toUpperCase();
c = a.slice(1,a.length);
c = c.toLowerCase()
a = b + c;
alert(a);


//Dog Age colcolator:
 
var humanAge;
var dogAge = 7;
humanAge = (dogAge - 2) * 4 +21
console.log("Human age of the dog is: " + humanAge)


// time till 90
function lifeInWeeks(age) {

    console.log("You have " + ((90-age)*365) +" days, " + ((90-age)*52) + " weeks, or " + ((90-age)*12) + " months left until you are 90 years old!");
        
    }
    
lifeInWeeks(56)



//BMI calc

function BMI (weight, height) {
    
    let restult = weight/Math.pow(height, 2);
    
    if (restult < 18.5) {
        console.log( "Your BMI is "+ restult +", so you are underweight.");
    } else if ( restult >= 18.5 && restult <= 24.9) {
        console.log("Your BMI is "+ restult +", so you have a normal weight.");
    } else if ( restult > 24.9) {
        console.log( "Your BMI is "+ restult +", so you are overweight.")
    }
}
BMI(100, 2);


 //Get milk robot, retrun exchange    

function getMilk(money , bottleCost) {   
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    console.log("Buy " + parseInt(money/bottleCost) + " bottles and should retrun " + (money%bottleCost) + " money" );
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
    return money%bottleCost;
  }

console.log("Here's your change:" + getMilk(17, 2));




// Love calcolator:

function loveCalc(name1, name2) {
    let loveScore = Math.floor(Math.random() * 100) + 1; 


    if (loveScore >= 69) {

    console.log("Your love chance is quite big: " + loveScore + "% you 2: " + name1 + " <3 " + name2 + "!")

    } else if ( loveScore < 69 && loveScore >= 40) {

    console.log("Your love chance avarage: " + loveScore + "%!")

    } else {

    console.log("Your love chance is low: " + loveScore + "% , don't even try to date!")

    }
    return loveScore;
}
console.log(loveCalc("Georgi", "Geri"))

//Leap year calculator

function isLeap(year) {

    let Leap = "It's Leap!";
    let notLeap ="It's Not Leap!!!";

    if ( year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                 console.log(Leap) 
            } else {
                console.log(notLeap) 
            }

        } else {
            console.log(Leap) 
        }
    } else {
        console.log(notLeap) 
    }     
    
    }

    isLeap(2400);
    isLeap(1989);


    // party list 
let n = "Angela";

let names = ["Angela", "Ben", "Dona", "Phill"];


if (names.includes(n)) {
    console.log("Welcome to the party!")
} else {
    console.log("You are not on the list...")
}


//Fizz Buzz game

let output = [];
function fizzBuzz() {

    let num = output.length + 1;

        while(num <34) {
        if (num % 3 === 0 && num % 5 === 0) {
            output.push("FizzBuzz")
        } else if (num % 3 === 0 && num % 5 !== 0) {
            output.push("Fizz")
        } else if (num % 3 !== 0 && num % 5 === 0) {
            output.push("Buzz")
        } else {
            output.push(num)
        }
        num++;
    }
    console.log(output)
}
//for (let i = 1; i < 34; i++) fizzBuzz(i);
fizzBuzz()



//Random Person Paying!

function whosPaying(names) {
    
    names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
   
    let randomNum = Math.floor(Math.random() * names.length);
    let person = names[randomNum];
    
    console.log(person +" is going to buy lunch today!");

}
whosPaying()


//Beer song
function Beer() {
    let n = 99;
    while (n > 1) {
        console.log( n +" bottles of beer on the wall, "+ n +" bottles of beer.")
        n--;
        console.log( "Take one down and pass it around, "+ n +" bottles of beer on the wall.")

        
    } if (n === 1) {
        console.log( n +" bottle of beer on the wall, "+ n +" bottle of beer")
        console.log( "Take one down and pass it around, no more bottles of beer on the wall.")

        console.log( "No more bottles of beer on the wall, no more bottles of beer.")
        console.log( "Go to the store and buy some more, 99 bottles of beer on the wall.")
    }
}
Beer()


// Fibonachi 

function fibonacciGenerator(n) {

    let arr = [];
    for (i = 0; i < n; i++) {
        if (arr.length >= 2) {          
            let lastItem = arr[arr.length - 1];
            let prevLastItem = arr[arr.length - 2];
            let newItem = lastItem + prevLastItem;
            arr.push(newItem);
        } else if (arr.length === 1) {
            arr.push(1);
        } else {
            arr.push(0);
        }
    } 
    console.log(arr);    
}
fibonacciGenerator(13)