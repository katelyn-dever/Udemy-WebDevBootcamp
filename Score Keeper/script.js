
var p1Button = document.querySelector("#p1Button");
var p2Button = document.querySelector("#p2Button");
var resetButton = document.querySelector("#resetButton");
var p1Display = document.querySelector("#p1display");
var p2Display = document.querySelector("#p2display");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winScore = 5;

p1Button.addEventListener("click", function(){
    p1Score++;
    p1Display.textContent=p1Score;
});

p2Button.addEventListener("click", function(){
    p2Score++;
    p2Display.textContent=p2Score;
});

resetButton.addEventListener("click", function(){
    p1Score = 0;
    p2Score = 0;
    gameOver=false;
    p1Display.textContent=p1Score;
    p2Display.textContent=p2Score;
});