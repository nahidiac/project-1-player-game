//Selection of elements
const player1ScoreDisplay = document.getElementById('player1ScoreDisplay');
const player2ScoreDisplay = document.getElementById('player2ScoreDisplay');
const winningScoreDisplay = document.getElementById('winningScoreDisplay');
const inputScore = document.getElementById('inputScore');
const player1Btn = document.getElementById('player1Btn');
const player2Btn = document.getElementById('player2Btn');
const resetBtn = document.getElementById('resetBtn');

//Data 
let player1Score = 0; 
let player2Score = 0; 
let winningScore = 5;
let gameIsOver = false; 

//functionalities

function winnerCheck(playerScore, winningScore) {
    if(playerScore === winningScore){
        gameIsOver = true;
        player1Btn.setAttribute('disabled', 'disabled');
        player2Btn.setAttribute('disabled', 'disabled');

        if(player1Score === winningScore) {
            player1ScoreDisplay.classList.add('winner'); 
        }else {
            player2ScoreDisplay.classList.add('winner');  
        }
    }
}

function reset() {
    player1Score = 0; 
    player2Score = 0; 
    player1ScoreDisplay.innerText = player1Score; 
    player2ScoreDisplay.innerText = player2Score; 
    gameIsOver = false; 
    player1Btn.removeAttribute('disabled');
    player2Btn.removeAttribute('disabled');
    document.querySelector('.winner').classList.remove('winner'); 
}

inputScore.addEventListener('change', (event)=>{
    const inputValue = Number.parseInt(inputScore.value); 
    if(!Number.isNaN(inputValue)) {
        winningScore = inputValue; 
        winningScoreDisplay.innerText = inputValue; 
    }
    inputScore.value = ''; 
    reset(); 
});

player1Btn.addEventListener('click', (event)=>{
    if(!gameIsOver){
        player1Score++; 
        player1ScoreDisplay.innerText = player1Score;
        winnerCheck(player1Score, winningScore);
    }
}); 

player2Btn.addEventListener('click', (event)=>{
    if(!gameIsOver){
        player2Score++; 
        player2ScoreDisplay.innerText = player2Score;
        winnerCheck(player2Score, winningScore); 
    }
});

resetBtn.addEventListener('click', reset); 
