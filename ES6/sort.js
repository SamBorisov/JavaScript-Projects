
//sort

//arr.sort([compareFunction])

let students = [
    {
        firstName: 'Johnny',
        lastName: 'Lee',
        age: 20,
    },

    {
        firstName: 'Anna',
        lastName: 'Zax',
        age: 19,

    },

    {
        firstName: 'Zion',
        lastName: 'Sanches',
        age: 22,

    }
];
//sorting by age
students.sort((a, b) => b.age - a.age);

students.forEach((e) => {
    console.log(`${e.firstName} ${e.lastName} ${e.age}`);
});


// Anna Zax 19
// Johnny Lee 20
// Zion Sanches 22