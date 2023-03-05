/**
 * GENERAL VARIABLES
 */
 const cards = document.querySelectorAll('.memory-card');
 const moveContainer = document.querySelector(".moves");
 const message = document.getElementById('message');
 const MAX_MATCH = 8;
 const button = document.querySelector(".button");
 const closeButton = document.querySelector(".close-button");

 
 let runGame = false;
 let perfectMatch = 0;
 let flippedCard = false; //used to check if card has already been clicked 
 let lockBoard = false; // used to lock the board until each set of cards are finished are finished before selecting the next two
 let firstCard, secondCard; //Used to check for cards match
 let moves = 0;
 let finalTime = "";
 
 
 //events
 cards.forEach(card => card.addEventListener('click', flipCard)); // listen for card flips
 shuffle();

 button.addEventListener('click', reset); // listen for reset game
 closeButton.addEventListener('click', closeWinMessage); // listen for close the win message and start a new game


 // flip the cards
 function flipCard() {
    if (!runGame) {
        runGame= true;
    }
    if (lockBoard) return; 
    if (this === firstCard) return;

    this.classList.add('flip'); 

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
    
    //Move counter
    moves = 0;
    moveContainer.innerHtml = 0;
    
    function addMove() {
        moves++;
        moveContainer.innerHTML = moves;
    }

//cards are reset after each round
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
}


 // Win message pop up 
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

 // Reset Game Button 
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









