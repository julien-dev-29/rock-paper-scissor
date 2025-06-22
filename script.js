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

    if (userChoice === 'rock' && computerChoice === 'scissors' ||
        userChoice === 'paper' && computerChoice === 'rock' ||
        userChoice === 'scissors' && computerChoice === 'paper'
    ) {
        console.log(`You win! ${userChoice} beats ${computerChoice}`);
        ++userScore
    }
    if (userChoice === 'rock' && computerChoice === 'paper' ||
        userChoice === 'paper' && computerChoice === 'scissors' ||
        userChoice === 'scissors' && computerChoice === 'rock'
    ) {
        console.log(`You lose! ${computerChoice} beats ${userChoice}`);
        ++computerScore
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