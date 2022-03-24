var readlineSync = require("readline-sync");

var score = 0;

var highScores = [
    {
        name : "Yash",
        score : 5
    },

    {
        name : "Ashwin",
        score : 5
    }
];

var questions = [
    {
        question : "In which year I was born ? ",
        answer : "2001"
    },

    {
        question : "Where do I live ? ",
        answer : "Pune"
    },

    {
        question : "Who is my role model ? ",
        answer : "Elon Musk"
    },

    {
        question : "Which is my favourite football club ? ",
        answer : "Manchester City"
    },

    {
        question : "Which laptop do I use ? ",
        answer : "Apple Macbook Pro"
    }
]

function welcome() {
    var userName = readlineSync.question("What is your name ? ");
    console.log("Welcome " , userName , " to 'Do You Know Yash?'");
    console.log("Remember! Answers are case-sensitive.")
}

function play(question , answer) {
    var userAnswer = readlineSync.question(question);

    if (userAnswer === answer) {
        console.log("RIGHT!!!");
        score = score + 1;
    }
    else {
        console.log("WRONG!!!")
    }

    console.log("Your Current Score is : " , score);
    console.log("----------");
}

function game() {
    for (var i=0; i<questions.length;i++) {
        var currentQuestion = questions[i];
        play(currentQuestion.question , currentQuestion.answer);
    }
}

function showScores() {
    console.log("Congratulations! Your Final Score is : " , score);
    console.log("Check out the high scores, ping me if you break any and I'll update it");

    highScores.map(score => console.log(score.name, " : " , score.score))
}

welcome();
game();
showScores();
