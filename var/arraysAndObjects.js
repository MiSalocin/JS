// Object 
const person = {
    name: 'john',
    age: 30,
    weight: 86.9,
    isAlive: true
}

//empty Object
const empty = {}

//Using an Object
console.log(`${person.name} is ${person.age} years old`)
console.log("")

//Array
const grocery = [
    'Milk',
    'Rice',
    'Ice'
]
//Using an array
console.log(grocery)
console.log(grocery[1])
console.log(grocery.length)
console.log("")

//Array with objects
const complexGrocery = [
    {
        name: "beans",
        howMuch: 300
    },
    {
        name: 'Milk',
        howMuch: 1.5
    },
    'Rice',
    'Ice'
]
console.log(complexGrocery[0].name)
console.log(complexGrocery[1].howMuch)