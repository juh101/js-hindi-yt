const buttons = document.querySelectorAll('.button');
// console.log("Script loaded");
// console.log(buttons);
const bod = document.querySelector('body');

buttons.forEach(function (item) {
  //console.log(item);
  item.addEventListener('click', function (e) {
    const colorbg = e.target.id
    console.log(colorbg)
    document.body.style.backgroundColor=
    document.body.style.backgroundColor === 'white' ? colorbg : 'white'
  });
});
