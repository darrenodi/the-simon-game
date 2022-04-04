//game pattern
var userClickedPattern = [];

var gamePattern = [];

//array of sequence
var buttonColors = ["red", "blue", "green", "yellow"];

// next sequence function
function nextSequence(){
  var randomNumber = Math.floor(Math.random() * 4) + 0;
  return randomNumber;
}

//chosen color
var randomChosenColour = buttonColors[nextSequence()];

//add color to pattern
gamePattern.push(randomChosenColour);

//Jquery event listener and flash
var s = $("div."+randomChosenColour);

s.stop().fadeOut(200).fadeIn(200);

$("div.btn").on( "click", this.id , function() {
  var userChosenColour  = this.id;
  userClickedPattern.push(userChosenColour);
});
