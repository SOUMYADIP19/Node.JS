// Primitive

//  7 types : Strings,Number,Boolean,Null,Undefined,Symbol,BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 4556565685n



// Reference (Non perimitive)

// Array, Objects, Functions

// const heros = ["ironman","spiderman","loki"]
// let myObj = {
//     name: "soumya"
//     age : 25,

// }

const myfunction = function (){
    console.log("hello world");
}

console.log(typeof bigNumber)

// https://262.ecma-international.org/5.1/#sec-11.4.3
