

    var buttonColours = ["red", "blue", "green", "yellow"];


    var userPettern = [];
    var gamePattern = [];
    var level = 0;
    var started = false;


$(document).keypress(function() {
  if(!started){

    $("#level-title").text("level "+level);
    nextSequence();

     started = true;

  }
});

    $(".btn").click(function() {
      var userChosenColour = $(this).attr("id");


      userPettern.push(userChosenColour);
      console.log("User Pettern = "+userPettern);
      clickSound(userChosenColour);
      animatePress(userChosenColour);
      checkAnswer(userPettern.length-1);
    });

     function nextSequence(){

       userPettern = [];
       level++;
       $("#level-title").text("level "+level);
       var randomNumber = Math.floor(Math.random() * 4);

      var randomChosenColour = buttonColours[randomNumber];
       playSound(randomNumber);

       gamePattern.push(randomChosenColour);
      console.log("Game Pattern = "+gamePattern);
       $("#" + randomChosenColour).animate({
         opacity: 0.25
       }, 1000, playSound);

       $("#" + randomChosenColour).animate({
         opacity: 1

       });

     }

  function checkAnswer(currentLevel){
    console.log("Current Level = " +currentLevel);
    if(gamePattern[currentLevel] === userPettern[currentLevel]){


     if(userPettern.length === gamePattern.length){
      setTimeout(function () {
        nextSequence();
      }, 1000);
     }
    } else{
      var wrong = new Audio("sounds/wrong.mp3");
      wrong.play();
      $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);
      $("#level-title").text("Game over, press any key to restart");
      startOver();
    }
  }

function startOver(){
  gamePattern = [];
  started = false;
  level = 0;
}


    function animatePress(currentColour) {
      $("#" + currentColour).addClass("pressed");
      setTimeout(function() {
        $("#" + currentColour).removeClass("pressed");
      }, 100);

    }

    function playSound(randomNumber) {
      if (randomNumber === 0) {
        var red = new Audio("sounds/red.mp3");
        red.play();
      } else if (randomNumber === 1) {
        var blue = new Audio("sounds/blue.mp3");
        blue.play();
      } else if (randomNumber === 2) {
        var green = new Audio("sounds/green.mp3");
        green.play();
      } else if (randomNumber === 3) {
        var yellow = new Audio("sounds/yellow.mp3");
        yellow.play();
      }
    }

    function clickSound(userChosenColour) {
      switch (userChosenColour) {
        case "red":
          var red = new Audio("sounds/red.mp3");
          red.play();
          break;
        case "blue":
          var blue = new Audio("sounds/blue.mp3");
          blue.play();
          break;
        case "green":
          var green = new Audio("sounds/green.mp3");
          green.play();
          break;
        case "yellow":
          var yellow = new Audio("sounds/yellow.mp3");
          yellow.play();
        default:

      }
    }
