//random numbers (1-6) for 2 dice
var player1Roll = Math.floor((Math.random() * 6) + 1);
var player2Roll = Math.floor((Math.random() * 6) + 1);

//get random dice image and set image src; need to use querySelectorAll() since multiple img tags
document.querySelectorAll(".dice > img")[0].setAttribute("src","./images/dice" + player1Roll + ".png");
document.querySelectorAll(".dice > img")[1].setAttribute("src","./images/dice" + player2Roll + ".png");

//set h1 text based on dice roll
if (player1Roll === player2Roll) {
    document.querySelector("h1").innerHTML = "Draw!";
} else if (player1Roll > player2Roll) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
} else if (player1Roll < player2Roll) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
}
else {
    alert("Uncaught dice roll exception");
}


