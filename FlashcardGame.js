let BasicCard = require("./BasicCard.js");
let ClozeCard = require("./ClozeCard.js");
let inquirer = require("inquirer");


let questions = [
    new BasicCard("question", "answer"),
    new BasicCard("question2", "answer2")

]

let index = 0;
let correct = 0;
let incorrect = 0;

function game() {
    inquirer.prompt([{
        name: "answer",
        message: questions[i].front,
        type: "input"
    }]).then(function(data) {
        if(data.answer=== questions[i].back){
            correct++;
            i++;
            console.log("You got it right!");
            game();
        };
    })
};