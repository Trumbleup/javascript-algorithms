// Basic Algorithm Scripting: Factorialize a Number

function factorialize(num) {
  let factorial = 1
  for (let i = 1 ; i <= num ; i++) {
    factorial = factorial * i
  }
  return factorial;
}

factorialize(5);

// Find the Longest Word in a String
// Return the length of the longest word in the provided sentence.

// Your response should be a number.

function findLongestWordLength(str) {
 
 let stringArray = str.split(" ")
 let sortArray = stringArray.sort((a, b) => {return b.length - a.length})  
 let stringVal = sortArray[0].length;
 return stringVal
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

// Basic Algorithm Scripting: Return Largest Numbers in Arrays

function largestOfFour(arr) {
  let newArr = [];
  for (let i = 0 ; i < arr.length ; i++) {
    let val = arr[i][0]
    for (let j = 0 ; j < arr[i].length ; j++) {
      while (val < arr[i][j]) {
        val = arr[i][j];
      }
    }
    newArr.push(val)
  }
  return newArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// Basic Algorithm Scripting: Confirm the Ending

// Check if a string (first argument, str) ends with the given target string (second argument, target).
function confirmEnding(str, target) {
  let targetEndVal = target.length
  let strEndVal = str.substring(str.length-targetEndVal);
  if (strEndVal === target) {
    return true
  }
  return false;
}

confirmEnding("Bastian", "n");

