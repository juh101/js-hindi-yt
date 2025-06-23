class User{
    constructor(name){
        this.name = name;
    }

    logMe(){
        console.log(`User name is ${this.name}`);
    }
}

class Teacher extends User {
    constructor(name, email, password, subject) {
        super(name); // Call the parent class constructor
        // same as calling another function within a function to initialize the parent class properties
        this.subject = subject;
        this.email = email;
        this.password = password;
    }
    addCourse(courseName) {
        console.log(`Course ${courseName} added by ${this.name}`);
    }
}

const chai = new Teacher("Chai", "chai@mail.com", "123456", "Math");
chai.logMe();
chai.addCourse("Algebra");

const tea = new User("Tea");
tea.logMe();
// tea.addCourse("Algebra"); // ❗️ Error: tea.addCourse is not a function, as addCourse is not defined in User class
// tea.subject = "Math"; // ❗️ Error: tea.subject is not defined, as subject is not defined in User class

console.log(chai === tea); // false, chai and tea are different instances
console.log(chai instanceof Teacher); // true, chai is an instance of Teacher
console.log(tea instanceof User); // true, tea is an instance of User
console.log(tea instanceof Teacher); // false, tea is not an instance of Teacher