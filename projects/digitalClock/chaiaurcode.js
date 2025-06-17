const clock = document.querySelector('#clock')


// console.log(date.toLocaleTimeString())

setInterval(function(){
  let date = new Date();
  //new Date() inside the setInterval so it fetches the current time every second:
  console.log(date.toLocaleTimeString())
  clock.textContent = date.toLocaleTimeString()
} , 1000) 
//repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.