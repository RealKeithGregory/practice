// Write a function that returns both the minimum and maximum number of the given list/array

function minMax(arr){
    arr = arr.sort((a,b) => a-b)
    arr = [arr[0],arr[arr.length - 1]]
    return arr; 
  }