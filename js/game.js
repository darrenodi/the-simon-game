//game pattern
var started = false;

$(document).keypress(function(){
  if(!started){
    started = true;
    $("#level-title2").html("Level " +level);
    nextSequence();
  }
  
});

var level = 0;

var userClickedPattern = [];

var gamePattern = [];

//array of sequence
var buttonColors = ["red", "blue", "green", "yellow"];

// next sequence function
function nextSequence(){
  userClickedPattern = [];
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColors[randomNumber];
  //add color to pattern
  gamePattern.push(randomChosenColour);

  //Jquery event listener and flash

  var s = $("div."+randomChosenColour);

  var nextAudio = new Audio('sounds/'+randomChosenColour+".mp3");
  nextAudio.play();

  s.stop().fadeOut(200).fadeIn(200);
  level += 1;
  $("#level-title2").html("Level " +level);
}

$("div.btn").on( "click", this.id , function() {
  var userChosenColour  = this.id;
  playSound(userChosenColour);
  animatePress(this);
  // animatePress(userChosenColour);
  console.log()
  userClickedPattern.push(userChosenColour);
  checkAnswer(userClickedPattern.length-1);
});

//play pressed sound function
function playSound(name){
  var playAudio = new Audio('sounds/'+name+".mp3");
  playAudio.play();
}

function animatePress(currentColour){
  $(currentColour).addClass("pressed");
  setTimeout(function() {
    $(currentColour).removeClass('pressed');
}, 100);
};

function checkAnswer(currentLevel){
  // console.log(gamePattern[currentLevel] ,userClickedPattern[currentLevel])
  if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
    // console.log('success');
    if (userClickedPattern.length === gamePattern.length){

      setTimeout(function () {
          nextSequence();
        }, 1000);

      }
  }
  else{
    playSound('wrong');
    $('body').addClass("game-over");
  setTimeout(function() {
    $('body').removeClass('game-over');
}, 200);
  $("#level-title2").html("Game Over, Press Any Key to Restart");
  startOver();
    // console.log('wrong');
  }
}

function startOver(){
  started = false;
  gamePattern = [];
  level = 0;
}
