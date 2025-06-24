class User{
    constructor(email, password){       
        this.email = email;
        this.password = password;
    }
    // to make the password private, we can use a getter and setter
    get password(){
        return this._password;
    }
    // you have to define a setter along with a getter
    // Getter- allows you to access/get the value of a property
    // Setter- allows you to set/change the value of a property
    set password(newPassword){
        this._password = newPassword.toUpperCase() + "hehe";
    }

    set email(value){
        this._email = value.toLowerCase() + '.com';
    }

    get email(){
        return this._email;
    }

    getDetails(){
        return `Email: ${this.email}, Password: ${this.password}`;
    }
}

const hitesh = new User("hitesh@example.com", "password123");
console.log(hitesh.password);
console.log(hitesh.email);
console.log(hitesh.getDetails());