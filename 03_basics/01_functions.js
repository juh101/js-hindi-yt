// function sayMyName(){
//     console.log("j");
//     console.log("u");
//     console.log("h");
//     console.log("i");
// }

// sayMyName //this is reference to a function (without parenthesis)
// sayMyName() //this is execution of a function

// function addTwoNums(num1 , num2 ) // here we are passing "parameters" num1,2
//     console.log(num1+num2)
// }
//if the function does not have any return value, we cannot store the result in another
//variable like:-

// function addTwoNums(num1 , num2 ){
//     console.log(num1+num2)
//     return num1+num2;
//     // console.log("hi"); //unreachable code as its after return statement
    
// }
// addTwoNums(2,3)
// addTwoNums(4,null)
// addTwoNums(4 ,NaN)
// //while calling the function the values passed are called arguements

// const result =addTwoNums(5,8)
// console.log(result); //undefined if no return statement


// function loginUser(username){
//     if(username == undefined || !username){
//         return `please enter a valid username`
//     }
//     return `${username} just logged in`
// }
// console.log(loginUser("juhi"))
// console.log(loginUser(undefined));
// console.log(loginUser(null));

//or to prevent undefined values to be passed you can define a default value for the function
//function loginUser(username = "sam")

function calcPrize(...num1){
    return num1;
}
function calcPrize2(val1 ,val2, ...num1){
    return num1;
}
//using res operator we turn multiple values into an array

console.log(calcPrize(200, 400, 350, 800));
console.log(calcPrize2(200, 400, 350, 800));

//passing object to function
const user = {
    username: "juhi" , 
    price: 199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} , and price is ${anyobject.price}`);
    
}
handleObject(user)

//passing array into function
const myNewArray = [200, 400, 350, 800]
function returnSecondValue(getarray , number1)
    {return (getarray[number1])}

console.log(returnSecondValue(myNewArray , 4));
