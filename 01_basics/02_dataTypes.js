// "use strict"; //treat all JS code as newer version, by default no need to use
// /*alert("hello")
// this is only for browsers, we are using nodejs
// */
// console.log(3+3); console.log("hello") //bad code readibility the latter should be in a new line
// let y // will have type undefined
// let name="juhi"
// let age=19
// let isLoggedIn = true

// console.log(typeof(null)) //has type object? "historical bug in js"
// console.log(typeof(undefined)) //has type undefined
// console.log("type of NaN is ",typeof(NaN)) //has type number
// console.log("type of name is " , name)
// console.log("type of age is ", age)
// console.log("type of isLoggedIn is ",isLoggedIn)

// const id = Symbol('223')
// const anotherId = Symbol('223')
// console.log(id)
// console.log(id == anotherId)

// const bigNum = 3784938623839382736273899n //big int
// console.log(typeof(bigNum))
/*In JavaScript, non-primitive data types (also called reference types) 
are types that hold collections of values or more complex structures. 
These types are mutable and stored by reference — not by actual value like primitives.
Example:-
*/

const heros = ["hero1" , "hero2" , "hero3"] //arr
console.log(typeof(heros))
//object:-
let myObj = {
    name : "hitesh" , 
    age : "19" , 
    city : "jaipur"
}
console.log(typeof(myObj))
const myFunction = function(){
    console.log("hello world");
}
console.log(typeof(myFunction))
myFunction()
/*function is a subtype of object, created to help developers differentiate 
between regular objects and call-able objects*/

/*
Primitive data types
1 Undefined - A variable that has been declared but not assigned a value.
2 Null - Represents intentional absence of any value.
3 Boolean - Logical value: true or false.
4 Number - Includes integers, floats, NaN, Infinity.
5 BigInt - For arbitrarily large integers.
6 String - A sequence of characters (UTF-16 code units).
7 Symbol - Unique and immutable value used as object keys.


1. Primitive ( call by value = copy version ):
- string =>  string 
- number => number
- Boolean => boolean
- null => object
- undefined => undefined 
- symbol => symbol
- Bigint  => Bigint

Non-Primitive (Reference) Type
8 Object - 
A collection of key–value pairs.
Includes arrays, functions, and user-defined objects.

2. Non-Primitive ( reference type ):
- Array => object 
- Object => object
- Function => Object Function


JavaScript is a dynamically typed language.

What Does Dynamically Typed Mean?
-You don’t declare variable types explicitly.
-The type is determined at runtime, not during compilation.
-A variable can hold values of any type, and its type can change on the fly.
*/