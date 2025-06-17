// Immediately Invoked Function Expression (IIFE)

(function cha(){
    //named iife
    console.log(`connected`);
})();

//no need to call this function , we use two parenthesis ()() first is for function defination and 
//second is for function call

/* Why we use iife?
 Avoid global scope pollution - Keeps variables/functions local and private
 Run code immediately - Useful for initialization or bootstrapping
Encapsulation & privacy - Simulates private variables before let/const or modules
*/

const welcome = function(){
    console.log(`welcome user`);
}(); //semicolin tells when to stop the exec of function

/*
(const hello = () => { 
  console.log("hello");
})();

const hello = () => { ... }();
Means: "assign the result of calling the arrow function to hello"

But JavaScript hasn't even finished defining the function before 
the () appears — so it throws a Syntax Error.*/

((user) => {
    console.log(`hello ${user}`);
})('Juhi');
//passing variables into function
