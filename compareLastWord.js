//Code idea using recursion
///////////
function checkTheString(guess, correct){
  let guessList = guess.split(" ");
  let correctList = correct.split(" ");

  //find array location for matches
  let result = compareLastWord(guessList, correctList);
  return result;
}

function compareLastWord(guessList, correctList){
  let result = [];
  if(guessList.length === 0 && correctList.length === 0){
    return [];
  }
  if(guessList.length === 0){
    correctList.pop();
    return [];
  }

  let lastGuessWord = guessList.length-1;
  let lastCorrectWord = correctList.length-1;
  if(guessList[lastGuessWord] === correctList[lastCorrectWord]){
    guessList.pop();
    correctList.pop();
    return compareLastWord(guessList, correctList).concat([1]);
  } 
  
  guessList.pop(); //move to next guess word
  return compareLastWord(guessList, correctList).concat([0]);
  // else if(guessList.length > 1 && guessList[lastGuessWord-1] === correctList[lastCorrectWord]){
  //   guessList.pop();
  //   guessList.pop();
  //   correctList.pop();
  //   return compareLastWord(guessList, correctList).concat([1,0]);
  // } else if(guessList.length > 2 && guessList[lastGuessWord-2] === correctList[lastCorrectWord]){
  //   guessList.pop();
  //   guessList.pop();
  //   guessList.pop();
  //   correctList.pop();
  //   return compareLastWord(guessList, correctList).concat([1,0,0]);
  // } else if(correctList.length > 1 && guessList[lastGuessWord] === correctList[lastCorrectWord-1]){
  //   guessList.pop();
  //   correctList.pop();
  //   correctList.pop();
  //   return compareLastWord(guessList, correctList).concat([1]);
  // } else if(correctList.length > 2 && guessList[lastGuessWord] === correctList[lastCorrectWord-2]){
  //   guessList.pop();
  //   correctList.pop();
  //   correctList.pop();
  //   correctList.pop();
  //   return compareLastWord(guessList, correctList).concat([1]);
  // } else {
  //   guessList.pop();
  //   correctList.pop();
  //   return compareLastWord(guessList, correctList).concat([0]);
  // }

}


console.log(checkTheString("Bdo Bob cloo", "dan Bob is cool"));
console.log(checkTheString("From here to there it's almost everywhere", "From there to here it's almost everywhere"));
console.log(checkTheString("From", "From"));