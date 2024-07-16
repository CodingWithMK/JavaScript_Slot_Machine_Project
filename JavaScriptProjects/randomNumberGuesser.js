const prompt = require("prompt-sync")()

// const targetNumber = 10 + Math.round(Math.random() - 90) // This creates a number between 10 and 100
const target = Math.round(Math.random() * 100);

let guesses = 0;
console.log(target);

while (true) {
    guesses++;

    const guess = Number(prompt("Guess the number (0 - 100)"));

    if (guess > target) {
        console.log("Your guess is too high.");
    }
    else if (guess < target) {
        console.log("Your guess is too low.");
    }
    else {
        console.log("Your guess is right!");
        break;
    }
}

console.log("You guessed the number in", guesses, "tries!")