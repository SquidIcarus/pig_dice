//Business Logic
function PigDice(player, score) {
    this.player = player;
    this.score = score;
    //total score for current round:
    this.round = [];
    //total score for all rounds:
    this.total = [];
}

const player1 = new PigDice("player1", 0);
const player2 = new PigDice("player2", 0);
//console.log(player1)

PigDice.prototype.getRound = function (num) {
    if (num === 1) {
        this.round = [];
    } else {
        this.round.push(num);
    }
    return this.round;
}
PigDice.prototype.getTotal = function (num) {
    if (num !== 1) {
        this.total.push(num);
    }
    return this.total;
}
PigDice.prototype.roundScore = function () {
    const numArr = this.round;
    return numArr.reduce((a, b) => a + b, 0);
}
PigDice.prototype.totalScore = function () {
    const totalArr = this.total;
    return totalArr.reduce((a, b) => a + b, 0);
}

function getRandomNum() {
    return Math.floor(Math.random() * 6) + 1;
}

//UI Logic Player 1
function getScoreOne() {
    const playBtnOne = document.getElementById("playBtnOne");
    const diceResultOne = document.getElementById("diceResultOne");
    const roundScoreOne = document.getElementById("roundScoreOne");
    const totalScoreOne = document.getElementById("totalScoreOne");
    const holdBtnOne = document.getElementById("holdBtnOne");
    const playBtnTwo = document.getElementById("playBtnTwo");

    holdBtnOne.addEventListener("click", e => {
        e.preventDefault();
        player1.getTotal(player1.roundScore());

        playBtnOne.style.display = "none";
        holdBtnOne.style.display = "none";

        playBtnTwo.style.display = "block";
        holdBtnTwo.style.display = "block";

    });

    playBtnOne.addEventListener("click", e => {
        e.preventDefault();
        const randomNumber = getRandomNum();
        // 1) present it to UI / 2) add this to the PicDice score + result[];
        player1.score = randomNumber;
        player1.getRound(randomNumber);
        player1.getTotal(randomNumber);

        diceResultOne.innerText = randomNumber;
        roundScoreOne.innerText = player1.roundScore();
        totalScoreOne.innerText = player1.totalScore();

        if (randomNumber === 1) {
            playBtnOne.style.display = "none";
            playBtnTwo.style.display = "none";

            playBtnTwo.style.display = "block";
        }
    })
}



//UI Logic Player 2
function getScoreTwo() {
    const playBtnTwo = document.getElementById("playBtnTwo");
    const diceResultTwo = document.getElementById("diceResultTwo");
    const roundScoreTwo = document.getElementById("roundScoreTwo");
    const totalScoreTwo = document.getElementById("totalScoreTwo");
    const holdBtnTwo = document.getElementById("holdBtnTwo");

    holdBtnTwo.addEventListener("click", e => {
        e.preventDefault();
        player2.getTotal(player2.roundScore());

        playBtnTwo.style.display = "none";
        holdBtnTwo.style.display = "none";

        const playBtnOne = document.getElementById("playBtnOne");
        playBtnOne.style.display = "block";
        holdBtnOne.style.display = "block";
    });

    playBtnTwo.addEventListener("click", e => {
        e.preventDefault();
        const randomNumber = getRandomNum();
        // 1) present it to UI / 2) add this to the PicDice score + result[];
        player2.score = randomNumber;
        player2.getRound(randomNumber);
        player2.getTotal(randomNumber);

        diceResultTwo.innerText = randomNumber;
        roundScoreTwo.innerText = player2.roundScore();
        totalScoreTwo.innerText = player2.totalScore();

        if (randomNumber === 1) {
            playBtnTwo.style.display = "none";
            holdBtnTwo.style.display = "none";

            const playBtnOne = document.getElementById("playBtnOne");
            playBtnOne.style.display = "block";
        } else {
            holdBtnTwo.style.display = "block";
        }
    })
}

window.onload = () => {
    getScoreOne();
    getScoreTwo();
}


