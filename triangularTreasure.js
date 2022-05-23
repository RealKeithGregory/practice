// Return the nth triangular number

function triangular( n ) {
    if(n>0){
      let result = n*(n+1)/2
      return result
  }else{
    return 0
  }
  }