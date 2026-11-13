playGame();

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

// take string inputs for rock, paper, scissors, expecting player choice first, and output whether the winner or tie
function playRound(playerChoice, computerChoice) {
    if (playerChoice == 'rock') {
        if (computerChoice == 'rock') {
            console.log(`Rocks clash with no gain.`);
            return 'tie';
        } else if (computerChoice == 'paper') {
            console.log(`The opponent's paper covers your rock.`);
            return 'computer';
        } else {
            console.log(`Your rock crushes the opponent's scissors!`);
            return 'player';
        }
    } else if (playerChoice == 'paper') {
        if (computerChoice == 'rock') {
            console.log(`Your paper covers the opponent's rock!`);
            return 'player';
        } else if (computerChoice == 'paper') {
            console.log(`Papers clash with no gain.`);
            return 'tie';
        } else {
            console.log(`The opponent's scissors slice your paper.`);
            return 'computer';
        }
    } else {
        if (computerChoice == 'rock') {
            console.log(`The opponent's rock smashes your scissors.`);
            return 'computer';
        } else if (computerChoice == 'paper') {
            console.log(`Your scissors slice the opponent's paper!`);
            return 'player';
        } else {
            console.log(`Scissors clash with no gain.`);
            return 'tie';
        }
    }
}

function playGame(rounds = 5) {

    let playerScore = 0;
    let computerScore = 0;

    for(i = 0; i < rounds; i += 1) {
        let outcome = playRound(getPlayerChoice(), getComputerChoice());
        if (outcome == 'player') {
            playerScore += 1;
        } else if (outcome == 'computer') {
            computerScore += 1;
        }
    }

    if(playerScore > computerScore) {
        console.log(`You've won, ${playerScore} rounds to ${computerScore}!`);
    } else if (computerScore > playerScore) {
        console.log(`You've lost, ${computerScore} rounds to ${playerScore}.`);
    } else {
        console.log(`Tied game, each player won ${playerScore} rounds.`)
    }
}