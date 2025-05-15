const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay")
const computerScoreDisplay = document.getElementById("computerScoreDisplay")
let playerScore = 0;
let computerScore = 0;



function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;

    if (playerChoice === computerChoice) {
        result = "IT'S A TIE!";
        resultDisplay.className = ""; // Remove previous color classes
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "YOU WIN!";
        resultDisplay.className = "greenText";
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
    } else {
        result = "YOU LOSE!";
        resultDisplay.className = "redText";
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
    }

    resultDisplay.textContent = result;
}
