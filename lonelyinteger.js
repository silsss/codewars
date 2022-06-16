function lonelyinteger(a) {
    // Write your code here
    let sorted = a.sort((a,b) => a-b)
    let unique = []
    
    for(let i = 0; i <= a.length; i++) {
        if(sorted[i] !== sorted[i+1] && sorted[i] !== sorted[i-1]) {
            unique.push(sorted[i]);
        }
    }
    return unique;
}