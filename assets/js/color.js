var numSqr = 6;
var colors = [];
var pickedColor = "";
var clickedColor = "";

var colorDisplay = document.getElementById("colorDisplay"); 
var squares = document.querySelectorAll(".square");
var msgDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButton = document.querySelectorAll(".mode");

init();
function init(){
    for (let i = 0; i < modeButton.length; i++) {
        modeButton[i].addEventListener("click", changeMode);    
    }
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", checkColor);
    }
    resetButton.addEventListener("click",reset);
    reset();
}

function checkColor(){
    clickedColor = this.style.backgroundColor;
    if(clickedColor == pickedColor){
        Bingoo(clickedColor);
    }
    else{
        this.style.backgroundColor = "#232323";
        msgDisplay.textContent = "Try Again!!";
    }
}

function Bingoo(color){
    //On getting correct answer change color of all square and H1
    //to winning color
    msgDisplay.textContent = "Bingoo!!";
    resetButton.textContent = "Play Again?";
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
    h1.style.backgroundColor = color;
}

function pickColor(){
   var temp = Math.floor(Math.random() * colors.length);
   return colors[temp];
}

function generateColors(num){
    //make array
    var temp = [];
    //Assign Colors
    for (let i = 0; i < num; i++) {
        temp.push(randomColor());
    }
    //return that array
    return temp;
}

function randomColor(){ //generates a random color
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    var c = "rgb("+r+", "+g+", "+b+")";
    return c;
}


function changeMode(){
    modeButton[0].classList.remove("selected");
    modeButton[1].classList.remove("selected");
    this.classList.add("selected");
    this.textContent === "Easy"? numSqr = 3: numSqr = 6;
    reset();
}

function reset(){
    //generae new colors;
    colors = generateColors(numSqr);
    //pick a new random color
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    //change colors of square
    for (let i = 0; i < squares.length; i++) {
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        }
        else{
        squares[i].style.display = "none";
        }
    }
    resetButton.textContent = "New Colors";
    h1.style.backgroundColor = "slateblue";
    msgDisplay.textContent = "";
}