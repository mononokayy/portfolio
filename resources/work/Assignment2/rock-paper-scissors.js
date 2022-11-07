
function rockPaperScissors(rps) {
    const npc = computer();
    const result = fight(rps, npc);
    switch (result) {
        case true:
            outcome = "You Win!";
            userScore += 1;
            showUserScore.innerText = userScore;
            break;
        case false:
            outcome = "You lose :(";
            compScore += 1;
            showCompScore.innerText = compScore;
            break;
        case "draw":
            outcome = "It's a draw!";
            break;
        default:
            break;
    }

    let newHistory = document.createElement("tr");
    newHistory.className = "history";

    let historyCounter = document.createElement("td");
    historyCounter.innerHTML = `${historyCount}`
    newHistory.appendChild(historyCounter);
    historyCount += 1;

    let userHistorian = document.createElement("td");
    userHistorian.innerHTML = `${rps}`;
    newHistory.appendChild(userHistorian);

    let computerHistorian = document.createElement("td");
    computerHistorian.innerHTML = `${npc}`;
    newHistory.append(computerHistorian);

    let rpsLog = document.getElementsByClassName('score-table');
    rpsLog[0].append(newHistory);

    let showOutcome = document.querySelector('#outcome');
    showOutcome.innerText = outcome;
}


function computer() {
    switch (rng()) {
        case 1:
            return "Rock";
            break;
        case 2:
            return "Paper";
            break;
        case 3:
            return "Scissors";
            break;
        default:
            break;
    }
}

function fight(me, npc) {
    if (me === npc) {
        return "draw";
    }
    else if (me === "Rock") { // returns boolean -- true=win false=lose
        switch (npc) {
            case "Paper":
                return false;
                break;
            case "Scissors":
                return true;
                break;
            default:
                break;
        }
    }
    else if (me === "Paper") {
        switch (npc) {
            case "Rock":
                return true;
                break;
            case "Scissors":
                return false;
                break;
            default:
                break;
        }
    }
    else if (me === "Scissors") {
        switch (npc) {
            case "Paper":
                return true;
                break;
            case "Rock":
                return false;
                break;
            default:
                break;
        }
    }
}

let userScore = 0;
let compScore = 0;
let historyCount = 1;

let showUserScore = document.querySelector('#user-score');
showUserScore.innerText = userScore;
let showCompScore = document.querySelector('#computer-score');
showCompScore.innerText = compScore;

let outcome = "";



function rng() {
    return Math.floor(Math.random() * 3) + 1;
}