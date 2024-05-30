'use strict';
let score0El = document.getElementById('score--0');
let score1El = document.getElementById('score--1');
let player0El = document.querySelector('.player--0');
let player1E1 = document.querySelector('.player--1');
let diceEl = document.querySelector('.dice');
let rollBtn = document.querySelector('.btn--roll');
let newBtn = document.querySelector('.btn--new');
let holdBtn = document.querySelector('.btn--hold');
let currentScore0 = document.querySelector('#current--0');
let currentScore1 = document.querySelector('#current--1');
const scores = [0, 0];
let curentScore = 0;
let activePlayer = 0;
let playing = true;
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
rollBtn.addEventListener('click', () => {
  if (playing) {
    let randomNumber = Math.trunc(Math.random() * 6) + 1;
    console.log(randomNumber);
    diceEl.setAttribute('src', `dice-${randomNumber}.png`);
    diceEl.classList.remove('hidden');
    if (randomNumber !== 1) {
      curentScore += randomNumber;
      document.querySelector(`#current--${activePlayer}`).textContent =
        curentScore;
    } else {
      activePlayer = activePlayer == 0 ? 1 : 0;
      curentScore = 0;
      player0El.classList.toggle('player--active');
      player1E1.classList.toggle('player--active');
    }
  } else {
    alert(`Game Over ${activePlayer} is win`);
  }
});
holdBtn.addEventListener('click', () => {
  scores[activePlayer] += curentScore;
  document.querySelector(`#score--${activePlayer}`).textContent =
    scores[activePlayer];
  curentScore = 0;
  if (scores[activePlayer] >= 20) {
    playing = false;
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
  }
});
let init = function () {
  curentScore = 0;
  activePlayer = 0;
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  scores[0] = 0;
  scores[1] = 0;
  playing = true;

  player0El.classList.remove('player--winner');
  player1E1.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1E1.classList.remove('player--active');
  diceEl.classList.add('hidden');
};
newBtn.addEventListener('click', init);

// let init = function () {
//   scores[0] = 0;
//   scores[1] = 0;
//   curentScore = 0;
//   playing = true;

//   currentScore0.textContent = 0;
//   currentScore1.textContent = 0;
//   score0El.textContent = 0;
//   score1El.textContent = 0;

//   diceEl.classList.add('hidden');
//   player0El.classList.remove('player--winner');
//   player0El.classList.remove('player--winner');
//   player0El.classList.add('player--active');
//   player1E1.classList.remove('player--active');
// };
// newBtn.addEventListener('click', () => {
//   init();
// });
// diceEl.classList.add('hidden');
// function switchPlayer() {
//   document.getElementById(`current--${activePlayer}`).textContent = curentScore;
//   activePlayer = activePlayer === 0 ? 1 : 0;
//   curentScore = 0;
//   player0El.classList.toggle('player--active');
//   player1E1.classList.toggle('player--active');
// }
// rollBtn.addEventListener('click', () => {
//   //randow dice
//   if (playing) {
//     const dice = Math.trunc(Math.random() * 6) + 1;
//     console.log(dice);
//     diceEl.src = `dice-${dice}.png`;
//     diceEl.classList.remove('hidden');
//     //   diceEl.setAttribute('src', `dice-${dice}.png`);

//     if (dice !== 1) {
//       curentScore += dice;
//       document.getElementById(`current--${activePlayer}`).textContent =
//         curentScore;
//     } else {
//       switchPlayer();
//     }
//   } else {
//     alert(`Game over ${activePlayer} is win`);
//   }
// });
// holdBtn.addEventListener('click', () => {
//   if (playing) {
//     scores[activePlayer] += curentScore;
//     console.log(`activeplayer ${activePlayer}`, scores[activePlayer]);
//     document.getElementById(`score--${activePlayer}`).textContent =
//       scores[activePlayer];
//     if (scores[activePlayer] >= 20) {
//       playing = false;
//       document
//         .querySelector(`.player--${activePlayer}`)
//         .classList.add('player--winner');
//       document
//         .querySelector(`.player--${activePlayer}`)
//         .classList.remove('player--active');
//     } else {
//       switchPlayer();
//     }
//   }
// });
