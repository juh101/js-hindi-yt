//singleton -> Object.create

// object literals - An object literal is the most common and
// direct way to create an object in JavaScript using curly braces {}.

const mySym = Symbol("key1")
//using symbol in object

const JsUser = {
    name: "Juhi" , 
    "full name": "juhi ahuja" ,
    age: 19 ,
    [mySym] : "myKey1" , 
    location: "jaipur" , 
    email: "juhi@google.com" , 
    isLoggedIn : false,
    lastLoginDays: ["Monday" , "Thursday" , "Saturday"]
}
// console.log(JsUser.age);
// console.log(JsUser["email"]); //another way to access
// console.log(JsUser["full name"]); //"fullname can only be accessed using this"
// console.log(JsUser[mySym]);
// console.log(typeof(mySym));

// JsUser.email = "juhi@chatgpt.com" //overwriting values
// Object.freeze(JsUser) //freezing 
// JsUser.email = "juhi@ms.com" // does not change
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
}
JsUser.greeting2 = function(){
    console.log(`Hello Js User, ${this["full name"]} , age- ${this.age} , email-${this.email}`);
}
// console.log(JsUser.greeting2()); // you get an undefined in the output , while calling
// the function like this as it has no return value, 
// instead add a return value or call like this-
JsUser.greeting2();






