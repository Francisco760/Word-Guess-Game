var word = [
  "hawkeye",
  "thor",
  "captain america",
  "blackwidow",
  "hulk",
  "iron man"
  ];
//Choose word randomly
var randomWord = Math.floor(Math.random() * word.length);
var choosenWord = word[randomWord];
var rightWord = [];
var wrongWord = [];
var underScore = [];

//DOM manipulation
var docUnderScore = document.getElementsByClassName("underScore");
var docRightGuess = document.getElementsByClassName("rightGuess"); 
var docWrongGuess = document.getElementsByClassName("wrongGuess");
//Main
//=================================

//Create underscores based on length of word
var generateUnderscore = () => {
  for ( i = 0; i < choosenWord.length; i++) {
    underScore.push("_");
    
  }
  return underScore;
}

//get users guess
document.addEventListener("keypress", (event) => {
  var keyword = String.fromCharCode(event.keyCode);
//if users guess is right
  if(choosenWord.indexOf(keyword) > -1) {
//add to right words array
    rightWord.push(keyword);
//replace underscore with right letter
    underScore[choosenWord.indexOf(keyword)] = keyword;
    docUnderScore[0].innerHTML = underScore.join(" ");
    docRightGuess[0].innerHTML = rightWord;
//check to see if user word matches guesses
    if (underScore.join(" ") == choosenWord) {
        alert("You Win");
    }
  }
    else {
      wrongWord.push(keyword);
      docWrongGuess[0].innerHTML = wrongWord;
    }
  });

    docUnderScore[0].innerHTML = generateUnderscore().join(" ");
