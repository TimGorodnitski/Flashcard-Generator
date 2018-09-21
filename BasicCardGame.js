let BasicCard = require("./BasicCard.js");
let inquirer = require("inquirer");


var questions = [
    new BasicCard("33rd president of the United States of America.", "Harry S. Truman"),
    new BasicCard("What city is UCLA located?", "Westwood"),
    new BasicCard("Who killed John F. Kennedy?", "Lee Harvey Oswald"),
    new BasicCard("Who killed Abraham Lincoln?", "John Wilkes Booth"),
    new BasicCard("What is the highest court in the United States?", "Supreme Court"),
    new BasicCard("Who signs bills to become laws?", "President"),
    new BasicCard("What ocean is in the west coast of the United States?", "Pacific Ocean"),
    new BasicCard("Where is the Statue of Liberty?", "New York Harbor"),
    new BasicCard("What is the supreme law of the land?", "The Constitution"),
    new BasicCard("What is the economic system in the United States?", "Capitalist")
]

let index = 0;
let correct = 0;
let incorrect = 0;

function study() {
    for (i = 0; i < questions.length; i++) {
        console.log(questions[i].front + " Answer: " + questions[index].back);
    };
    inquirer.prompt([{
        type: "confirm",
        name: "ready",
        message: "Are you ready to begin?"
    }]).then(
        function (data) {
            if (data.ready) {
                console.clear();
                console.log("Then lets get started.")
                game();
            } else {
                console.log("Study some more and come back when you're ready!")
            }
        }
    )
};




function game() {
    if (index < questions.length) {
        inquirer.prompt([{
            name: "answer",
            message: questions[index].front,
            type: "input"
        }]).then(function (data) {
            if (data.answer.toLowerCase() === questions[index].back.toLowerCase()) {
                correct++;
                console.log("You got it right!");
                console.log("--------------");
            } else {
                console.log("Sorry, the correct answer was " + questions[index].back);
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