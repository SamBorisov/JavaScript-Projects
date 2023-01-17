const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB", { useNewUrlParser: true })


const fruitSchema  = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
})
const Fruit = mongoose.model("Fruits", fruitSchema);

const fruit = new Fruit({
   // name: "",
    score: 8,
    review:"Great!"
})

// fruit.save();

const peopleSchema  = new mongoose.Schema({
    fname: String,
    lname: String,
    email: String,
    favoriteFruit: fruitSchema
})
const Person = mongoose.model("People", peopleSchema);


const pineapple = new Fruit({
    name: "Pineapple",
    score: 7,
    review:"Apple-Pineapple!"
})
// pineapple.save();


const person = new Person({
    fname: "Amy",
    lname: "Bobins",
    email:"AmyShamy@gmail.com!",
    favoriteFruit: pineapple
})
// person.save();

const kiwi = new Fruit({
    name: "Kiwi",
    score: 5,
    review:"Biva!"
})
const orange = new Fruit({
    name: "Orange",
    score: 7,
    review:"juice!"
})
const banana = new Fruit({
    name: "banana",
    score: 10,
    review:"Perfect!"
})


// Fruit.insertMany([kiwi, orange, banana], (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Success");
//     }
// })


// Fruit.find((err, fruits)=> {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(fruits)
//     }
// })

Person.find((err, person) => { 
    person.forEach(personn => {
        console.log(personn.fname)}) 
});

Fruit.find((err, fruits) => { 

    mongoose.connection.close();
    fruits.forEach(personn => {
        console.log(personn.name)}) 
});

// Fruit.updateOne({_id: "63bd47e9747f65bfe0979a52"}, {name: "Peach", score: 9}, (err) => {
//     if (err){
//         console.log(err)
//     } else {
//         console.log("Yey!")
//     }
// })

// Person.deleteOne({_id: "63bd482d5b97366f99a1c6f1"}, (err) => { 
    
//     console.log("Single Item Deleted")});

// Person.deleteMany({fname: ""}, (err) => { 
//     if (err){
//     console.log(err)
//     } else {
//     console.log("Items Deleted")}});




Person.updateOne({_id: "63bd68b855d328ef1e689750"}, {favoriteFruit: kiwi}, (err) => {
    if (err){
        console.log(err)
    } else {
        console.log("Yey!")
    }
})