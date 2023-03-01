/**
 * GENERAL VARIABLES
 */
 const cards = document.querySelectorAll('.memory-card');
 const moveContainer = document.querySelector(".moves");
 const modal = document.getElementById('modal');
 const timeContainer = document.querySelector(".time");
 const MAX_MATCH = 8;
 const button = document.querySelector("button");

 
 let gameOn = false;
 let perfectMatch = 0;
 let flippedCard = false; //used to check if card has already been clicked 
 let lockBoard = false; // used to lock the board until each set of cards are finished are finished before selecting the next two
 let firstCard, secondCard; //Used to check for cards match
 let moves = 0;
 let finalTime = "";
 
 //events
 cards.forEach(card => card.addEventListener('click', flipCard)); // listen for card flips
 shuffle();


function flipCard () {

}

function checkCardMatch () {

}

function pairMatch () {

}

function checkNoMatch () {

}

function timer () {

}

function cstopTime () {

}

function addMove () {

}

function resetGame () {

}

function winGame () {

}

function reset () {

}