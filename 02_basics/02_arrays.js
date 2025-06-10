const heros = ["thor" , "ironman" , "spiderman"]
const dc = ["superman" , "flash" , "batman"]
// heros.push(dc)
// console.log(heros); // array inside array
// console.log(heros[3]); //returns entire dc array
// console.log(heros[3][1]); // returns flash
const allHeros = heros.concat(dc) //this concats the two arrays
console.log(allHeros);

const allNewheros = [...heros , ...dc]
console.log(allNewheros);

const thisarr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
//to seperate out all elements into a single array
const realArr = thisarr.flat(Infinity)
console.log(realArr);

console.log(Array.isArray([1,2,3,4]));
console.log(Array.isArray("hitesh" , "harry"));
const newAr = Array.from("harry")
// const newAr = Array.from({name: "harry"}) // interesting case to make values from given key value pairs
console.log(newAr);

let score1 = 100
let score2 = 200 
let score3 = "300"
console.log(Array.of(score1 , score2 , score3));


