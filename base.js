//Initializes counter for playerOne and playerTwo
var counterPlayerOne = 0;
var counterPlayerTwo = 0;
var playerOneWins = 0;
var playerTwoWins = 0;


//Function triggers a move when keyboard button is pressed
$(document).keypress(function(move){

//Triggers playerOne to move when "1" is pressed
	if (move.which == 49) {
		var playerOne = $("#playerOne");
		$("#playerOne").remove();
		var $newBlock = $(".block").eq(counterPlayerOne + 1);
		$newBlock.append(playerOne);
		counterPlayerOne = (counterPlayerOne + 1);

//Triggers playerTwo to move when "0" is pressed		
	} else if (move.which == 48) {
		var playerTwo = $("#playerTwo");
		$("#playerTwo").remove();
		var $newBlock2 = $(".block2").eq(counterPlayerTwo + 1);
		$newBlock2.append(playerTwo);
		counterPlayerTwo = (counterPlayerTwo + 1)
	}

//Takes position from previous condition. Once player reaches end of track, this conditional will allow player to win and display who won the round.
	if (counterPlayerOne == 9) {
		playerOneWins += 1;
		$('h2').append("<br/>" + "Player One wins!");
		alert("You go Player One!");

	} else if (counterPlayerTwo == 9) {
		playerTwoWins += 1;
		$('h2').append("<br/>" + "Player Two wins!");
		alert("You go Player Two!");
	}



	
})


// Shows winning time displayed on board
var startTime; // undefined
var endTime; // undefined
var total; // undefined

$(document).ready(function(){

  $(window).on("keypress", function handleKeypress(event){

    if ( startTime ) {
      endTime = Date.now();
      total = (endTime - startTime) / 1000;
      $("#total-time").text( total + " seconds" )
    } else {
      startTime = Date.now();
    }

  })

})