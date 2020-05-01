
var p1Button = document.querySelector("#p1Button");
var p2Button = document.querySelector("#p2Button");
var resetButton = document.querySelector("#resetButton");
var p1Display = document.querySelector("#p1display");
var p2Display = document.querySelector("#p2display");
var numInput = document.querySelector("input");
var winScoreDisplay = document.querySelector("#winScoreDisplay");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winScore = 5;

p1Button.addEventListener("click", function(){
    if(!gameOver) {
        p1Score++;
        if(p1Score === winScore) {
            p1Display.classList.add("winner");
            gameOver = true;
        }
    p1Display.textContent=p1Score;
    }
});

p2Button.addEventListener("click", function(){
    if(!gameOver) {
        p2Score++;
        if(p2Score === winScore) {
            p2Display.classList.add("winner");
            gameOver = true;
        }
        p2Display.textContent=p2Score;
    }

    
});

resetButton.addEventListener("click", function(){
    reset();
});

function reset() {
    p1Score = 0;
    p2Score = 0;
    gameOver=false;
    p1Display.textContent=p1Score;
    p2Display.textContent=p2Score;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
}

numInput.addEventListener("change", function() {
    winScore = Number(numInput.value);
    winScoreDisplay.textContent = winScore;
    reset();
});
