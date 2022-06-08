// Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Ugly Code

function disemvowel(str) { 
    return str.replace(/a/g, '').replace(/e/g,'').replace(/i/g,'').replace(/o/g,'').replace(/u/g,'').replace(/O/g,'').replace(/A/g,'').replace(/E/g,'').replace(/I/g,'').replace(/U/g,'')
    }

// Best Practice

function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
  }