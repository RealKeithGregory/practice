// Given the a list of numbers, return a fixed list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

function pipeFix(numbers){
    var first = numbers[0];
    var last = numbers[numbers.length-1];
    
    var arr = [];
    for(var i = first; i <= last; i++) {
      arr.push(i);
    }
    return arr;
  }