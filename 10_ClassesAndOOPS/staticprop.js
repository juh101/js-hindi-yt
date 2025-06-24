class User{
    constructor(name){
        this.name = name;
    }
    logMe(){
        console.log(`User name is ${this.name}`);
    }
    // such that everyuser gets an id
    static createId(){
        return `123`
    }
}

// In JavaScript, a static property or method belongs to the class itself, not to instances created from that class.
// Static methods are called on the class itself, not on instances of the class.

const chai = new User("Chai");
chai.logMe();
// console.log(chai.createId()); // undefined, as createId is a static method and not an instance method
// chai.createId(); // ❗️ Error: chai.createId is not a function, as createId is a static method
console.log(User.createId()); // 123

class Teacher extends User {
    constructor(name,email){
        super(name); // Call the parent class constructor
        this.email = email;
    }
}

const tea = new Teacher("Tea", "tea@mail.com");
tea.logMe();
// tea.createId(); // ❗️ Error
Teacher.createId(); // 123, as createId is a static method of the User class and can be called on the Teacher class

class MathHelper {
  static square(n) {
    return n * n;
  }
}

console.log(`square of 5 is: ${MathHelper.square(5)}`); // ✅ 25

