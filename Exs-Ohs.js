function XO(str) {
    let x = 0;
    let o = 0;
    
    for(let i=0; i<str.length; i++){
      let letter = str[i]
      if (letter === 'x' ||letter === "X"){
        x++
      } else if(letter === 'o' || letter ==="O"){
        o++
      }
    }
    
    if( x == o){
      return true
    } else if(x > o){
      return false
    } else if(o > x){
      return false
    }else {
      return true
    }
  }



//   function XO(str) {
//     let x = str.match(/x/gi);
//     let o = str.match(/o/gi);
//     return (x && x.length) === (o && o.length);
//   }