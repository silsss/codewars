// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:

// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321


// function descendingOrder(n){
//     let arr = String(n).split("")
//     let sortedReversed = arr.sort((a,b) => a-b).reverse()
//     let str = sortedReversed.join('');
    
//     return parseInt(str)
//   }

function descendingOrder(n){
  //first make it to string, then to array, then sort them, then reverse them, then join to make string again
    let str = String(n).split("").sort((a,b) => a-b).reverse().join('');
    //return as number
    return parseInt(str)
  }