// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.


//return the total number of smiling faces in the array
function countSmileys(arr) {
    //keep track of smiley count
    let smileysCount = 0;
    
    //iterate over array
    for(let i=0; i <arr.length; i++){
    const smiley = arr[i];
        //iterate over smiley and if length is 2 or 3
        if(smiley.length == 2 || smiley.length == 3){
        //check first symbol
        if(smiley[0] == ':' || smiley[0] ==';'){
          //check second symbol
        if (smiley[1] == '-' || smiley[1] == '~'){
            // check third symbol
            if(smiley[2] == ')' ||smiley[2] == 'D'){
                smileysCount++
            }
              //check if length is less than 3 and the sympol
            } else if(smiley[1] == ')'|| smiley[1] == 'D' && smiley.length == 2){
                smileysCount ++
            }
        }
        }
    }
return smileysCount
}



//
// function countSmileys(arr) {
//     return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
// }