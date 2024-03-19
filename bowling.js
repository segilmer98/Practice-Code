let frames = [];

function frameScore() {
    for (let i = 0; i <= 9; i++) {
        frames.push([]);
        let numberOfPins = Math.ceil(Math.random() * 10);
        let remainingPins = 10 - numberOfPins;
        let secondNumberOfPins = Math.ceil(Math.random() * remainingPins);
        if (numberOfPins === 10) {
            frames[i].push(numberOfPins);
            frames[i].push(0);
        } else {
            frames[i].push(numberOfPins);
            frames[i].push(secondNumberOfPins);
        }
    }
}

function totalScore(frames) {
    let score = 0;
    let frameScore = 0;
    for (let x = 0; x <= 9; x++) {
        if (frames[x][0] == 10) {
            if (frames[9][0] == 10) { score += 10 } else {
                frameScore = 10 + (frames[x + 1][0] + frames[x + 1][1]);
                score += frameScore;
            }
        } else {
            frameScore = (frames[x][0] + frames[x][1]);
            score += frameScore;
        }
    }
    console.log(score);
    return score;
}

function playGame(players) {
    let currentWinner = players[0];
    let currentWinnerScore = 0;
    for (let i = 0; i < players.length; i++) {
        frames = [];
        frameScore();
        let playerScore = totalScore(frames);
        if (playerScore > currentWinnerScore) {
            currentWinnerScore = playerScore;
            currentWinner = players[i];
        }
    }
    console.log(currentWinner);
}

