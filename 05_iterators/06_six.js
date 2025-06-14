const coding = ["js", "ruby", "java", "python", "cpp"]

const values = coding.forEach( (item) => {
    // console.log(item);
    return item;
})
console.log(values); //undefined as it does not return any value

//filter() is used to return and store values in another variable
const myNums = [1, 2, 3, 4, 5, 6, 7]
// const newNums = myNums.filter( (nums) => {return nums>3})
const newNums = myNums.filter( (nums) => nums>3)
console.log(newNums);
