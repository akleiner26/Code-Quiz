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
