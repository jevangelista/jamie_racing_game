console.log("Sanity Check: JS is working!");

//Initializes counter for playerOne and playerTwo
var counterPlayerOne = 0;
var counterPlayerTwo = 0; 

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
	
})
