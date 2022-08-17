// DESCRIPTION:

// An anagram is the result of rearranging the letters of a word to produce a new word.

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples

// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"


// write the function isAnagram
var isAnagram = function(test, original) {
  
    let testF = test.toLowerCase().split('')
    let originalF = original.toLowerCase().split('')
    
    testF = testF.sort().join()
    originalF = originalF.sort().join()
    
    if(testF === originalF){
      return true
  }else{
    return false
  }
    
  };