const prompt = require("prompt-sync")()


console.log("Welcome to the Computer Hardware Quiz!")

let correctAnswers = 0;
const totalQuestions = 3;

const answer1 = prompt("What is the brain of the computer?: ");
const correctAnswer1 = "CPU";


if (answer1.toUpperCase() === correctAnswer1) {
    console.log("You got it correct!");
    correctAnswers++;
}
else {
    console.log("You got it wrong!");
}

const answer2 = prompt("What is the part that processes the graphical things in a computer?: ");
const correctAnswer2 = "GPU";


if (answer2.toUpperCase() === correctAnswer2) {
    console.log("You got it correct!");
    correctAnswers++;
}
else {
    console.log("You got it wrong!");
}

const answer3 = prompt("What is the reccommended amount of RAM in a computer?: ");
const correctAnswer3 = "16GB";


if (answer3.toUpperCase() === correctAnswer3) {
    console.log("You got it correct!");
    correctAnswers++;
}
else {
    console.log("You got it wrong!");
}

const percent = Math.round((correctAnswers / totalQuestions) * 100)

console.log("You got", correctAnswers, "questions correct.");
console.log("You scored", percent.toString() + "%")