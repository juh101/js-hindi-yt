// // A Promise is an object representing the eventual completion or failure of an asynchronous operation.

// pending-	In progress => Nothing yet
// fulfilled- Success, data is ready => .then()
// rejected-	Failed, an error happened => .catch()


// const promise1 = new Promise(function (resolve, reject) {
//     //Do an async task: DB calls, cryptography, network call
//     setTimeout(function () {
//         console.log("Async task is completed");
//         resolve() //connecting resolve and .then
//     }, 1000)
// })

// //consuming promise1
// promise1.then(function () {
//     console.log("Promise consumed");
// })


// //creating promise without storing it into another variable
// new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log("async task 2");
//         resolve()
//     }, 1000)
// }).then(function () {
//     console.log("asynch 2 resolved");
// })

// const promise3 = new Promise(function(resolve , reject){
//     setTimeout(function(){
//         resolve({username: "chai" , email:'chai@example.com'})
//     },2000)

// })
// //passing parameters from resolve()
// promise3.then(function(user){
//     console.log(user);

// })

const promise4 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = !true;
        if (!error) {
            resolve({ username: "juhi", password: "123" })
        } else {
            reject('something went wrong :(')
        }
    }, )
})

const username = promise4
    .then((user) => {
        console.log(user);
        return user.password
    })
    .then(function (Myusername) {
        console.log(Myusername);
    })
    .catch(function (err) {
        console.log(err);
    })
    .finally(() => {
        console.log('promise is either resolved or rejected');
        //this will always run
    })

// console.log('this is ', username); //it is a Promise object.


const promise5 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = !true;
        if (!error) {
            resolve({ username: "juhi", password: "123" })
        } else {
            reject('something went wrong :(')
        }
    }, 1000)
});

promise5
    .then((res) => console.log(res))
    .catch((err) => console.log(err))

// ****************************OR

// async function consumePromise5(){
//     try {
//         const respone = await promise5
//         console.log(respone);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromise5();

//********************************************************************************** */
// Promise.all() takes an array of promises, runs them in parallel, and returns a single Promise that:
// ✅ Resolves when all promises succeed.
// ❌ Rejects immediately if any one promise fails.
Promise.all([promise4, promise5])
  .then((results) => {
    console.log(results); // An array of resolved values
  })
  .catch((error) => {
    console.log("One of them failed:", error);
  });

  const p1 = Promise.resolve("🍎 Apple");
const p2 = Promise.resolve("🍌 Banana");
const p3 = Promise.resolve("🍇 Grape");

Promise.all([p1, p2, p3])
  .then((fruits) => {
    console.log(fruits); // ['🍎 Apple', '🍌 Banana', '🍇 Grape']
  });


// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         console.log(response);
//         console.log(typeof response);
        
//         const data = await response.json()
//         console.log(data);
//         console.log(typeof data);
        
//     } catch (error) {
//         console.log("E: ", error);
//     }

// }

// getAllUsers()

// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response) => {
//     //console.log(response);
// })
// .catch(() => console.log(console.error()));

// fetch('https://api.github.com/users/hiteshchoudhary')
// .then((response) => {
//     return response.json()
// })
// .then((data) => {
//     console.log(data);
// })
// .catch(() => console.log(error));

