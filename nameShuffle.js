// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"

function nameShuffler(str){
    let result = str.split(' ')
    result = result.reverse()
    result = result.join(' ')
    
    return result
  }