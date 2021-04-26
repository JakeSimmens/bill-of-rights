function compareStrings(str1, str2){
  str1 = str1.trim();
  str2 = str2.trim();
  if(isMatchingPhrase(str1, str2)){
    return {
      isMatch: true,
      stringMatch: str1
    };
  }

  let match = true;
  let matchingStr = "";
  str1Iterator = str1[Symbol.iterator]();
  str2Iterator = str2[Symbol.iterator]();

  while( !str1Iterator.done && !str2Iterator.done && match){
    let char1 = str1Iterator.next().value;
    let char2 = str2Iterator.next().value;

    if(char1 !== char2){
      match = false;
    } else {
      matchingStr = matchingStr.concat(char1);
    }

  }
  return {
    isMatch: false,
    stringMatch: matchingStr
  };
}

function isMatchingPhrase(checkMe, correct){
  return checkMe === correct;
}

module.exports.compareStrings = compareStrings;
module.exports.isMatchingPhrase = isMatchingPhrase;