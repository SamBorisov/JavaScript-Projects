//promise ----------------------------------------
let shoesAailable = new Promise((resolve, reject)=> {
    let inStock = true;

    if(inStock) {
       //Promise is fulfilled
       resolve("Strores has it") 
    } else {
        reject("Store doesn't have it")
    }
})


let enoughFunds = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("You have enough money"),1000)
        //setTimeout(() => reject("Not enough money"),1000)
    })
}

let transacion = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Transaction was successful"),1000)
    })
}


Promise.all([shoesAailable, enoughFunds(), transacion()])
    .then((values) => console.log(values))

// shoesAailable
//     .then((response) => {
//         console.log(response)
//         return enoughFunds();
//     })
//     .then((response)=> {
//         console.log(response)
//         return transacion();
//     })
//     .then((response) => console.log("Done:" + response))
//     .catch((err) => console.log(err))



// const asyncFunc = () => {

//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 console.log("From asyncFunction!");
//                 resolve();
//             },1000)
//         })

// }

// asyncFunc().then( () => {console.log("waiting")})