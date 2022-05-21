// You receive an array with your peers' test scores. Now calculate the average and compare your score!
// Return True if you're better, else False!
// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!


function betterThanAverage(classPoints, yourPoints) {
    let allPoints = classPoints.reduce((a,b) => a+b ) + yourPoints
    let classAvg = allPoints / classPoints.length
    if(yourPoints >= classAvg){
      return true
    }else{
      return false
    }
  }
  
  