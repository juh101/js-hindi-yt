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
    const addimg = document.querySelector('.forimg')
    addimg.innerHTML = `<img class='cat' src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" alt="Funny Cat" width="300">
    `
    changingbg=setInterval(changebg , 100);
  }
});

stop.addEventListener('click' , function(){
  const toremove= document.querySelector('.cat')
  toremove.remove()
  clearInterval(changingbg)
  changingbg = null
});