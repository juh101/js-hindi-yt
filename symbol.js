const secret = Symbol('secret');

const user = {
  name: 'Alice',
  [secret]: 'hidden value' , 
  age: 18
};

console.log(user[secret]); // "hidden value"
console.log(Object.keys(user)); // [ 'name' ]

/*
2. Use as Object Keys
You can use symbols as property keys in objects. These properties:

Don’t show up in for...
Are not returned by Object.keys() or JSON.stringify()

Provide a level of "privacy"
*/
