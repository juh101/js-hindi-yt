// let a = 100
// var c = 300
// // global scope: global variables can be used in blocks but nor viceversa
// // var does not have block scope which is not preferred
// let d = 400
// if (true) {
//     let a = 10
//     const b = 20
//     c = 30
//     let d = 40
//     //block scope
//     console.log("inner val of a: ", a);

// }

// console.log("outer val of a: ", a);
// // console.log(b);//will throw an error because of block scope
// console.log(c);
// console.log(d);

// // const i=90;
// // i=i+1;
// // console.log(i+1);

// function one() {
//     const username = "hitesh"
//     function two() {
//         var website = "youtube"
//         // let website = "youtube"
//         console.log(username);

//     }
//     two()
//     // console.log(website); 
//     //here this will throw an error as VAR HAS FUNCTION SCOPE!!!!
    
// }
// one()

// if(true){
//     const username = "juhi"
//     if(username === "juhi"){
//         const website =" youtube"
//         console.log(username+website);
//     }
//     // console.log(username + website); //error
// }

/*+++++++++++++++++++++Interesting++++++++++++++++++++++++*/

console.log(addOne(5)); //function declared this way can be executed before declaration
function addOne(num){
    return num+1
}

// console.log(addTwo(5)); //here as we hold the function in a variable ,it cannot be exec before declaring
const addTwo = function(num){
    return num+2
}
console.log(addTwo(5));

function fact(num){
    if(num <= 1){
        return 1
    }
    return num*fact(num-1);
}
console.log(fact(5));
