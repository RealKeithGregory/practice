// Write a function to add two arrays
//practice

function arrayPlusArray(arr1, arr2) {
    arr1 = arr1.reduce((a, b) => a + b);
    arr2 = arr2.reduce((a, b) => a + b);
    
    return arr1 + arr2;
  }