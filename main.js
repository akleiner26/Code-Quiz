//variables for page routing
var header = document.querySelector("#header");
var secondary = document.querySelector("#secondary");
var responses = document.querySelector("#responses");
var buttons = document.querySelector("button")
var startQuiz = document.querySelector("#starter");
var timeLeft = document.querySelector("#counter");


//global variables
var score = 0;
var secondsLeft = 100;

//Make array with questions and answers
var questions = [
    {
        questionText: "Inside which element do we put the JavaScript?",
        choice1: "<script>",
        choice2: "<js>",
        choice3: "<scripting>",
        choice4: "<javascript>",
        answer: 1
    },
    {
        questionText: "Where is the correct place to insert a JavaScript?",
        choice1: "The <body> section",
        choice2: "Both the <head> and the <body> section",
        choice3: "The <head> section",
        choice4: "The <footer> section",
        answer: 1
    },
    {
       questionText: "How do you write 'Hello World' in an alert box?",
       choice1: "alertBox('Hello World');",
       choice2: "msgBox(Hello World');",
       choice3: "alert('Hello World);",
       choice4: "msg('Hello World');",
       answer: 3
    },
    {
        questionText: "How do you create a function in JavaScript?",
        choice1: "function:myFunction()",
        choice2: "function myFunction()",
        choice3: "function-myFunction()",
        choice4: "function = myFunction()",
        answer: 2
    },
    {
        questionText: "How do you call a function?",
        choice1: "call myFunction()",
        choice2: "myFunction(call)",
        choice3: "call function myFunction()",
        choice4: "myFunction()",
        answer: 4
    }
];

//write function for timer start when start quiz button is pushed


function runTimer(){
    var timerInterval = setInterval(function() {
    secondsLeft --;
    timeLeft.textContent = secondsLeft;

    if (secondsLeft === 0) {
        clearInterval(timerInterval);
        header.textContent = "Time is Up!"
        secondary.textContent = "Your score is " + score;
        responses.textContent = "View Leaderboard to see how your score compares!"
        buttons.textContent = "View Leaderboard"
    }
}, 1000);
}
console.log(secondsLeft)
startQuiz.addEventListener("click", runTimer());
