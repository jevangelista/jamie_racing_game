console.log("Sanity Check: JS is working!");

//Initializes counter for playerOne and playerTwo
var counterPlayerOne = 0;
var counterPlayerTwo = 0;
var playerOneWins = 0;
var playerTwoWins = 0;


//Function triggers a move when keyboard button is pressed
$(document).keypress(function(action){

//Triggers playerOne to move when "1" is pressed
	if (action.which == 49) {
		var playerOne = $("#playerOne");
		$("#playerOne").remove();
		var $newBlock = $(".block").eq(counterPlayerOne + 1);
		$newBlock.append(playerOne);
		counterPlayerOne = (counterPlayerOne + 1);

//Triggers playerTwo to move when "0" is pressed		
	} else if (action.which == 48) {
		var playerTwo = $("#playerTwo");
		$("#playerTwo").remove();
		var $newBlock2 = $(".block2").eq(counterPlayerTwo + 1);
		$newBlock2.append(playerTwo);
		counterPlayerTwo = (counterPlayerTwo + 1)
	}

//Will keep track of wins and say who won the round
	if (counterPlayerOne == 9) {
		playerOneWins += 1;
		$('h2').append(" " + "Player One wins!" + " Score: " + playerOneWins);
		alert("You go Player One!");

	} else if (counterPlayerTwo == 9) {
		playerTwoWins += 1;
		$('h2').append(" " + "Player Two wins!" + " Score: " + playerOneWins);
		alert("You go Player Two!");
	}


	
})

/**
console.log("Sanity Check: JS is working!");

$(document).ready(function(){

$("span").on("click", function handleClick(event){
   var text = $(this).text();
   console.log(text);
   $('ul').append("<li>" + text + "</li>");
   
});

})
*/