class user {
    constructor(name, email, password) {
        this.name = name
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}123`
    }

    changeName(){
        return `${this.name.toUpperCase()}`
    }
}

const chai = new user("chai" , "chai@mail.com" , "abc")
console.log(chai.encryptPassword())
console.log(chai.changeName())

// using functions as alternative to classes
function User(name, email, password) {
    this.name = name
    this.email = email
    this.password = password 
}
User.prototype.encryptPassword = function() {
    return `${this.password}123`
}   
User.prototype.changeName = function() {
    return `${this.name.toUpperCase()}`
}
const chai2 = new User("chai2" , "chai2@mail.com" , "def");
console.log(chai2.encryptPassword())
console.log(chai2.changeName())
