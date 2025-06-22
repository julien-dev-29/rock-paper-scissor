let userScore = 0
let computerScore = 0

/**
 * Retourne le choix du computer
 * 
 * @returns {String}
 */
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

/**
 * Retourne le choix du joueur
 * 
 * @returns {String}
 */
function getUserChoice() {
    return prompt('Rock, Paper, Scissors ?')
}

/**
 * Joue un simple round
 * 
 * @param {String} userChoice 
 * @param {String} computerChoice 
 */
function playRound(userChoice, computerChoice) {
    userChoice = userChoice.toLowerCase()
    computerChoice = computerChoice.toLowerCase()

    if (userChoice === 'rock' && computerChoice === 'scissors') {
        console.log("You win! Rock beats Scissors");
        ++userScore
        console.log("user score: " + userScore, "computer score: " + computerScore);
    }
    if (userChoice === 'rock' && computerChoice === 'paper') {
        console.log("You lose! Paper beats Rock");
        ++computerScore
        console.log("user score: " + userScore, "computer score: " + computerScore);
    }
    if (userChoice === 'paper' && computerChoice === 'rock') {
        console.log("You win! Paper beats Rock");
        ++userScore
        console.log("user score: " + userScore, "computer score: " + computerScore);
    }
    if (userChoice === 'paper' && computerChoice === 'scissors') {
        console.log("You lose! Scissors beat Paper");
        ++computerScore
        console.log("user score: " + userScore, "computer score: " + computerScore);
    }
    if (userChoice === 'scissors' && computerChoice === 'paper') {
        console.log("You win! Scissors beat Paper");
        ++userScore
        console.log("user score: " + userScore, "computer score: " + computerScore);
    }
    if (userChoice === 'scissors' && computerChoice === 'rock') {
        console.log("You lose! Rock beats Scissors");
        ++computerScore
        console.log("user score: " + userScore, "computer score: " + computerScore);
    }
}

/**
 * Joue 5 rounds
 */
function playGame() {
    for (let index = 0; index < 5; index++) {
        const userSelection = getUserChoice()
        const computerSelection = getComputerChoice()
        playRound(userSelection, computerSelection)
    }
    if (userScore > computerScore) {
        console.log("You win the game!");
    } else {
        console.log("You lose the game!");
    }
}

playGame()