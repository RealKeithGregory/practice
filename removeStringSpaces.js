// Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x){
  let remove = x.split(' ')
  let result = remove.join('')
  return result;
}