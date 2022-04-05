//game pattern
var userClickedPattern = [];

var gamePattern = [];

//array of sequence
var buttonColors = ["red", "blue", "green", "yellow"];

// next sequence function
function nextSequence(){
  var randomNumber = Math.floor(Math.random() * 4) + 0;
  var randomChosenColour = buttonColors[randomNumber];
  //add color to pattern
  gamePattern.push(randomChosenColour);
  var nextAudio = new Audio('sounds/'+randomChosenColour+".mp3");
  nextAudio.play();

  //Jquery event listener and flash

  var s = $("div."+randomChosenColour);

  s.stop().fadeOut(200).fadeIn(200);

  $("div.btn").on( "click", this.id , function() {
    var userChosenColour  = this.id;
    playSound(userChosenColour);
    animatePress(userChosenColour);
    console.log()
    userClickedPattern.push(userChosenColour);
  });
}
nextSequence();

//play pressed sound function
function playSound(name){
  var playAudio = new Audio('sounds/'+name+".mp3");
  playAudio.play();
}

function animatePress(currentColour){
  this.css({'box-shadow': '10px 10px 5px #888'
,
  'background-color' : 'grey',
});
}