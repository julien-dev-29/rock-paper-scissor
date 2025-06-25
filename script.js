let userScore = 0
let computerScore = 0
var resultDiv = document.querySelector('.result')
var userScoreDiv = document.querySelector('.user-score')
var computerScoreDiv = document.querySelector('.computer-score')
userScoreDiv.textContent = userScore
computerScoreDiv.textContent = computerScore
/**
 * Retourne le choix du computer
 * 
 * @returns {String}
 */
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3)
    console.log(randomNumber);
    switch (randomNumber) {
        case 0:
            return "Rock"
        case 1:
            return "Paper"
        case 2:
            return "Scissors"
        default:
            break;
    }
}

// /**
//  * Retourne le choix du joueur
//  * 
//  * @returns {String}
//  */
// function getUserChoice() {
//     return prompt('Rock, Paper, Scissors ?')
// }

/**
 * Joue un simple round
 * 
 * @param {String} userChoice 
 * @param {String} computerChoice 
 */
function playRound(userChoice, computerChoice) {
    userChoice = userChoice.toLowerCase()
    computerChoice = computerChoice.toLowerCase()

    if (userChoice === computerChoice) return "Ex aequo!!!"

    if (userChoice === 'rock' && computerChoice === 'scissors' ||
        userChoice === 'paper' && computerChoice === 'rock' ||
        userChoice === 'scissors' && computerChoice === 'paper'
    ) {
        userScore++
        return `You win! ${userChoice} beats ${computerChoice}`
    }

    if (userChoice === 'rock' && computerChoice === 'paper' ||
        userChoice === 'paper' && computerChoice === 'scissors' ||
        userChoice === 'scissors' && computerChoice === 'rock'
    ) {
        computerScore++
        return `You lose! ${computerChoice} beats ${userChoice}`
    }
}

function displayResult(e) {
    e.stopPropagation()
    var userSelection = e.target.textContent
    var computerSelection = getComputerChoice()
    resultDiv.textContent = playRound(userSelection, computerSelection)
    updateScore()
}

function initScore() {
    userScore = 0
    computerScore = 0
}

function updateScore() {
    if (userScore === 5) {
        resultDiv.style.color = "#00D390"
        resultDiv.style.fontSize = "42px"
        resultDiv.textContent = "You win the game!"
    }
    if (computerScore === 5) {
        resultDiv.style.color = "#FF627D"
        resultDiv.style.fontSize = "42px"
        resultDiv.textContent = "You lose the game!"
    }
    userScoreDiv.textContent = userScore
    computerScoreDiv.textContent = computerScore
}

const buttons = document.querySelectorAll('.btn')
buttons.forEach(button => button.addEventListener('click', displayResult))