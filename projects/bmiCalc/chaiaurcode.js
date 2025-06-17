// const but = document.querySelector('.button');

// console.log(but);
// but.addEventListener ('submit', function (e) {
//   console.log(e)
//   let hei = document.querySelector('#height');
//   let wei = document.querySelector('#weight');
//   hei = Number(hei);
//   wei = Number(wei);
//   let ans = (wei*10000)/(hei*hei)
//   let res = document.getElementById('results')
//   res.innerText = `${ans}`
// });

let hei = 0;
let wei = 0;
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();

  hei = parseInt(document.querySelector('#height').value);
  wei = parseInt(document.querySelector('#weight').value);
  let res = document.querySelector('#results');
  if (hei && wei) {
    const ans = (wei * 10000) / (hei * hei);
    let text="";
    if (ans < 18.6) {
      text = "underweight";
    } else if (ans < 24.9) {
      text = "normal";
    } else {
      text = "overweight";
    }
    res.innerHTML = `${ans.toFixed(2)} - ${text}`;
  } else {
    res.innerHTML = 'invalid';
  }
});
