//**********************Conversions*************************** 
// let score="3a3"
// console.log("checking for '33'")
// console.log(typeof(score)) //string

// let valueInNumber = Number(score) 
// console.log(valueInNumber) //NaN
// console.log(typeof(valueInNumber)) //Number
// console.log(isNaN(valueInNumber)) //true


// if(1){
//     console.log("checking for '33'")
//     let score="33"
//     console.log(typeof(score)) //string

//     let valueInNumber = Number(score)
//     console.log(valueInNumber) //33
//     console.log(typeof(valueInNumber)) //Number
//     console.log(isNaN(valueInNumber)) //false
// }

// console.log("checking for null")
// let num = null
// let Value= Number(num)
// console.log(Value)
// console.log(typeof(Value)) //num
// console.log(isNaN(num)) //false

// console.log("checking for undefined")
// let y
// let Valy=Number(y)
// console.log(Valy) //NaN
// console.log(typeof(Valy)) //number
// console.log(isNaN(Valy)) //true

// if(1){
//     console.log("checking for boolean")
//     let y = true
//     let Valy=Number(y)
//     console.log(Valy) //1
//     console.log(typeof(Valy))  //num
//     console.log(isNaN(Valy)) //false
// }

// let isLoggedIn=""
// let booleanLoggedIn = Boolean(isLoggedIn)
// console.log(booleanLoggedIn) //true
// //F -> null , NaN , 0 , empty string; T->string , any num except 0

//*****************************Operations********************************

// // basic operations
// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**3)
// console.log(2/3)
// console.log(5%4)

let str1 = "hello"
let str2 = " hitesh"
let str3 = str1 + str2 + " goodmorn"
console.log(str3)

// console.log(1+"2") //12
// console.log("1" + 2) //12
// console.log(1+2+"4") //34
// console.log("5" * "7") //35

console.log(true+2) //3
console.log(""+5 ) //5

let num1 , num2 , num3;
num1=num2=num3=2+2
console.table({num1,num2,num3})

let gamecounter=0;
++gamecounter
console.log(gamecounter++)
console.log(++gamecounter)

