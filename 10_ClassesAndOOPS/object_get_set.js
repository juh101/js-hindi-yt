// const User = {
//     mail: 'abc@gmail.com' , 
    
//     get password(){
//         return this._pw;
//     },
//     set password(value){
//         this._pw = value.toUpperCase() + "hehe";
//     },
//     printDetails: function() {
//         console.log(`Email: ${this.mail}, Password: ${this.password}`);
//     }
// }
// User.password= 'abc12345' // This will trigger the setter
// User.printDetails()

const User2 = {
    _mail: 'abc@gmail.com' , 
    _password: 'abc12345', 

    get pass(){
        return this._password.toUpperCase() + "hehe";
    },
    set pass(value){
        this._password = value;
    },
}
const tea = Object.create(User2); //tea is now an empty object with User2 as its prototype.
console.log(tea._password);
console.log(tea.pass); // This will trigger the getter


const user = {
  _name: "",

  set name(value) {
    this._name = value.trim(); // ✂️ clean input before storing
  },

  get name() {
    return this._name;
  }
};

user.name = "   Juhi   ";
console.log(user.name); // "Juhi"
console.log(user._name); // "   Juhi   " (raw input, not trimmed)
