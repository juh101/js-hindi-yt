if(2!=="3"){
    console.log("acha")
}

const balance =1000

// if(balance < 500) console.log("balance is less than 500");
// else console.log("balance is greater than 500");

if(balance < 500) console.log("less than 500");
else if(balance < 750) console.log("less than 750");
else if(balance<900) console.log("less than 900");
else console.log("less than 1200");

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard && (loggedInFromEmail || loggedInFromGoogle))
    console.log("allowed to buy course");
else 
    log("not allowed to buy course")
    
