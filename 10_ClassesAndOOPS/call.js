// "use strict";
function outer() {
    console.log("outer this:", this); // depends on how outer is called

    function inner() {
        console.log("inner this:", this); // ❗️ global (or undefined in strict mode)
    }

    inner();
}

// outer(); // outer this: globalThis (or window in browsers), inner this: globalThis (or undefined in strict mode)

function SetUsername(username) {
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password) {
    // SetUsername(username)
    SetUsername.call(this, username) // to hold reference to the current object

    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@google.com", "123456");
console.log(chai.username); 
