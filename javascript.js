
let choice = getComputerChoice();
console.log(`The opponent throws ${choice}.`);

function getComputerChoice() {

    // randomly choose 0, 1, or 2
    let choice = Math.floor(Math.random() * 3);

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

