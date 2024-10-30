let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuss = [];
let numGuess = 1;
let playGame = true;
if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    ("Please enter a number greater than or equal to 1");
  } else if (guess > 100) {
    ("Please enter a number less  than or equal to 100");
  } else {
    prevGuss.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over,Random Number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage("Congratulations, You Won!");
    endGame();
  }
  if (guess < randomNumber) {
    displayMessage("Number is too low");
  }
  if (guess > randomNumber) {
    displayMessage("Number is too high");
  }
}

function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess},`;
  numGuess++;
  remaining.innerHTML = `${12 - numGuess}`;
}
function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id = "newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function () {
    location.reload()
    // randomNumber = parseInt(Math.random() * 100 + 1);
    // prevGuss = [];
    // numGuess = 1;
    // guessSlot.innerHTML = "";
    // remaining.innerHTML = `${12 - numGuess}`;
    // userInput.removeAttribute("disabled");
    // startOver.removeChild(p);
    // displayMessage("")
    // playGame = true;
  });
}
