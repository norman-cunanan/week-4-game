$(document).ready(function() {

//Global Variables for the game
var wins = 0;
var losses = 0;

var randomChosenNumber = null;

var randomGem1 = null;
var randomGem2 = null;
var randomGem3 = null;
var randomGem4 = null;

var totalScore = null;

function startGame() {

	//random values chosen
	randomChosenNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
	randomGem1 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
	randomGem2 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
	randomGem3 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
	randomGem4 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
	
	//Does it work?
	console.log("Computer: " + randomChosenNumber);
	console.log("Gem 1: " + randomGem1);
	console.log("Gem 2: " + randomGem2);
	console.log("Gam 3: " + randomGem3);
	console.log("Gem 4: " + randomGem4);

	//reset score to 0
	totalScore = 0;
}

function checkWin() {
	if (totalScore === randomChosenNumber) {
		//add a win
		wins++;

		//Does it work?
		console.log("Winner! wins = " + wins);

		//reset game
		startGame();
		addHtml();

	}
}

function checkLose() {
	if (totalScore > randomChosenNumber) {
		//add a loss
		losses++;

		//Does it work?
		console.log("Loser! losses = " + losses)

		//reset game
		startGame();
		addHtml();
	}
}


function addHtml() {
	//call on classes, to add to page
	$("#randomNumber").html(randomChosenNumber);
	$("#winTotal").html("Wins: " + wins);
	$("#loseTotal").html("Losses: " + losses);
	$("#playerScore").html("Your Total score is: " + totalScore);
}

function addPlayerScore() {
	//shows player's ongoing score on page
	$("#playerScore").html("Your Total score is: " + totalScore);
}

//starts the Game
startGame();
addHtml();

//value of gem is added to the total score
$(".gem1").on("click", function(){
	var gemValue = $(".gem1").attr("value");
	
	console.log(gemValue);

	if (gemValue === "gem1Value") {
		totalScore += randomGem1;
		console.log(totalScore);
		
		addPlayerScore();
		checkWin();
		checkLose();
	}
	
});

$(".gem2").on("click", function(){
	var gemValue = $(".gem2").attr("value");

	console.log(gemValue);

	if (gemValue === "gem2Value") {
		totalScore += randomGem2;
		console.log(totalScore);
		
		addPlayerScore();
		checkWin();
		checkLose();
	}

});

$(".gem3").on("click", function(){
	var gemValue = $(".gem3").attr("value");
	
	console.log(gemValue);
	
	if (gemValue === "gem3Value") {
		totalScore += randomGem3;
		
		console.log(totalScore);
		
		addPlayerScore();
		checkWin();
		checkLose();
	}
});

$(".gem4").on("click", function(){
	var gemValue = $(".gem4").attr("value");
	
	console.log(gemValue);
	
	if (gemValue === "gem4Value") {
		totalScore += randomGem4;
		console.log(totalScore);
		
		addPlayerScore();
		checkWin();
		checkLose();
	}
});

//Does it work? (Scope)
console.log(randomGem4);
console.log(totalScore);






});
