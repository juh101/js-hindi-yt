const x = Math.floor(Math.random() * 100) + 1;
console.log('Random Num is: ', x);

const subButton = document.querySelector('#subt');
const userinp = document.querySelector('#guessField');
const guesslog = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');
let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  subButton.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userinp.value);
    console.log(guess);
    validateGuess(guess);
  });
}
function validateGuess(guess) {
  // checks if the given val is a number and is between 1-100
  if (isNaN(guess)) {
    alert('please enter valid num');
  } else if (guess < 1 || guess > 100) {
    alert('please enter valid num between 1-100');
  } else {
    prevGuess.push(guess); //this only pushes not displays
    if (numGuess > 10) {
      displayGuess(guess);
      displayMessage(`GameOver . Random Number was ${x}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  //checks if guess == value and displays message
  if (guess === x) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < x) {
    displayMessage(`Num is TOOO low`);
  } else if (guess > x) {
    displayMessage(`Num is TOOO high`);
  }
}
function displayGuess(guess) {
  //cleans entered value, and displays prev guesses and remaining guesses
  userinp.value = '';
  // guesslog.innerHTML += `${guess}  `;
  guesslog.innerHTML = prevGuess;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}
function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
function endGame() {
  userinp.value = '';
  // userinp.setAttribute('disabled' , '')
  userinp.disabled = true; //the input becomes non-editable.
  p.classList.add('button'); //adds a class to the list of existing classes without removing any that are already there.
  p.innerHTML = `<h2 id="startNewGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame() {

  const newpage = document.getElementById('startNewGame');
  console.log(newpage);
  newpage.addEventListener('click', function (e) {
    console.log(e.target)
    location.reload();

  });
}
