const user = {
    username: "Juhi" , 
    id: "123a" , 
    welcome: function() {
        console.log(`hello , ${this.username} !`);
        console.log(this); 
    }
}
user.welcome();
user.username = "Sam"
user.welcome();

// console.log(this); //the global object here is empty 
//whereas for browsers the global object is windows

// function chai(){
//     let username = "juhi"
//     console.log(this);
//     console.log(username);
    
//     console.log(this.username); // undefined, `this` cannot be used in functions for reference
// }
// chai()

// const chai = function() {
//     let username = "juhi"
//     console.log(this.username);
//     console.log(this);
// }
// chai()

// const chai = () => {
//     let username = "juhi"
//     console.log(this.username);
//     console.log(this);
// }
// chai()
// const addTwo = (num1 , num2) => {
//     return num1+num2
// }
// console.log(addTwo(3,99));

// const addTwo = (num1 , num2) =>  (num1+num2)
//implicit return , works for only one line return codes 
// writing return is neccessary when using {}

const addTwo = (num1 , num2) => ({username : "juhi"})
//to return an object uou always need to use ()

// console.log(addTwo(4,70));

const myArr = [2 , 3, 4, 5]
myArr.forEach((item)=>{
    console.log(item);
    
})