//game pattern

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


