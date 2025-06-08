const name = "juhi"

const repoCount = 50

console.log(name + repoCount + " hi" )
/*
the dash across name - name is a built-in global variable in 
browsers (like window.name), and it's used to get or set the 
name of a browser window.
TypeScript is warning you that you're shadowing (overriding) 
this deprecated global name by creating a variable with the 
same name in your code.
*/
console.log(`hello my name is ${name} and repocount is ${repoCount}`) //string interpolation

//declaring string using constructor. This creates a String Object.
const gameName = new String('thisisastring')
console.log(typeof(gameName)) //returns object

console.log(gameName.__proto__) /*working on google console gives all string prototypes, ie.
all built-in methods to access its properties. for eg-*/
console.log(gameName.length)
console.log(gameName.toUpperCase()) //does not modify the string instead creates a copy.
console.log(gameName.charAt('5'))
console.log(gameName.indexOf('i'))

const newStr = gameName.substring(1 , 7)
console.log(newStr)

const another = gameName.slice(-13 , 13)
console.log(another)

const greet = "      hellooo       u"
console.log(greet)
console.log(greet.trim()) //removes white spaces but not the ones in between
console.log(greet.trimStart())
console.log(greet.trimEnd())

const url = "google.com/juhi%20ahuja"
// in url coding the browser automatically converts any spaces in url to %20.
console.log(url.replace('%20' , '-'))
console.log(url.includes('juhi'))

let str = "this-is-a-string"
const words = str.split('-') //array
for(let i =0 ; i<words.length ; i++){
    console.log(words[i])
}
console.log(words)

