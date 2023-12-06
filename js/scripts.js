//Business Logic
function PigDice(player, score) {
    this.player = player;
    this.score = score;
    //total score for current round:
    this.round = [];
    //total score for all rounds:
    this.total = [];
}

PigDice.prototype.getRound = function (num) {
    if (num === 1) {
        this.round = [];
    } else {
        this.round.push(num);
    }
    return this.round.reduce((a, b) => a + b, 0);
}
PigDice.prototype.getTotal = function (num) {
    const roundScore = this.getRound(num) - num;
    this.total.push(roundScore);
    return this.total.reduce((a, b) => a + b, 0);
}
function getRandomNum() {
    return Math.floor(Math.random() * 6) + 1;
}

// UI logic: 
// Button disable - enable functions 
function disableBtn(buttons) {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
    }
}
function enableBtn(buttons) {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = false;
    }
}
function btnAbility(num, toBeDisabled, toBeEnabled) {
    if (num === 1) {
        disableBtn(toBeDisabled);
        enableBtn(toBeEnabled);
    } else {
        disableBtn(toBeEnabled);
        enableBtn(toBeDisabled);
    }
} // Only for 'Play' buttons 

// A function that decides who won the game. 
function winnerPost(totalScore, playerName) {
    // Elements you'd need for this function to work: 
    // 1) Total Score >= 100 
    // 2) When clicked 'hold button' this function will activate -> we're including this function within 'holdBtnOne event listener' later. 
    // 3) This will return: appending the Name to the 'winner' div. 
    const winnerName = document.getElementById("winnerName");
    const winnerDiv = document.getElementById("winner");

    if (totalScore >= 100) {
        winnerName.innerText = playerName;
        winnerDiv.classList.remove("hidden");
    } else {
        return;
    }
}

// Player 1
function getScoreOne() {
    const playBtnOne = document.getElementById("playBtnOne");
    const diceResultOne = document.getElementById("diceResultOne");
    const roundScoreOne = document.getElementById("roundScoreOne");
    const totalScoreOne = document.getElementById("totalScoreOne");
    const holdBtnOne = document.getElementById("holdBtnOne");
    const buttonsPlayerOne = document.getElementsByClassName("buttonsPlayerOne");
    const buttonsPlayerTwo = document.getElementsByClassName("buttonsPlayerTwo");
    const player1 = new PigDice("Player1", 0);

    holdBtnOne.addEventListener("click", e => {
        e.preventDefault();
        const totalScore = player1.getTotal(player1.score);
        totalScoreOne.innerText = totalScore;
        disableBtn(buttonsPlayerOne);
        enableBtn(buttonsPlayerTwo);
        winnerPost(totalScore, player1.player);
        //refreshing 'round score' for object & on UI: 
        player1.round = [];
        roundScoreOne.innerText = '';
        diceResultOne.innerText = '';
    });
    playBtnOne.addEventListener("click", e => {
        e.preventDefault();
        player1.score = getRandomNum();
        const roundScore = player1.getRound(player1.score);
        diceResultOne.innerText = player1.score;
        roundScoreOne.innerText = roundScore;
        btnAbility(player1.score, buttonsPlayerOne, buttonsPlayerTwo);
    });
}
// Player 2
function getScoreTwo() {
    const playBtnTwo = document.getElementById("playBtnTwo");
    const diceResultTwo = document.getElementById("diceResultTwo");
    const roundScoreTwo = document.getElementById("roundScoreTwo");
    const totalScoreTwo = document.getElementById("totalScoreTwo");
    const holdBtnTwo = document.getElementById("holdBtnTwo");
    const buttonsPlayerOne = document.getElementsByClassName("buttonsPlayerOne");
    const buttonsPlayerTwo = document.getElementsByClassName("buttonsPlayerTwo");
    const player2 = new PigDice("Player2", 0);

    holdBtnTwo.addEventListener("click", e => {
        e.preventDefault();
        const totalScore = player2.getTotal(player2.score);
        totalScoreTwo.innerText = totalScore;
        disableBtn(buttonsPlayerTwo);
        enableBtn(buttonsPlayerOne);
        winnerPost(totalScore, player2.player);
        //refreshing 'round score' for object & on UI: 
        player2.round = [];
        roundScoreTwo.innerText = '';
        diceResultTwo.innerText = '';
    });

    playBtnTwo.addEventListener("click", e => {
        e.preventDefault();
        player2.score = getRandomNum();
        const roundScore = player2.getRound(player2.score);

        diceResultTwo.innerText = player2.score;
        roundScoreTwo.innerText = roundScore;
        btnAbility(player2.score, buttonsPlayerTwo, buttonsPlayerOne);
    })
}

window.onload = () => {
    getScoreOne();
    getScoreTwo();
}



