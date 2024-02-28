//variable declaration
var buttonColors;             //stores possible colors
var randomChosenColor;        //stores random game color chosen
var gamePattern = [];         //store random sequence of colors chosen by game for pattern matching
var userClickedPattern = [];  //store user chosen colors
var gameStarted;              //track wether game has started by user pressing button
var level;                    //game level

//variable initialization
buttonColors = ["red","blue","green","yellow"];
gameStarted = 0;
level = 0;

//function to generate random number between 0 & 3 inclusive & adds corresponding color to array
function nextSequence() {
    let randomNumber =  Math.floor(Math.random()*4);
    randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    //console.log(userClickedPattern);

    //iterate level
    level++;
    $("h1").text("Level " + level);

    //animate & sound
    $("#" + randomChosenColor).animate({opacity: 0.2},100);
    playSound(randomChosenColor);
    $("#" + randomChosenColor).animate({opacity: 1},80);

    //reset user pattern
    userClickedPattern = [];
};

//add event listener to all buttons - btn class 
$(".btn").click(function () {
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    //console.log(userClickedPattern);

    playSound(userChosenColor);
    animatePress(userChosenColor);

    checkAnswer((userClickedPattern.length - 1));
});

//animates user button press
function animatePress(currenColor) {
    $("#" + currenColor).addClass("pressed");
    setTimeout(function () {
        $("#" + currenColor).removeClass("pressed");
    },100);

};

//plays sound from corresponding color/file name
function playSound(fileName) {
    let mp3File = "sounds/" + fileName + ".mp3";
    var audio = new Audio(mp3File);
    audio.play();
};

//checks users answer to game sequence generated
function checkAnswer(currentAnswerIndex) {
    if((gamePattern[currentAnswerIndex] == userClickedPattern[currentAnswerIndex])
    && ((currentAnswerIndex + 1 ) == gamePattern.length)) {
        setTimeout(function() {
            nextSequence();
        },1000);
    } else if (gamePattern[currentAnswerIndex] != userClickedPattern[currentAnswerIndex]){
        resetGame();
    };
};

//display wrong message and preps game for restart
function resetGame() {
    $("h1").text("Game Over, Press Any Key to Restart");
    $("body").addClass("game-over");
    playSound("wrong"); 
    setTimeout(function() {
        $("body").removeClass("game-over");
    },300);    
    
    gamePattern = [];
    userClickedPattern = [];
    level = 0;
    gameStarted = 0;
};

//add event listener for any key press
$(document).keydown(function () {
    gameStarted++;
    if (gameStarted == 1 ) {
        nextSequence();
    }
});


