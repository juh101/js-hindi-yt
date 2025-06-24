//can the value of Math.PI i.e. 3.14159 be changed to 4? Why?

console.log(Math.PI); // 3.141592653589793

// const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');
// console.log(descriptor); // { value: 3.141592653589793, writable: false, enumerable: false, configurable: false }

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function () {
        console.log("chai nhi bni");
    }
}
// chai -> object and chai.orderChai -> property of the object
// console.log(Object.getOwnPropertyDescriptor(chai, "orderChai"));
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// {
//   value: 'ginger chai',
//   writable: true,
//   enumerable: true,  //Will it show up in loops like for...in or Object.keys()?
//   configurable: true //Can you delete or redefine the property?
// }

chai.name = "masala chai"; // ✅ Allowed, as name is a writable property

Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: false
})

chai.name = "ginger chai"; // ❗️ Error: Cannot assign to read only property 'name' of object '#<Object>'

console.log(Object.getOwnPropertyDescriptor(chai, "name"));
console.log(Object.keys(chai)); // Will not show 'name' as enumerable is false

for (let [key, value] of Object.entries(chai)) {
    // Will not show 'name' as enumerable is false  
    console.log(`${key} : ${value}`);

}

