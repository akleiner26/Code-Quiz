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
var firstPlaceName = document.getElementById("firstPlaceName");
var secondPlaceName = document.getElementById("secondPlaceName");
var thirPlaceName = document.getElementById("thirdPlaceName");
var firstPlaceScore = document.getElementById("firstPlaceScore");
var secondPlaceScore = document.getElementById("secondPlaceScore");
var thirdPlaceScore = document.getElementById("thirdPlaceScore");
var leaderboardButton = document.getElementById("leaderboard");
var retakeButton = document.getElementById("retake");
var scores = [scores];
var userNames = [userNames];



var savedUser = localStorage.getItem("userNames");
var savedScore = localStorage.getItem("scores");
userNames = JSON.parse(savedUser);
scores = JSON.parse(savedScore);
firstPlaceName.textContent = userNames[0];
secondPlaceName.textContent = userNames[1];
thirdPlaceName.textContent = userNames[2];
firstPlaceScore.textContent = scores[0];
secondPlaceScore.textContent = scores[1];
thirdPlaceScore.textContent = scores[2];
