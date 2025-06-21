let userScore = 0
let computerScore = 0
let userAnswer = ""
function getComputerChoice() {
    const randomNumber = Math.random()
    if (randomNumber < 1 / 3) {
        return "Rock"
    }
    if (randomNumber < 2 / 3 && randomNumber > 1 / 3) {
        return "Paper"
    }
    if (randomNumber < 1 && randomNumber > 2 / 3) {
        return "Scissors"
    }
}

function getUserChoice() {
    userAnswer = prompt('Rock, Paper, Scissors ?')
    return userAnswer
}
function playRound(userChoice, computerChoice) {
    userChoice = userChoice.toLowerCase()
    computerChoice = computerChoice.toLowerCase()
    if (userChoice === 'rock' && computerChoice === 'scissors') {
        console.log("You win! Rock beats Scissors");
        userScore++
    }
    if (userChoice === 'rock' && computerChoice === 'paper') {
        console.log("You lose! Paper beats Rock");
        computerScore++
    }
    if (userChoice === 'paper' && computerChoice === 'rock') {
        console.log("You win! Paper beats Rock");
        userScore++
    }
    if (userChoice === 'paper' && computerChoice === 'scissors') {
        console.log("You lose! Scissors beat Paper");
        computerScore++
    }
    if (userChoice === 'scissors' && computerChoice === 'paper') {
        console.log("You win! Scissors beat Paper");
        userScore++
    }
    if (userChoice === 'scissors' && computerChoice === 'rock') {
        console.log("You lose! Rock beats Scissors");
        computerScore++
    }
}

window.addEventListener('DOMContentLoaded', () => {
    while (userScore < 3 && computerScore < 3) {
        playRound(getUserChoice(), getComputerChoice())
    }

    if (userScore === 3) {
        console.log("%cYou win!!!", "color:white;background-color:#12A594;padding: 25px 35px");
    } else {
        console.log("%cYou lose!!!", "color:white;background-color:#12A594;padding: 25px 35px");
    }
})