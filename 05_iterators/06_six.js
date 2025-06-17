const coding = ["js", "ruby", "java", "python", "cpp"]

const values = coding.forEach( (item) => {
    // console.log(item);
    return item;
})
//console.log(values); //undefined as it does not return any value

//filter() is used to return and store values in another variable
const myNums = [1, 2, 3, 4, 5, 6, 7]
// const newNums = myNums.filter( (nums) => {return nums>3}) //or
const newNums = myNums.filter( (nums) => nums>3)
//console.log(newNums);


//using for.Each()
const newNums1= []
myNums.forEach( (nums) => {
    if(nums>=4) newNums1.push(nums)
})
//console.log(newNums1);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// to store all books in an array that has genre history using filter()
let userBooks = books.filter( (bk) => bk.genre === "History")
userBooks = books.filter( (bk) => {return (bk.publish >= 1995 && bk.genre == 'History')})
console.log(userBooks);
 