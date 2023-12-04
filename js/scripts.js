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

//UI Logic
function getScoreOne() {
    const playBtnOne = document.getElementById("playBtnOne");
    const diceResultOne = document.getElementById("diceResultOne");
    const roundScoreOne = document.getElementById("roundScoreOne");
    const totalScoreOne = document.getElementById("totalScoreOne");
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
    })
}

window.onload = () => {
    getScoreOne();
}


