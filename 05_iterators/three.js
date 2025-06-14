//array specific loops
// 1. For Of loop

const arr = [1, 2, 3, 4, 5, 6]
for (const element of arr) {
    //console.log(element+2);
}

const greet = "good  :)  morning"
for (const i of greet) {
    //console.log(i);
}

// Map - holds key value pairs and remembers the original insertion order of keys
// and cannot have duplicate values
const myMap = new Map()
myMap.set('a' , 1);
myMap.set(2 , 'b');
myMap.set('c' , 3);
myMap.set('b' , 2);
myMap.set(2 , 'b');

const obej = {
    "username": "juhi",
    id: "123ab" 
}
myMap.set(arr , obej["username"])
//myMap.set(arr , Boolean("")) //same key but different value nahi ho sakta
myMap.set(1 , Boolean("")) //same value but different key ho sakta hai

for (const [key, value] of myMap) {
  //console.log(`${key} => ${value}`);
}
myMap.forEach((value, key) => {
  //console.log(`${key} = ${value}`);
});

//to iterate over only keys/values
for (const key of myMap.keys()) {
  //console.log(key);
}

