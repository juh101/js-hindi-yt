const user = {
    username: "juhi",
    loginCount: 5,
    signedIn: true,

    getuUserDeatils: function () {
        console.log(`got user details , username: ${this.username}`);
        console.log(`This is ${this}`);
        return 1;
    }
}

// console.log(user["username"]);
// console.log(user.getuUserDeatils());
// console.log(this);

// const promise1 = new Promise()
// "new" constructor here is used as "One instance to create multiple objects"	
//  - Use a class, constructor, or factory to generate many objects

function User(name, loginCount, isLoggedIn) {
    this.name = name
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greet = function(){
        console.log(`welcome ${this.name}`);
    }

    return this // implicitly defined , not neccessary to write
}

const userOne = new User("juhi" , 5 , true)
// const usertwo = User("chaiwithcode" , 7 , false) //this overwrites the values
const usertwo = new User("chaiwithcode" , 7 , false) //use new 
console.log(userOne);
console.log(usertwo);
userOne.greet()

// instanceof is a boolean operator used to check whether an object 
// was created from a specific constructor or class.
console.log(userOne instanceof User); //true