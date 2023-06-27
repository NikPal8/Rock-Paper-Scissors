//----------------------Buttons-----------------------//

//-- Player 1 - Options -- //
const rockButton = document.querySelector('#rockButton');
const paperButton = document.querySelector('#paperButton');
const scissorsButton = document.querySelector('#scissorsButton');

//-- Reset- Option -- //
const restButton = document.querySelector('#resetButton');

// -- Display features -- //
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const winningScoreSelector = document.querySelector('#playTo');

const p1Results = document.querySelector('.p1Results');
const p2Results = document.querySelector('.p2Results');

// -- Game Stats -- //
const draws = document.querySelector('#draws');
const turns = document.querySelector('#turns');

const player1Section = document.querySelector('.player1Section');
const player2Section = document.querySelector('.player2Section');


//-------------------Buttons End--------------------//

//------------------Icons-------------------------

//-----------------Icons end----------------------
//-------------------Variables--------------------//

let p1Score = 0; //Displays Player 1 Score
let p2Score = 0; //Displays Player 2 Score
let numberDraws = 0; //Displays number of draws

let gameTurn = 0; // Displays Game Turn
let winningScore = 3; //Plays up to score to win
let isGameOver = false; // Game over is when winning score is reached

let winResult = ""; 
let loseResult = "";

//-----------------Variables End----------------//

//Notes
//Every turn if P1 wins, P1 Image highlighted green, P2 highlighted red.
//Every turn if P1 wins, Wins is displayed over P1 image
//Every turn if draw, images are transparent draw is displayed.
//If winning score is reached winner is displayed over player and looser is displayed to other player
//By defualt ? mark image is displayed for each player move and reset after every turn.
//-------------------Event Listeners--------------------//



//-- Player 1 - Event Listeners -- //
rockButton.addEventListener('click', function() {

    
    if (isGameOver) { return }
    
    player1Section.style.backgroundImage = "url(Rock.png)";
    
    let p2 = Math.floor(Math.random() * 3) + 1;
    
    gameTurn++;
    
    p1Results.classList.remove("win", "lose", "draw");
    p2Results.classList.remove("win", "lose", "draw");
        
    
        if (!isGameOver) {

            if (p2 === 3) {
                p1Score++;
                player2Section.style.backgroundImage = "url(Scissors.png)";

                
                p1Results.textContent = "wins";
                p1Results.classList.add('win');

                p2Results.textContent = "loses";
                p2Results.classList.add("lose");


            } else if (p2 === 2) {
                p2Score++;            
                player2Section.style.backgroundImage = "url(Paper.png)";

                p1Results.textContent = "loses";
                p1Results.classList.add('lose');

                p2Results.textContent = "wins";
                p2Results.classList.add("win");


            } else {
                player2Section.style.backgroundImage = "url(Rock.png)";
                numberDraws++;

                p1Results.textContent = "draw";
                p1Results.classList.add('draw');

                p2Results.textContent = "draw";
                p2Results.classList.add("draw");


            }

            if (p1Score === winningScore || p2Score === winningScore) {

                isGameOver = true;

                p1Results.classList.remove("win", "lose", "draw");
                p2Results.classList.remove("win", "lose", "draw");

                p1Results.textContent = "";
                p2Results.textContent = "";

                if (p1Score === winningScore) {
                    p1Results.textContent = "Winner";
                    p1Results.classList.add('win');
                } else {
                    p2Results.textContent = "Winner";
                    p2Results.classList.add('win');
                }

            }
        
        
        }
        
            p1Display.textContent = p1Score;
            p2Display.textContent = p2Score;
            draws.textContent = numberDraws;
            turns.textContent = gameTurn;
            

            

});




paperButton.addEventListener('click', function() {
    
    if (isGameOver) { return }
    
    player1Section.style.backgroundImage = "url(Paper.png)";
    
    let p2 = Math.floor(Math.random() * 3) + 1;
    
    gameTurn++;
    
        p1Results.classList.remove("win", "lose", "draw");
        p2Results.classList.remove("win", "lose", "draw");

        if (!isGameOver) {

            if (p2 === 3) {
                p2Score++;
                player2Section.style.backgroundImage = "url(Scissors.png)";

                p1Results.textContent = "loses";
                p1Results.classList.add('lose');

                p2Results.textContent = "wins";
                p2Results.classList.add("win");

            
            } else if (p2 === 1) {
                p1Score++;
                player2Section.style.backgroundImage = "url(Rock.png)";

                p1Results.textContent = "wins";
                p1Results.classList.add('win');

                p2Results.textContent = "loses";
                p2Results.classList.add("lose");

                    
            } else {
                player2Section.style.backgroundImage = "url(Paper.png)";
                numberDraws++;

                p1Results.textContent = "draw";
                p1Results.classList.add('draw');

                p2Results.textContent = "draw";
                p2Results.classList.add("draw");
                    
            }

            
            if (p1Score === winningScore || p2Score === winningScore) {
                
                isGameOver = true;

                p1Results.classList.remove("win", "lose", "draw");
                p2Results.classList.remove("win", "lose", "draw");

                p1Results.textContent = "";
                p2Results.textContent = "";

                if (p1Score === winningScore) {
                    p1Results.textContent = "Winner";
                    p1Results.classList.add('win');
                } else {
                    p2Results.textContent = "Winner";
                    p2Results.classList.add('win');
                }
                
            }

        }

            p1Display.textContent = p1Score;
            p2Display.textContent = p2Score;
            draws.textContent = numberDraws;
            turns.textContent = gameTurn;

    

});

