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
  let tailOfString1 = "";
  let tailOfString2 = "";

  str1Iterator = str1[Symbol.iterator]();
  str2Iterator = str2[Symbol.iterator]();

  while( !str1Iterator.done && !str2Iterator.done && match){
    let char1 = str1Iterator.next().value;
    let char2 = str2Iterator.next().value;
    // console.log("char1", char1);
    // console.log("char2", char2);

    if(char1 !== char2){
      match = false;
      if(!str1Iterator.done){
        tailOfString1 = char1;
      }
      if(!str2Iterator.done){
        tailOfString2 = char2;
      }
    } else {
      matchingStr = matchingStr.concat(char1);
    }
  }


  let tail1 = str1Iterator.next().value;
  let tail2 = str2Iterator.next().value;
  
  while (tail1 || tail2){
    if(!str1Iterator.done && tail1){
      tailOfString1 = tailOfString1.concat(tail1);
    }
    if(!str2Iterator.done && tail2){
      tailOfString2 = tailOfString2.concat(tail2);
    }
    tail1 = str1Iterator.next().value;
    tail2 = str2Iterator.next().value;
  }

  return {
    isMatch: false,
    stringMatch: matchingStr,
    unmatchedFirst: tailOfString1 || "",
    unmatchedSecond: tailOfString2 || ""
  };
}

function isMatchingPhrase(checkMe, correct){
  return checkMe === correct;
}

console.log(compareStrings("sand", "sandbox"));

module.exports.compareStrings = compareStrings;
module.exports.isMatchingPhrase = isMatchingPhrase;