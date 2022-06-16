// In this Kata, you will sort elements in an array by decreasing frequency of elements. If two elements have the same frequency, sort them by increasing value.

function solve(arr){
    //make empty object to store in
    const frequency = {};
    
    //this will for each element in the array either add a new key and value of 1 or add 1 to exciting key if it already excists
    arr.forEach((element) => {
      frequency[element] = frequency[element]+ 1 || 1
      });
    //spreading the array not to change it and then sorting based on if the elements have the same frequency. if frequency[b] - frequency[a] returns a falsy value then it'll be sorted a-b(assending order)
    return [...arr].sort((a,b) => frequency[b] - frequency[a] || a - b)
    }


    // function solve(arr){
    //     var r={}
    //     for(var n of arr) r[n]=r[n]+1||1
    //     return arr.slice().sort((a,b)=>r[b]-r[a]||a-b)