scissorsButton.addEventListener('click', function() {

    
    if (isGameOver) { return }
    
        player1Section.style.backgroundImage = "url(Scissors.png)";
    
        let p2 = Math.floor(Math.random() * 3) + 1;
    
        gameTurn++;
    
        p1Results.classList.remove("win", "lose", "draw");
        p2Results.classList.remove("win", "lose", "draw");

        if (!isGameOver) {
        
            if (p2 === 2) {
                p1Score++;
                player2Section.style.backgroundImage = "url(Paper.png)";

                p1Results.textContent = "wins";
                p1Results.classList.add('win');

                p2Results.textContent = "loses";
                p2Results.classList.add("lose");
                            
            } else if (p2 === 1) {
                p2Score++;
                player2Section.style.backgroundImage = "url(Rock.png)";

                p1Results.textContent = "loses";
                p1Results.classList.add('lose');

                p2Results.textContent = "wins";
                p2Results.classList.add("win");

                            
            } else {
                player2Section.style.backgroundImage = "url(Scissors.png)";
                numberDraws++;

                p1Results.textContent = "draw";
                p1Results.classList.add('draw');

                p2Results.textContent = "draw";
                p2Results.classList.add("draw");
                            
            }

            if (p1Score === winningScore || p2Score === winningScore) {

                isGameOver = true;

                p1Results.classList.remove("win", "lose", "draw");
                p2Results.classList.remove("win", "lose", "draw");

                p1Results.textContent = "";
                p2Results.textContent = "";

                if (p1Score === winningScore) {
                    p1Results.textContent = "Winner";
                    p1Results.classList.add('win');
                } else {
                    p2Results.textContent = "Winner";
                    p2Results.classList.add('win');
                }
            
            }

        }
            p1Display.textContent = p1Score;
            p2Display.textContent = p2Score;
            draws.textContent = numberDraws;
            turns.textContent = gameTurn;

});

winningScoreSelector.addEventListener('change', function(){
    winningScore = parseInt(this.value); //changes this
    reset();

});

restButton.addEventListener('click', reset);

//-- Reset - Event Listeners -- //
function reset() {
    p1Score = 0; 
    p2Score = 0; 
    numberDraws = 0; 
    gameTurn = 0;

    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    draws.textContent = numberDraws;
    turns.textContent = gameTurn;

    player1Section.style.backgroundImage = "";
    player2Section.style.backgroundImage = "";

    p1Results.classList.remove("win", "lose", "draw");
    p2Results.classList.remove("win", "lose", "draw");

    winResult = "";
    loseResult = "";

    p1Results.textContent = "";
    p2Results.textContent = "";

    gameTurn = 0; 
    isGameOver = false;
};

//----------------Event Listeners End-----------------//

//Boolean true of false logic
//-is current turn over? true/false
//-is gameOver? true/false



// for (let i = 0; i < winningScore; i++) {

//     let p1 = prompt("Please Select rock, paper or scissors?");
//     gameTurn++;
//     console.log(`Game Turn:${gameTurn}`);

//     let p2 = Math.floor(Math.random() * 3) + 1;

//     if (p1 === 'rock') {
//         if (p2 === 3) {
//             p1Score++;
//             console.log("***You Win!***");
//             console.log("Rock beats Scissors");
//         } else if (p2 === 2) {
//             p2Score++;
//             console.log("***Player 2 Wins!***");
//             console.log("Paper beats Rock");
//         } else {
//             numberDraws++;
//             console.log("***Its a draw!***");
//             console.log("Both players chose Rock");
//         }
//     }

//     if (p1 === 'paper') {
//         if (p2 === 3) {
//             p2Score++;
//             console.log("***Player 2 Wins!***");
//             console.log("Scissors beats Paper");
//         } else if (p2 === 1) {
//             p1Score++;
//             console.log("***You Win!***");
//             console.log("Paper beats Rock");
//         } else {
//             numberDraws++;
//             console.log("***Its a draw!***");
//             console.log(`Both players chose paper`);
//         }
//     }

//     if (p1 === 'scissors') {
//         if (p2 === 2) {
//             p1Score++;
//             console.log("***You Win!***");
//             console.log(`Scissors beats paper`);
            
//         } else if (p2 === 1) {
//             p2Score++;
//             console.log("***Player 2 Wins!***");
//             console.log(`Rock beats Scissors`);
//         } else {
//             numberDraws++;
//             console.log("***Its a draw!***");
//             console.log(`Both players chose Scissors`);
//         }
//         console.log('-------------------------------------------------------------------')
//     }
// }

//     if(gameTurn === winningScore ) {
//         console.log("Game Over!");
//         if(p1Score > p2Score) {
//             console.log("You Win!");
//         } else if (p1Score < p2Score) {
//             console.log("Player 2 Wins!");
//         } else {
//             console.log("It's a Tie!");
//         }
//         console.log(`Player 1: (${p1Score}) Player 2: (${p2Score}) Number of Draws: (${numberDraws})`);
        
//     }

