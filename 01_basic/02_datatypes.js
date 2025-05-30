"use strict"; 
//tc39.es -> original documentation
//mdn -> more easy to use
let name="Rohit"
let age =9
//boolean-true/false
// null-standalone value
// symbol
// object

console.log(typeof age)
console.log(typeof name)
console.log(typeof null)// object
console.log(typeof undefined)// undefined
const id = Symbol("123")

// primitive 7 datatypes -> call by value
//String ,number, boolean, null undefined Symbol BigInt

// Reference type (non-primitive) 
// Array , Objects, Functions

let myobj={
    name:"Rohit",
    age:18
}

//Primitive data type stored in (stack)  Non primitive stored in (heap )