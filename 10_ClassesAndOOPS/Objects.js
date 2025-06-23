// function mulby5(num){
//     return num*5
// }

// mulby5.power = 2
// console.log(mulby5(5))
// console.log(typeof mulby5.power)
// console.log(mulby5.prototype)

function createUser(username , score){
    this.username = username
    this.score = score

    return this
}
// const first = createUser("first" , 1000) //This line is just calling the function, not creating a proper object.
// console.log(first.username); 

const first = new createUser("first" , 1000) //This line creates a new object with the properties defined in the createUser function.

createUser.prototype.login = function(){
    return (`${this.username} has logged in`)
}

createUser.prototype.incrementScore = function(){
    this.score++
    return `${this.username} has score ${this.score}`

}

createUser.prototype.printDetails = function(){
    return (`${this.username} has score ${this.score}`)
}
const user1 = new createUser("hitesh" , 1000)
console.log(typeof user1);
console.log(user1.login());
console.log(user1.incrementScore());
console.log(user1.printDetails());


const user2 = new createUser("juhi" , 2000)
console.log(user2.printDetails());


// const myArr = ["ram" , "chai" , "sachin"]
// for(let i = 0 ; i < myArr.length ; i++){
//     let newUser = new createUser(myArr[i] , i)
//     console.log(newUser.printDetails());
// }

// console.log(createUser.prototype);
// console.log(createUser.arguments);
// console.log(createUser.toString());


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the
constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and 
this is bound to the newly created object. If no explicit return value is specified from the constructor, 
JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a 
non-primitive value (object, array, function, etc.), the newly created object is returned.

*/