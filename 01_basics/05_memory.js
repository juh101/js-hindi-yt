/*
JavaScript automatically allocates memory when you create variables or objects.
Stack(Primitive) and Heap(Non-Primitive):
*Primitive Values:
-stored in stack
-stored by value
fast and fixed in size
*/
let first="iamfirst"
let second = first // copy of the original is passed
second="iamsecond"
console.log(first)
console.log(second)

/*
*Non-Primitive Values:
-stored in heap
-stored by reference
-can grow dynamically
*/
let user1 = {
    email : "first@gmail.com"
 }
let user2 = user1 //referce is passed i.e why value changes
user2.email = "second@gmail.com"

console.log(user1.email)
console.log(user2.email)
/*
🧹 What is GC (Garbage Collection) in Programming?
GC stands for Garbage Collection — it's an automatic process used in 
programming languages like JavaScript, Java, Python, etc., to manage memory.
When you create variables or objects in your program, memory is used.

But when you no longer need that data, the memory should be freed.
In garbage-collected languages, you don’t have to do this manually.

Instead, the Garbage Collector (GC) does it for you.
It finds the memory that’s no longer in use and clears it.
*/