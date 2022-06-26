
function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
    
    const num1 = target - array[i];
    //loop through the rest of the array 
    for (let j = i + 1; j < array.length; j++) {

      //Check if total matches target
      if (array[j] === num1) {
        return true
      } 

    }
  } 
  return false
}

console.log(hasTargetSum([3,8,12,4,11,7],10));
console.log(hasTargetSum([22, 19, 4, 6, 30], 25));
console.log( hasTargetSum([1, 2, 5], 4));

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 4));
  console.log("");


  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-8 ,6, 7, 5, 20], 25));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([6, 10, 5, 6, 30], 11));

  console.log("");
}

module.exports = hasTargetSum;