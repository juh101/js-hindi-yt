// const tinderUser = new Object()
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com" , 
    fullname: {
        userfullname: {
            firstname: "juhi" , 
            lastname: "ahuja"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "c" , 4: "d"}
const obj3 = {5: "e" , 6: "f"}
// const obj3 = {obj1 , obj2}
// const target = {}
// const obj4 = Object.assign(target , obj1 , obj2 , obj3) //target <- obj1 + obj2 + obj3
// console.log(obj4);
// console.log(target === obj4) //True

const obj4 = {...obj1 , ...obj2 , ...obj3}
console.log(obj4);

const users = [
    {
        id: "1" , 
        email: "a@gmail.com"
    },
    {
        id: "2" , 
        email: "b@gmail.com"
    },
    {
        id: "3" , 
        email: "c@gmail.com"
    },
    {
        id: "4" , 
        email: "d@gmail.com"
    }
]
console.log(users[1].id);
console.log(tinderUser);
console.log(Object.keys(tinderUser)); //imp
console.log(Object.values(tinderUser)); //imp
console.log(Object.entries(tinderUser));  
console.log(tinderUser.hasOwnProperty('isLoggedIn'));

