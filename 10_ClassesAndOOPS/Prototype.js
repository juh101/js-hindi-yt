// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);
// we need a method to remove the extra spaces and return the true length of all strings


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

// heroPower.hitesh()
myHeros.hitesh()

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh is present in array`);
}

myHeros.heyHitesh()
// heroPower.heyHitesh() //does not have access to this method because it is not an array

// the inheritance chain is like this
// myHeros -> Array.prototype -> Object.prototype -> null
// heroPower -> Object.prototype -> null

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fulltime: true,
    __proto__: TeachingSupport // adding the properties of TeachingSupport to TASupport i.e prototypal inheritance
}
console.log(TASupport.isAvailable); // false

// Teacher.hitesh() //works as it is an object

Teacher.__proto__ = TeachingSupport //prototypal inheritance
console.log(Teacher.isAvailable); // false

Teacher.__proto__ = User 
console.log(Teacher.name); 
console.log(Teacher.email); 

//modern way to set prototype
Object.setPrototypeOf(Teacher, TASupport) // another way, now teacher has access to TASupport properties
console.log(Teacher.fulltime); 
console.log(Teacher.isAvailable); // as TASupport has access to properties of TeachingSupport, Teacher has access to isAvailable property



// Now solving the problem of true length of string
String.prototype.trueLength = function() {
    // console.log(`${this}`);
    // console.log(`${this.length}`);
    // this refers to the string object on which the method is called
    return this.trim().length; // trim removes the extra spaces from the start and end of the string
}

let username = "   hitesh   ";
console.log(username.trueLength()); // 6

// let myChannel = "   chai   ";
// console.log(myChannel.trueLength()); // 4

