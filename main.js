//variables for page routing
var header = document.querySelector("#header");
var secondary = document.querySelector("#secondary");
var responses = document.querySelector("#responses");
var buttons = document.querySelector("button")
var startQuiz = document.querySelector("#starter");
var timeLeft = document.querySelector("#counter");
var firstButton = document.getElementById("buttonOne");
var secondButton = document.getElementById("buttonTwo");
var thirdButton = document.getElementById("buttonThree");
var fourthButton = document.getElementById("buttonFour");
var scoreHead = document.getElementById("scoreHead");
var questionIndex = 0;

//global variables
var score = 0;
var secondsLeft = 30;

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
        answer: "The <body> section"
    },
    {
        questionText: "How do you write 'Hello World' in an alert box?",
        choice1: "alertBox('Hello World');",
        choice2: "msgBox(Hello World');",
        choice3: "alert('Hello World');",
        choice4: "msg('Hello World');",
        answer: "alert('Hello World');"
    },
    {
        questionText: "How do you create a function in JavaScript?",
        choice1: "function:myFunction()",
        choice2: "function myFunction()",
        choice3: "function-myFunction()",
        choice4: "function = myFunction()",
        answer: "function myFunction()"
    },
    {
        questionText: "How do you call a function?",
        choice1: "call myFunction()",
        choice2: "myFunction(call)",
        choice3: "call function myFunction()",
        choice4: "myFunction()",
        answer: "myFunction()"
    }
];

//write function for timer


function runTimer() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeLeft.textContent = secondsLeft;

        if (secondsLeft <= 0) {
            timeLeft.textContent = "0"
            clearInterval(timerInterval);
            header.textContent = "Time is Up!";
            secondary.textContent = "Your score is " + score;
            firstButton.style.display = "block";
            firstButton.textContent = "View Leaderboard";
            responses.setAttribute("type", "button")
            secondButton.style.display = "block";
            secondButton.textContent = "Retake Quiz";
            secondButton.setAttribute = ("href", "https://akleiner26.github.io/Code-Quiz/");
            thirdButton.style.display = "none";
            fourthButton.style.display = "none";
            scoreHead.style.display = "none";
        }
    }, 1000);
    return secondsLeft;
}
console.log(secondsLeft)


//write function to populate first question
function populateQuestion1() {
    header.textContent = questions[0].questionText;
    secondary.textContent = " ";
    responses.style.border = "thin solid black"
    buttons.style.display = "none";
    firstButton.style.display = "block";
    secondButton.style.display = "block";
    thirdButton.style.display = "block";
    fourthButton.style.display = "block";
    firstButton.textContent = questions[0].choice1;
    secondButton.textContent = questions[0].choice2;
    thirdButton.textContent = questions[0].choice3;
    fourthButton.textContent = questions[0].choice4;
    document.querySelector("#score").textContent = score
}

//Write function to check for correct answer


var buttonList = document.querySelectorAll(".button");
for (var i = 0; i < buttonList.length; i++) {
  buttonList[i].addEventListener('click', function(event) {
    if (event.target.textContent === questions[questionIndex].answer) {
        secondary.textContent = "Correct Answer!";
        score = score + 10;
    } else {
        secondary.textContent = "Incorrect Answer!";
        score = score - 10;
        secondsLeft = secondsLeft - 10;
    }
    questionIndex++;
    populateQuestion();
    document.querySelector("#score").textContent = score
})
}

function endPage(){
    timeLeft.textContent = "0"
            clearInterval(timerInterval);
            header.textContent = "Time is Up!";
            secondary.textContent = "Your score is " + score;
            firstButton.style.display = "block";
            firstButton.textContent = "View Leaderboard";
            responses.setAttribute("type", "button")
            secondButton.style.display = "none";
            thirdButton.style.display = "none";
            fourthButton.style.display = "none";
            scoreHead.style.display = "none";
}







function populateQuestion() {
    header.textContent = questions[questionIndex].questionText;
    secondary.textContent = " ";
    firstButton.textContent = questions[questionIndex].choice1;
    secondButton.textContent = questions[questionIndex].choice2;
    thirdButton.textContent = questions[questionIndex].choice3;
    fourthButton.textContent = questions[questionIndex].choice4;

}


//write function to start the quiz
function begin() {
    runTimer();
    populateQuestion1();
    endPage();
}

//Functions that run the quiz
startQuiz.addEventListener("click", begin);

