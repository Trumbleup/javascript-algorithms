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

// Basic Algorithm Scripting: Repeat a String Repeat a String
// Repeat a given string str (first argument) for num times (second argument). 
// Return an empty string if num is not a positive number.

function repeatStringNumTimes(str, num) {
  let newStr = str;
  let initial = 1;
  let strArr = [];
  
  while (initial <= num) {
    strArr.push(newStr);
    initial++;
  }

  return strArr.join("");
}

repeatStringNumTimes("abc", 3);

// Basic Algorithm Scripting: Truncate a String
// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). 
// Return the truncated string with a ... ending.

function truncateString(str, num) {
  let strArr = str.split("");
  let newArr = [];
  if (num < strArr.length) {
    for (let i = 0 ; i < num ; i++ ) {
    newArr.push(strArr[i]);
    } 
  } 
  else {
      return str;
  }

  let newString = newArr.join("") + "...";

  return newString;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

// Basic Algorithm Scripting: Finders Keepers
// Create a function that looks through an array (first argument) 
// and returns the first element in the array that passes a truth test (second argument). 
// If no element passes the test, return undefined.

function findElement(arr, func) {
  let num = 0;
  for ( let i = 0 ; i < arr.length ; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }
  return undefined;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

// Basic Algorithm Scripting: Boo who
// Check if a value is classified as a boolean primitive. Return true or false.
function booWho(bool) {
  if (typeof bool === "boolean") {
    return true
  }
  return false;
}

booWho(null);

// Basic Algorithm Scripting: Title Case a Sentence
// Return the provided string with the first letter of each word capitalized. 
// Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also 
// capitalize connecting words like "the" and "of".

function titleCase(str) {
  let strLow = str.toLowerCase().split(" ");
  let newStr = "";
  let strArr = []; 
  for (let i = 0 ; i < strLow.length ; i++) {
    newStr = strLow[i].replace(strLow[i].charAt(0), strLow[i].charAt(0).toUpperCase());
    strArr.push(newStr)
  }
  return strArr.join(" ");
}

titleCase("I'm a little tea pot");

// Basic Algorithm Scripting: Slice and Splice
// You are given two arrays and an index.

// Use the array methods slice and splice to copy each element of the first array 
// into the second array, in order.

// Begin inserting elements at index n of the second array.

// Return the resulting array. The input arrays should remain the same after the function runs.

function frankenSplice(arr1, arr2, n) {
  let newArr1 = arr1.slice();
  let newArr2 = arr2.slice();
  for (let i = 0 ; i < newArr1.length ; i++) {
    newArr2.splice(n, 0, newArr1[i] );
    n++;
  }
  return newArr2;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);


// Basic Algorithm Scripting: Falsy Bouncer
// Remove all falsy values from an array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

function bouncer(arr) {
  let newArr = [];
  for (let i = 0 ; i < arr.length ; i++) {
    if (Boolean(arr[i]) == true ) {
      newArr.push(arr[i])
    }
  }
  return newArr;
}

bouncer([7, "ate", "", false, 9]);

// Return the lowest index at which a value (second argument) 
// should be inserted into an array (first argument) once it has been sorted. 
// The returned value should be a number.

// For example, getIndexToIns([1,2,3,4], 1.5) 
// should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been 
// sorted it will look like [3,5,20] and 19 is less than 20 (index 2) 
// and greater than 5 (index 1).

function getIndexToIns(arr, num) {
  let newArr = arr.slice().sort((a,b) => a - b);
  for (let i = 0 ; i < newArr.length ; i++ ) {
    if (num <= newArr[i] ) {
      return i
    }
  }
  return newArr.length
}


getIndexToIns([40, 60], 50);