alert("You have 5 chance to beat computer🙃");
alert("TO know the result press f12 or Fn with f12👍");

let round = 5;

let humanScore = 0, computerScore = 0;

function whoWon(humanScore, computerScore) {
    if (humanScore > computerScore) {
        console.log("You won");
    } else {
        console.log("You lost");
    }
}

function playRound(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        console.log("draw");
    } else if (userChoice === 0 && computerChoice === 1) {
        computerScore++;
    } else if (userChoice === 0 && computerChoice === 2) {
        humanScore++;
    } else if (userChoice === 1 && computerChoice === 0) {
        humanScore++;
    } else if (userChoice === 1 && computerChoice === 2) {
        computerScore++;
    } else if (userChoice === 2 && computerChoice === 0) {
        computerScore++;
    } else if (userChoice === 2 && computerChoice === 1) {
        humanScore++;
    }
}

for (let i = 1;i <= round;i++) {
    let computerChoice = Math.floor(Math.random() * 3);
    let userChoice = Number(prompt("Enter a number and press enter"))
    
    playRound(userChoice, computerChoice);
    whoWon(humanScore, computerScore);
}

whoWon(humanScore, computerScore);