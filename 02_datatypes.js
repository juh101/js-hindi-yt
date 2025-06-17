"use strict"; //treat all JS code as newer version, by default no need to use
/*alert("hello")
this is only for browsers, we are using nodejs
*/
console.log(3+3); console.log("hello") //bad code readibility the latter should be in a new line
let y // will have type undefined
let name="juhi"
let age=19
let isLoggedIn = true

console.log(typeof(null)) //has type object? "historical bug in js"
console.log(typeof(undefined)) //has type undefined
console.log("type of NaN is ",typeof(NaN)) //has type number
console.log("type of name is " , name)
console.log("type of age is ", age)
console.log("type of isLoggedIn is ",isLoggedIn)

const id = Symbol('223')
const anotherId = Symbol('44')
console.log(id)



/*
Primitive data types
1 Undefined - A variable that has been declared but not assigned a value.
2 Null - Represents intentional absence of any value.
3 Boolean - Logical value: true or false.
4 Number - Includes integers, floats, NaN, Infinity.
5 BigInt - For arbitrarily large integers.
6 String - A sequence of characters (UTF-16 code units).
7 Symbol - Unique and immutable value used as object keys.

Non-Primitive (Reference) Type
8 Object - 
A collection of key–value pairs.
Includes arrays, functions, and user-defined objects.
*/

/*
JavaScript is a dynamically typed language.

What Does Dynamically Typed Mean?
-You don’t declare variable types explicitly.
-The type is determined at runtime, not during compilation.
-A variable can hold values of any type, and its type can change on the fly.
*/