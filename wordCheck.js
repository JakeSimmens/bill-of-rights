function compareStrings(checkMe, correct){
  checkMe = checkMe.trim();
  correct = correct.trim();
  if(isMatchingPhrase(checkMe, correct)){
    return {
      isMatch: true,
      stringMatch: checkMe,
      unmatchedFirst: "",
      unmatchedSecond: ""
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


module.exports.compareStrings = compareStrings;
module.exports.isMatchingPhrase = isMatchingPhrase;