/**
 * GENERAL VARIABLES
 */
const winSound = document.querySelector(`audio[data-sound='win']`);
const flipSound = document.querySelector(`audio[data-sound='flip']`);
const cards = document.querySelectorAll('.memory-card');
const moveContainer = document.querySelector(".moves");
const message = document.getElementById('message');
const MAX_MATCH = 8;
const button = document.querySelector(".button");
const closeButton = document.querySelector(".close-button");

let playSound = false;
let runGame = false;
let perfectMatch = 0;
let flippedCard = false;
let lockBoard = false; 
let firstCard, secondCard; 
let moves = 0;
let finalTime = "";


//events
cards.forEach(card => card.addEventListener('click', flipCard)); // listen for card flips
shuffle();

button.addEventListener('click', reset); // listen for reset game
closeButton.addEventListener('click', closeWinMessage); // listen for close the win message and start a new game

// function to flip cards - adapted from https://github.com/moirahartigan/Portfolio-2---Alien-Memory-Game
// flip the cards
function flipCard() {
    if (!runGame) {
        runGame = true;
    }
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');

    if (playSound) {
        flipSound.play();
      }

    if (!flippedCard) {

        flippedCard = true;
        firstCard = this;

        return;
    }

    secondCard = this;

    checkCardMatch();
}


// check the card match/no match
function checkCardMatch() {
    let isMatch = firstCard.dataset.image === secondCard.dataset.image;
    if (isMatch) perfectMatch += 1;

    if (isMatch) pairMatch();
    else noMatch();

    if (perfectMatch === MAX_MATCH) winGame();
}

// matched cards will be disabled for clicks once they are flipped
function pairMatch() {

    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
}

// if no match, board is locked until cards are flipped back
function noMatch() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 600);

    addMove();
}

// Function to count moves
function addMove() {
    moves++;
    moveContainer.innerHTML = moves;
}

// // Reset cards after each round
function resetBoard() {
    [flippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];

}


// Card shuffles
function shuffle() {
    cards.forEach(cards => {
        let randomPosition = Math.floor(Math.random() * 16);
        cards.style.order = randomPosition;
    });

}

function winGame() {
    showWinMessage();
    if (playSound) {
        winSound.play();
      }
}


// Win message pop up - adapted from https://github.com/moirahartigan/Portfolio-2---Alien-Memory-Game
function showWinMessage() {
    message.style.display = "block";
    finalTime = moveContainer.innerHTML;
    // showing moves on message
    document.getElementById("finalMove").innerHTML = moves;
    reset();
}

function closeWinMessage() {
    message.style.display = "none";
}

// Reset Game Button - adapted from https://github.com/moirahartigan/Portfolio-2---Alien-Memory-Game
function reset() {
    setTimeout(() => {
        flippedCard = false;
        [firstCard, secondCard] = [null, null];
        runGame = false;
        moves = 0;
        moveContainer.innerHTML = 0;
        perfectMatch = 0;
        cards.forEach(cardReset => cardReset.classList.remove('flip'));
        shuffle();
        cards.forEach(card => card.addEventListener('click', flipCard));
    }, 500);
}

// Control sound button off/on - adapted from https://github.com/tomdu3/smiley-memories
let soundButton = document.getElementById('sound-toggle');
soundButton.onclick = function(e) {
  playSound = playSound ? false : true;
  this.innerHTML = this.innerHTML === '<i class="fa-solid fa-volume-xmark"></i>' ? '<i class="fa-solid fa-volume-high"></i>' : '<i class="fa-solid fa-volume-xmark"></i>';
};
