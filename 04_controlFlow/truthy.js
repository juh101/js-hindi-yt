const userEmail = "juhi@gmail.com" //value is true
// const userEmail = "" //value is false

if(userEmail){
    console.log("got user email");
}
else{
    console.log("dont have user email");
}

/*
falsey values -> 0, -0, bigInt 0n, null, undefined, NaN, ""
false == 0 == ' '
rest are all true
truthy values -> "0", 'false', " ", [], {}, function(){}, 
*/

// to check for empty array
const myArr = []
if(myArr.length === 0) console.log("array is empty");
else console.log("array is not empty");

// to check empty objects
const myObj = {}
if(Object.keys(myObj).length === 0) console.log("object is empty");
else console.log("object is not empty");

console.log(false == 0 );
console.log(false == ' ' );
console.log(0 == ' ' );
console.log(0 == null);

/* Nullish Coalescing Operator (??): null undefined
let result = value ?? defaultValue;
If value is null or undefined, then use defaultValue.
Otherwise, use value.
*/

let name;
let finalName = name ?? "Guest";
console.log(finalName); // "Guest"
let lastname = "oh";
finalName=name??lastname??"guest"
console.log(finalName); // oh

// Terniary Operator

const price = 100
price>80 ? console.log("price is > 80") : console.log("price is < 80");

