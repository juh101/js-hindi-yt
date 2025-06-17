console.log("hello")

const accountId=222
let accEmail="juhi3001@gmail.com"
var accPw="juhi69"
accountCity="jaipur" //not the right method,either use const or let
let accState; //holds value"undefined" value until given one

// accountId=54 this will throw an error
// {
//     this is scope
//      var does not have block scope that is why we use let
//      use const and let only
// }
console.log(accountId)
console.log((typeof(accountCity)))
console.table([accountId , accEmail , accPw , accountCity , accState])