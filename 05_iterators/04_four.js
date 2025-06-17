// Objects also hold key value pairs , but they are not iterable using ForOf
//2. ForIn loop
const myObj = {
    "game1": "thisisgame1" , 
    game2: "thisisgame2" ,
    game3: "thisisgame3"
}
// console.log(myObj.hasOwnProperty("game1"));

for (const key in myObj) {
    if(myObj.hasOwnProperty(key)){
        console.log(`${key} = ${myObj[key]}`);
    }
}

for (const [key, value] of Object.entries(myObj)) {
  console.log(`${key}: ${value}`);
}

//using for in loops for arrays
const arr = ["first", "second", "third", "fourth"]
for (const key in arr) {
    console.log(key); //will print index
    console.log(arr[key]); // will print values
}