// const { Temporal } = require('@js-temporal/polyfill');
// //Added to ECMAScript (ES2024): Finalized for inclusion 
// // in ES2024, officially published in June 2024.

// const now = Temporal.Now.instant();
// console.log(now.toString());

// const today = Temporal.Now.plainDateISO()
// console.log(today.toString());

// const timenow = Temporal.Now.plainTimeISO()
// console.log(timenow.toString());

// const Time = Temporal.Now.plainTimeISO('Asia/Kolkata')
// console.log(Time.toString());

// const time = Temporal.Now.zonedDateTimeISO();
// console.log(time.toString());

// const duration = Temporal.Duration.from({ days: 3,months:5 ,  hours: 4 });
// console.log(duration.toString()); // So, P5M3DT4H means:A period of 5 months , 
// // 3 days , 4 hours

// const instant = Temporal.Instant.from("2025-01-01T00:00Z");
// console.log(instant.epochMilliseconds); 
// //This is the number of milliseconds between 
// // 1970-01-01T00:00Z and 2025-01-01T00:00Z.

// const today1 = Temporal.Now.plainDateISO();
// const nextWeek = today1.add({ days: 7 , hours : 5});
// console.log(nextWeek.toString()); // 7 days 5hrs later 

// const date1 = Temporal.PlainDate.from("2025-06-01");
// const date2 = Temporal.PlainDate.from("2025-06-05");

// console.log(date1 == date2); // false
// Temporal.PlainDate.compare(date1, date2); // no output
// console.log(date1.toString() < date2.toString()); //true

// //**************Dates**************/
// let myDate = new Date()
// console.log(typeof myDate); //object

// console.log(myDate.toString()) 
// console.log((myDate.toISOString()));
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());

// let myCreatedDate = new Date(2023 , 0 , 23) //YYYY MM DD
// let myCreatedDate = new Date("2023-01-14")
// let myCreatedDate = new Date(2023 , 0 , 23 , 17) //Y M D Hrs Mins Sec Msec
// console.log(myCreatedDate.toLocaleString());

// let myTimeStamp = Date.now()
// console.log(myTimeStamp); //ms from 1st jan 1970 00:00
// //to compare two dates we compare the ms values usually
// let myCreatedTime = myCreatedDate.getTime()
// console.log(myCreatedTime < myTimeStamp); //true

// //to conv ms to s
// console.log(Math.floor(Date.now() / 1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth()); // indexing from 0
// console.log(newDate.getDay());

console.log(newDate.toLocaleString('default' , {
    weekday: "long",
    day: "numeric",
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute:'2-digit',
    timeZone: 'Asia/Kolkata'
}));


