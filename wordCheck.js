function compareStrings(checkMe, correct){
  checkMe = checkMe.trim();
  correct = correct.trim();
  if(isMatchingPhrase(checkMe, correct)){
    return {
      isMatch: true,
      stringMatch: checkMe
    };
  }

  let match = true;
  let matchingStr = "";
  let tailCheckMe = "";
  let tailCorrect = "";

  checkMeIterator = checkMe[Symbol.iterator]();
  correctIterator = correct[Symbol.iterator]();

  while( !checkMeIterator.done && !correctIterator.done && match){
    let checkChar = checkMeIterator.next().value;
    let corrChar = correctIterator.next().value;

    if(checkChar !== corrChar){
      match = false;
      if(!checkMeIterator.done){
        tailCheckMe = checkChar;
      }
      if(!correctIterator.done){
        tailCorrect = corrChar;
      }
    } else {
      matchingStr = matchingStr.concat(checkChar);
    }
  }


  let checkChar = checkMeIterator.next().value;
  let corrChar = correctIterator.next().value;
  
  while (checkChar || corrChar){
    if(!checkMeIterator.done && checkChar){
      tailCheckMe = tailCheckMe.concat(checkChar);
    }
    if(!correctIterator.done && corrChar){
      tailCorrect = tailCorrect.concat(corrChar);
    }
    checkChar = checkMeIterator.next().value;
    corrChar = correctIterator.next().value;
  }

  return {
    isMatch: false,
    stringMatch: matchingStr,
    unmatchedFirst: tailCheckMe || "",
    unmatchedSecond: tailCorrect || ""
  };
}

function isMatchingPhrase(checkMe, correct){
  return checkMe === correct;
}

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
  if(guessList.length === 0 || correctList.length === 0){
    return [];
  }
  let lastGuessWord = guessList.length-1;
  let lastCorrectWord = correctList.length-1;
  if(guessList[lastGuessWord] === correctList[lastCorrectWord]){
    guessList.pop();
    correctList.pop();
    return compareLastWord(guessList, correctList).concat([1]);
  }
  else if(guessList.length > 1 && guessList[lastGuessWord-1] === correctList[lastCorrectWord]){
    guessList.pop();
    guessList.pop();
    correctList.pop();
    return compareLastWord(guessList, correctList).concat([1,0]);
  } else if(guessList.length > 2 && guessList[lastGuessWord-2] === correctList[lastCorrectWord]){
    guessList.pop();
    guessList.pop();
    guessList.pop();
    correctList.pop();
    return compareLastWord(guessList, correctList).concat([1,0,0]);
  } else if(correctList.length > 1 && guessList[lastGuessWord] === correctList[lastCorrectWord-1]){
    guessList.pop();
    correctList.pop();
    correctList.pop();
    return compareLastWord(guessList, correctList).concat([1]);
  } else if(correctList.length > 2 && guessList[lastGuessWord] === correctList[lastCorrectWord-2]){
    guessList.pop();
    correctList.pop();
    correctList.pop();
    correctList.pop();
    return compareLastWord(guessList, correctList).concat([1]);
  } else {
    guessList.pop();
    correctList.pop();
    return compareLastWord(guessList, correctList).concat([0]);
  }

}

console.log(checkTheString("Bdo Bob cloo", "dan Bob is cool"));
console.log(checkTheString("From here to there it's everywhere", "From there to here it's almost everywhere"));
//console.log(compareStrings("sand", "sandbox"));
//createWordList("Look for a fun time in town.", "Look to see you soon");

module.exports.compareStrings = compareStrings;
module.exports.isMatchingPhrase = isMatchingPhrase;