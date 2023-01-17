
// Start Game
gameStart = false;
$(document).on('keypress',function () {

    if (gameStart === false) {
        gameStart = true;

        gamePattern = [];
        userClickedPattern = [];
        level = 0;
        nextSequence()
    } else {
        console.log(gameStart)
    }
    
})

// User clicking
let userClickedPattern = [];
$(".btn").click(function () {

    let userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour)

    $(this).addClass("pressed");
    let elem = $(this); 
    setTimeout(function () {
    elem.removeClass("pressed");
    }, 100);

    checkAnswer(level)
 
})

// Game pattern and generator
let gamePattern = [];

let buttonColors = ["red","blue","green","yellow"];

function nextSequence() {
    let randNum = Math.floor(Math.random() * 4);

    let randomChosenColour = buttonColors[randNum];
    gamePattern.push(randomChosenColour);
    
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour)

    $("h1").text("Level "+ gamePattern.length)
    
}


// PLay sounds
function playSound(color) {
    let audio = new Audio("sounds/" + color + ".mp3");
    audio.play()
}

// Check answers and levels
let level = 0;
function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel] && gamePattern.length === currentLevel + 1) {

        console.log(gamePattern)
        console.log(userClickedPattern)
        level = 0;
        userClickedPattern = [];
        nextSequence()
    } else if (gamePattern[currentLevel] === userClickedPattern[currentLevel] && gamePattern.length !== currentLevel + 1) {
        console.log("Right Answer")
        level = level + 1;
        
    } else {
        $("h1").text("Game Over at Level: "+ gamePattern.length)
        
        if (gameStart === true) {
        gameStart = false;
        $("body").addClass("game-over" ,setTimeout(function () {
        $("body").removeClass("game-over");
        }, 300));
        
        } else {
            $("h1").text("Press Any Key to Reset "+ gamePattern.length)
        }
    
    }
    
}





























// $('.btn').click(function () {
//     $(this).addClass("pressed");
//     var audio = new Audio("sounds/.mp3");
//     audio.play();
//     var elem = $(this); 
//     setTimeout(function () {
//       elem.removeClass("pressed");
//     }, 100);
//   });

/////////////////////////////////////////////////////////////