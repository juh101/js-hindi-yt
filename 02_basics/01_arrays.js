// const myArray = [ 0, 1, 2, 3, 4, 5, 6]
// console.log(myArray[0]);
// /*shallow copies - a copy of an object whose properties share the same 
// references as those of the source object. 
// deep copies - a copy whose properties do not share the same references as
// those of the source object.
// js array-copy operations create shallow copies.
// */
// const myArr = new Array(33 ,45, 72)
// console.log(myArr);
// //myArr[100] = 22

// myArr.push(55)
// myArr.push(90)
// myArr.pop()
// myArr.unshift(8) //insertion at begining
// myArr.unshift(10)
// console.log(myArr);
// myArr.shift() //deletion at begining
// console.log(myArr);
// console.log(myArr.includes(33));
// console.log(myArr.indexOf(72)); //returns -1 if not present

// const newArr = myArr.join('-')
// console.log(myArr);
// console.log(newArr);
// console.log(typeof(newArr));

/**************************** */

const myar1 = new Array(0,1,2,3,4,5)
console.log("A " , myar1);

const myn1 = myar1.slice(1,3)
console.log(myn1);
console.log("B " , myar1);

const myn2 = myar1.splice(1 , 3)
console.log(myn2);
console.log("C ", myar1);



