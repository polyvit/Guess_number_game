'use strict';

let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let bestResult = 0;

const displayGuessMessage = message => {
  document.querySelector('.guess-message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guessingNumber = +document.querySelector('.number-input').value;

  if (!guessingNumber) {
    displayGuessMessage('Введите число');
  } else if (secretNumber === guessingNumber) {
    displayGuessMessage('Правильно!');
    document.querySelector('.question').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'green';
    if (score > bestResult) {
      bestResult = score;
      document.querySelector('.highscore').textContent = bestResult;
    }
  } else if (secretNumber !== guessingNumber) {
    if (score > 1) {
      displayGuessMessage(
        guessingNumber > secretNumber ? 'Слишком много!' : 'Слишком мало!'
      );
      // document.querySelector('.guess-message').textContent =
      //   guessingNumber > secretNumber ? 'Слишком много!' : 'Слишком мало!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayGuessMessage('Вы проиграли');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = 'black';
  displayGuessMessage('Начни угадывать');
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number-input').value = '';
  document.querySelector('.question').textContent = '???';
  secretNumber = Math.floor(Math.random() * 20) + 1;
});
