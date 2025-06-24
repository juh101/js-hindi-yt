function User(email, password) {
    this.email = email;
    

    Object.defineProperty(this, 'password', {
        get:function(){
            return this._password;
        }, 
        set:function(newPassword){
            this._password = newPassword.toUpperCase() + "hehe";
        } 
    })
    this.password = password; // This will trigger the setter
}

const chai = new User("chai@example.com", "password123");
console.log(chai.email);
console.log(chai.password);