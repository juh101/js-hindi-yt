// console.log(2 >1)
// console.log(2 <1)
// console.log("2" > 1) //T
// console.log("02" >1) //T
// console.log("a2" >1) //F
// console.log(NaN >0)  //F

// console.log(null >= 0) //t
// console.log(null == 0) //f
// console.log(null <= 0) //t 

// console.log(undefined == 0) //f
// console.log(undefined >= 0) //f
// console.log(undefined <= 0) //f

/* comparisions like >= and <= convert null to a number , treating it as 0.
Whereas equality does not
*/

console.log("02" == 2)  //t converts str to int and checks equality
console.log("2" === 2) //f checks value as well as data type


