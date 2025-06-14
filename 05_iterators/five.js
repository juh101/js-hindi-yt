const coding = ["js", "ruby", "java", "python", "cpp"]
coding.forEach(function(val){
    //console.log(val);    
})
//or
coding.forEach( (val) => {
    // console.log(val);    
}) 
//or

function printMe(item){
    console.log(item);    
}
//coding.forEach(printMe);

//for each accepts upto three arguements
coding.forEach( (item , index, arr)=> {
    //console.log(item , index, arr);
})


// using forEach for array of objects
const myCoding = [
    {
        languageName: "javascript" ,
        fileName: "js"
    },
    {
        languageName: "java" ,
        fileName: "java"
    },
    {
        languageName: "python" ,
        fileName: "py"
    }
]

myCoding.forEach( (item) => {
    // item here is entire object{}
    console.log(`${item.languageName} -> ${item.fileName}`);
    
})