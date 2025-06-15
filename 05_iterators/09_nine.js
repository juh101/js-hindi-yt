const arr = [1, 2, 3, 4]

// const SumWInitialval = arr.reduce(
//     (accumulator , currentVal) => {
//         console.log(`acc: ${accumulator} and currVal: ${currentVal}`);
//         return accumulator+currentVal
//     },0);

// const SumWInitialval = arr.reduce(function(acc,currentVal){
//     console.log(`acc: ${acc} and currVal: ${currentVal}`);
//     return acc+currentVal
// }, 3)
// console.log(SumWInitialval);
/*
0 + 1 = 1  accumulator = initial val = 0 initially
1 + 2 = 3
3 + 3 = 6
6 + 4 = 10

the final sum will be = sum(arr[i]) + initial value given
*/

// const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
//to get sum
const totalVal = shoppingCart.reduce(function(acc,item){
    return acc+item.price
},0);
console.log(totalVal);
