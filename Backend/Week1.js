const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

function generateRandomChoice() {
    const options = ["scissors", "rock", "paper"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

console.clear();
console.log("Let's play the rock-paper-scissors game!");

readline.question("Your choice: ", (userChoice) => {
    const playerSelection = userChoice.toLowerCase();
    const computerSelection = generateRandomChoice();
    console.log("Computer's choice: " + computerSelection);

    if ((playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock')) {
        console.log("You win!");
    } else if (playerSelection === computerSelection) {
        console.log("It's a tie!");
    } else {
        console.log("Computer wins!");
    }

    readline.close();
});
