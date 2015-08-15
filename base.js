console.log("Sanity Check: JS is working!");

//Function triggers a move when keyboard button is pressed
var counter = 0;
$(document).keypress(function(action){

//Triggers playerOne to move when "1" is pressed
	if (action.which == 49) {
		var playerOne = $("#playerOne");
		$("#playerOne").remove();
		var $newBlock = $(".block").eq(counter + 1);
		$newBlock.append(playerOne);
		counter = (counter + 1)

//Triggers playerTwo to move when "0" is pressed		
	} else if (action.which == 48) {
		var playerTwo = $("#playerTwo");
		$("#playerTwo").remove();
		var $newBlock2 = $(".block2").eq(counter + 1);
		$newBlock2.append(playerTwo);
		counter = (counter + 1)
	}
	
})
