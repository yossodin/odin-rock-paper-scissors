
let playerScore = 0;
let computerScore = 0;

let playerChoice = getPlayerChoice();
let computerChoice = getComputerChoice();

playRound(playerChoice, computerChoice);

function getComputerChoice() {

    // randomly choose 0, 1, or 2
    let choice = Math.floor(Math.random() * 3);

    // return rock, paper, or scissors based on the random value
    if (choice == 0) {
        return 'rock';
    } else if (choice == 1) {
        return 'paper';
    } else if (choice == 2) {
        return 'scissors';
    } else {
        return 'An error occurred.';
    }
}

function getPlayerChoice() {

    // get user input
    let choice = prompt(`Please select 'rock', 'paper', or 'scissors'.`);

    // return what the user selected, or scissors if it did not match
    if (choice.toLowerCase() == 'rock') {
        return 'rock';
    } else if (choice.toLowerCase() == 'paper') {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == 'rock') {
        if (computerChoice == 'rock') {
            console.log(`Rocks clash with no gain.`);
        } else if (computerChoice == 'paper') {
            console.log(`The opponent's paper covers your rock.`);
            computerScore += 1;
        } else {
            console.log(`Your rock crushes the opponent's scissors!`);
            playerScore += 1;
        }
    } else if (humanChoice == 'paper') {
        if (computerChoice == 'rock') {
            console.log(`Your paper covers the opponent's rock!`);
            playerScore += 1;
        } else if (computerChoice == 'paper') {
            console.log(`Papers clash with no gain.`);
        } else {
            console.log(`The opponent's scissors slice your paper.`);
            computerScore += 1;
        }
    } else {
        if (computerChoice == 'rock') {
            console.log(`The opponent's rock smashes your scissors.`);
            computerScore += 1;
        } else if (computerChoice == 'paper') {
            console.log(`Your scissors slice the opponent's paper!`);
            playerScore += 1;
        } else {
            console.log(`Scissors clash with no gain.`);
        }
    }
}