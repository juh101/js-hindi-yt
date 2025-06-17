let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
nums.forEach( (nums) => {
    nums=nums+10
}) //does not change the original array, changes obly the local copy
nums.forEach((element , index ) => {
    //nums[index] += 10
}); 
//or use this
for (const key in nums) {
    //nums[key] = nums[key] + 10
}
//console.log(nums);


//or use map
const newNums = nums.map( (n) => n+10)
//console.log(newNums);
//chaining with multiple maps
const new1 = nums
                .map( (num) => num*10)
                .map( (num) => num+1)
                .filter( (num) => num>40)

console.log((new1));
