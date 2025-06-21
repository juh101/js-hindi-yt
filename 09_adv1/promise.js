const result = fetch('https://jsonplaceholder.typicode.com/users')
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(typeof data)
    })
    .catch((err) => console.log('error has occured'))

// console.log(typeof result);


// If you use fetch() and the server returns a 404 Not Found:
// The Promise is still considered "fulfilled", not rejected.
// A fetch() does not reject on HTTP errors(404 etc.)

const res = fetch('https://api.github.com/users/hiteshchoudhary' )
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data.login)
    })
    .catch((err) => console.log('error has occured'))

//fetch queue- Microtask/Priority queue
setTimeout(() => {
  console.log("⏱ setTimeout done");
}, 0);

const respon = fetch("https://jsonplaceholder.typicode.com/users")
  .then((resp) => console.log(resp.status));
const resul = await respon.json
console.log(resul);

// fetch() ➜ browser/node ➜ send network request
//        ↳ returns a Promise immediately

// Promise:
// - Stores .then (onFulfilled)
// - Stores .catch (onRejected)

// When network response arrives:
// - Runs success or error handler

