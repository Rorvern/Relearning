var beats = {
    "rock" : "scissors",
    "paper" : "rock",
    "scissors" : "paper"
}

var score = {
    wins : 0,
    losses : 0,
    ties : 0
}

function getRandCompChoice() {
    var choices = Object.keys(beats);
    var choice = choices[Math.floor(Math.random()*3)];
    return choice;
}

function updateScoreboard() {
    var winsP = document.querySelector("#wins");
    var lossesP = document.querySelector("#losses");
    var tiesP = document.querySelector("#ties");
    winsP.innerHTML = "Wins : " + score.wins;
    lossesP.innerHTML = "Losses : " + score.losses;
    tiesP.innerHTML = "Ties : " + score.ties;
}

function playerChoice(c) {
    var compChoice = getRandCompChoice();
    var compChoiceP = document.querySelector("#compChoice")
    if (beats[c] == compChoice) {
        score.wins += 1;
    }
    else if (beats[compChoice] == c) {
        score.losses += 1;
    }
    else {
        score.ties += 1;
    }
    updateScoreboard();
}

function resetScore() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    updateScoreboard();
}

updateScoreboard();