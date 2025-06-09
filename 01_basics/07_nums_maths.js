// const score = 400
// console.log(score)
// const balance = new Number(100)
// console.log(typeof(balance)) //object

// console.log(balance.toString())
// console.log(balance.toString().split('0'))
// console.log(balance.toFixed(2))

// const otherNum = 23.4456742658
// console.log(otherNum.toPrecision(1))
// console.log(otherNum.toPrecision(2))
// console.log(otherNum.toPrecision(3))

// const hund = 1000000
// console.log(hund.toLocaleString('en-IN')); //en-US

//********************Maths********************** */

// console.log(Math)

// console.log(Math.abs(-34));
// console.log(Math.round(6.5));
// console.log(Math.ceil(4.01));
// console.log(Math.floor(4.2));
// console.log(Math.max(0.1 , 3 , 6 ,99));
// console.log(Math.min(0.1 , 3 , 6 ,99));

console.log((Math.random())); //always returns value between 0-1
console.log(Math.floor(Math.random()*10) + 1); //will return value between 0-10

const min = 10
const max = 20

console.log((Math.floor(Math.random() * (max - min +1)) + min))


