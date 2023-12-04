function PigDice(player, score) {
    this.player = player;
    this.score = score
    this.results = [];
}

const player1 = new PigDice("player1", 0);
const player2 = new PigDice("player2", 0);
console.log(player1)

function getRandomNum() {
    return Math.floor(Math.random() * 6) + 1;
}
