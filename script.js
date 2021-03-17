var randomNumber = Math.floor(Math.random() * 20 + 1);
console.log(randomNumber)
var gameScore = 0;
var x, text;
var numCorrect = 0;
var highScore = 0;
function myFunction() {
x = document.getElementById("numb").value;
if (x<1 || x>20){
    text = "Whoops looks like you messed up, please select a number between 1 and 20"
    document.getElementById("response").innerHTML = text;

}else if(x == randomNumber){
    text = "Wow congratulations!!!! you guessed right"
    document.getElementById("response").innerHTML = text;
    document.getElementById("yourGuess").innerHTML = "Your choice "+ x;
    gameScore = gameScore + 5;
    document.getElementById("score").innerHTML = "Your Score: " + gameScore
    numCorrect = numCorrect + 1;
    document.getElementById("correct").innerHTML = "How many you have gotten correct: " + numCorrect
    randomNumber = Math.floor(Math.random() * 20 + 1);
    console.log(randomNumber)

}else{
    text = "You are INCORRECT, Please try again Choose another number between 1 and 20"
    document.getElementById("response").innerHTML = text;
    
    document.getElementById("yourGuess").innerHTML = "You chose "+ x;

    gameScore = gameScore - 2;
   
    document.getElementById("score").innerHTML = "Your Score: " + gameScore
}
document.getElementById("NumGuessed").innerHTML = "Number you guessed: "+ x

}
function reset(){

    if(numCorrect >=1 ){

        if(gameScore > highScore){

            highScore = gameScore;

        }
   gameScore = 0;
   text = "";
   numCorrect = 0;
 
}

}
document.getElementById("correct").innerHTML = "Times you've guessed correctly: " + numCorrect
document.getElementById("score").innerHTML = "Your Score: " + gameScore
document.getElementById("highScore").innerHTML = "Your high score: " + highScore