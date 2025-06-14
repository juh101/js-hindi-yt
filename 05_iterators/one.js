
// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if(element == 5){
//         console.log("5 is the best");
        
//     }
//     console.log(element);
// }
// for (let i = 0; i < 5; i++) {
//     console.log(`Outer Loop : ${i}`);
//     for (let j = 1; j < 5; j++) {
//         //console.log(`inner loop value ${j} and inner loop ${i}`);
//         console.log(`${i} * ${j} = ${i*j}`);
        
//     }
// }
//using break and continue
for (let i = 0; i < 5; i++) {
    if(i==3) break; //stops at i==3
    console.log(i);
    
}
for (let i = 0; i < 5; i++) {
    if(i==3) continue; //skips 3
    console.log(i);
}