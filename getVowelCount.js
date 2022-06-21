//count the number of vowels in a string


function getCount(str) {
    var vowelsCount = 0;
    //save all the vowels in an array
    var vowels = ["a","e","i","o","u"];

    //go through each letter
    for(var i = 0;i < str.length;i++){
        //go through each vowel in the array
      for(var j=0;j<vowels.length;j++){
        // cross reference the letters with the vowels
        if(str[i] === vowels[j]){
            // if there is a match then increase the account by one
          vowelsCount++;
        }
      }
    }
    
    return vowelsCount;
  }