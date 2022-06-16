function DNAStrand(dna){
    let dnaKeys= {
      "A": "T",
      'T': "A",
      'G': 'C',
      "C":"G"
    }
    
    let compDNA = '';
    
    for(let i=0; i<dna.length; i++){
      compDNA += dnaKeys[dna[i]];
    }
    
    return compDNA
};


// function DNAStrand(dna){
//     //your code here
//     var result= "";
//         for(var i =0; i<dna.length; i++) 
//         {
//           if (dna[i]==="A") 
//          {
//           result +="T";
//          }
//           else if (dna[i]==="T") 
//          {
//           result += "A";
//           }
//           else if (dna[i]==="C")
//           {
//           result +="G";
//           }
//           else if (dna[i]==="G")
//           {
//           result += "C";
//           }
//           else {
//           result +=dna[i];
//           }
//        }
//        return result;
//     }