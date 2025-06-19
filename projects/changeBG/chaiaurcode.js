function changebg(){const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
document.body.style.backgroundColor = randomColor;
console.log("Background set to:", randomColor);
}
changebg()
const start = document.getElementById('start')
const stop = document.getElementById('stop')
let changingbg 
start.addEventListener('click' , function(){
  if(!changingbg){
    changingbg=setInterval(changebg , 100);
  }
});

stop.addEventListener('click' , function(){
  clearInterval(changingbg)
  changingbg = null
});