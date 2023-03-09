//this - object to the left (if no object - the windows object)

//normal func--
function nameFunc(){
}
nameFunc();

//Method invocation--
//myFunc.doThis();


//Constructor invocatiob--
//const dogName = new Dog();


//Indirect invocation--
//doThis.call(dogName, arg1, arg2);


const cafe = {
    cafeName:"Cool cafe",
    printName(){
        console.log(this.cafeName);
    }
}
cafe.printName()
cafe.sayHi = function(){
    console.log(`This cafe name is: ${this.cafeName}`)
}
cafe.sayHi()


//undefined becouse function invication (goes to the global)
const sayHi1 = cafe.printName;
sayHi1()


//constructor------------------------
function Dog(breed) {
    this.breed = breed;

    this.sayBreed = function() {
        console.log(this.breed);
        console.log(this);
    }
}
const tofu =  new Dog("Puddel")
tofu.sayBreed();




// another example--------------------------------
const rabbit = {
    name: "white rabbit",
}
function concatName(string) {
    return string + this.name;
}
//here where we say rabbit,we say that "this" shoud be
console.log(concatName.call(rabbit,"Hello "))

//Indirect invocation-- is the 1st argumnet that is passed for .call(), .apply(), .bind()



// using callback-----------------
const cafe1 = {
    cofeName: "JJ Bean",
    coffeeTypes:["Espresso","drip","other"],
    printMenu: function() {
        this.coffeeTypes.forEach(function(drink) {
            console.log(`${this.cofeName}: ${drink}`)
        }.bind(this))
    }
}
cafe1.printMenu();

// function is not direct property of the object (not belong to the object)
//fucntion invocation (this belojgs to the global)

        // adding let for this(this is the object only in this func)
             // let _self = this;

        // or adding .bind(this)