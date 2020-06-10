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
        answer: "<script>"
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

//write function for timer


function runTimer(){
    var timerInterval = setInterval(function() {
    secondsLeft --;
    timeLeft.textContent = secondsLeft;

    if (secondsLeft === 0) {
        clearInterval(timerInterval);
        header.textContent = "Time is Up!";
        secondary.textContent = "Your score is " + score;
        responses.textContent = "View Leaderboard";
        responses.setAttribute("type", "button")
        
        
    }
}, 1000);
}
console.log(secondsLeft)


//write function to populate first question
function populateQuestion1(){
    header.textContent = questions[0].questionText;
    secondary.textContent = " ";
    responses.style.border="thin solid black"
   
    buttons.style.display = "none";
    var firstAnswerDiv = document.createElement("div");
    var firstAnswer = document.createElement("button");
    firstAnswer.setAttribute("type","button");
    firstAnswer.setAttribute("id","buttonOne");
    firstAnswer.textContent = questions[0].choice1;
    firstAnswerDiv.appendChild(firstAnswer);
    responses.appendChild(firstAnswerDiv);
    var secondAnswerDiv = document.createElement("div");
    var secAnswer = document.createElement("button");
    secAnswer.setAttribute("type","button");
    secAnswer.setAttribute("id","buttonTwo");
    secAnswer.textContent = questions[0].choice2;
    secondAnswerDiv.appendChild(secAnswer);
    responses.appendChild(secondAnswerDiv);
    var thirdAnswerDiv = document.createElement("div");
    var thirdAnswer = document.createElement("button");
    thirdAnswer.setAttribute("type","button");
    thirdAnswer.setAttribute("id","buttonThree");
    thirdAnswer.textContent = questions[0].choice3;
    thirdAnswerDiv.appendChild(thirdAnswer);
    responses.appendChild(thirdAnswerDiv);
    var fourthAnswerDiv = document.createElement("div");
    var fourthAnswer = document.createElement("button");
    fourthAnswer.setAttribute("type","button");
    fourthAnswer.setAttribute("id","buttonFour");
    fourthAnswer.textContent = questions[0].choice4;
    fourthAnswerDiv.appendChild(fourthAnswer);
    responses.appendChild(fourthAnswerDiv);
//write new variables for button routing
var firstButton = document.querySelector("#buttonOne");
var secondButton = document.querySelector("buttonTwo");
var thirdButton = document.querySelector("#buttonThree");
var fourthButton = document.querySelector("#buttonFour");
//write if statement for responses

}
//Write function to check for correct answer
function checkAnswerOne (){
    responses.addEventListener("click", function(event){
        console.log(event.target.textContent)
        if (event.target.textContent === questions[0].answer){
            secondary.textContent = "Correct Answer!";
            score = score + 10;
        } else if ((event.target.textContent) !== (questions[0].answer)){
            secondary.textContent = "Incorrect Answer!";
            score = score - 10;
            secondsLeft = secondsLeft - 10;
        }
        
    })
 }


function populateQuestion2(){
    header.textContent = questions[1].questionText;
    secondary.textContent = " ";
    firstButton.textContent = questions[1].choice1;
    secondButton.textContent = questions[1].choice2;
    thirdButton.textContent = questions[1].choice3;
    fourthButton.textContent = questions[1].choice4;
}

function populateQuestion3(){
    header.textContent = questions[2].questionText;
    secondary.textContent = " ";
    firstButton.textContent = questions[2].choice1;
    secondButton.textContent = questions[2].choice2;
    thirdButton.textContent = questions[2].choice3;
    fourthButton.textContent =  questions[2].choice4;
}

function populateQuestion4(){
    header.textContent = questions[3].questionText;
    secondary.textContent = " ";
    firstButton.textContent = questions[3].choice1;
    secondButton.textContent = questions[3].choice2;
    thirdButton.textContent = questions[3].choice3;
    fourthButton.textContent = questions[3].choice4;
}

//write function to start the quiz
function begin(){
        runTimer();
        populateQuestion1();
}

//Functions that run the quiz
startQuiz.addEventListener("click", begin);
checkAnswerOne();


