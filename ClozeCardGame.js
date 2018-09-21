let ClozeCard = require("./ClozeCard.js");
let inquirer = require("inquirer");


var questions = [
    new ClozeCard("Harry S. Truman was the 33rd president of the United States of America.", "Harry S. Truman"),
    new ClozeCard("UCLA is located in the city of Westwood", "Westwood"),
    new ClozeCard("Lee Harvey Oswald killed John F. Kennedy", "Lee Harvey Oswald"),
    new ClozeCard("John Wilkes Booth killed Abraham Lincoln", "John Wilkes Booth"),
    new ClozeCard("The Supreme Court is the highest court in the United States", "The Supreme Court"),
    new ClozeCard("The President signs bills into law", "The President"),
    new ClozeCard("The Pacific Ocean is on the west coast of the United States", "Pacific Ocean"),
    new ClozeCard("New York Harbor is the home of the Statue of Liberty", "New York Harbor"),
    new ClozeCard("The Constitution is the supreme law of the land", "The Constitution"),
    new ClozeCard("Capitalism is the economic system in the United States", "Capitalism")
]

let index = 0;
let correct = 0;
let incorrect = 0;



function study() {
    for (i = 0; i < questions.length; i++) {
        console.log(questions[i].fullText);
    };
    inquirer.prompt([{
        type: "confirm",
        name: "ready",
        message: "Are you ready to begin?"
    }]).then(
        function (data) {
            if (data.ready) {
                console.clear();
                console.log("Then lets get started. Fill in the ... with the correct answer.")
                game();
            } else {
                console.log("Come back after you study!")
            }
        }
    )
};

function game() {
    if (index < questions.length) {
        inquirer.prompt([{
            name: "answer",
            message: questions[index].partial,
            type: "input"
        }]).then(function (data) {
            if (data.answer.toLowerCase() === questions[index].cloze.toLowerCase()) {
                correct++;
                console.log("You got it right!");
                console.log("--------------");
            } else {
                console.log("Sorry, the correct answer was " + questions[index].cloze);
                console.log("--------------");
                incorrect++;
            };
            index++;
            game();
        })
    } else {
        console.log("You answered " + correct + " questions correctly, and missed " + incorrect + " questions. Thanks for playing!")
    }
};

study();