function uus() {
const guessField = document.querySelector('.guessField');
const guessSubmit = document.querySelector('.guessSubmit');

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHigh');

let randomNumber = Math.floor(Math.random() * 1000) + 1;

let guessCount = 1;

const lowOrHighText = 'viimane pakkumine oli liiga';

document.getElementById("reset").style.visibility = "hidden";

const checkGuesses = () => {
  let userGuess = Number(guessField.value);
  
  if (guessCount === 1) {
    guesses.textContent = 'Eelnevad pakkumised: '
  };
  
  guesses.textContent += `${userGuess} `;
  
  
  if (userGuess === randomNumber) {
    // siia kood kui kasutaja arvab õigesti
    lastResult.textContent = 'Palju õnne, SA VÕITSID!';
    lastResult.style.backgroundColor= 'blue';
    document.getElementById("reset").style.visibility = "";
    document.getElementById("guessField").disabled="true";
    document.getElementById("disable").disabled = "true";
  }
  else if (guessCount === 10) {
    // kui kasutaja paneb 10 korda mööda
    lastResult.textContent = 'Palju õnne, SA KAOTASID!';
    lastResult.style.backgroundColor= 'red';
    document.getElementById("reset").style.visibility = "";
    document.getElementById("guessField").disabled="true";
    document.getElementById("disable").disabled = "true";
  }
  else {
    lastResult.textContent = 'VALE VASTUS!';
    lastResult.style.backgroundColor= 'blue';
    if (userGuess < randomNumber) {
      //liiga madal
      lowOrHigh.textContent = lowOrHighText + ' madal';
    }
    else if (userGuess > randomNumber) {
      // liiga kõrge
      lowOrHigh.textContent = lowOrHighText + ' kõrge';
    };
  };
  
  guessCount++
  guessField.value = '';
  guessField.focus();
};

guessSubmit.addEventListener('click', checkGuesses);
}

uus();

